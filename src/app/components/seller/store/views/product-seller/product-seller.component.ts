import { product } from './../../../../../models/product';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from './../../../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.scss'],
})
export class ProductSellerComponent implements OnInit {
  public storeId: string;
  public productByStoreIds: any = [];

  constructor(
    private dataApiService: DataApiService,
    private route: ActivatedRoute,
  ) {
    this.storeId = this.route.snapshot.params.storeId;
   }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserProductsByStoreId();
  }

  getUserProductsByStoreId() {
    this.dataApiService.getProductsByStoreId(this.storeId).subscribe((IProduct: product) => {
      this.productByStoreIds = IProduct;
    });
  }

  deleteUserProductsByStoreId(productId) {
    this.dataApiService.deleteProductById(productId).subscribe((data) => {
      this.getUserProductsByStoreId();
    });
  }

}
