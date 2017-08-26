import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductService } from './product.service';

const productRoutes: Route[] = [
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [
    ProductListComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
