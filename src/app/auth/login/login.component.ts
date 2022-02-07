import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  }

  isLoggedIn: boolean = false
  subscription: Subscription | undefined

  isLoginFailed: boolean = false
  errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.subscription = this.tokenService.currentLog.subscribe(change => this.isLoggedIn = change)
  }

  onSubmit(): void{

    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        // Pas d'erreur donc on enregistre le token et on redirige vers admin
        this.tokenService.saveToken(data.access_token)
        this.tokenService.changeLog(true)
        this.router.navigate(['/accueil'])
      },
      error: err => {
        this.isLoginFailed = true
        this.errorMessage = err.error.message
      }
    })
  }
}