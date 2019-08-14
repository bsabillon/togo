import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  declarations: [SettingsPage,
  HomeSettingComponent,
  ProfileComponent,
]
})
export class SettingsPageModule {}
