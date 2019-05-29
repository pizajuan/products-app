import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductFilters } from '../product.model';
@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit {

  products: Product[] = [];
  // productFilters: ProductFilters;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });

    this.productsService.getProduct('58b5a5b1b6b6c7aacc25b3fb').subscribe((data: Product) => {
      console.log('uno:', data);
    });
  }


  // multiFilter(array, filters) {
  //   return array.filter(o =>
  //       Object.keys(filters).every(k =>
  //           [].concat(filters[k]).some(v => o[k].includes(v))));
  // }

}
