import { Component } from '@angular/core';
import { RemoveFavComponent } from "../../shared/remove-fav/remove-fav.component";
import { AddToFavComponent } from "../../shared/add-to-fav/add-to-fav.component";
import { RemoveCartComponent } from "../../shared/remove-cart/remove-cart.component";

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [RemoveFavComponent, AddToFavComponent, RemoveCartComponent],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css'
})
export class MyCartComponent {

}
