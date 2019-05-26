import { NgModule } from '@angular/core';
import { AlgodexComponent } from './algodex.component';
import { SocialLoginNotifierDirective } from './directives/social-login-notifier.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    AlgodexComponent,
    SocialLoginNotifierDirective,
  ],
  exports: [AlgodexComponent]
})
export class AlgodexModule { }
export { AlgoAuthService } from "./social-login/algo-auth.service";
export { SocialLoginNotifierDirective } from './directives/social-login-notifier.directive';