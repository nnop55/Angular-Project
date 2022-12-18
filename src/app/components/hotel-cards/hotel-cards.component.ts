import { Observable } from 'rxjs';
import { HotelsHttpService } from './../../services/hotels-http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.css']
})
export class HotelCardsComponent implements OnInit {

  hotelObservable!: Observable<any>

  constructor(public hotel: HotelsHttpService) { }

  ngOnInit(): void {
    this.hotelObservable = this.hotel.getHotels()
  }
  


}
