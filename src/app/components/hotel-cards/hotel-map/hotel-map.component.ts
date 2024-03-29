import { HotelsHttpService } from 'src/app/services/hotels-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-map',
  templateUrl: './hotel-map.component.html',
  styleUrls: ['./hotel-map.component.css']
})
export class HotelMapComponent implements OnInit {


  currentLatLng: any[] = [];

  lat = 41.7151;
  long = 40.8271;
  zoom = 4;

  constructor(private hotel: HotelsHttpService) { }



  ngOnInit(): void {
    this.hotel.getHotels().subscribe(res => {   //Yvela sastumros informacias vinaxavt masivshi
      this.currentLatLng = res;
      console.log(this.currentLatLng);
    })

  }
  previousImage(item: any) {       //Suratis slider
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;

    if (item.imgIndex != 0) {
      item.imgIndex--;
    } else {
      item.imgIndex = item.images.length - 1
    }
  }

  nextImage(item: any) {       //Suratis slider
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;
    item.imgIndex++;

    if (item.imgIndex > (item.images.length - 1)) {
      item.imgIndex = 0;
    }
  }

  updateUrl(event: Event) { //Tu romelime surati ar chaitvirteba mag shemtxvevashi gaeshveba es funkcia da image not found daewereba
    let ev = event.target as HTMLImageElement;
    ev.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
  }

}
