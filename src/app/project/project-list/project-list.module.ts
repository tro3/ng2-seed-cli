import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectListComponent } from './project-list.component'
import { ProjectListResolveService } from './project-list-resolve.service'

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    ProjectListComponent
  ],
  providers: [
    ProjectListResolveService
  ],
  exports: [
    ProjectListComponent
  ],
})
export class ProjectListModule {

}