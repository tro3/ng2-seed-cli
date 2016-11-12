import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class ##entityName## implements CanActivate, CanActivateChild {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

}
