import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';
import { HotelsHttpService } from 'src/app/services/hotels-http.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookedHotelsData: any[] = [];
  user: any;

  constructor(private firebase: FirebaseWorkerService,
    private http: HotelsHttpService) { }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser() {                                       //Momxmareblis shemowmeba aris tu ara shemosuli
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if (this.user) {
      this.checkHistory();
    }
  }

  checkHistory() {                                        //Dajavshnili sastumroebis informaciis shenaxva masivshi
    this.firebase.getDataByDocumentName('book-history').valueChanges().pipe(
      map((items: any) =>
        items.filter((item: any) => item.user_id == this.user.uid))
    ).subscribe((filteredData: any) => {
      filteredData.forEach((history: any) => {
        this.http.getHotelById(history.hotel_id).subscribe((hotel: any) => {
          const data = {
            startDate: history.start_date,
            endDate: history.end_date,
            status: history.status,
            hotelImg: hotel.mainImages[0],
            hotelName: hotel.name,
            hotelId: hotel.id
          }
          this.bookedHotelsData.push(data);
        })
      })
    })
  }

}
