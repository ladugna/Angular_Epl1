import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
   FirstComponent, SecondComponent, ThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
