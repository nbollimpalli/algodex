import { Component } from '@angular/core';
import { AuthService } from 'algodex';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algodex-app';
  constructor(private authService : AuthService)
  {
    var configs = {
      "facebook_app_id":"2324515721200431"
    }
    authService.loadConfigurations(configs);
  }
}
