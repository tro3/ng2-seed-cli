import { Routes } from '@angular/router'

import { ProjectDetailComponent } from './project-detail.component'
import { ProjectDetailResolveService } from './project-detail-resolve.service'

export const ProjectDetailRoutes: Routes = [
  {
    path: ':id',
    resolve: {item: ProjectDetailResolveService},
    component: ProjectDetailComponent,
    children: [
    ],
  }
]
