
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { TokenService } from '../../_services/token.service';



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

  isLoggedIn: boolean = this.tokenService.askToken()
 
  isLoginFailed: boolean = false
  errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void{

    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        // Pas d'erreur donc on enregistre le token et on redirige vers admin
        this.tokenService.saveToken(data.access_token)
        this.router.navigate(['/accueil'])
      },
      error: err => {
        this.isLoginFailed = true
        this.errorMessage = err.error.message
      }
    })
  }
}