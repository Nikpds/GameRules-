import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { PageOptions } from '../common/pagination.service';
import { Product } from './product.model';
import { BaseService } from '../common/base.service';
import { ToastrService } from '../common/toastr.service';

@Injectable()
export class ProductService {
  private productUrl = environment.api + 'product';

  constructor(
    private base: BaseService,
    private toastr: ToastrService) { }


  getProducts(options: PageOptions<Product>): Observable<PageOptions<Product>> {
    return this.base.post(this.productUrl + '/paged', options)
      .map((res: Response) => res.json())
      .catch((error: string) => Observable.throw(error || 'Server error'))
  }
}
