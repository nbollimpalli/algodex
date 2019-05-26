import { Injectable } from '@angular/core';
import { ProviderInterface } from '../providers/provider-interface';
import { AuthProvider } from '../providers/auth-provider';
import { throwError, Subject } from 'rxjs';

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
  afterLogin = new Subject();
  afterLogout = new Subject();

  constructor() {
    this.authServiceProviders = new Map<String, ProviderInterface>();
  }

  loadConfigurations(configs : Object) : string
  {
    try
    {
      for (const [providerName, value] of Object.entries(configs)) {
        var authProviderClassName = providerName+'AuthProvider';
        var authProvider = new AuthProvider(authProviderClassName, value, this);
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
    return provider.login(this.loginCallBack);
  }

  logout(provider_type)
  {
    var provider = this.authServiceProviders[provider_type];
    return provider.logout(this.logoutCallBack);
  }

  loginCallBack(data, error : boolean, type : string)
  {
    var response = {
      auth_provider : type
    }
    if(error)
    {
      response['error'] = data;
      this.afterLogin.error(response);
    }
    else
    {
      response['auth_response'] = data;
      this.afterLogin.next(response);
    }
  }

  logoutCallBack(data, error : boolean, type : string)
  {
    var response = {
      auth_provider : type
    }
    if(error)
    {
      response['error'] = data;
      this.afterLogout.error(data);
    }
    else
    {
      response['auth_response'] = data;
      this.afterLogout.next(data);
    }
  }
  
  handleCallback(paramsInfo)
  {
    var authCode = paramsInfo.get('authtoken');
    console.log(authCode);
  }
}
