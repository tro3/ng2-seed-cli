import { Injectable }             from '@angular/core'
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { ApiService } from '##rootPath##/common/api.service'

@Injectable()
export class ##entityName## implements Resolve<any> {

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean {
    return true
  }

}
