import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: user;
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  postNewUser(user: user) {
    return this.http.post(`${this.endpoint}/newuser`,user);
  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.endpoint}/user/${email.toLowerCase()}`);
  }

  signInIfUserExists() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.router.navigate(['/home']);
      console.log(localStorage.getItem('user'));
    } else {
      this.router.navigate(['/login']);
    }
  }

  signOut() {
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
  }
}
