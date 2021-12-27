import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {

  constructor() { }

  isLoggedIn: boolean = false

  textButton: string = ""

  ngOnInit(): void {

    if (!this.isLoggedIn){
      this.textButton = "Se connecter"
    }
    else {
      this.textButton = "Mon compte"
    }
  }

}
