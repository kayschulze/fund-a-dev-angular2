import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { FundADevService } from '../fund-adev.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [FundADevService]
})

export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fundService: FundADevService) { }

  ngOnInit() {
    this.projects = this.fundService.getProjects();

  }
  goToDetails(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

  goToContributor(clickedProject) {
    this.router.navigate(['contributor', clickedProject.$key]);
  }

}
