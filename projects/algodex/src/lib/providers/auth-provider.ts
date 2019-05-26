import { FacebookAuthProvider } from '../providers/facebook-auth-provider';
import { GoogleAuthProvider } from '../providers/google-auth-provider';
import { LinkedinAuthProvider } from '../providers/linkedin-auth-provider';
import { TwitterAuthProvider } from '../providers/twitter-auth-provider';
import { GithubAuthProvider } from '../providers/github-auth-provider';
import { AlgoventAuthProvider } from '../providers/algovent-auth-provider';

const providers = { 
    FacebookAuthProvider,
    GoogleAuthProvider,
    LinkedinAuthProvider,
    TwitterAuthProvider,
    GithubAuthProvider,
    AlgoventAuthProvider,
};

export class AuthProvider {
    constructor (className, opts) {
        return new providers[className](opts);
    }
}