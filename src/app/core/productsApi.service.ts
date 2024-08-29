import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-response';
import { ProductDetail } from '../models/product-detail';


@Injectable()
export class ProductApi {
  private readonly getAllProductsEndPoint = 'https://dummyjson.com/products'
  private readonly getProductDetailEndPoint = 'https://dummyjson.com/products/'

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.getAllProductsEndPoint)
  }

  getProductDetails(productId: number): Observable<ProductDetail>{
    return this.http.get<ProductDetail>(this.getProductDetailEndPoint + productId)
  }
}