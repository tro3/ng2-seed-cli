import { Routes } from '@angular/router'

import { ProjectDescriptionComponent } from './project-description/project-description.component'
import { ProjectDetailAuthService } from './project-detail-auth.service'
import { ProjectDetailComponent } from './project-detail.component'
import { ProjectDetailResolveService } from './project-detail-resolve.service'
import { ProjectInfoComponent } from './project-info/project-info.component'
import { ProjectNotesComponent } from './project-notes/project-notes.component'

export const ProjectDetailRoutes: Routes = [
  {
    path: ':id',
    canActivate: [ProjectDetailAuthService],
    resolve: {item: ProjectDetailResolveService},
    component: ProjectDetailComponent,
    children: [{
      path: '',
      redirectTo: 'description',
    },{
      path: 'description',
      component: ProjectDescriptionComponent
    },{
      path: 'info',
      component: ProjectInfoComponent
    },{
      path: 'notes',
      component: ProjectNotesComponent
    }],
  }
]
