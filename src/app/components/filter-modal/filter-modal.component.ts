import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {
  bedrooms:any[] = []
  beds:any[] = []
  bathrooms:any [] = []
  propertyType:any [] = []
  essentials:any [] = []
  essentials2:any []= []
  priceRange:any [] = []
  typeOfPlace:any 
  
  isReadMore:boolean = true;
  
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
        name:'ANY',
        clicked:true
      },
      {
        name:'1',
        clicked:false
      },
      {
        name:'2',
        clicked:false
      },
      {
        name:'3',
        clicked:false
      },
      {
        name:'4',
        clicked:false
      },
      {
        name:'5',
        clicked:false
      },
      {
        name:'6',
        clicked:false
      },
      {
        name:'7',
        clicked:false
      },
      {
        name:'8+',
        clicked:false
      }
    ]
  }

  bedroomsFunc(item:any) {
    this.bedrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }



  bedsFunc() {
    this.beds = [
      {
        name:'ANY',
        clicked:true
      },
      {
        name:'1',
        clicked:false
      },
      {
        name:'2',
        clicked:false
      },
      {
        name:'3',
        clicked:false
      },
      {
        name:'4',
        clicked:false
      },
      {
        name:'5',
        clicked:false
      },
      {
        name:'6',
        clicked:false
      },
      {
        name:'7',
        clicked:false
      },
      {
        name:'8+',
        clicked:false
      }
    ]
  }

  bedsFunction(item:any) {
    this.beds.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }
  

  bathroomFunc() {
    this.bathrooms = [
      {
        name:'ANY',
        clicked:true
      },
      {
        name:'1',
        clicked:false
      },
      {
        name:'2',
        clicked:false
      },
      {
        name:'3',
        clicked:false
      },
      {
        name:'4',
        clicked:false
      },
      {
        name:'5',
        clicked:false
      },
      {
        name:'6',
        clicked:false
      },
      {
        name:'7',
        clicked:false
      },
      {
        name:'8+',
        clicked:false
      }
    ]
  }

  bathroomFunction(item:any) {
    this.bathrooms.forEach(item2 => {
      item2.clicked = false;
    })
    item.clicked = true;
  }
  
  propertyTypeFunc() {
    this.propertyType = [
      {
        name: 'House',
        clicked:false,
        icon: 'ri-home-6-line'
      },
      {
        name: 'Apartment',
        clicked:false,
        icon: 'ri-hotel-line'
      },
      {
        name: 'GuestHouse',
        clicked:false,
        icon: 'ri-building-4-line'
      },
      {
        name: 'Hotel',
        clicked:false,
        icon: 'ri-building-2-line'
      }
    ]
  }

  essentialsFunc() {
    this.essentials = [
      {
        name: 'Wifi',
        clicked: true
      },
      {
        name: 'Washer',
        clicked: true
      },
      {
        name: 'Air conditioning',
        clicked: true
      },
      {
        name: 'Dedicated workspace',
        clicked: true
      },
      {
        name: 'Hair dryer',
        clicked: true
      },
      {
        name: 'Kitchen',
        clicked: true
      },
      {
        name: 'Dryer',
        clicked: true
      },
      {
        name: 'Heating',
        clicked: true
      },
      {
        name: 'TV',
        clicked: true
      },
      {
        name: 'Iron',
        clicked: true
      }
      
    ]
  }
  
  priceRangeFunc() {
    this.priceRange = [
      {
        name: 'from',
      },
      {
        name: 'To'
      }
    ]
  }

  typeOfPlaceFunc() {
    this.typeOfPlace = [
      {
        value: false
      }
    ]
  }


  saveFilterBtn() {
    console.log(this.typeOfPlace);
    
  }


}
