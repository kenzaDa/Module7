import { Injectable } from '@angular/core';
import {   ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

 
  constructor(public auth:AuthService,
    public router:Router) {}


    canActivate(): boolean {
      if (!this.auth.isAuthenticated()) {
        this.router.navigateByUrl('login');
        return false;
      }
      return true;
    }
 

 
}

