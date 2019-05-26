import { Directive, HostListener, Input } from "@angular/core";
import { AlgoAuthService } from "../social-login/algo-auth.service";

@Directive({
    selector: '[socialLoginButton]'
})
export class SocialLoginNotifierDirective
{
    @Input('socialLoginButton') providerType : String;
    // @Input('algoAuthService') algoAuthService : AlgoAuthService;

    constructor(private algoAuthService : AlgoAuthService){}

    @HostListener('click', ['$event.target']) onclick(button)
    {
        this.algoAuthService.login(this.providerType);
    }
}