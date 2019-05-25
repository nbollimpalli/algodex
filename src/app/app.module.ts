import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgodexModule } from 'algodex';
import { AuthService } from 'algodex';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlgodexModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
