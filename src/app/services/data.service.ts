import { EventEmitter, Output, Injectable} from '@angular/core';

export class DataService {

  sampleMenu = [
    'Yoğurt Çorbası',
    'Etli Türlü',
    'Bulgur Pilavı',
    'Salata/Meyve'
  ];

  userProfile = {
    'username' : '',
    'mail' : ''
  };
  sampleMenuImages = [
      './assets/menu1.jpg',
      './assets/menu2.jpg',
      './assets/menu3.jpg',
      './assets/menu4.jpg'
  ];

  constructor() { }

  setUserProfile(name, emai) {
    this.userProfile.username = name;
  }

  getFoodName(id) {
    return this.sampleMenu[id];
  }

  getImageSrc(id) {
    return this.sampleMenuImages[id];
  }
}
