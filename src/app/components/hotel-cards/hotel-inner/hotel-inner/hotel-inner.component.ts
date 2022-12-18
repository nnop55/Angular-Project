
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsHttpService } from 'src/app/services/hotels-http.service';

@Component({
  selector: 'app-hotel-inner',
  templateUrl: './hotel-inner.component.html',
  styleUrls: ['./hotel-inner.component.css']
})
export class HotelInnerComponent implements OnInit {

  currentHotel: any;
  

  constructor(private http: HotelsHttpService, private activatedRoute: ActivatedRoute, public dialog:MatDialog) { }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];
<<<<<<< Updated upstream
      console.log(params);

=======
      console.log(id);
      
>>>>>>> Stashed changes
      this.http.getHotelById(id).subscribe(res => {
        this.currentHotel = res;
        console.log(this.currentHotel);
      })
    })
  }
}

