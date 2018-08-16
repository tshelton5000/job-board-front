import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(){}

    canActivate(): boolean {
        if (sessionStorage.token){
            return true;
        } else {
            return false;
        }
    }
}