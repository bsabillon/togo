import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-setting',
  templateUrl: './home-setting.component.html',
  styleUrls: ['./home-setting.component.scss'],
})
export class HomeSettingComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onLogout() {
    this.authService.signOut();
    console.log('logged out');
   }

}
