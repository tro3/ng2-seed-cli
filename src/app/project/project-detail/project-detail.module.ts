import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectDetailComponent } from './project-detail.component'
import { ProjectDetailResolveService } from './project-detail-resolve.service'

@NgModule({
  imports: [
    RouterModule,
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
