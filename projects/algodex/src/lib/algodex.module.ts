import { NgModule } from '@angular/core';
import { AlgodexComponent } from './algodex.component';
export { AuthService } from "./social-login/auth.service";

@NgModule({
  imports: [
  ],
  declarations: [AlgodexComponent],
  exports: [AlgodexComponent]
})
export class AlgodexModule { }
