import { Routes } from '@angular/router'

import { ProjectComponent } from './project.component'
import { ProjectDetailRoutes } from './project-detail/project-detail.routes'
import { ProjectListRoutes } from './project-list/project-list.routes'

export const ProjectRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectComponent,
    children: [
      ...ProjectListRoutes,
      ...ProjectDetailRoutes
    ],
  }
]