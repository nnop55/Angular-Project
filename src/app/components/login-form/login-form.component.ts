import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginInfo: Login = new Login();

  constructor(public checkUsersData: UsersDataService, private router: Router) { }

  ngOnInit(): void {
  }

  loginBtn() {                               //Log in on existed account,checking if account are exists.

    let users = this.checkUsersData.getUsers();

    if (users.length > 0) {
      let filteredUser = users.filter((o: any) => this.loginInfo.email == o.email && this.loginInfo.password == o.pass);
      if (filteredUser.length > 0) {
        this.loginInfo.email = '';
        this.loginInfo.password = '';
        localStorage.setItem('authorized', 'true')
        this.checkUsersData.storageInfo();
        this.router.navigate(['/']);
      } else {
        alert("Fill correct info");
      }

    } else {
      alert("User not found");
    }

  }

}
