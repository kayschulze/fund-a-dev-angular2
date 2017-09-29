import { Component, OnInit, Input } from '@angular/core';
import { FundADevService } from '../fund-adev.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.css'],
  providers: [FundADevService]
})

export class ContributorComponent implements OnInit {
  @Input() selectedProject;
  projectId: string;
  projectToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundService: FundADevService) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.fundService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;

      console.log(this.projectToDisplay);
    })

  }

  beginDonating(firstName: string, lastName: string, email: string, creditCardNumber: string, creditCardType: string, contribution: string) {
    alert("button working");

    let newContributor = {
      "cardNumber": creditCardNumber,
      "cardType": creditCardType,
      "contribution": contribution,
      "email": email,
      "firstName": firstName,
      "lastName": lastName
    };

    // let newDonatedProject = {
    //   "name": name,
    //   "description": description,
    //   "owner": owner,
    //   "projectMoney": projectMoney,
    //   "timeSpan": timeSpan,
    //   "contributors": [newContributor]
    // };

    // this.projectToContributeTo.contributors: newContributor;

    this.fundService.editProject(newContributor, this.projectToDisplay);
    // this.fundService.addContributor(newContributor);
  }
}
