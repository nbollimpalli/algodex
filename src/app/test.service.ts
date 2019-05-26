import { Injectable } from '@angular/core';
import { throwError, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  subjectChanges = new Subject();

  constructor() {
  }
}
