import { Routes } from '@angular/router'

import { ProjectDetailComponent } from './project-detail.component'
import { ProjectResolveService } from './project-resolve.service'

export const ProjectDetailRoutes: Routes = [
  {
    path: 'project-detail',
    component: ProjectDetailComponent,
    children: [
    ],
  }
]