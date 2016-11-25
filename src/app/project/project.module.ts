import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectComponent } from './project.component'
import { ProjectDetailModule } from './project-detail/project-detail.module'
import { ProjectListModule } from './project-list/project-list.module'

@NgModule({
  imports: [
    ProjectDetailModule,
    ProjectListModule,
    RouterModule
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [ ],
  exports: [
    ProjectComponent
  ],
})
export class ProjectModule {

}