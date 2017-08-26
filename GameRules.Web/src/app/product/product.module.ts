import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './product.service';

const productRoutes: Route[] = [
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    FormsModule
  ],
  declarations: [
    ProductListComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
