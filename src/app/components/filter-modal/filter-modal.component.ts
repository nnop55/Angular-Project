import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HotelsHttpService } from 'src/app/services/hotels-http.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {

typeOfPlace: any[] = [];
  bedrooms: any[] = [];
  beds: any[] = [];
  bathrooms: any[] = [];
  propertyType: any[] = [];
  hostLanguage: any[] = [];

  priceRange: any = new Object();

  selectedFilter: any = new Object();

  amenitiesForm = [
    {
      name: '',
    }
  ];

  constructor(private http: HotelsHttpService) { }

  ngOnInit(): void {
    this.typeOfPlaceFunc();
    this.bedroomsFunc();
    this.bedsFunc();
    this.bathroomsFunc();
    this.propertyTypeFunc();
    this.hostLanguageFunc();
  }

  saveFilterBtn() {
        if (parseInt(this.priceRange.price_from) > parseInt(this.priceRange.price_to)) {
          alert("Incorrect price range!")
        } else {
          console.log('typeOfPlace : ', this.typeOfPlace);
          console.log('bathrooms : ', this.bathrooms);
          console.log('bedrooms : ', this.bedrooms);
          console.log('beds : ', this.beds);
          console.log('hostLanguage : ', this.hostLanguage);
          console.log('price : ', this.priceRange);
          console.log('propertyType : ', this.propertyType);
        }
  }

  addAmenitiesForm() {
    this.amenitiesForm.push({
      name: '',
    });
  }

  typeOfPlaceFunc() {
    this.typeOfPlace = [
      { name: 'Entire Place', desc: 'A place all to yourself', clicked: false },
      { name: 'Private room', desc: 'Your own room in a home or a hotel, plus some shared common spaces', clicked: false },
      { name: 'Shared room', desc: 'A sleeping space and common areas that may be shared with others', clicked: false }
    ]
  }

  bedroomsFunc() {
    this.bedrooms = [
      { name: 'ANY', clicked: true },
      { name: '1', clicked: false },
      { name: '2', clicked: false },
      { name: '3', clicked: false },
      { name: '4', clicked: false },
      { name: '5', clicked: false },
      { name: '6', clicked: false },
      { name: '7', clicked: false },
      { name: '8+', clicked: false },
    ]
  }

  bedroomsClick(item: any) {
    this.bedrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }

  bedsFunc() {
    this.beds = [
      { name: 'ANY', clicked: true },
      { name: '1', clicked: false },
      { name: '2', clicked: false },
      { name: '3', clicked: false },
      { name: '4', clicked: false },
      { name: '5', clicked: false },
      { name: '6', clicked: false },
      { name: '7', clicked: false },
      { name: '8+', clicked: false },
    ]
  }

  bedsClick(item: any) {
    this.beds.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }

  bathroomsFunc() {
    this.bathrooms = [
      { name: 'ANY', clicked: true },
      { name: '1', clicked: false },
      { name: '2', clicked: false },
      { name: '3', clicked: false },
      { name: '4', clicked: false },
      { name: '5', clicked: false },
      { name: '6', clicked: false },
      { name: '7', clicked: false },
      { name: '8+', clicked: false },
    ]
  }

  bathroomsClick(item: any) {
    this.bathrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }

  propertyTypeFunc() {
    this.propertyType = [
      { name: 'Home', icon: 'ri-home-6-line', clicked: false },
      { name: 'Villa', icon: 'ri-building-line', clicked: false },
    ]
  }

  propertyTypeClick(item: any) {
    this.propertyType.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }



  hostLanguageFunc() {
    this.hostLanguage = [
      { name: 'English', clicked: false },
      { name: 'French', clicked: false },
      { name: 'Russian', clicked: false },
      { name: 'German', clicked: false },
      { name: 'Georgian', clicked: false },
      { name: 'Spanish', clicked: false },
      { name: 'Japanese', clicked: false },
      { name: 'Norwegian', clicked: false },
      { name: 'Ukranian', clicked: false },
      { name: 'Swedish', clicked: false },
      { name: 'Arabic', clicked: false },
      { name: 'Italian', clicked: false },
    ]
  }
}