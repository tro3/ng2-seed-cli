import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '../../common/api.service'

@Injectable()
export class ShipmentDetailResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.findOneById('shipments', route.params['id'])
  }

}
