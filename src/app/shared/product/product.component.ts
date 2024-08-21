import { Component, Input } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product: {
 
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;

  };

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      title: 'Produto não informado',
      description: 'Produto não informado',
      price: 0,
      thumbnail: 'Imagem não adicionada'
    };
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}