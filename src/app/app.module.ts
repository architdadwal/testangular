import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { CircularDivsComponent } from './circular-divs/circular-divs.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularDivsComponent,
    // CarouselComponent,
    // ParentComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
