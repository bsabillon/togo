import { AddressService } from './../../../../services/address.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-set-address',
  templateUrl: './set-address.component.html',
  styleUrls: ['./set-address.component.scss'],
})
export class SetAddressComponent implements OnInit {
  public user: user;
  formGroupAddress: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private addressService: AddressService,
    private loadingCtrl: LoadingController,
    public toastController: ToastController,
    ) {
    this.formGroupAddress = this.formBuilder.group({
      addressDescription: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      addressPhone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      houseNumber: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      addressReference: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      addressAlias: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });

   }

  ngOnInit() {
  }

  async saveAddress() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.addressService.setAddress(
      this.user.userEmail,
      this.formGroupAddress.get('addressDescription').value,
      this.formGroupAddress.get('addressPhone').value,
      this.formGroupAddress.get('houseNumber').value,
      this.formGroupAddress.get('addressReference').value,
      this.formGroupAddress.get('addressAlias').value,
      ).subscribe((data) => {
    });
    loading.dismiss();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Address saved successfully!',
      duration: 2000
    });
    toast.present();
  }

}
