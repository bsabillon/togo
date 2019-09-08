import { user } from './../../../../../models/user';
import { AuthService } from './../../../../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { DataApiService } from './../../../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-store-seller',
  templateUrl: './home-store-seller.component.html',
  styleUrls: ['./home-store-seller.component.scss'],
})
export class HomeStoreSellerComponent implements OnInit {
  public storeSellerId: string;
  public userEmail: string;
  public currentUser: user;

  constructor(
    private dataApiService: DataApiService,
    public authService: AuthService,
    public toastController: ToastController,
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.checkSellerId();
  }

  checkSellerId() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.storeSellerId = this.currentUser.sellerId;
  }

  becomeSellerUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.userEmail = this.currentUser.userEmail;
    this.dataApiService.becomeUserSeller(this.userEmail).subscribe((data) => {
      this.authService.getUserByEmail(this.userEmail).subscribe((Iuser: user) => {
        this.presentToast();
        localStorage.setItem('user', JSON.stringify(Iuser));
        this.checkSellerId();
        console.log(localStorage.getItem('user'));
      });
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have became a seller successfully!',
      duration: 3000
    });
    toast.present();
  }

}
