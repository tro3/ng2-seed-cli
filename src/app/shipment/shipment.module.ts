import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ShipmentComponent } from './shipment.component'
import { ShipmentDetailModule } from './shipment-detail/shipment-detail.module'
import { ShipmentListModule } from './shipment-list/shipment-list.module'

@NgModule({
  imports: [
    RouterModule,
    ShipmentDetailModule,
    ShipmentListModule
  ],
  declarations: [
    ShipmentComponent
  ],
  providers: [ ],
  exports: [
    ShipmentComponent
  ],
})
export class ShipmentModule {

}