import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { store } from 'src/app/models/store';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.page.html',
  styleUrls: ['./stores-list.page.scss'],
})
export class StoresListPage implements OnInit {
  public stores: any = [];

  constructor(public dataApiService: DataApiService, public router: Router) { }

  ngOnInit() {
    this.getStores();
  }

  getStores() {
    this.dataApiService.getStores().subscribe((store: store) => {
      this.dataApiService.store = store;
      this.stores = store;
      console.log('Aqui', store);
      console.log('Array', this.stores);
    });
  }

}
