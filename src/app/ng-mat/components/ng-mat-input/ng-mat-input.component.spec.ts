import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatInputComponent } from './ng-mat-input.component';

describe('NgMatInputComponent', () => {
  let component: NgMatInputComponent;
  let fixture: ComponentFixture<NgMatInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
