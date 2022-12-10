import { HotelCardsComponent } from './../../hotel-cards.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-inner',
  templateUrl: './hotel-inner.component.html',
  styleUrls: ['./hotel-inner.component.css']
})
export class HotelInnerComponent implements OnInit {

  constructor(hotel:HotelCardsComponent) { }
  
  ngOnInit(): void {
    
    }

}
