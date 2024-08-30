
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart = new BehaviorSubject<Product[]>(this.getCartFromLocalStorage());
  cart$ = this.cart.asObservable();

  constructor() {
    this.cart$.subscribe(items => this.saveCartToLocalStorage(items));
  }

  addToCart(product: Product) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }

  removeFromCart(productId: number) {
    const updatedCart = this.cart.value.filter(product => product.id !== productId);
    this.cart.next(updatedCart);
  }

  private getCartFromLocalStorage(): Product[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  private saveCartToLocalStorage(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    this.cart.next([]);
    localStorage.removeItem('cart');
  }

  getTotalPrice(): number {
    return this.cart.value.reduce((total, product) => total + product.price, 0);
  }

}