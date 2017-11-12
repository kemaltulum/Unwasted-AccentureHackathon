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

  firstButton = false;
  secondButton = false;
  thirdButton = false;

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
  if(this.dataService.isDemo){
    //this.demo();
  }  
  }

  demo(){
    let randomNum = Math.floor((Math.random() * 6) + 1);
    setTimeout(() => {
      this.range = randomNum;
    }, 800);

    if(this.menuId === 2){
      setTimeout(() => {
        randomNum = Math.floor((Math.random() * 6) + 1);
        this.range = randomNum;
      } ,2600);
    }

    setTimeout(() => {
      randomNum = Math.floor((Math.random() * 6) + 1);
      this.range = randomNum;
    } ,4000);

    randomNum = Math.floor((Math.random() * 3) + 1);
    if(randomNum === 1){
      this.firstButton = true;
    } else if(randomNum === 2){
      this.secondButton = true;
    } else{
      this.thirdButton = true;
    }

    if(randomNum <= 2){
      this.goNext(1);
    } else{
      this.goNext(2);
    }
    console.log(randomNum);
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
      this.dataService.increseScore(parseInt(this.range, 10) * 5);
    }
    let newId;
    if (this.menuId === 3) {
      this.dataService.increaseLunchOrDinner();
      this.dataService.isDemo = false;
      this.router.navigate(['/user']);
    } else {
      newId = this.menuId + 1;
      this.router.navigate(['/feedback', newId]);
    }
  }


}
