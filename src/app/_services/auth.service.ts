import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

interface IToken{
  access_token: string
}

interface Error{
  message: string
}

interface reponse{
  message: string,
  data: {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(email:string,password:string): Observable<IToken & Error> {
    return this.http.post<IToken & Error>(environment.apiURL +'auth/',{ "email": email, "mdp": password })
  }

  updateMdp(oldPwd: string, newPwd: string, newPwd2: string) : Observable<reponse>{
    const id = this.tokenService.getDecodedToken().id
    return this.http.patch<reponse>(environment.apiURL + 'auth/'+ id, {oldPwd: oldPwd, newPwd: newPwd, newPwdConf: newPwd2})
  }
  
}
