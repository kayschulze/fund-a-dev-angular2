
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContributorComponent } from './contributor/contributor.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'start-a-dev',
    component: AddProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'contributor/:id',
    component: ContributorComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
