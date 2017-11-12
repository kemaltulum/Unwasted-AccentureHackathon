import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  score;
  lunch;
  dinner;
  userProfile;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.score = this.dataService.getScore();
    this.userProfile = this.dataService.getUserProfile();
    this.lunch = this.dataService.getLunch();
    this.dinner = this.dataService.getDinner();
    console.log(this.userProfile);
  }

}
