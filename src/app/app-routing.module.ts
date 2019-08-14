import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './components/registration/registration.module#RegistrationPageModule' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
  { path: 'offerts', loadChildren: './components/offerts/offerts.module#OffertsPageModule' },
  { path: 'settings', loadChildren: './components/settings/settings.module#SettingsPageModule' },
  { path: 'menu', loadChildren: './components/menu/menu.module#MenuPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
