import { Routes } from '@angular/router'

export const ##entityName##: Routes = [
  {
    path: ':id',
    canActivate: [##baseEntityName##AuthService],
    resolve: {item: ##baseEntityName##ResolveService},
    component: ##baseEntityName##Component,
    children: [
    ],
  }
]
