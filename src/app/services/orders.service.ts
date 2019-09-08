import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  getOrdersPendding(userEmail: string) {
    return this.http.get(`${this.endpoint}/cartTotalCountByUser/${userEmail}`);
  }

  getOrdersReceived(userEmail: string) {
    return this.http.get(`${this.endpoint}/receivedOrdersByUser/${userEmail}`);
  }
}
