import { CounterCartItems } from './../../models/counterCartItems';
import { CartId } from './../../models/cartId';
import { ModalController } from '@ionic/angular';
import { CartPage } from './../modal/cart/cart.page';
import { ProductsService } from './../../services/products.service';
import { product } from './../../models/product';
import { user } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public promotions: any = ['1'];
  public method: true;
  public textoBuscar = '';
  public user: user;
  public cartId: string;
  public counterCartItems: string;
  public products: any = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: false,
    effect: 'slide',
    width: 250
  };



  

  constructor(
    public productsService: ProductsService,
    public router: Router,
    public modalController: ModalController,
    ) { 
      
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getProductsAll();
    this.getCountCartItems();
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }

  getProductsAll() {
    this.productsService.getProducts().subscribe((product: product) => {
      this.productsService.product = product;
      this.products = product;
    });
  }

  getCountCartItems() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productsService.getCartIdByEmail(this.user.userEmail).subscribe((cartID: CartId) => {
      this.cartId = cartID.cartId;
      this.productsService.getCountCartItemsByCartId(this.cartId).subscribe((data: CounterCartItems) => {
        this.counterCartItems = data.count;
      });
    });
  }

  async presentModalCart() {
    const modal = await this.modalController.create({
      component: CartPage
    });
    return await modal.present();
  }



  slider = [

    {
      title:'Ionic es grandioso',
      description: 'Ionic is maravilloso porque si',
      image:"https://i.ibb.co/60snpcr/PROMO1.jpg"
    },

    {
      title:'Hola Mundo',
      description: 'Ionic is maravilloso porque si',
      image:"https://i.ibb.co/1bPpNfY/PROMO2.jpg9"
    },
    {
      title:'Hola Mundo',
      description: 'Ionic is maravilloso porque si',
      image:"https://i.ibb.co/b1ZtpSs/PROMO3.jpg"
    },
    {
      title:'Hola Mundo',
      description: 'Ionic is maravilloso porque si',
      image:"https://i.ibb.co/frytmhQ/PROMO4.jpg"
    },
    {
      title:'Hola Mundo',
      description: 'Ionic is maravilloso porque si',
      image:"https://i.ibb.co/vzLNZ7F/PROMO5.jpg"
    },
    
    

  ];
}
