import { ProviderInterface } from './provider-interface';
declare let FB: any;

export class FacebookAuthProvider implements ProviderInterface
{
    app_id : string;

    constructor(config)
    {
        this.app_id = config.app_id;
        this.initialize();
    }

    initialize()
    {
        this.loadScript( () => {
            FB.init({
              appId: this.app_id,
              autoLogAppEvents: true,
              cookie: true,
              xfbml: true,
              version: 'v3.1'
            });
            FB.AppEvents.logPageView();
            }
        );
    }

    loadScript(onload: any): void {
        let signInJS = document.createElement('script');
        signInJS.async = true;
        signInJS.src = "https://connect.facebook.net/en_US/sdk.js";
        signInJS.onload = onload;
        document.head.appendChild(signInJS);
      }
    
    login()
    {
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
        return null;
    }

    logout()
    {
        return null;
    }
}