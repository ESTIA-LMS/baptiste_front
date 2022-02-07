import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {

  constructor(private tokenService: TokenService) {}

  isLoggedIn: boolean = false
  subscription: Subscription | undefined

  textButton: string = ""

  ngOnInit(): void {
    this.subscription = this.tokenService.currentLog.subscribe(change => this.isLoggedIn = change)   
  }

}
