import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { CheckStorageService } from 'src/app/services/check-storage.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerInfo: Register = new Register();

  constructor(private router: Router, private checkStorage: CheckStorageService) { }

  ngOnInit(): void {
  }

  registerBtn() {
    if (this.registerInfo.email.includes('@') && this.registerInfo.password == this.registerInfo.confirmPass) {
      let registerName = localStorage.setItem('email', this.registerInfo.email);
      let registerPass = localStorage.setItem('password', this.registerInfo.password);
      this.checkStorage.storageInfo();
      this.router.navigate(['/login']);
    } else {
      alert("ERROR !!")
    }
    this.registerInfo.email = '';
    this.registerInfo.username = '';
    this.registerInfo.password = '';
    this.registerInfo.confirmPass = '';
  }

}
