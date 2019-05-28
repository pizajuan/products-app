import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule,
          MatIconModule,
          MatMenuModule,
          MatGridListModule,
          MatCardModule,
          MatDrawerContainer,
          MatDrawerContent,
          MatDrawer } from '@angular/material';
import { MainComponentComponent } from './main-component/main-component.component';
import { FiltersComponentComponent } from './filters-component/filters-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    FiltersComponentComponent,
    ProductsComponentComponent,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
