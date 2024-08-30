import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../../core/productsApi.service';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Observable, of, throwError } from 'rxjs';
import { RouterLink, RouterLinkActive, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { FavsService } from '../../core/favs.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductApi,]
})

export class HomeComponent implements OnInit {
  //criamos um observable de Product que no início está vazio:
  products: Observable<Product[]> = new Observable<Product[]>();


  constructor(
    //indicamos o serviço da api para que busque a lista de produtos
    private productsApi: ProductApi,
    private cartService: CartService,
    private favsService: FavsService,


  ) { }

  ngOnInit(): void {
    //faz a chamada para a api e fica ouvindo se os dados chegam na Observable ou não
    this.productsApi.getAllProducts().subscribe({
      //se deu certo exibe
      next: (result) => {
        //aqui eu acesso apenas o dado ''products'' da minha productResponse:
        this.products = of(result.products)

      },
      //se deu errado vai pro erro
      error: (error) => {
        debugger
      }
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  addToFavs(product: Product) {
    this.favsService.addToFavs(product);
  }
}