import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FavsService } from '../../core/favs.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class MyFavoritesComponent implements OnInit {
  favsItems: Product[] = [];

  constructor(private favsService: FavsService,
    private cartService: CartService,

  ) { }


  ngOnInit() {
    this.favsService.favs$.subscribe(items => {
      this.favsItems = items;
    })
  }

  removeFromFavs(productId: number) {
    this.favsService.removeFromFavs(productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
