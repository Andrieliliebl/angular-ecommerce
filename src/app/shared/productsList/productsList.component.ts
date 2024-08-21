import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../../core/productsApi.service';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './productsList.component.html',
  styleUrl: './productsList.component.css',
  providers: [ProductApi]
})

export class ProductsListComponent implements OnInit {
  products: Observable<Product[]> = new Observable<Product[]>();
  constructor(
    private productsApi: ProductApi,
  ) { }

  ngOnInit(): void {
    this.productsApi.getAllProducts().subscribe({
      next: (result) => {
        this.products = of(result.products)

      },
      error: (error) => {
      }
    })
  }
}