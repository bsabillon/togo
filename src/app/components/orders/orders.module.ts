import { OrderDetailComponent } from './views/order-detail/order-detail.component';
import { OrdersComponent } from './views/orders/orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPage,
    children: [
      {
        path: '',
        component: OrdersComponent,
      },
      {
        path: 'orderDetail',
        component: OrderDetailComponent,
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
  declarations: [
    OrdersPage,
    OrderDetailComponent,
    OrdersComponent,
  ]
})
export class OrdersPageModule {}
