import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMatModule } from './ng-mat/ng-mat.module';
import { NgMatButtonComponent } from './ng-mat/ng-mat-button/ng-mat-button/ng-mat-button.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
