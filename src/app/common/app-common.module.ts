import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'

import { ApiService } from './api.service'
import { BusyService } from './busy.service'
import { ModalComponent } from './modal/modal.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ModalComponent
  ],
  providers: [
    ApiService,
    BusyService
  ],
  exports: [
    ModalComponent
  ],
})
export class AppCommonModule {

}
