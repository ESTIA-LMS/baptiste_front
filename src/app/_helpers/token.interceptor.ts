import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/_services/token.service';
@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = this.tokenService.getToken() // recup le token grace au service

    if (token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+ token) //clone de la requete avec insertion du token dans le header
      })
      
      return next.handle(clone)

    }

    //si pas de token retourne la requete
    return next.handle(request);
  }
}

export const TokenInterceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}]
