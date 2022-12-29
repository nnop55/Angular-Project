import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { Register } from 'src/app/models/register.model';
import { User } from 'src/app/models/user.model';
import { FirebaseWorkerService } from '../../../services/firebase-worker.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  checkInpType: boolean = true;
  eyeIcon: string = 'ri-eye-off-fill';
  inpType: string = 'password';

  constructor(private router: Router,
    private fireWorker: FirebaseWorkerService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    var tmpUser = Object.assign(new User(), form.value);
    this.fireWorker.signUp(tmpUser, form.value.password).then((response: any) => {
      this.router.navigate(['/authorization/login']);
      console.log(response);
    })
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




