import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage {
  totalVal = 0;


  constructor(
    public navCtrl: NavController,
    public route: Router,
    private modalCtrl: ModalController
  ) {
  }

  openCheckout() {
    this.route.navigate(['checkout']);
    this.modalCtrl.dismiss();
    // this.navCtrl.navigateForward('checkout/');
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
