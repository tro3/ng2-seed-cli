import { Routes } from '@angular/router'

export const ##entityName##: Routes = [
  {
    path: '##pluralName##',
    component: ##baseEntityName##Component,
    children: [
      ...##baseEntityName##ListRoutes,
      ...##baseEntityName##DetailRoutes
    ],
  }
]
