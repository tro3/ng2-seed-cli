import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
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
