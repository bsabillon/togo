import { user } from './../../../../../models/user';
import { store } from './../../../../../models/store';
import { DataApiService } from './../../../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  public stores: any = [];
  public storeSellerId: string;
  public currentUser: user;

  constructor(public dataApiService: DataApiService) { }

  ngOnInit() {
    this.getUserData();
  }

  ionViewWillEnter() {
    this.getStores();
  }

  getUserData() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.storeSellerId = this.currentUser.sellerId;
    console.log(this.storeSellerId);
  }

  getStores() {
    this.dataApiService.getStoresBySellerId(this.storeSellerId).subscribe((store: store) => {
      this.dataApiService.store = store;
      this.stores = store;
    });
  }

}
