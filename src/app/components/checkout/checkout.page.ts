import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private router: Router) { }

  ngOnInit() {
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




  
}
