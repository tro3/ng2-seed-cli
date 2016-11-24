import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from '##rootPath##/common/app-common.module'

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ##baseEntityName##Component,
  ],
  providers: [ ],
  exports: [
    ##baseEntityName##Component,
  ],
})
export class ##entityName## {

}
