import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Counter1Component } from './components/counter1/counter1.component';
import { Counter2Component } from './components/counter2/counter2.component';
import { Counter3Component } from './components/counter3/counter3.component';
import { Controller1Component } from './components/controller1/controller1.component';
import { Controller2Component } from './components/controller2/controller2.component';
import { Controller3Component } from './components/controller3/controller3.component';
import { UberControllerComponent } from './components/uber-controller/uber-controller.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    Controller1Component,
    Controller2Component,
    Controller3Component,
    UberControllerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
