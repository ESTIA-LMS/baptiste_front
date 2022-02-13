import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { 
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1020px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.wrap=true        
      } else {
        this.wrap=false  
      }
    });
  }

  public wrap: boolean = true

  ngOnInit(): void {
  }

  
}
