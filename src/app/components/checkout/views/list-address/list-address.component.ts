import { user } from 'src/app/models/user';
import { IAddress } from './../../../../models/address';
import { AddressService } from './../../../../services/address.service';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss'],
})
export class ListAddressComponent implements OnInit {
  formGroupAddress: FormGroup;
  public user: user;

  userAddresses: any = [];

  constructor(
    public addressService: AddressService,
    private loadingCtrl: LoadingController,
    ) {
     }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getUserAddressList();
  }

  getUserAddressList() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.addressService.getAddress(this.user.userEmail).subscribe((iaddress: IAddress) => {
        this.userAddresses = iaddress;
    });
  }

  deleteUserAddress(addressId) {
    this.addressService.deleteAddress(addressId).subscribe((data) => {
      this.getUserAddressList();
    });
  }

}
