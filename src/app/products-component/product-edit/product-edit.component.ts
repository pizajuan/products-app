import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              protected router: Router,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.product = this.route.snapshot.data.product;
  }

  back() {
    this.router.navigate(['/']);
  }

  async onSubmit() {
    if (!this.product.id) {
      this.product.id = this.idGenerator();
      await this.productsService.createProduct(this.product).toPromise();
      this.back();
    } else {
      await this.productsService.createProduct(this.product).toPromise();
      this.back();
    }
  }

  idGenerator() {
    return Math.random().toString(36).substr(2, 9);
  }
}
