import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ProjectRoutes } from './project/project.routes'

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  ...ProjectRoutes
];