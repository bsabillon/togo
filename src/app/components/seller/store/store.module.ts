import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StorePage } from './store.page';
import { ProductSettingComponent } from './views/product-setting/product-setting.component';
import { StoresComponent } from './views/stores/stores.component';

const routes: Routes = [
  {
    path: '',
    component: StorePage,
    children: [
      {
        path: '',
        component: StoresComponent
      },
      {
        path: 'productSetting',
        component: ProductSettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StorePage,
  StoresComponent,
  ProductSettingComponent,
]
})
export class StorePageModule {}
