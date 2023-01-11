import { Observable } from 'rxjs';
import { HotelsHttpService } from './../../services/hotels-http.service';
import { Component, OnInit } from '@angular/core';
import { CheckbooleansService } from 'src/app/services/checkbooleans.service';


@Component({
  selector: 'app-hotel-cards',
  templateUrl: './hotel-cards.component.html',
  styleUrls: ['./hotel-cards.component.css']
})
export class HotelCardsComponent implements OnInit {

  hotelObservable!: Observable<any>

  constructor(public hotel: HotelsHttpService, public check: CheckbooleansService) { }

  ngOnInit(): void {
    this.getHotelsInfo();
  }

  getHotelsInfo() {                                //Yvela sastumros informacia
    this.hotel.getHotels().subscribe((res: any) => {
      this.hotel.filteredHotelsArr = res;
      console.log(this.hotel.filteredHotelsArr);
    })
  }

  showAllHotels() {         //Filtraciis shemdeg yvela sastumros naxva gilakze daklikebisas
    this.getHotelsInfo();
    this.check.showHotelsBtn = false;
  }

  previousImage(item: any) {                    //Suratis slideri
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;

    if (item.imgIndex != 0) {
      item.imgIndex--;
    } else {
      item.imgIndex = item.images.length - 1
    }
  }

  nextImage(item: any) {                    //Suratis slideri
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;
    item.imgIndex++;

    if (item.imgIndex > (item.images.length - 1)) {
      item.imgIndex = 0;
    }
  }

  updateUrl(event: Event) {           //Tu romelime surati ar chaitvirteba mag shemtxvevashi gaeshveba es funkcia da image not found daewereba
    let ev = event.target as HTMLImageElement;
    ev.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
  }

}
