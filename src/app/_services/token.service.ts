import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs'
import jwt_decode from 'jwt-decode'

interface TokenDetail{
  id: number     |null ,
  nom: string    |null ,
  prenom: string |null ,
  iat: bigint    |null ,
  eat: bigint    |null 
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  /*Sharing Data using a Service for unrelated components*/
  private name = new BehaviorSubject<string>(this.getNameUser())
  public currentName = this.name.asObservable()

  private log = new BehaviorSubject<boolean>(this.askToken())
  public currentLog = this.log.asObservable()

  constructor() {}

  changeLog() {
    this.name.next(this.getNameUser())
    this.log.next(this.askToken())
  }

  saveToken(token: string):void{
    localStorage.setItem('token', token)
    this.changeLog()
  }
  
  getToken():string |null {
    return localStorage.getItem('token')
  }

  askToken():boolean{
    return !!localStorage.getItem('token')
  }

  destroyToken():void{
    localStorage.removeItem('token')
    this.changeLog()
  }

  getDecodedToken(): TokenDetail  {
    if (!this.askToken()) return {id: null, nom: '', prenom: '', iat: null, eat: null}
    return jwt_decode<TokenDetail>(String(this.getToken()))
  }
  
  getNameUser(): string {
    if (!this.askToken()) return 'Ma session'
    return String(this.getDecodedToken().nom) + ' ' + String(this.getDecodedToken().prenom)
  }

}
