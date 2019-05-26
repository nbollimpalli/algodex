import { Observable } from "rxjs";

export interface ProviderInterface {
    login(): Observable<any>;
    logout(): Observable<any>;
}