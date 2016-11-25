import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from '../../common/app-common.module'
import { ShipmentListAuthService } from './shipment-list-auth.service'
import { ShipmentListComponent } from './shipment-list.component'
import { ShipmentListResolveService } from './shipment-list-resolve.service'

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ShipmentListComponent
  ],
  providers: [
    ShipmentListAuthService,
    ShipmentListResolveService
  ],
  exports: [
    ShipmentListComponent
  ],
})
export class ShipmentListModule {

}