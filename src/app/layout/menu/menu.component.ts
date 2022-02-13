import { Component, OnInit } from '@angular/core'
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { 
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1020px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.menuVisibleH=false        
      } else {
        this.menuVisibleH=true  
      }
    });
  }

  public menuVisibleH: boolean = true
  public menuVisibleV: boolean = false
  
  ngOnInit(): void {

  }

  onClick():void{
    this.menuVisibleV = !this.menuVisibleV
  }

  receiveMessage($event: any) {
    this.menuVisibleV = $event
  }

}
