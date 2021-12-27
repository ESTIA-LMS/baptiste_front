import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string):void{
    localStorage.setItem('token', token)
  }
  
  getToken():string |null {
    return localStorage.getItem('token');
  }

  askToken():boolean{
    return !!localStorage.getItem('token');
  }

  destroyToken():void{
    localStorage.removeItem('token')
  }
  
}
