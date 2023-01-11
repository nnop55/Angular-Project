import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckbooleansService } from 'src/app/services/checkbooleans.service';
import { HotelsHttpService } from 'src/app/services/hotels-http.service';
import { FilterModalComponent } from '../../filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent implements OnInit {
  sliderData: any[] = [];

  @ViewChild('scrollArea', { static: true }) scrollArea!: ElementRef<HTMLElement>;

  btnDisable: boolean = false;
  btnDisable2: boolean = true;

  constructor(private dialog: MatDialog, private categoryHttp: HotelsHttpService
    , private checkBooleans: CheckbooleansService) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData() {                               //Movusminet kategoriebis informacias
    this.categoryHttp.getCategories().subscribe(res => {
      this.sliderData = res;
      console.log(this.sliderData)
    })
  }

  openDialog() {                                 //Filter dialogis gamodzaxeba
    const dialogRef = this.dialog.open(FilterModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onHorizontalScrollLeft() {                     //Slaideri
    let element = this.scrollArea.nativeElement as HTMLElement;
    this.btnDisable = false;
    let inc = 25;

    var interval = setInterval(() => {
      inc -= 1;
      element.scrollLeft -= inc;
      inc = inc > 0 ? inc : 0;

      if (inc == 0) {
        if (element.scrollLeft == 0) {
          this.btnDisable2 = true;
        } else {
          this.btnDisable2 = false;
        }
        clearInterval(interval);
      }
    }, 10)
  }

  onHorizontalScrollRight() {                     //Slaideri
    let element = this.scrollArea.nativeElement as HTMLElement;
    this.btnDisable2 = false;

    let inc = 0;

    var interval = setInterval(() => {
      inc += 1;
      element.scrollLeft += inc;
      inc = inc > 25 ? 25 : inc;

      if (inc == 25) {
        if ((element.scrollWidth - element.clientWidth) == element.scrollLeft) {
          this.btnDisable = true;
        } else {
          this.btnDisable = false;
        }
        clearInterval(interval)
      }
    }, 10)
  }

  getByCategoryData(id: string) {                     //Filtracia kategoriis mixedvit
    this.categoryHttp.getFilteredHotels({ id: id }).subscribe((res: any) => {
      this.categoryHttp.filteredHotelsArr = res;
      this.checkBooleans.showHotelsBtn = true;
      console.log(this.categoryHttp.filteredHotelsArr);
    })
  }



}
