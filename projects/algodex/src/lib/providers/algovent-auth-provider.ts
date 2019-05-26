import { ProviderInterface } from './provider-interface';

export class AlgoventAuthProvider implements ProviderInterface
{
    client_id : string;

    constructor(config)
    {
        this.client_id = config.client_id;
    }

    initialize()
    {
    }
    
    login()
    {
        return null;
    }

    logout()
    {
        return null;
    }
}