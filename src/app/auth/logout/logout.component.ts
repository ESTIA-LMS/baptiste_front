import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  isLoggedIn: boolean = false
  subscription: Subscription | undefined

  ngOnInit(): void {
    this.tokenService.destroyToken()
    this.tokenService.changeLog(false)
  }

}
