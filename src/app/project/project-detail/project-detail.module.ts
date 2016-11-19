import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectDetailComponent } from './project-detail.component'
import { ProjectDetailResolveService } from './project-detail-resolve.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProjectDetailComponent
  ],
  providers: [
    ProjectDetailResolveService
  ],
  exports: [
    ProjectDetailComponent
  ],
})
export class ProjectDetailModule {

}
