import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from '../../../services/firebase-worker.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router, public fireWorker:FirebaseWorkerService) { }

  ngOnInit(): void {
  }

  // onSubmitForm(form:NgForm) {
  //   this.fireWorker.forgotPassword;
  // }
}
