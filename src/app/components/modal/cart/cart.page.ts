import { Cart, ITotalCart } from './../../../models/cart';
import { user } from './../../../models/user';
import { ProductsService } from './../../../services/products.service';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage {
  public user: user;
  cartDetails: any = [];
  id: string;
  public totalCarts: any = [];


  constructor(
    public navCtrl: NavController,
    public route: Router,
    private modalCtrl: ModalController,
    private productService: ProductsService
  ) {
  }

  ionViewWillEnter() {
    this.getTotalCartItems();
    this.getCartDetail();
  }

  openCheckout() {
    this.route.navigate(['checkout']);
    this.modalCtrl.dismiss();
    // this.navCtrl.navigateForward('checkout/');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  getCartDetail() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartDetailByEmail(this.user.userEmail).subscribe((cart: Cart) => {
    this.cartDetails = cart;
    this.getTotalCartItems();
    });
  }

  addItemsCart(cartDetailsId: number, items: number) {
    items++;
    this.productService.updateCartItems(cartDetailsId, items).subscribe((data) => {
      this.getCartDetail();
    });
  }

  eraseItemsCart(cartDetailsId: number, items: number) {
    if (items > 1) {
      items--;
      this.productService.updateCartItems(cartDetailsId, items).subscribe((data) => {
        this.getCartDetail();
      });
    }
  }

  deleteCartItems(cartDetailsId: number) {
    this.productService.deleteCartItem(cartDetailsId).subscribe((data) => {
      this.getCartDetail();
    });
  }

  getTotalCartItems() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartTotal(this.user.userEmail).subscribe((itotalCart: ITotalCart) => {
      this.totalCarts = itotalCart;
      console.log(this.totalCarts);
    });
  }

}
