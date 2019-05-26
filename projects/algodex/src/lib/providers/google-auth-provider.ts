import { ProviderInterface } from './provider-interface';
import { AlgoAuthService } from '../social-login/algo-auth.service';

export class GoogleAuthProvider implements ProviderInterface
{
    client_id : string;

    constructor(config, private algoAuthService : AlgoAuthService)
    {
        this.client_id = config.client_id;
    }

    initialize()
    {
    }
    
    login()
    {
    }

    logout()
    {
    }
}