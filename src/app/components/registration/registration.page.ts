import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthService,
    private productService: ProductsService,
    public router: Router) { }

  name: string;
  lastName: string;
  email: string;
  password: string;
  userDOB: string;
  address: string;
  phone: string;

  ngOnInit() {
  }

  OnSubmitRegister() {
    const user: user = {
      userName: this.name,
      userLastname: this.lastName,
      userEmail : this.email,
      userPassword : this.password,
      userAddress: this.address,
      userDOB : this.userDOB,
      userPhone : this.phone,
      sellerId : null
    };

    this.authService.postNewUser(user).subscribe((data) => {
      this.authService.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(data);
      this.productService.setNewCart(this.email).subscribe((newCart) => {
        this.router.navigate(['/home']);
      });
    });
  }



}
