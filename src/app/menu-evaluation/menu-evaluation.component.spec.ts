import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEvaluationComponent } from './menu-evaluation.component';

describe('MenuEvaluationComponent', () => {
  let component: MenuEvaluationComponent;
  let fixture: ComponentFixture<MenuEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
