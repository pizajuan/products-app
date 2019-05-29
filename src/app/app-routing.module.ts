import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProductEditComponent } from './products-component/product-edit/product-edit.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'product/:pid', component: ProductEditComponent, resolve: { product: ProductResolver } },
  { path: 'product/new', component: ProductEditComponent, resolve: { product: ProductResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class AppRoutingModule { }
