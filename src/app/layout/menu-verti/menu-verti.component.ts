import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-verti',
  templateUrl: './menu-verti.component.html',
  styleUrls: ['./menu-verti.component.sass']
})
export class MenuVertiComponent implements OnInit {

  @Output() messageEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(false)
  }

  receiveMessage($event: any) {
    this.sendMessage()
  }

}
