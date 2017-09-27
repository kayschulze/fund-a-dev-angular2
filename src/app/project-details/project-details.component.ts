import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

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

  // projectToDisplay: FirebaseObjectObservable<any>;
  //
  // constructor(private router: Router, private location: Location,
  // private fundService ) { }
  //
  ngOnInit() {
  }

}
