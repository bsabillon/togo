import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public authService: AuthService) { }

  name: string;
  lastName: string;
  email: string;
  password : string;
  userDOB : string;
  address : string;
  phone: string;

  ngOnInit() {
  }

  OnSubmitRegister(){
    let user: user = {
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

      console.log(data);
      
    });
    

  }



}
