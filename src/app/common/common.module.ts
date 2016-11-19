import { NgModule } from '@angular/core'

import { ApiService } from './api.service'
import { BusyService } from './busy.service'

@NgModule({
  imports: [ ],
  declarations: [ ],
  providers: [
    ApiService,
    BusyService
  ],
  exports: [ ],
})
export class CommonModule {

}