import { user } from './../../../../models/user';
import { OrdersService } from './../../../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { IOrdersData } from 'src/app/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public category: string;
  public Iuser: user;
  public orderPendingInfo: any = [];
  public orderReceivedInfo: any = [];

  constructor(
    private ordersService: OrdersService,
  ) { }

  ngOnInit() {
    this.category = 'willDelivery';
  }

  ionViewWillEnter() {
    this.getOrdersPendings();
    this.getOrdersReceived();
  }

  getOrdersPendings() {
    this.Iuser = JSON.parse(localStorage.getItem('user'));
    this.ordersService.getOrdersPendding(this.Iuser.userEmail).subscribe((orders: IOrdersData) => {
      this.orderPendingInfo = orders;
    });
  }

  getOrdersReceived() {
    this.Iuser = JSON.parse(localStorage.getItem('user'));
    this.ordersService.getOrdersReceived(this.Iuser.userEmail).subscribe((orders: IOrdersData) => {
      this.orderReceivedInfo = orders;
    });
  }
}
