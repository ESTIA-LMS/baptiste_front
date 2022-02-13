import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';

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

  public messageErreur: string = ''

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const { name, firstName, email, password, password1 } = this.form;

    this.userService.createUser(name, firstName, email, password, password1).subscribe({
      next: data => {
        // Pas d'erreur on redirige vers login
        this.router.navigate(['/auth/login'])
      },
      error: err => this.messageErreur = err.error.message
    })
  }

}
