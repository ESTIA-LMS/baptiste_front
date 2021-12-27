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
    return this.http.post<IToken>(this.endPoint +'auth/login/',{ "email": email, "password": password })
  }
  
}
