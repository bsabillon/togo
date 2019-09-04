import { CardsListComponent } from './views/cards-list/cards-list.component';
import { CardsAddComponent } from './views/cards-add/cards-add.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutPage } from './checkout.page';
import { ListAddressComponent } from './views/list-address/list-address.component';
import { SetAddressComponent } from './views/set-address/set-address.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage,
    children: [
      {
        path: 'checkout/:addressId/:cardId',
        component: CheckoutComponent
      },
      {
        path: 'list-address',
        component: ListAddressComponent
      },
      {
        path: 'set-address',
        component: SetAddressComponent
      },
      {
        path: 'list-card/:addressId',
        component: CardsListComponent
      },
      {
        path: 'set-card',
        component: CardsAddComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CheckoutPage,
    CheckoutComponent,
    ListAddressComponent,
    SetAddressComponent,
    CardsAddComponent,
    CardsListComponent,
  ]
})
export class CheckoutPageModule {}
