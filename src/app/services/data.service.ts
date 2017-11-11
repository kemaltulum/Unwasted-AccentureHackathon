import { EventEmitter, Output, Injectable} from '@angular/core';

export class DataService {

  userScore = 0;
  
  sampleMenu = [
    'Yoğurt Çorbası',
    'Adana Kebap',
    'Bulgur Pilavı',
    'Salata/Meyve'
  ];


  userProfile = {
    'username' : '',
    'email' : '',
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

<<<<<<< HEAD
  setUserProfile(name, emai) {
    this.userProfile.username = name;
=======
  setUserProfile(username, email, gender, eggAllergy, glutenAllergy, cornAllergy) {
    this.userProfile.username = username;
    this.userProfile.email = email;
    this.userProfile.gender = gender;
    this.userProfile.eggAllergy = eggAllergy;
    this.userProfile.glutenAllergy = glutenAllergy;
    this.userProfile.cornAllergy = cornAllergy;
>>>>>>> d569b84354202d7cbbdc903c5cf09103d5df78a3
  }

  getFoodName(id) {
    return this.sampleMenu[id];
  }

  getImageSrc(id) {
    return this.sampleMenuImages[id];
  }
}
