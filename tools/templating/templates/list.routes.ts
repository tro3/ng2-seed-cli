import { Routes } from '@angular/router'

export const ##entityName##: Routes = [
  {
    path: '',
    canActivate: [##baseEntityName##AuthService],
    resolve: {items: ##baseEntityName##ResolveService},
    component: ##baseEntityName##Component,
    children: [
    ],
  }
]
