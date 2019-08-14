import { user } from './../../models/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public promotions: any = ['1', '2', '3', '4', '5'];
  public method: true;

  // public userName = localStorage.getItem('user.userName')

  ngOnInit() {
  }
}
