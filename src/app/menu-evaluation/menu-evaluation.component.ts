import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-evaluation',
  templateUrl: './menu-evaluation.component.html',
  styleUrls: ['./menu-evaluation.component.css']
})
export class MenuEvaluationComponent implements OnInit {

  success = false;
  constructor() { }

  ngOnInit() {
    
  }

  submit(){
    this.success = true;
  }

}
