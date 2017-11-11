import { EventEmitter, Output, Injectable} from '@angular/core';

export class DataService {

  sampleMenu = [
    'Yoğurt Çorbası',
    'Etli Türlü',
    'Bulgur Pilavı',
    'Salata/Meyve'
  ];

  sampleMenuImages = [
      './assets/menu1.jpg',
      './assets/menu2.jpg',
      './assets/menu3.jpg',
      './assets/menu4.jpg'

  ];

  constructor() { }

  getFoodName(id) {
    return this.sampleMenu;
  }
}
