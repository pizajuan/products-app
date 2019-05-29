import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule,
          MatIconModule,
          MatMenuModule,
          MatGridListModule,
          MatCardModule,
          MatChipsModule,
          MatExpansionModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatSelectModule,
          MatDrawerContainer,
          MatDrawerContent,
          MatDrawer } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MainComponentComponent } from './main-component/main-component.component';
import { FiltersComponentComponent } from './filters-component/filters-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { ProductEditComponent } from './products-component/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    FiltersComponentComponent,
    ProductsComponentComponent,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
