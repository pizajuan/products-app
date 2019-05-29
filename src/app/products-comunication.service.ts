import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';
import { ProductFilters, ProductSorts } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsComunicationService {

  constructor() { }

  private productFiltersChange = new Subject<ProductFilters>();

  onProductFiltersChanged = this.productFiltersChange.asObservable();

  private productSortsChange = new Subject<ProductSorts>();

  onProductSortsChanged = this.productSortsChange.asObservable();

  productFiltersChanged(filters: ProductFilters) {
    this.productFiltersChange.next(filters);
  }

  productSortsChanged(sorts: ProductSorts) {
    this.productSortsChange.next(sorts);
  }
}
