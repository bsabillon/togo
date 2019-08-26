import { product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public product: product;
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  getProducts() {
    return this.http.get(`${this.endpoint}/product`);
  }

  getProductsById(productId: string) {
    return this.http.get(`${this.endpoint}/product/${productId}`);
  }

  setProductToCart(productId: string, cartQ: number, userEmail: string) {
    const body = `{"productId": ${productId}, "cartQuantity": ${cartQ}, "userEmail": "${userEmail}" }`;
    return this.http.post(`${this.endpoint}/addProductToCart`, body, {headers: this.headers});
  }
}
