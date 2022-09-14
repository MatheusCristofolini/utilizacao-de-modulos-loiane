import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroNivelModule } from './primeiro-nivel/primeiro-nivel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeiroNivelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
