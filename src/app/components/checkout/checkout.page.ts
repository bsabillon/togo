import { CardService } from './../../services/card.service';
import { ITotalCart, Cart } from './../../models/cart';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { user } from 'src/app/models/user';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  public user: user;
  cartDetails: any = [];
  id: string;
  public totalCarts: any = [];
  public userCards: any = [];

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private router: Router,
              public navCtrl: NavController,
              private modalCtrl: ModalController,
              private productService: ProductsService,
              public cardService: CardService
              ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getTotalCartItems();
    this.getCartDetail();
    this.getUserCards();
  }

  getUserCards() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.cardService.getCards(this.user.userEmail).subscribe((iCard: ICard) => {
      this.userCards = iCard;
    });
  }

  async checkoutOrder() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });
    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: false,
        cssClass: 'bg-profile',
        message: 'Su orden ha sido procesada exitosamente!',
        duration: 3000,
        position: 'bottom',
        color: 'dark'
      });

      toast.present();
    });
    this.router.navigate(['']);
  }

  getTotalCartItems() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartTotal(this.user.userEmail).subscribe((itotalCart: ITotalCart) => {
      this.totalCarts = itotalCart;
      console.log(this.totalCarts);
    });
  }

  getCartDetail() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartDetailByEmail(this.user.userEmail).subscribe((cart: Cart) => {
    this.cartDetails = cart;
    this.getTotalCartItems();
    });
  }

}
