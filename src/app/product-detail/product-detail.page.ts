import { product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public productId: string;
  public productDetail: any = [];
  public itemsSelected = 1;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    ) {
    this.productId = this.route.snapshot.params.id;

   }

  ngOnInit() {
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService.getProductsById(this.productId).subscribe((product: product) => {
      this.productDetail = product;
    });
  }

  addItemsCart() {
    this.itemsSelected++;
  }

  eraseItemsCart() {
    if (this.itemsSelected > 1) {
      this.itemsSelected--;
    }
  }

}
