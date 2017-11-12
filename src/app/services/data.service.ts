import { EventEmitter, Output, Injectable } from '@angular/core';

export class DataService {

  isDemo = false;
  lunch = 0;
  dinner = 0;
  userScore = 0;
  sampleMenu = [
    'Yoğurt Çorbası',
    'Adana Kebap',
    'Bulgur Pilavı',
    'Salata/Meyve'
  ];


  userProfile = {
    'username': '',
    'email': '',
    'gender': '',
    'eggAllergy': '',
    'glutenAllergy': '',
    'cornAllergy': '',
  };

  sampleMenuImages = [
    './assets/menu1.jpg',
    './assets/menu2.jpg',
    './assets/menu3.jpg',
    './assets/menu4.jpg'
  ];

  constructor() { }

  setUserProfile(username, email, gender, eggAllergy, glutenAllergy, cornAllergy) {
    this.userProfile.username = username;
    this.userProfile.email = email;
    this.userProfile.gender = gender;
    this.userProfile.eggAllergy = eggAllergy;
    this.userProfile.glutenAllergy = glutenAllergy;
    this.userProfile.cornAllergy = cornAllergy;
  }

  getScore(){
    return this.userScore;
  }

  getUserProfile(){
    return this.userProfile;
  }

  getFoodName(id) {
    return this.sampleMenu[id];
  }

  getImageSrc(id) {
    return this.sampleMenuImages[id];
  }

  increseScore(score) {
    this.userScore += score;
  }

  increaseLunchOrDinner(){
    let date = new Date();
    let hour = date.getHours();
    if(hour >0 && hour < 12){
      this.lunch += 1;
    } else if(hour > 14){
      this.dinner += 1;
    }
  }

  getLunch(){
    return this.lunch;
  }

  getDinner(){
    return this.dinner;
  }
}

