import { SetAddressComponent } from './views/set-address/set-address.component';
import { ListAddressComponent } from './views/list-address/list-address.component';
import { CardsAddComponent } from './views/cards-add/cards-add.component';
import { CardsListComponent } from './views/cards-list/cards-list.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { HomeSettingComponent } from './views/home-setting/home-setting.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children: [
      {
        path: '',
        component: HomeSettingComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'cardsList',
        component: CardsListComponent
      },
      {
        path: 'cardsAdd',
        component: CardsAddComponent
      },
      {
        path: 'addressList',
        component: ListAddressComponent
      },
      {
        path: 'setAddress',
        component: SetAddressComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPage,
  HomeSettingComponent,
  ProfileComponent,
  CardsListComponent,
  CardsAddComponent,
  ListAddressComponent,
  SetAddressComponent,
]
})
export class SettingsPageModule {}
