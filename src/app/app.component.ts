import { Component } from '@angular/core';
import { AlgoAuthService } from 'algodex';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algodex-app';
  constructor(private algoAuthService : AlgoAuthService)
  {
    this.algoAuthService.loadConfigurations(environment.algodex_oauth_config);
  }
}
