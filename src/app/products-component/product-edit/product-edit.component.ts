import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
              protected router: Router) { }

  ngOnInit() {
    // console.log(this.route.snapshot.data.product);
    this.product = this.route.snapshot.data.product;
    console.log(this.product);
  }

  back() {
    this.router.navigate(['/']);
  }
}
