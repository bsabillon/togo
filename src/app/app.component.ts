import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Stores',
      url: '/stores-list',
      icon: 'basket'
    },
    {
      title: 'Categories',
      url: '/categories-list',
      icon: 'filing'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'finger-print'
    },
    {
      title: 'My Store Settings',
      url: '/store',
      icon: 'basket'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
