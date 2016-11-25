import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from '../../common/app-common.module'
import { ShipmentDetailAuthService } from './shipment-detail-auth.service'
import { ShipmentDetailComponent } from './shipment-detail.component'
import { ShipmentDetailResolveService } from './shipment-detail-resolve.service'

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ShipmentDetailComponent
  ],
  providers: [
    ShipmentDetailAuthService,
    ShipmentDetailResolveService
  ],
  exports: [
    ShipmentDetailComponent
  ],
})
export class ShipmentDetailModule {

}