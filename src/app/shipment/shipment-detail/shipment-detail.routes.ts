import { Routes } from '@angular/router'

import { ShipmentDetailAuthService } from './shipment-detail-auth.service'
import { ShipmentDetailComponent } from './shipment-detail.component'
import { ShipmentDetailResolveService } from './shipment-detail-resolve.service'

export const ShipmentDetailRoutes: Routes = [
  {
    path: ':id',
    canActivate: [ShipmentDetailAuthService],
    resolve: {item: ShipmentDetailResolveService},
    component: ShipmentDetailComponent,
    children: [
    ],
  }
]