import { productCategory } from './../models/productCategory';
import { Injectable } from '@angular/core';
import { store } from '../models/store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  public store: store;
  public productCategory: productCategory;
  public product: product;
  public endpoint = 'https://togo01.herokuapp.com';

  constructor(private http: HttpClient, public router: Router) { }

  getStores() {
    return this.http.get(`${this.endpoint}/store`);
  }

  getCategories() {
    return this.http.get(`${this.endpoint}/productCategory`);
  }

  getCategoriesDetails(id: string) {
    return this.http.get(`${this.endpoint}/productCategoryId/${id}`);
  }

  postNewProduct(product: product) {
    return this.http.post(`${this.endpoint}/newproduct`,product);
  }
  

}
