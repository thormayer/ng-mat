import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatButtonComponent } from './ng-mat-button.component';

describe('NgMatButtonComponent', () => {
  let component: NgMatButtonComponent;
  let fixture: ComponentFixture<NgMatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
