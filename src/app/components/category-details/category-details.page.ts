import { CartPage } from './../modal/cart/cart.page';
import { product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {
  public categoryListId: string;

  public products: any = [];

  constructor(private route: ActivatedRoute,
              public dataApiService: DataApiService,
              private router: Router,
              public modalController: ModalController,
    ) {
    this.categoryListId = this.route.snapshot.params.id;
   }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCategoriesDetails();
  }

  getCategoriesDetails() {
    this.dataApiService.getCategoriesDetails(this.categoryListId).subscribe((product: product) => {
      this.dataApiService.product = product;
      this.products = product;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    return await modal.present();
  }

}
