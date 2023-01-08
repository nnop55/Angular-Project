import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { NavigationEnd, Route, Router, RouterModule } from '@angular/router';
import { CheckbooleansService } from './services/checkbooleans.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Project';
  

  constructor(private router:Router, public check:CheckbooleansService){
    
  }

  ngOnInit(): void {
    this.hideHeader()
  }
hideHeader(){
  this.router.events.subscribe((event: any) => {
    if (event instanceof NavigationEnd) {
      if (event.url == '/') {
        this.check.showHeader = true;
      } else {
        this.check.showHeader = false;
      }
    }
  })
 

}
}
