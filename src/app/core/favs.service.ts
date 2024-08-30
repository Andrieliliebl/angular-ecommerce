
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class FavsService {
  private favs = new BehaviorSubject<Product[]>(this.getFavsFromLocalStorage());
  favs$ = this.favs.asObservable();

  constructor() {
    this.favs$.subscribe(items => this.saveFavsToLocalStorage(items));
  }

  addToFavs(product: Product) {
    const currentFavs = this.favs.value;
    this.favs.next([...currentFavs, product]);
  }

  removeFromFavs(productId: number) {
    const updatedFavs = this.favs.value.filter(product => product.id !== productId);
    this.favs.next(updatedFavs);
  }

  private getFavsFromLocalStorage(): Product[] {
    const favs = localStorage.getItem('favs');
    return favs ? JSON.parse(favs) : [];
  }

  private saveFavsToLocalStorage(favs: Product[]): void {
    localStorage.setItem('favs', JSON.stringify(favs));
  }

  clearFavs() {
    this.favs.next([]);
    localStorage.removeItem('favs');
  }


}