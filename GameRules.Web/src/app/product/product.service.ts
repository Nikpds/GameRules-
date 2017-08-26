import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { Product } from './product.model';
import { BaseService } from '../common/base.service';
import { ToastrService } from '../common/toastr.service';

@Injectable()
export class ProductService {
  private productUrl = environment.api + 'product';

  constructor(
    private base: BaseService,
    private toastr: ToastrService) { }


    getProducts(): Observable<Array<Product>> {
      return this.base.get(this.productUrl)
        .map((res: Response) => res.json())
        .catch((error: string) => Observable.throw(error || 'Server error'))
    }
}
