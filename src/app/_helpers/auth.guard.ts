import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router , private tokenService:TokenService){}
  
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      //Si token alros ok sinon redirige à /auth --> login par défaut
      if (!!this.tokenService.getToken()){           
       return true 
      }

      return this.router.navigate(['auth'])
  }
  
}

