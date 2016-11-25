import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '../../common/api.service'

@Injectable()
export class ShipmentListResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.find('shipments', route.params['query'])
  }

}
