import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';

import { DataService } from '../services/data.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  menuId;

  liked = false;
  doesntLike = false;

  range;
  foodImageSource;
  foodName;

  constructor(private route: ActivatedRoute, private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
      this.menuId = +params['id'];
      this.foodName = this.dataService.getFoodName(this.menuId);
      this.foodImageSource = this.dataService.getImageSrc(this.menuId); 
    });

  if (this.menuId === 0){
    this.dataService.increseScore(10);
  }

  this.foodName = this.dataService.getFoodName(this.menuId);
  this.foodImageSource = this.dataService.getImageSrc(this.menuId);  
  }

  likeOrNotLike(data){
    if(data === 1){
      this.liked = true;
    } else if(data === 2){
      this.doesntLike = true;
    }

    if(this.liked && this.doesntLike){
      if(data === 2){
        this.liked = false;
      } else if(data === 1){
        this.doesntLike = false;
      }
    }

  }

  changeWaste(event){
    this.range = event;
  }

  goNext(data) {
    this.dataService.increseScore(5);
    if(data !== 2){
      this.dataService.increseScore((this.range.parseInt()) * -5);
    }
    
    
    let newId;
    
    if (this.menuId === 3) {
      this.router.navigate(['/user']);
    } else {
      newId = this.menuId + 1;
      this.router.navigate(['/feedback', this.menuId + 1]);
    }
  }

}
