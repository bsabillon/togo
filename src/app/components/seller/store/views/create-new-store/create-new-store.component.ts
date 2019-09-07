import { ToastController } from '@ionic/angular';
import { DataApiService } from './../../../../../services/data-api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-create-new-store',
  templateUrl: './create-new-store.component.html',
  styleUrls: ['./create-new-store.component.scss'],
})
export class CreateNewStoreComponent implements OnInit {
  formGroupNewStore: FormGroup;
  public storeSellerId: string;
  public currentUser: user;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private dataApiService: DataApiService,
    public toastController: ToastController,
  ) {
    this.formGroupNewStore = this.formBuilder.group({
      storeName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      storeRTN: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      storePhone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      storeAddress: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      storeCategory: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      storePicture: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
   }

  ngOnInit() {}

  createNewStore() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.storeSellerId = this.currentUser.sellerId;
    this.dataApiService.setNewStore(
      this.formGroupNewStore.get('storeName').value,
      this.formGroupNewStore.get('storeRTN').value,
      this.formGroupNewStore.get('storePhone').value,
      this.formGroupNewStore.get('storeAddress').value,
      this.storeSellerId,
      this.formGroupNewStore.get('storeCategory').value,
      this.formGroupNewStore.get('storePicture').value,
    ).subscribe((data) => {
      this.presentToast();
      this.router.navigate(['store']);
      console.log(this.formGroupNewStore.value);
      console.log(this.storeSellerId);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your store have been created successfully!',
      duration: 2000
    });
    toast.present();
  }

}
