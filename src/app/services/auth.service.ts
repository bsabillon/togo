import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: user;
  public endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient, public router: Router) { }

  signInIfUserExists() {
    if (localStorage.getItem('user ')) {
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

  
  postNewUser(u: { email: string; name: string; password: string }) {

    return this.http.post(`${this.endpoint}/newuser`, u);

  }

  getUserByEmail(email: string) {
    return this.http.get(`${this.endpoint}/user/${email.toLowerCase()}`);
  }

}