import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '../../common/api.service'

@Injectable()
export class ProjectDetailResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.findOneById('projects', route.params['id'])
  }

}
