import { HotelsHttpService } from 'src/app/services/hotels-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-map',
  templateUrl: './hotel-map.component.html',
  styleUrls: ['./hotel-map.component.css']
})
export class HotelMapComponent implements OnInit {
  
  

  constructor(private hotel:HotelsHttpService) { }
  lat = 41.7151;
  long = 40.8271;
  zoom = 4;

  
currentLatLng:any [] = []
currentHotelCard:any
id:any

  ngOnInit(): void {
    this.hotel.getHotels().subscribe(res =>{
      this.currentLatLng = res;
      console.log(this.currentLatLng);
      this.id = res.id      
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
