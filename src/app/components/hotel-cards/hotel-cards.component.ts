import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Data } from 'src/app/models/data.model';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.css']
})
export class HotelCardsComponent implements OnInit {

  hotelsData: Data[] = [];

  constructor() { }


  ngOnInit(): void {
    this.hotelFill();
  }

  hotelFill() {
    this.hotelsData = [
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '1st Hotel',
        price: '90$ night',
        rating: '3.34'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '2nd Hotel',
        price: '67$ night',
        rating: '2.67'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '3rd Hotel',
        price: '133$ night',
        rating: '5.23'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '4th Hotel',
        price: '55$ night',
        rating: '3.88'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '5th Hotel',
        price: '89$ night',
        rating: '4.76'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '6th Hotel',
        price: '97$ night',
        rating: '4.86'
      },
      {
        image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        hotelName: '7th Hotel',
        price: '101$ night',
        rating: '5.11'
      },
    ]
  }

}
