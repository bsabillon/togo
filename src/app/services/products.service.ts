import { product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public product: product;
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  getProducts() {
    return this.http.get(`${this.endpoint}/product`);
  }
}
