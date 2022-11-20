import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerInfo: Register = new Register();


  checkInpType: boolean = true;
  eyeIcon: string = 'ri-eye-off-fill';
  inpType: string = 'password';

  constructor(private router: Router, private checkUsersData: UsersDataService) { }

  ngOnInit(): void {
  }

  registerBtn() {                              //Register user and data saves in local storage and checks if user already registered or not.

    if (this.registerInfo.email == '' || this.registerInfo.username == ''
      || this.registerInfo.password == '' || this.registerInfo.confirmPass == '') {
      alert("Fill all fields!")
    } else {
      if (this.registerInfo.email.includes('@') && this.registerInfo.password == this.registerInfo.confirmPass) {
        let users = this.checkUsersData.getUsers();
        let exist = false;

        let filteredusers = users.filter((o: any) => o.email == this.registerInfo.email);
        exist = filteredusers.length > 0 ? true : false;
        console.log(filteredusers)
        if (!exist) {
          let user = {
            email: this.registerInfo.email,
            pass: this.registerInfo.password
          }
          users.push(user);

          this.checkUsersData.setUser(users);

          this.registerInfo.email = '';
          this.registerInfo.username = '';
          this.registerInfo.password = '';
          this.registerInfo.confirmPass = '';

          this.checkUsersData.storageInfo();
          this.router.navigate(['/login']);
        } else {
          alert("User also registered");
        }

      } else {
        alert("ERROR !!")
      }
    }

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




