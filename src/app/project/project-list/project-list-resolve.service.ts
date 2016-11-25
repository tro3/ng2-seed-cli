import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '../../common/api.service'

@Injectable()
export class ProjectListResolveService implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.api.find('projects', route.params['query'])
  }

}
