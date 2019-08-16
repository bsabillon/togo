import { productCategory } from './../../models/productCategory';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.page.html',
  styleUrls: ['./categories-list.page.scss'],
})
export class CategoriesListPage implements OnInit {
  productCategories: any = [];

  constructor(public dataApiService: DataApiService, public router: Router) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.dataApiService.getCategories().subscribe((productCategory: productCategory) => {
      this.dataApiService.productCategory = productCategory;
      this.productCategories = productCategory;
    });
  }

}
