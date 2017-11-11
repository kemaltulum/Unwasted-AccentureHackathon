import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodScoreComponent } from './food-score.component';

describe('FoodScoreComponent', () => {
  let component: FoodScoreComponent;
  let fixture: ComponentFixture<FoodScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
