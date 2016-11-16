import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectListComponent } from './project-list.component'
import { ProjectListResolveService } from './project-list-resolve.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
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
