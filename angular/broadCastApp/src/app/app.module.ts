import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1/tab1.component';
import { Tab2Component } from './tab2/tab2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
