import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service'

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {

  constructor(private tokenService: TokenService) {}

  isLoggedIn: boolean = false

  textButton: string = ""

  ngOnInit(): void {
    this.actualise()    
  }

  actualise(): void{
    this.isLoggedIn = this.tokenService.askToken()

    if (!this.isLoggedIn){
      this.textButton = "Se connecter"
    }
    else {
      this.textButton = "Mon compte"
    }
  }
}
