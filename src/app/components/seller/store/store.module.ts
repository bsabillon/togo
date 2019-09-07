import { ProductSellerComponent } from './views/product-seller/product-seller.component';
import { HomeStoreSellerComponent } from './views/home-store-seller/home-store-seller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StorePage } from './store.page';
import { ProductSettingComponent } from './views/product-setting/product-setting.component';
import { StoresComponent } from './views/stores/stores.component';
import { CreateNewStoreComponent } from './views/create-new-store/create-new-store.component';

const routes: Routes = [
  {
    path: '',
    component: StorePage,
    children: [
      {
        path: '',
        component: HomeStoreSellerComponent
      },
      {
        path: 'productSetting/:storeId',
        component: ProductSettingComponent
      },
      {
        path: 'viewStoreBySeller',
        component: StoresComponent
      },
      {
        path: 'createNewStore',
        component: CreateNewStoreComponent
      },
      {
        path: 'productListSeller/:storeId',
        component: ProductSellerComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StorePage,
  StoresComponent,
  ProductSettingComponent,
  HomeStoreSellerComponent,
  CreateNewStoreComponent,
  ProductSellerComponent,
]
})
export class StorePageModule {}
