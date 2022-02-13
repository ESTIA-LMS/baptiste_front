import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user';
import { TokenService } from './token.service';


interface reponse{
  message: string,
  data: {}
}

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor( private http: HttpClient, private tokenService: TokenService) { }

  get1User(id:number):Observable<User>{
    return this.http.get<User>(environment.apiURL+'users/'+String(id))
  }

  createUser(name:string, firstName:string, email:string, password:string, password1:string): Observable<reponse>{
    return this.http.post<reponse>(environment.apiURL +'users/',{"nom": name, "prenom": firstName, "email": email, "mdp": password , "mdp1": password1 })
  }
  
  destroyUser(): Observable<reponse> {
    const id = this.tokenService.getDecodedToken().id
    return this.http.delete<reponse>(environment.apiURL + 'users/' + id)
  }

}
