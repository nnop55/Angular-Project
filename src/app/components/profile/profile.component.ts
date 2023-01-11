import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router,
    private fireWorker: FirebaseWorkerService) { }


  ngOnInit(): void {
    this.fireWorker.user$.subscribe((user: any) => {    //Useris informaciis shenaxva cvladshi rom gamovitanot vizualze
      this.user = user;
      console.log(user);
    })
  }

  goToEditProfile() {
    this.router.navigate(['/profile-edit']);
  }

  editCard() {
    this.router.navigate(['/mastercard-edit'])
  }
}
