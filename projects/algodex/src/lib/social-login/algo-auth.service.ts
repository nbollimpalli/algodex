import { Injectable } from '@angular/core';
import { ProviderInterface } from '../providers/provider-interface';
import { AuthProvider } from '../providers/auth-provider';
import { throwError } from 'rxjs';

export const FACEBOOK: string = 'Facebook';
export const GOOGLE: string = 'Google';
export const LINKEDIN: string = 'Linkedin';
export const GITHUB: string = 'Github';
export const TWITTER: string = 'Twitter';
export const ALGOVENT: string = 'Algovent';

const INVALID_AUTH_PROVIDER: string = "Invalid auth provider type";

@Injectable({
  providedIn: 'root'
})
export class AlgoAuthService {

  authServiceProviders : Map<String, ProviderInterface>

  constructor() {
    this.authServiceProviders = new Map<String, ProviderInterface>();
  }

  loadConfigurations(configs : Object) : string
  {
    try
    {
      for (const [providerName, value] of Object.entries(configs)) {
        var authProviderClassName = providerName+'AuthProvider';
        var authProvider = new AuthProvider(authProviderClassName, value);
        if(authProvider == undefined || authProvider == null)
        {
          throwError(INVALID_AUTH_PROVIDER);
        }
        else
        {
          this.authServiceProviders[providerName] = authProvider;
        }
      }
    }
    catch(error){
      console.error(':: algo auth service error begins ::');
      console.error(error);
      console.error(':: algo auth service error begins ::');
      return error
    }
    return "success";
  }

  login(provider_type)
  {
    var provider = this.authServiceProviders[provider_type];
    return provider.login();
  }

  logout(provider_type)
  {
    var provider = this.authServiceProviders[provider_type];
    return provider.logout();
  }
  
  handleCallback(paramsInfo)
  {
    var authCode = paramsInfo.get('authtoken');
    console.log(authCode);
  }
}
