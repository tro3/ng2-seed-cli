import { Injectable }             from '@angular/core'
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router'

@Injectable()
export class ##entityName## implements Resolve<any> {

  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean {
    return true
  }

}
