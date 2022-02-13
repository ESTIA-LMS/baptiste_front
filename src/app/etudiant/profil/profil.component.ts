import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user'
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})

export class ProfilComponent implements OnInit{

  constructor( 
    public user: User,
    public http: HttpClient,
    private userService : UserService,
    private router : Router,
    private tokenService : TokenService,
    private authService: AuthService
    ){
      this.id = Number(this.tokenService.getDecodedToken().id)
    }

  private id: number
  public messageErreur: string = ''

  form: any = {
    oldPwd: null,
    newPwd: null,
    newPwdConfirm: null
  }

  // onInit => READ data from one user
  ngOnInit() : void {  
    this.id = Number(this.tokenService.getDecodedToken().id)
    this.userService.get1User(this.id)
    .subscribe({
      next: data => {
        this.user = data
        this.user.Users_Create_Date = this.convertDate(data.Users_Create_Date)
      },
      error: err => console.error('Erreur dans data de get1User()', err)
    })
  }

  //DELETE => click on delete button
  onDelete(): void {
    this.userService.destroyUser()
    .subscribe({
      next: data => {
        let confirmDelete = confirm("Vous êtes sur le point de supprimer votre compte. Souhaitez-vous continuer ?")
        if ( confirmDelete ) {
        alert(data.message)
        this.tokenService.destroyToken()
        this.router.navigate(['/accueil'])
        }
      },
      error: err => this.messageErreur = err.error.message
    })
  }

  //UPDATE du mdp
  onSubmit(): void{

    const { oldPwd, newPwd, newPwdConfirm } = this.form;

    this.authService.updateMdp(oldPwd, newPwd, newPwdConfirm)
    .subscribe({
      next: data => {
        // Pas d'erreur on redirige vers login
        alert(data.message)
        this.router.navigate(['/auth/login'])
      },
      error: err => this.messageErreur = err.error.message
    })
  }

  convertDate(d: string): string {
    const date = d.substring(0,10).split("-").reverse().join('/')
    const heure = d.substring(11,16)
    return date + ' - ' + heure
  }

}

