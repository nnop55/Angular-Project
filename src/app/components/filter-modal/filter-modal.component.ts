import { Component, OnInit } from '@angular/core';
import { ICON_REGISTRY_PROVIDER } from '@angular/material/icon';
import { filter, from } from 'rxjs';
import { CheckbooleansService } from 'src/app/services/checkbooleans.service';
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
  checkBooleans: any;

  constructor(private http: HotelsHttpService, private check: CheckbooleansService) { }

  ngOnInit(): void {
    this.typeOfPlaceFunc();
    this.bedroomsFunc();
    this.bedsFunc();
    this.bathroomsFunc();
    this.propertyTypeFunc();
    this.hostLanguageFunc();
  }

  saveFilterBtn() {                             //Sastumroebis filtracia masivshi
    if (parseInt(this.priceRange.price_from) > parseInt(this.priceRange.price_to)) {
      alert("Incorrect price range!")
    } else {
      this.filterHotels();

      this.http.filteredHotelsArr = [];
      this.http.getFilteredHotels(this.selectedFilter).subscribe(res => {
        this.http.filteredHotelsArr = res;
        this.check.showHotelsBtn = true;
        console.log(this.http.filteredHotelsArr)
      })
      console.log(this.selectedFilter)
    }
  }

  addAmenitiesForm() {                         //Amenities inputis damateba
    this.amenitiesForm.push({
      name: '',
    });
  }
  removeAmenitiesForm(index: any) {                         //Amenities inputis washla
    this.amenitiesForm.splice(index, 1)
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

  bedroomsClick(item: any) {                    //Airchios mxolod erti parametri
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

  bedsClick(item: any) {                    //Airchios mxolod erti parametri
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

  bathroomsClick(item: any) {                    //Airchios mxolod erti parametri
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

  propertyTypeClick(item: any) {                    //Airchios mxolod erti parametri
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

  filterHotels() {                                              //Shemowmeba filtraciistvis, romeli parametria archeuli da ramdeni
    //priceRAnge
    this.selectedFilter['priceFrom'] = this.priceRange['priceFrom'];
    this.selectedFilter['priceTo'] = this.priceRange['priceTo'];

    //typeOfPlace

    this.typeOfPlace.forEach((e: any) => {
      this.selectedFilter['typeOfPlace'] = this.selectedFilter['typeOfPlace']
        == undefined ? "" : this.selectedFilter['typeOfPlace'];

      if (this.selectedFilter['typeOfPlace'] == "") {
        this.selectedFilter['typeOfPlace'] += e.clicked == true ? e.name : '';
      }
    })
    this.selectedFilter['typeOfPLace'] = this.selectedFilter['typeOfPlace']
      == "" ? undefined : this.selectedFilter['typeOfPlace'];

    //bedrroms
    this.bedrooms.forEach((e: any) => {
      this.selectedFilter['bedrooms'] = this.selectedFilter['bedrooms']
        == undefined ? "" : this.selectedFilter['bedrooms'];

      if (this.selectedFilter['bedrooms'] == "") {
        this.selectedFilter['bedrooms'] += e.clicked == true ? e.name : '';
      }
    })
    this.selectedFilter['bedrooms'] = this.selectedFilter['bedrooms']
      == "" ? undefined : this.selectedFilter['bedrooms'];
    this.selectedFilter['bedrooms'] = this.selectedFilter['bedrooms']
      == 'ANY' ? undefined : this.selectedFilter['bedrooms']

    //beds
    this.beds.forEach((e: any) => {
      this.selectedFilter['beds'] = this.selectedFilter['beds']
        == undefined ? "" : this.selectedFilter['beds'];

      if (this.selectedFilter['beds'] == "") {
        this.selectedFilter['beds'] += e.clicked == true ? e.name : '';
      }
    })
    this.selectedFilter['beds'] = this.selectedFilter['beds']
      == "" ? undefined : this.selectedFilter['beds'];
    this.selectedFilter['beds'] = this.selectedFilter['beds']
      == "ANY" ? undefined : this.selectedFilter['beds'];

    //bathrooms
    this.bathrooms.forEach((e: any) => {
      this.selectedFilter['bathrooms'] = this.selectedFilter['bathrooms']
        == undefined ? "" : this.selectedFilter['bathrooms'];

      if (this.selectedFilter['bathrooms'] == "") {
        this.selectedFilter['bathrooms'] += e.clicked == true ? e.name : '';
      }
    })
    this.selectedFilter['bathrooms'] = this.selectedFilter['bathrooms']
      == "" ? undefined : this.selectedFilter['bathrooms'];

    this.selectedFilter['bathrooms'] = this.selectedFilter['bathrooms']
      == 'ANY' ? undefined : this.selectedFilter['bathrooms'];


    //propertyType
    this.propertyType.forEach((e: any) => {
      this.selectedFilter['propertyType'] = this.selectedFilter['propertyType']
        == undefined ? "" : this.selectedFilter['propertyType'];

      if (this.selectedFilter['propertyType'] == "") {
        this.selectedFilter['propertyType'] += e.clicked == true ? e.name : '';
      }
    })
    this.selectedFilter['propertyType'] = this.selectedFilter['propertyType']
      == "" ? undefined : this.selectedFilter['propertyType'];

    //amenities
    this.amenitiesForm.forEach((e: any) => {
      this.selectedFilter['amenities'] = this.selectedFilter['amenities']
        == undefined ? "" : this.selectedFilter['amenities'];

      if (this.selectedFilter['amenities'] == "") {
        this.selectedFilter['amenities'] += e.name != '' ? e.name : '';
      } else {
        this.selectedFilter['amenities'] += e.name != '' ? '&Amenities=' + e.name : '';
      }
    })
    this.selectedFilter['amenities'] = this.selectedFilter['amenities']
      == "" ? undefined : this.selectedFilter['amenities'];

    //hostLanguage
    this.hostLanguage.forEach((e: any) => {
      this.selectedFilter['hostLanguage'] = this.selectedFilter['hostLanguage']
        == undefined ? "" : this.selectedFilter['hostLanguage']

      if (this.selectedFilter['hostLanguage'] == "") {
        this.selectedFilter['hostLanguage'] += e.clicked == true ? e.name : "";
      } else {
        this.selectedFilter['hostLanguage'] += e.clicked == true ? '&HostLanguages=' + e.name : '';
      }
    })
    this.selectedFilter['hostLanguage'] = this.selectedFilter['hostLanguage']
      == "" ? undefined : this.selectedFilter['hostLanguage']
  }

}

