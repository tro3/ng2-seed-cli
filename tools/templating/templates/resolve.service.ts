import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'


@Injectable()
export class ##entityName## implements Resolve<any> {

  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return {}
  }

}
