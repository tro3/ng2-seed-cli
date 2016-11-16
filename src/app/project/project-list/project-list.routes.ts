import { Routes } from '@angular/router'

import { ProjectListComponent } from './project-list.component'
import { ProjectListResolveService } from './project-list-resolve.service'

export const ProjectListRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
    resolve: {items: ProjectListResolveService},
    children: [
    ],
  }
]
