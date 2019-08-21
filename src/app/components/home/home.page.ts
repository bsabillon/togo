import { ProductsService } from './../../services/products.service';
import { product } from './../../models/product';
import { user } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public promotions: any = ['1', '2', '3', '4', '5'];
  public method: true;

  public products: any = [];

  constructor(public productsService: ProductsService, public router: Router) { }

  

  ngOnInit() {
    this.getProductsAll();
  }

  //getProducts
  getProductsAll() {
    this.productsService.getProducts().subscribe((product: product) => {
      this.productsService.product = product;
      this.products = product;
    });
  }
}
