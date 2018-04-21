import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-menu-evaluation',
  templateUrl: './menu-evaluation.component.html',
  styleUrls: ['./menu-evaluation.component.css']
})
export class MenuEvaluationComponent implements OnInit {

  success = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submit(){
    this.success = true;
    this.dataService.increseScore(100);
  }

}
