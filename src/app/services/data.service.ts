import { EventEmitter, Output, Injectable } from '@angular/core';

export class DataService {

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

  getFoodName(id) {
    return this.sampleMenu[id];
  }

  getImageSrc(id) {
    return this.sampleMenuImages[id];
  }
}

