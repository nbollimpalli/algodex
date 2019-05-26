import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgoAuthService } from 'algodex';
import { SocialLoginNotifierDirective } from 'algodex';
import { TestService } from './test.service';
@NgModule({
  declarations: [
    AppComponent,
    SocialLoginNotifierDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlgoAuthService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
