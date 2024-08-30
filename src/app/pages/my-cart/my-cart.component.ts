import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../core/cart.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FavsService } from '../../core/favs.service';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})

export class MyCartComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService,
    private favsService: FavsService,

  ) { }

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.totalPrice = this.cartService.getTotalPrice(); 
  }

  clearCart() {
    this.cartService.clearCart()
  }

  addToFavs(product: Product) {
    this.favsService.addToFavs(product);
  }
}