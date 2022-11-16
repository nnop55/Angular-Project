import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public checkUsersData: UsersDataService, private router: Router) { }

  ngOnInit(): void {
    this.checkUsersData.storageInfo();
  }

  logOut() {                                             //Log out from account and navigate on register component
    localStorage.setItem('authorized', 'false');
    this.router.navigate(['/register']);
    this.checkUsersData.storageInfo();
  }

}
