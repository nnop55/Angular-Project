import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { CheckStorageService } from 'src/app/services/check-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginInfo: Login = new Login();

  constructor(public checkStorage: CheckStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  loginBtn() {
    let email = localStorage.getItem('email')
    let loginPass = localStorage.getItem('password')
    if (this.loginInfo.email == email && this.loginInfo.password == loginPass) {
      this.loginInfo.email = '';
      this.loginInfo.password = '';
      localStorage.setItem('authorized', 'true')
      this.checkStorage.storageInfo();
      this.router.navigate(['/']);
    } else {
      alert("Fill correct info")
    }
  }

}
