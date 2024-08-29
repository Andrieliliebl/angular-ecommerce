import { Component } from '@angular/core';
import { AddToFavComponent } from "../../shared/add-to-fav/add-to-fav.component";
import { AddToCartComponent } from "../../shared/add-to-cart/add-to-cart.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AddToFavComponent, AddToCartComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class MyFavoritesComponent {

}
