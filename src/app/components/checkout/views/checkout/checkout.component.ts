import { CartId } from './../../../../models/cartId';
import { ICard } from './../../../../models/card';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../../../services/products.service';
import { CardService } from './../../../../services/card.service';
import { LoadingController, ToastController, ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { ITotalCart, Cart } from 'src/app/models/cart';
import { IOrder } from 'src/app/models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public user: user;
  public userCartId: string;
  cartDetails: any = [];
  id: string;
  public totalCarts: any = [];
  public userCards: any = [];
  public addressId: string;
  public cardId: string;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private router: Router,
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private productService: ProductsService,
    public cardService: CardService,
    public route: ActivatedRoute,
    ) {
      this.addressId = this.route.snapshot.params.addressId;
      this.cardId = this.route.snapshot.params.cardId;
    }

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
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartIdByEmail(this.user.userEmail).subscribe((cartID: CartId) => {
      this.userCartId = cartID.cartId;
      this.productService.makeOrder(this.userCartId, this.addressId, this.cardId).subscribe((order: IOrder) => {
      });
    });
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
      this.router.navigate(['home']);
    });
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
