import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Login } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.model';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';
import { NgForm } from '@angular/forms';
import { CheckbooleansService } from '../../../services/checkbooleans.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  checkInpType: boolean = true;
  eyeIcon: string = 'ri-eye-off-fill'
  inpType: string = 'password';

  constructor(public checkUser: CheckbooleansService, private router: Router,
    private fireWorker: FirebaseWorkerService,
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {                                            //Accountze shesvla
    this.fireWorker.signIn(form.value.email, form.value.password).then(response => {
      response.subscribe((user: any) => { console.log(user) })
      this.checkUser.checkUserLoggedIn = true;
    })
    this.router.navigate(['/'])
  }



  eyeIconToggle() {                   //Parolis damalva an chveneba inputshi
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
