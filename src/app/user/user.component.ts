import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  score;
  lunch;
  dinner;
  userProfile;

  constructor(private dataService: DataService,
            private router: Router) { }

  ngOnInit() {
    this.score = this.dataService.getScore();
    this.userProfile = this.dataService.getUserProfile();
    this.lunch = this.dataService.getLunch();
    this.dinner = this.dataService.getDinner();
    console.log(this.userProfile);
  }

  demo(){
    this.router.navigate(["feedback", 0]);
    this.dataService.isDemo = true;
  }

}
