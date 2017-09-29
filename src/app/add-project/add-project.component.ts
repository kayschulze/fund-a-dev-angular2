import { Component, OnInit } from '@angular/core';
import { FundADevService } from '../fund-adev.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [FundADevService]
})
export class AddProjectComponent implements OnInit {

  constructor(private fundService: FundADevService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, owner: string, projectMoney: string, timeSpan: string) {
    let newProject = {
      "name": name,
      "description": description,
      "owner": owner,
      "projectMoney": projectMoney,
      "timeSpan": timeSpan,
      "contributors": [{"firstName": "", "lastName": "", "email": "", "creditCardType": "", "creditCardNumber": "", "contribution": ""}]
    }

    this.fundService.addProject(newProject);
  }


}
