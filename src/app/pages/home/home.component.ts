import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../../core/productsApi.service';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Observable, of, throwError } from 'rxjs';

import { RouterLink, RouterLinkActive, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { AddToCartComponent } from "../../shared/add-to-cart/add-to-cart.component";
import { AddToFavComponent } from "../../shared/add-to-fav/add-to-fav.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgFor, CommonModule, AddToCartComponent, AddToFavComponent],
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
}