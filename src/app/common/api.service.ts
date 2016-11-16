import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  find(collection: string, query?: any, options?: any): Observable<any[]> {
    //    return this.http.get(`${BASEURL}/${collection}`)//'/assets/data.json')
    let url = `/api/${collection}`
    if (query) url += `?query=${JSON.stringify(query)}`
    return this.http.get(url)
      .map(res => res.json()._items)
      .catch(this.handleError);
  }

  findOneById(collection: string, id: string): Observable<any> {
    //    return this.http.get(`${BASEURL}/${collection}`)//'/assets/data.json')
    return this.http.get(`/api/${collection}/${id}`)
      .map(res => res.json()._item)
      .catch(this.handleError);
  }

  update(collection: string, id: number, data: any, options?: any): Observable<any> {
    //    return this.http.get(`${BASEURL}/${collection}`)//'/assets/data.json')
    //  return Observable.of(data).delay(1000)
    return this.http.put(
      `/api/${collection}/${id}`,
      JSON.stringify(data),
      new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })
    )
      .map(res => res.json()._item)
      .catch(this.handleError);
  }

  create(collection: string, data: any, options?: any): Observable<any> {
    //    return this.http.get(`${BASEURL}/${collection}`)//'/assets/data.json')
    //  return Observable.of(data).delay(1000)
    return this.http.post(
      `/api/${collection}`,
      JSON.stringify(data),
      new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) })
    )
      .map(res => res.json()._item)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
