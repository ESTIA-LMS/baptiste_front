import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service'

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {

  @Output() messageEvent = new EventEmitter()
  
  constructor(private tokenService: TokenService) {}

  isLoggedIn: boolean = this.tokenService.askToken()
  textButton: string = ""

  ngOnInit(): void {
    
    this.tokenService.currentLog.subscribe(change => this.isLoggedIn = change)  
    this.tokenService.currentName.subscribe(change => this.textButton = change)      
  }
  
  sendMessage(): void {
    this.messageEvent.emit(true)
  }

}
