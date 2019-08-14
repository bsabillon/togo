import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  alertMessage = '';

  constructor(public authService:AuthService, public router: Router) { }
  public email: string ='';
  public password: string = '';

  ngOnInit() {
    

    this.authService.signInIfUserExists();
  }

  getUserByEmail() {
    this.authService.getUserByEmail(this.email).subscribe((user: user) => {
      if (user.userPassword === this.password) {
        this.router.navigate(['/home']);
        this.authService.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.alertMessage = 'incorrect email or password!';
        console.log('This alert message');
      }
      console.log(user);
    });
  }


}
