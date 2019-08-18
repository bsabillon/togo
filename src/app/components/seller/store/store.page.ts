import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { product} from 'src/app/models/product'
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(public dataApi: DataApiService, public router: Router) { }

  productDescription: string;
  price: string;
  productQuantity: number;
  productPictureURL: string;
  productCategoryId: number;
  storeId: number;




  ngOnInit() {
  }

  AddProduct(){
    let product: product = {
     // productId: null,
      productDescription: this.productDescription,
      price: this.price,
      productQuantity : this.productQuantity,
      productPictureURL : this.productPictureURL,
      productCategoryId: this.productCategoryId,
      storeId :this.storeId,
    };

    this.dataApi.postNewProduct(product).subscribe((data) => {
//      this.router.navigate(['/home']);
      this.dataApi.product = product;
      localStorage.setItem('product', JSON.stringify(product));
      console.log(data);      
    });
    

  }





}
