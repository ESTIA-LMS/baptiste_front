import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {


  form: any = {
    name: null,
    firstName: null,
    email: null,
    password: null,
    password1: null
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const { name, firstName, email, password, password1 } = this.form;

    this.authService.create(name, firstName, email, password, password1).subscribe({
      next: data => {
        // Pas d'erreur on redirige vers login
        this.router.navigate(['/auth/login'])
      },
      error: err => console.error(err)
    })
  }

}
