import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScoreboardComponent implements OnInit {

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  goHelp(){
    this.router.navigate(["help"]);
  }

}
