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

  addProject(projectToAdd) {
    this.projectList.push(projectToAdd);
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  addDonation(projectToDonate) {
    let localDonatedProject = this.getProjectById(projectToDonate.$key);

  }

  editProject(contributor, project){
    console.log(contributor);
    this.projectList.push(contributor.cardNumber);
    // this.projectList.push(contributor.cardType);
    // this.projectList.push(contributor.contribution);
    // this.projectList.push(contributor.email);
    // this.projectList.push(contributor.firstName);
    // this.projectList.push(contributor.lastName);


    // let projectEntryInFirebase = this.getProjectById(project.$key);
    // projectEntryInFirebase.update({
    //   name: project.name,
    //   description: project.description,
    //   fundRaised: project.fundRaised,
    //   owner: project.owner,
    //   projectMoney: project.projectMoney,
    //   timeSpan: project.timeSpan,
    //   contributors: contributor
    // })
    alert("You have successfully updated a record!");
  }

}
