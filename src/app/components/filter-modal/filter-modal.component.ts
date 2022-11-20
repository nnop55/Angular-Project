import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {
  bedrooms: any[] = []
  beds: any[] = []
  bathrooms: any[] = []
  propertyType: any[] = []
  essentials: any[] = []
  typeOfPlace: any = new Object()
  price: any = new Object()
  language: any = new Object()

  isReadMore: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.roomsAndBadsFunc();
    this.bedsFunc();
    this.bathroomFunc();
    this.propertyTypeFunc();
    this.essentialsFunc();

  }


  showText() {
    this.isReadMore = !this.isReadMore
  }

  roomsAndBadsFunc() {
    this.bedrooms = [
      {
        name: 'ANY',
        clicked: true
      },
      {
        name: '1',
        clicked: false
      },
      {
        name: '2',
        clicked: false
      },
      {
        name: '3',
        clicked: false
      },
      {
        name: '4',
        clicked: false
      },
      {
        name: '5',
        clicked: false
      },
      {
        name: '6',
        clicked: false
      },
      {
        name: '7',
        clicked: false
      },
      {
        name: '8+',
        clicked: false
      }
    ]
  }

  bedroomsFunc(item: any) {
    this.bedrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }



  bedsFunc() {
    this.beds = [
      {
        name: 'ANY',
        clicked: true
      },
      {
        name: '1',
        clicked: false
      },
      {
        name: '2',
        clicked: false
      },
      {
        name: '3',
        clicked: false
      },
      {
        name: '4',
        clicked: false
      },
      {
        name: '5',
        clicked: false
      },
      {
        name: '6',
        clicked: false
      },
      {
        name: '7',
        clicked: false
      },
      {
        name: '8+',
        clicked: false
      }
    ]
  }

  bedsFunction(item: any) {
    this.beds.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }


  bathroomFunc() {
    this.bathrooms = [
      {
        name: 'ANY',
        clicked: true
      },
      {
        name: '1',
        clicked: false
      },
      {
        name: '2',
        clicked: false
      },
      {
        name: '3',
        clicked: false
      },
      {
        name: '4',
        clicked: false
      },
      {
        name: '5',
        clicked: false
      },
      {
        name: '6',
        clicked: false
      },
      {
        name: '7',
        clicked: false
      },
      {
        name: '8+',
        clicked: false
      }
    ]
  }

  bathroomFunction(item: any) {
    this.bathrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }

  propertyTypeFunc() {
    this.propertyType = [
      {
        name: 'House',
        clicked: false,
        icon: 'ri-home-6-line'
      },
      {
        name: 'Apartment',
        clicked: false,
        icon: 'ri-hotel-line'
      },
      {
        name: 'GuestHouse',
        clicked: false,
        icon: 'ri-building-4-line'
      },
      {
        name: 'Hotel',
        clicked: false,
        icon: 'ri-building-2-line'
      }
    ]
  }

  essentialsFunc() {
    this.essentials = [
      {
        name: 'Wifi',
        clicked: false
      },
      {
        name: 'Washer',
        clicked: false
      },
      {
        name: 'Air conditioning',
        clicked: false
      },
      {
        name: 'Dedicated workspace',
        clicked: false
      },
      {
        name: 'Hair dryer',
        clicked: false
      },
      {
        name: 'Kitchen',
        clicked: false
      },
      {
        name: 'Dryer',
        clicked: false
      },
      {
        name: 'Heating',
        clicked: false
      },
      {
        name: 'TV',
        clicked: false
      },
      {
        name: 'Iron',
        clicked: false
      }

    ]
  }

  saveFilterBtn() {
    console.log('typeOfPlace : ', this.typeOfPlace);
    console.log('bathrooms : ', this.bathrooms);
    console.log('bedrooms : ', this.bedrooms);
    console.log('beds : ', this.beds);
    console.log('essentials : ', this.essentials);
    console.log('language : ', this.language);
    console.log('price : ', this.price);
    console.log('propertyType : ', this.propertyType);









  }


}
