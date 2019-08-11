import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router, public authService: AuthService) { }


  onLogout() {
   // this.authService.signOut();
   console.log("logged out"); 
  }

  ngOnInit() {
  }

}
