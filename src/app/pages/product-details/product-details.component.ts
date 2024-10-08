import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductApi } from '../../core/productsApi.service';
import { CommonModule, NgFor } from '@angular/common';
import { ProductDetail } from '../../models/product-detail';
import { Product } from '../../models/product';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgFor, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [ProductApi]
})
export class ProductDetailsComponent implements OnInit {
  //cria um vazio para receber os dados
  productDetail: Observable<ProductDetail> = new Observable<ProductDetail>();
  //Esse aqui para para direcionar a rota com um paramentro desejado
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    //aqui colocamos a api para pegar os dados
    private productApi: ProductApi,
    private cartService: CartService,

  ) { }

  ngOnInit() {
    //definimos que o parâmetro vai ser o id
    const productDetailId = this.activatedRoute.snapshot.params['id'];
    //chamamos os dados da api e colocamos o paramentro na rota
    this.productApi.getProductDetails(productDetailId).subscribe({
      next: (result) => {
        debugger
        this.productDetail = of(result)
      },
      error: (error) => {
        debugger
      }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
