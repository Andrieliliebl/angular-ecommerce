import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductResponse } from '../models/product-response';


@Injectable()
export class ProductApi {
  private readonly getAllProductsEndPoint = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.getAllProductsEndPoint)
  }
}