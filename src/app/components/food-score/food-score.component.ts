import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-food-score',
  templateUrl: './food-score.component.html',
  styleUrls: ['./food-score.component.css']
})
export class FoodScoreComponent implements OnInit {
  @Input() imageSrc;
  @Input() imageName;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

}
