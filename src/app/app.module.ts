import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgodexModule } from 'algodex';
import { AlgoAuthService } from 'algodex';
import { SocialLoginNotifierDirective } from 'projects/algodex/src/public_api';
@NgModule({
  declarations: [
    AppComponent,
    SocialLoginNotifierDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlgodexModule
  ],
  providers: [AlgoAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
