
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
  placeOffers:any;
  HotelCategories:any;
  

  constructor(private http: HotelsHttpService, private activatedRoute: ActivatedRoute, public dialog:MatDialog) { }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params['id'];

      console.log(params);
    
      console.log(id);

      this.http.getHotelById(id).subscribe(res => {
        this.currentHotel = res;
        this.placeOffers = this.currentHotel.placeOffers;
        this.HotelCategories = this.currentHotel.categories;
        console.log(this.currentHotel);
      })
    })
  }
  previousImage(item: any) {
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;

    if (item.imgIndex != 0) {
      item.imgIndex--;
    } else {
      item.imgIndex = item.images.length - 1
    }
  }

  nextImage(item: any) {
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;
    item.imgIndex++;

    if (item.imgIndex > (item.images.length - 1)) {
      item.imgIndex = 0;
    }
  }

  updateUrl(event: Event) {
    let ev = event.target as HTMLImageElement;
    ev.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
  }


}


