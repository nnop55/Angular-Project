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

  constructor(private http: HotelsHttpService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];
      console.log(params);

      this.http.getHotelById(id).subscribe(res => {
        this.currentHotel = res;
        console.log(this.currentHotel);
      })
    })
  }

}
