import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CircularDivsComponent } from './circular-divs/circular-divs.component';

@NgModule({
  declarations: [
    AppComponent,
   
    CircularDivsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
