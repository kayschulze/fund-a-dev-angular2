import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Developer } from './developer.model';
import { Contributor } from './contributor.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FundADevService {
  projectList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projectList = database.list('projects');
    console.log(this.projectList);
   }

  getProjects() {

    return this.projectList;

  }

  // getProjectById(projectId: string){
  //
  // }
  //
  // getDevelopers() {
  //   return developers;
  // }
  //
  // getContributors() {
  //   return contributors;
  // }
}
