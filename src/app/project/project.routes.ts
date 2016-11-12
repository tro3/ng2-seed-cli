import { Routes } from '@angular/router'

import { ProjectCanActivateService } from './project-can-activate.service'
import { ProjectComponent } from './project.component'
import { ProjectDetailRoutes } from './project-detail/project-detail.routes'

export const ProjectRoutes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      ...ProjectDetailRoutes
    ],
  },
]
