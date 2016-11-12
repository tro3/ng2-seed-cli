import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectComponent } from './project.component'
import { ProjectDetailModule } from './project-detail/project-detail.module'

@NgModule({
  imports: [
    ProjectDetailModule,
    RouterModule
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [
  ],
  exports: [
    ProjectComponent
  ],
})
export class ProjectModule {

}