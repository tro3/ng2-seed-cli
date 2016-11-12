import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ProjectDetailComponent } from './project-detail.component'

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    ProjectDetailComponent
  ],
  providers: [
  ],
  exports: [
    ProjectDetailComponent
  ],
})
export class ProjectDetailModule {

}