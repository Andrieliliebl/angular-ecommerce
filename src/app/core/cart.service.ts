import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }
}