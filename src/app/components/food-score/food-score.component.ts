import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-food-score',
  templateUrl: './food-score.component.html',
  styleUrls: ['./food-score.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FoodScoreComponent implements OnInit {

  
  images = [];
  imageNames = [];

  imageSrc;
  imageName;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  
  }

}
