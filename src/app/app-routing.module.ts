import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { ProductEditComponent } from './products-component/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: MainComponentComponent },
  { path: 'product/:pid', component: ProductEditComponent },
  { path: 'product/new', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
