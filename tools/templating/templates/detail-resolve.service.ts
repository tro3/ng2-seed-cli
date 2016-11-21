import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '##rootPath##/common/api.service'

@Injectable()
export class ##entityName## implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.findOneById('##pluralName##', route.params['id'])
  }

}
