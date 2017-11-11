import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
