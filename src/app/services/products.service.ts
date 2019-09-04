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

  getCartIdByEmail(userEmail: string) {
    return this.http.get(`${this.endpoint}/cartIdByUser/${userEmail}`);
  }

  getCartDetailByEmail(userEmail: string) {
    return this.http.get(`${this.endpoint}/cartDetailsByUser/${userEmail}`);
  }

  getCountCartItemsByCartId(cartId: string) {
    return this.http.get(`${this.endpoint}/productCountByCartId/${cartId}`);
  }

  updateCartItems(cartDetailsId: number, cartQt: number) {
    const body = ['1'];
    return this.http.put(`${this.endpoint}/updateCartDetailsQuantity/${cartDetailsId}/${cartQt}`, body);
  }

  deleteCartItem(cartDetailsId: number) {
    return this.http.delete(`${this.endpoint}/deleteCartDetails/${cartDetailsId}`);
  }

  getProductsById(productId: string) {
    return this.http.get(`${this.endpoint}/product/${productId}`);
  }

  setProductToCart(productId: string, cartQ: number, cartId: string) {
    const body = `{"productId": ${productId}, "cartQuantity": ${cartQ}, "cartId": "${cartId}" }`;
    return this.http.post(`${this.endpoint}/addProductToCart`, body, {headers: this.headers});
  }

  getCartTotal(userEmail: string) {
    return this.http.get(`${this.endpoint}/cartDetailsTotalByUser/${userEmail}`);
  }

  makeOrder(cartId: string, addressID: string, cardId: string) {
    const body = ['1'];
    return this.http.put(`${this.endpoint}/updateCart/${cartId}/${addressID}/${cardId}`, body);
  }

  // makeOrder(cartId: string, addressID: string, cardId: string) {
  //   const body = `{"cartId": ${cartId}, "addressId": ${addressID}, "cardId": "${cardId}" }`;
  //   return this.http.put(`${this.endpoint}/updateCart`, body, {headers: this.headers});
  // }

}
