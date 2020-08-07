import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../mocks/mock-products';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Product[]> {
       const products: Product[] = PRODUCTS;
       console.log( products);
    return of(products); 
  }
}
