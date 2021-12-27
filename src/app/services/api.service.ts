import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endPoint = 'http://localhost:64320/'

  constructor(private http: HttpClient) {   }

  getAllFormations(){
    return this.http.get(this.endPoint+'formations')
  }
}
