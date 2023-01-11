import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckbooleansService } from '../../services/checkbooleans.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public checkUser: CheckbooleansService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['/authorization/login']);
    this.checkUser.checkUserLoggedIn = false;
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  map() {
    this.router.navigate(['/hotel-map'])
  }


}
