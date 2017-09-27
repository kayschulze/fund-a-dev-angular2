
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
