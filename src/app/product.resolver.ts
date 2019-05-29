import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Product } from './product.model';
import { ProductsService } from './products.service';

@Injectable()
export class ProductResolver implements Resolve<Product> {
  constructor(
    protected router: Router,
    private productsService: ProductsService,
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const id = route.url[1].path;

      if (id === 'new') {
        return new Product();
      } else {
        return await await this.productsService.getProduct(id).toPromise();
      }
  }
}
