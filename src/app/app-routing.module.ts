import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './components/registration/registration.module#RegistrationPageModule' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
  { path: 'settings', loadChildren: './components/settings/settings.module#SettingsPageModule' },
  { path: 'stores-list', loadChildren: './components/stores-list/stores-list.module#StoresListPageModule' },
  { path: 'categories-list', loadChildren: './components/categories-list/categories-list.module#CategoriesListPageModule' },
  { path: 'category-details/:id', loadChildren: './components/category-details/category-details.module#CategoryDetailsPageModule' },  { path: 'store', loadChildren: './components/seller/store/store.module#StorePageModule' },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
