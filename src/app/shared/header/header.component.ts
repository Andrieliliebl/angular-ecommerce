import { Component } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private cartService: CartService){

  }
addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
