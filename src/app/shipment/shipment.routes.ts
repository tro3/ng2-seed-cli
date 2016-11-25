import { Routes } from '@angular/router'

import { ShipmentComponent } from './shipment.component'
import { ShipmentDetailRoutes } from './shipment-detail/shipment-detail.routes'
import { ShipmentListRoutes } from './shipment-list/shipment-list.routes'

export const ShipmentRoutes: Routes = [
  {
    path: 'shipments',
    component: ShipmentComponent,
    children: [
      ...ShipmentListRoutes,
      ...ShipmentDetailRoutes
    ],
  }
]