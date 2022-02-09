import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import jwt_decode from 'jwt-decode'

interface TokenDetail{
  nom: string,
  prenom: string,
  iat: bigint,
  eat: bigint
}
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  /*Sharing Data using a Service for unrelated components*/
  sourceLog = new BehaviorSubject<boolean>(false)
  currentLog = this.sourceLog.asObservable()

  changeLog(isLoggedIn: boolean) {
    this.sourceLog.next(isLoggedIn)
    this.askTokenIdentification()
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

  askTokenIdentification():string{
    if (this.getToken() === null) return 'Ma session'
    const monToken: string = String(this.getToken())
    const nom: string = jwt_decode<TokenDetail>(monToken).nom
    const prenom: string = jwt_decode<TokenDetail>(monToken).prenom
    return nom + ' ' + prenom
  }
  
}
