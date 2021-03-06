import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from '../../common/app-common.module'
import { ProjectListAuthService } from './project-list-auth.service'
import { ProjectListComponent } from './project-list.component'
import { ProjectListResolveService } from './project-list-resolve.service'

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProjectListComponent
  ],
  providers: [
    ProjectListAuthService,
    ProjectListResolveService
  ],
  exports: [
    ProjectListComponent
  ],
})
export class ProjectListModule {

}