import { ProviderInterface } from './provider-interface';
import { AlgoAuthService } from '../social-login/algo-auth.service';
declare let FB: any;
const FACEBOOK: string = 'Facebook';
export class FacebookAuthProvider implements ProviderInterface
{
    app_id : string;

    constructor(config, private algoAuthService: AlgoAuthService)
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
            if (response.authResponse)
            {
                var finalresponse = {
                    token : response.authResponse['accessToken']
                }
                this.algoAuthService.loginCallBack(finalresponse, false, FACEBOOK);
            }
            else
            {
                this.algoAuthService.loginCallBack('User login failed', true, FACEBOOK);
            }
        });
    }

    logout()
    {}
}