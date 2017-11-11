import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScoreboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
