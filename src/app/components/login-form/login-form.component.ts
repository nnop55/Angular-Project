import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Login } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.model';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';
import { UsersDataService } from 'src/app/services/users-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // loginInfo: Login = new Login();
  loginInfo: User = new User()

  checkInpType: boolean = true;
  eyeIcon: string = 'ri-eye-off-fill'
  inpType: string = 'password';

  constructor(public checkUsersData: UsersDataService, private router: Router,
    private fireWorker:FirebaseWorkerService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form:NgForm) {
    var tmpUser = Object.assign(new User(),form.value);
    this.fireWorker.signIn(tmpUser,form.value.password).then((response:any) => {
      console.log(response);
    })
  }

  loginBtn() {     
    
    //Log in on existed account,checking if account are exists.

    this.fireWorker.signIn('bero12345@gmail.com', '123123');

    // if (this.loginInfo.email == '' || this.loginInfo.password == '') {
    //   alert('Fill all the fields')
    // } else {
    //   let users = this.checkUsersData.getUsers();

    //   if (users.length > 0) {
    //     let filteredUser = users.filter((o: any) => this.loginInfo.email == o.email && this.loginInfo.password == o.pass);
    //     if (filteredUser.length > 0) {
    //       this.loginInfo.email = '';
    //       this.loginInfo.password = '';
    //       localStorage.setItem('authorized', 'true')
    //       this.checkUsersData.storageInfo();
    //       this.router.navigate(['/']);
    //     } else {
    //       alert("Fill correct info");
    //     }

    //   } else {
    //     alert("User not found");
    //   }
    // }



  }

  eyeIconToggle() {
    this.checkInpType = !this.checkInpType;
    if (this.checkInpType) {
      this.eyeIcon = 'ri-eye-off-fill';
      this.inpType = 'password';
    } else {
      this.eyeIcon = 'ri-eye-fill';
      this.inpType = 'text';
    }
  }

}
