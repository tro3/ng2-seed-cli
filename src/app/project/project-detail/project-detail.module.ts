import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppCommonModule } from '../../common/app-common.module'
import { ProjectDescriptionComponent } from './project-description/project-description.component'
import { ProjectDetailAuthService } from './project-detail-auth.service'
import { ProjectDetailComponent } from './project-detail.component'
import { ProjectDetailControllerService } from './project-detail-controller.service'
import { ProjectDetailResolveService } from './project-detail-resolve.service'
import { ProjectInfoComponent } from './project-info/project-info.component'
import { ProjectNotesComponent } from './project-notes/project-notes.component'

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ProjectDescriptionComponent,
    ProjectDetailComponent,
    ProjectInfoComponent,
    ProjectNotesComponent
  ],
  providers: [
    ProjectDetailAuthService,
    ProjectDetailControllerService,
    ProjectDetailResolveService
  ],
  exports: [
    ProjectDescriptionComponent,
    ProjectDetailComponent,
    ProjectInfoComponent,
    ProjectNotesComponent
  ],
})
export class ProjectDetailModule {

}
