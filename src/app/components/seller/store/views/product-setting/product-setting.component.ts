import { ToastController } from '@ionic/angular';
import { user } from './../../../../../models/user';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-setting',
  templateUrl: './product-setting.component.html',
  styleUrls: ['./product-setting.component.scss'],
})
export class ProductSettingComponent implements OnInit {
  formGroupNewProduct: FormGroup;
  public storeSellerId: string;
  public currentUser: user;

  constructor(
    public dataApi: DataApiService,
    public router: Router,
    public toastController: ToastController,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    ) {
      this.storeSellerId = this.route.snapshot.params.storeId;

      this.formGroupNewProduct = this.formBuilder.group({
        productDescription: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        productName: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        price: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        productQuantity: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        productPictureURL: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        productCategoryId: new FormControl('', Validators.compose([
          Validators.required,
        ])),
      });
     }

  ngOnInit() {}

  AddProduct() {
    this.dataApi.postNewProduct(
      this.formGroupNewProduct.get('productDescription').value,
      this.formGroupNewProduct.get('price').value,
      this.storeSellerId,
      this.formGroupNewProduct.get('productQuantity').value,
      this.formGroupNewProduct.get('productPictureURL').value,
      this.formGroupNewProduct.get('productCategoryId').value,
      this.formGroupNewProduct.get('productName').value,
    ).subscribe((data) => {
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your product have been added successfully!',
      duration: 3000
    });
    toast.present();
  }

}
