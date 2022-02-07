import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /*Sharing Data with a Service for unrelated components*/
  sourceLog = new BehaviorSubject<boolean>(false)
  currentLog = this.sourceLog.asObservable()

  changeLog(isLoggedIn: boolean) {
    this.sourceLog.next(isLoggedIn)
  }

  saveToken(token: string):void{
    localStorage.setItem('token', token)
  }
  
  getToken():string |null {
    return localStorage.getItem('token')
  }

  askToken():boolean{
    return !!localStorage.getItem('token')
  }

  destroyToken():void{
    localStorage.removeItem('token')
  }
  
}
