import { Component, OnInit } from '@angular/core';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css']
})
export class BookingModalComponent implements OnInit {

  user: any;

  constructor(private firebase: FirebaseWorkerService) { }

  ngOnInit(): void {
    this.firebase.user$.subscribe((res: any) => {
      this.user = res;
      console.log(this.user)
    })
  }

}
