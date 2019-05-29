import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  SERVER_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.SERVER_URL + 'products');
  }

  public getProduct(productId): Observable<Product> {
      return this.httpClient.get<Product>(`${this.SERVER_URL + 'products'}/${productId}`);
  }

  public createProduct(product: Product) {
     return this.httpClient.post<Product>(`${this.SERVER_URL + 'products'}`, product);
  }

  public updateProduct(product: Product) {
     return this.httpClient.put<Product>(`${this.SERVER_URL + 'products'}/${product.id}`, product);
  }
}
