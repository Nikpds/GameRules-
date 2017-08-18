import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class BaseService {

  constructor(
    private router: Router,
    private http: Http,
  ) { }

  public get(url: string): Observable<any> {
    return this.http.get(url)
      .map(res => res)
      .catch(err => this.handleError(err));
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
      .map(res => res)
      .catch(err => this.handleError(err));
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put(url, data)
      .map(res => res)
      .catch(err => this.handleError(err));
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url)
      .map(res => res)
      .catch(err => this.handleError(err));
  }

  private handleError(error: Response) {
    if (error.status == 401) {
      this.router.navigateByUrl('/login');
      return Observable.throw(error.statusText);
    } else {
      return Observable.throw(error.text());
    }
  }
}
