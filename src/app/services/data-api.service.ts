import { store } from './../models/store';
import { productCategory } from './../models/productCategory';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  public store: store;
  public productCategory: productCategory;
  public product: product;
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  getStores() {
    return this.http.get(`${this.endpoint}/store`);
  }

  getStoresBySellerId(id: string) {
    return this.http.get((`${this.endpoint}/storeSeller/${id}`));
  }

  // tslint:disable-next-line: max-line-length
  setNewStore(storeName: string, storeRTN: string, storePhone: string, storeAddress: string, sellerId: string, storeCategory: string, storePictureURL: string) {
    // tslint:disable-next-line: max-line-length
    const body = `{"storeName": "${storeName}", "storeRTN": "${storeRTN}", "storePhone": "${storePhone}", "storeAddress": "${storeAddress}", "sellerId": "${sellerId}", "storeCategory": "${storeCategory}", "storePictureURL": "${storePictureURL}" }`;
    return this.http.post(`${this.endpoint}/newstore`, body, {headers: this.headers});
  }

  becomeUserSeller(email: string) {
    const body = ['1'];
    return this.http.put(`${this.endpoint}/createSeller/${email}`, body);
  }

  deleteProductById(productId: string) {
    return this.http.delete(`${this.endpoint}/deleteProduct/${productId}`);
  }

  getProductsByStoreId(storeId: string) {
    return this.http.get(`${this.endpoint}/productStoreId/${storeId}`);
  }

  getCategories() {
    return this.http.get(`${this.endpoint}/productCategory`);
  }

  getCategoriesDetails(id: string) {
    return this.http.get(`${this.endpoint}/productCategoryId/${id}`);
  }

  // postNewProduct(product: product) {
  //   return this.http.post(`${this.endpoint}/newproduct`, product);
  // }

  postNewProduct(
    productDescription: string,
    price: string,
    storeId: string,
    productQuantity: string,
    productPictureURL: string,
    productCategoryId: string,
    // createdAt: string,
    // updatedAt: string,
    productName: string,
    ) {
    // tslint:disable-next-line: max-line-length
    const body = `{"productDescription": "${productDescription}", "price": "${price}", "storeId": "${storeId}", "productQuantity": "${productQuantity}", "productPictureURL": "${productPictureURL}", "productCategoryId": "${productCategoryId}", "productName": "${productName}"}`;
    return this.http.post(`${this.endpoint}/newproduct`, body, {headers: this.headers});
  }
}
