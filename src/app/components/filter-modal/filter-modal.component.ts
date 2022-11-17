import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {
  isSelectedBeds:boolean = true;
  isSelectedBedrooms:boolean = true;
  isSelectedBathrooms:boolean = true;


  isReadMore = true
  constructor() { }

  ngOnInit(): void {
  }


  showText() {
     this.isReadMore = !this.isReadMore
  }
  selectedBtnBedrooms() {
    this.isSelectedBedrooms = !this.isSelectedBedrooms
  }

  selectedBtnBathrooms() {
    this.isSelectedBathrooms = !this.isSelectedBathrooms
  }

  selectedBtnBeds() {
    this.isSelectedBeds = !this.isSelectedBeds
  }

  


  

}
