import { CartId } from './../models/cartId';
import { CartPage } from './../components/modal/cart/cart.page';
import { ModalController, ToastController } from '@ionic/angular';
import { product } from './../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { user } from '../models/user';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public user: user;
  public cartId: string;
  public productId: string;
  public productDetail: any = [];
  public productDetailPrice: number;
  public itemsSelected = 1;
  public productQuantity: number;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService,
    public modalController: ModalController,
    public toastController: ToastController,
    private router: Router,
    ) {
    this.productId = this.route.snapshot.params.id;

   }

  ngOnInit() {
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService.getProductsById(this.productId).subscribe((product: product) => {
      this.productDetail = product;
      this.productQuantity = product.productQuantity;
    });
  }

  addItemsCart() {
    this.itemsSelected++;
  }

  eraseItemsCart() {
    if (this.itemsSelected > 1) {
      this.itemsSelected--;
    }
  }

  addProductCart() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.productService.getCartIdByEmail(this.user.userEmail).subscribe((cartID: CartId) => {
      this.cartId = cartID.cartId;
      this.productService.setProductToCart(this.productId, this.itemsSelected, this.cartId).subscribe((data) => {
        console.log(data);
      });
      this.presentToast();
      this.router.navigate(['home']);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Product added to cart successfully!',
      duration: 2000
    });
    toast.present();
  }

}
