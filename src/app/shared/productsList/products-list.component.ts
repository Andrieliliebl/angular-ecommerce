import { Component, OnInit } from '@angular/core';
import { ProductApi } from '../../core/productsApi.service';
import { CommonModule, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  //importa os serviços necessários para fazer as requisições e exibir os dados
  imports: [NgFor, CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  //Importa o serviço da api para chamar seus dados:
  providers: [ProductApi]
})

export class ProductsListComponent implements OnInit {
  //criamos um observable de Product que no início está vazio:
  products: Observable<Product[]> = new Observable<Product[]>();
  snackBar: any;

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
        this.snackBar.open('Houve um erro ao buscar produtos!', 'Ok', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'end'
        });
      }
    })
  }
}