import { Routes } from '@angular/router'

import { ShipmentListAuthService } from './shipment-list-auth.service'
import { ShipmentListComponent } from './shipment-list.component'
import { ShipmentListResolveService } from './shipment-list-resolve.service'

export const ShipmentListRoutes: Routes = [
  {
    path: '',
    canActivate: [ShipmentListAuthService],
    resolve: {items: ShipmentListResolveService},
    component: ShipmentListComponent,
    children: [
    ],
  }
]