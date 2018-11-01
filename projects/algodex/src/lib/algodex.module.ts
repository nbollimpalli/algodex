import { NgModule } from '@angular/core';
import { AlgodexComponent } from './algodex.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [
  ],
  declarations: [AlgodexComponent, FooComponent],
  exports: [AlgodexComponent, FooComponent]
})
export class AlgodexModule { }
