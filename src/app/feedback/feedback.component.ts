import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackComponent implements OnInit {

  menuId;

  foodImageSource;
  foodName;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
      this.menuId = +params['id'];
    });

  this.foodName = this.dataService.getFoodName(this.menuId);
  this.foodImageSource = this.dataService.getImageSrc(this.menuId);  
  }

}
