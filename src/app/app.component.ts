import { Component } from '@angular/core';
import { AlgoAuthService } from 'algodex';
import { environment } from '../environments/environment';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algodex-app';
  constructor(private algoAuthService : AlgoAuthService, private testService : TestService)
  {
    this.algoAuthService.loadConfigurations(environment.algodex_oauth_config);
    this.algoAuthService.afterLogin.subscribe(
      (data) => {
        console.log('auth response ::: ');
        console.log(data);
      }
      );
      this.testService.subjectChanges.subscribe(
        (data)=>{
          console.log("data ::: " + data);
        }
      );
  }

  activate()
  {
    console.log('activate');
    this.testService.subjectChanges.next('activated');
  }
}
