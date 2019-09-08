import { user } from './../../../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-setting',
  templateUrl: './home-setting.component.html',
  styleUrls: ['./home-setting.component.scss'],
})
export class HomeSettingComponent implements OnInit {
  public customerData: user;
  public userName: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserData();
  }

  onLogout() {
    this.authService.signOut();
    console.log('logged out');
   }


   getUserData() {
     this.customerData = JSON.parse(localStorage.getItem('user'));
     this.userName = this.customerData.userName;
   }

}
