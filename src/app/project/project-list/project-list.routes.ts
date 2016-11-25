import { Routes } from '@angular/router'

import { ProjectListAuthService } from './project-list-auth.service'
import { ProjectListComponent } from './project-list.component'
import { ProjectListResolveService } from './project-list-resolve.service'

export const ProjectListRoutes: Routes = [
  {
    path: '',
    canActivate: [ProjectListAuthService],
    resolve: {items: ProjectListResolveService},
    component: ProjectListComponent,
    children: [
    ],
  }
]