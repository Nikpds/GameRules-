import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

import { ProductService } from '../product.service';
import { LoaderService } from '../../common/loader.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products = new Array<Product>();

  constructor(
    private loader: LoaderService,
    private toastr: ToastrService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loader.show();
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.loader.hide();
    }, error => {
      this.toastr.error(error);
      this.loader.hide();
    });
  }

}
