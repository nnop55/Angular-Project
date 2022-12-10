import { Observable } from 'rxjs';
import { HotelsHttpService } from './../../services/hotels-http.service';
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


   public hotelsData = [];

  constructor(public dialog: MatDialog, public hotel:HotelsHttpService) { }
  hotelObservable!:Observable<any> 
  
  
  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.hotelObservable = this.hotel.getHotels()
    console.log(this.hotelsData);
    
  }

  

}
