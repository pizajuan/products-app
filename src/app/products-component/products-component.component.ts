import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductFilters, ProductSorts } from '../product.model';
import { ProductsComunicationService } from '../products-comunication.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss']
})
export class ProductsComponentComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  productFilters: ProductFilters;
  productSorts: ProductSorts;

  constructor(
    private productsService: ProductsService,
    private productsComunicationService: ProductsComunicationService,
    protected router: Router
    ) { }

  async ngOnInit() {

    this.products = await this.productsService.getProducts().toPromise();

    this.productsComunicationService.onProductFiltersChanged.pipe(untilDestroyed(this)).subscribe(filters => {
      this.productFilters = filters;
      this.changeProducts();
    });

    this.productsComunicationService.onProductSortsChanged.pipe(untilDestroyed(this)).subscribe(sorts => {
      this.productSorts = sorts;
      this.changeProducts();
    });

  }

  async changeProducts() {
    this.products = await this.productsService.getProducts().toPromise();
    this.sortProducts();
    this.filterProducts();
  }

  sortProducts() {
    if (this.productSorts) {
      if (this.productSorts.price) {
        if (this.productSorts.price === 'DESC') {
          this.products.sort((p1, p2) => {
            if (p1.price < p2.price) {
              return 1;
            }
            if (p1.price > p2.price) {
              return -1;
            }
            return 0;
          });
        }
        if (this.productSorts.price === 'ASC') {
          this.products.sort((p1, p2) => {
            if (p1.price > p2.price) {
              return 1;
            }
            if (p1.price < p2.price) {
              return -1;
            }
            return 0;
          });
        }
      }
      if (this.productSorts.quantity) {
        if (this.productSorts.quantity === 'DESC') {
          this.products.sort((p1, p2) => {
            if (p1.quantity < p2.quantity) {
              return 1;
            }
            if (p1.quantity > p2.quantity) {
              return -1;
            }
            return 0;
          });
        }
        if (this.productSorts.quantity === 'ASC') {
          this.products.sort((p1, p2) => {
            if (p1.quantity > p2.quantity) {
              return 1;
            }
            if (p1.quantity < p2.quantity) {
              return -1;
            }
            return 0;
          });
        }
      }
    }
  }

  filterProducts() {
    if (this.productFilters) {
      if (this.productFilters.hasOwnProperty('availability')) {
        this.products = this.products.filter(p => p.availability === this.productFilters.availability);
      }

      if (this.productFilters.hasOwnProperty('name')) {
        this.products = this.products.filter(p => p.name === this.productFilters.name);
      }

      if (this.productFilters.price.hasOwnProperty('number')) {
        if (this.productFilters.price.range === '<') {
          this.products = this.products.filter(p => p.price <= this.productFilters.price.number);
        }
        if (this.productFilters.price.range === '>') {
          this.products = this.products.filter(p => p.price >= this.productFilters.price.number);
        }
      }

      if (this.productFilters.quantity.hasOwnProperty('number')) {
        if (this.productFilters.quantity.range === '<') {
          this.products = this.products.filter(p => p.quantity <= this.productFilters.quantity.number);
        }
        if (this.productFilters.quantity.range === '>') {
          this.products = this.products.filter(p => p.quantity >= this.productFilters.quantity.number);
        }
      }
    }
  }

  goTo(product: Product) {
    this.router.navigate(['product/' + product.id ]);
  }

  ngOnDestroy() {}

}
