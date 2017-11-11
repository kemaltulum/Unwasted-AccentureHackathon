import { DataService } from './../services/data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  allergies = new FormControl();
  allergyList = ['Gluten Allergy', 'Corn Allergy', 'FPIES Allergy', 'Egg Allergy'];
  genders = ['Male', 'Female'];
  constructor( private dataService: DataService) {
  }

  ngOnInit() {
  }

  onRegisterFormSubmit(form: NgForm) {
    console.log(form);
  }

}
