import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

  constructor() { }

  getPages(_totalPages: number, currentPage: number = 1) {
    let totalPages = _totalPages;
    let startPage: number, endPage: number;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let pages = Array.from(Array(endPage + 1).keys());
    pages.splice(0, startPage);
console.log("pages " + pages);
    return pages;

  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = Array.from(Array(endPage + 1).keys());
    pages.splice(0, startPage - 1);


    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
export class PageOptions<T> {
  currentPage: number;
  pageSize: string;
  orderBy: string;
  descending: boolean;
  totalCount: number;
  totalPages: number;
  data: Array<T>;
  pages:Array<number>;
  searchFilter: string;

  constructor() {
    this.data = new Array<T>();
    this.pages = new Array<number>();
  }
}
