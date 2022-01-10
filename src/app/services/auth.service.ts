import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IToken{
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = 'http://localhost:64320/'

  constructor(private http: HttpClient) { }

  login(email:string,password:string) {
    return this.http.post<IToken>(this.endPoint +'login/',{ "email": email, "mdp": password })
  }

  create(name:string, firstName:string, email:string, password:string, password1:string) {
    return this.http.post(this.endPoint +'users/',{"nom": name, "prenom": firstName, "email": email, "mdp": password , "mdp1": password1 })
  }
  
}
