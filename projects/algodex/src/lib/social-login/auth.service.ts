import { Injectable } from '@angular/core';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authServiceProviders = {}

  constructor() {
    //this.loadTW();
    //this.loadGoogle();
    //this.loadLinkedIn();
  }

  loadConfigurations(data)
  {
    this.loadFB(data.facebook_app_id);
  }

  loadFB(facebook_app_id)
  {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : facebook_app_id,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  loadTW()
  {
  }

  loadGoogle()
  {
  }

  loadLinkedIn()
  {
  }

  onSocialLogin(type)
  {
    console.log('User login failed');
    console.log(type);
    FB.login((response)=>
      {
        console.log('submitLogin',response);
        if (response.authResponse)
        {
          //login success
          //login success code here
          //redirect to home page
        }
        else
        {
          console.log('User login failed');
        }
    });
  }

  handleCallback(paramsInfo)
  {
    var authCode = paramsInfo.get('authtoken');
    console.log(authCode);
  }
}
