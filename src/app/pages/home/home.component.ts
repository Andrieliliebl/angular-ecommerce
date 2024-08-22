import { Component } from '@angular/core';
import { ProductsListComponent } from '../../shared/productsList/products-list.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
