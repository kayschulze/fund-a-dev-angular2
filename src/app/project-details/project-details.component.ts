import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FundADevService } from '../fund-adev.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [FundADevService]
})

export class ProjectDetailsComponent
 implements OnInit {

  projectId: string;
  projectToDisplay: FirebaseObjectObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundService: FundADevService ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.fundService.getProjectById(this.projectId);
  }

}
