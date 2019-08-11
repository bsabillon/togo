import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
      title: 'menu',
      url: '/menu',
      icon: 'list'
    },
    {
      title: 'offerts',
      url: '/offerts',
      icon: 'list'
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'list'
    },
    {
      title: 'login',
      url: '/login',
      icon: 'list'
    },
    {
      title: 'settings',
      url: '/settings',
      icon: 'list'
    }
  ];



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
