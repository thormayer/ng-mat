import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatButtonComponent } from './ng-mat-button/ng-mat-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgMatButtonComponent],
  declarations: [NgMatButtonComponent]
})
export class NgMatButtonModule { }
