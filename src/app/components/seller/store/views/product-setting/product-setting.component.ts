import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.scss'],
})
export class ProductSettingComponent implements OnInit {
  productDescription: string;
  price: number;
  productQuantity: number;
  productPictureURL: string;
  productCategoryId: number;
  storeId: number;

  constructor(public dataApi: DataApiService, public router: Router) { }

  ngOnInit() {}

  AddProduct() {
    const product: product = {
      productId: null,
      productName: null,
      productDescription: this.productDescription,
      price: this.price,
      productQuantity: this.productQuantity,
      productPictureURL: this.productPictureURL,
      productCategoryId: this.productCategoryId,
      storeId: this.storeId,
    };

    this.dataApi.postNewProduct(product).subscribe((data) => {
      // this.router.navigate(['/home']);
      this.dataApi.product = product;
      localStorage.setItem('product', JSON.stringify(product));
      console.log(data);
    });
  }

}
