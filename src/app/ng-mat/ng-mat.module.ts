import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatInputComponent } from './components/ng-mat-input/ng-mat-input.component';
import { NgMatButtonModule } from './ng-mat-button/ng-mat-button.module';


@NgModule({
  imports: [
    CommonModule,
    NgMatButtonModule,
    
  ],
  exports: [
    NgMatInputComponent,
    NgMatButtonModule

  ],
  declarations: [
    NgMatInputComponent,
    
  ]
})
export class NgMatModule { }
