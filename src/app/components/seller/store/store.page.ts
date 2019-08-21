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

  constructor() { }

  ngOnInit() {
  }
}
