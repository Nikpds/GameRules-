import { Component, OnInit } from '@angular/core';

import { Product, SiteAvailablity } from '../product.model';

import { PaginationService, PageOptions } from '../../common/pagination.service';
import { UtilityService } from '../../common/utility.service';
import { ProductService } from '../product.service';
import { LoaderService } from '../../common/loader.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  selectedPhoto: string;
  pageOptions = new PageOptions<Product>();
  searchTerm: string;

  constructor(
    private loader: LoaderService,
    private toastr: ToastrService,
    private productService: ProductService,
    private utilities: UtilityService,
    private pagerService: PaginationService
  ) { }

  ngOnInit() {
    this.initOptions();
    this.getProducts();
  }

  nextPage() {
    if (this.pageOptions.currentPage == this.pageOptions.totalPages) { return; }
    this.pageOptions.currentPage += 1
    this.getProducts();
  }

  setPage(page: number) {
    if (page == this.pageOptions.currentPage) {
      return;
    }
    this.pageOptions.currentPage = page;
    this.getProducts();
  }

  previousPage() {
    if (this.pageOptions.currentPage == 1) { return; }
    this.pageOptions.currentPage -= 1;
    this.getProducts();
  }

  firstPage() {
    if (this.pageOptions.currentPage == 1) { return; }
    this.pageOptions.currentPage = 1
    this.getProducts();
  }

  lastPage() {
    if (this.pageOptions.currentPage == this.pageOptions.totalPages) { return; }
    this.pageOptions.currentPage = this.pageOptions.totalPages;
    this.getProducts();
  }

  getProducts() {
    this.loader.show();
    this.productService.getProducts(this.pageOptions).subscribe((res) => {
      this.pageOptions = res;
      this.pageOptions.pages = this.pagerService.getPages(res.totalPages, this.pageOptions.currentPage);
      console.log(this.pageOptions);
      this.loader.hide();
    }, error => {
      this.toastr.error(error);
      this.loader.hide();
    });
  }

  showImage(path: string) {
    this.selectedPhoto = path;
  }
  closeImage() {
    this.selectedPhoto = "";
  }
  convertType(type: SiteAvailablity) {
    return this.utilities.parseEnumName(SiteAvailablity, type);
  }

  changePageSize() {
    this.getProducts();
  }

  searchProduct() {
    if (!this.searchTerm.trim()) {
      this.searchTerm = null;
      this.getProducts();
    }
    this.pageOptions.searchFilter = this.searchTerm;
    this.getProducts();
  }

  orderBy(field: string) {
    this.pageOptions.orderBy = field;
    this.pageOptions.descending = !this.pageOptions.descending;
    this.getProducts();
  }

  initOptions() {
    this.pageOptions = {
      currentPage: 1,
      pageSize: "20",
      descending: false,
      orderBy: "Title",
      totalCount: 0,
      totalPages: 0,
      data: [],
      searchFilter: "",
      pages: []
    }
  }
}
