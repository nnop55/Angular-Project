import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from '../../filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent implements OnInit {
  sliderData:any [] = [];
  index:number = 0;
  @ViewChild('scrollArea', {static:true}) scrollArea!: ElementRef<HTMLElement>;
  saveInc:any = 0;
  btnDisable:boolean = false;
  btnDisable2:boolean = true;
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getSliderData();
  }

  getSliderData(){
    this.sliderData = [
      { name: 'Svaneti' },
      { name: 'Samegrelo' },
      { name: 'Kaxeti' },
      { name: 'Lechxumi' },
      { name: 'Apxazeti' },
      { name: 'Tbilisi' },
      { name: 'Racha' },
      { name: 'Guria' },
      { name: 'Kvemo kartli' },
      { name: 'Shida kartli' },
      { name: 'Samcxe - Javaxeti' },
      { name: 'Mcxeta - Mtianeti' },
      { name: 'Achara' },
      { name: 'Imereti' },
    ]
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onHorizontalScrollLeft(){
    let element = this.scrollArea.nativeElement as HTMLElement;
    this.btnDisable = false;
    let inc = 25;

    var interval = setInterval(() => {
      inc -= 1;
      element.scrollLeft -= inc;
      inc = inc > 0 ? inc : 0;

      if(inc == 0){
        if(element.scrollLeft == 0){
          this.btnDisable2 = true;
        }else{
          this.btnDisable2 = false;
        }
        clearInterval(interval);
      }
    }, 10)
  }

  onHorizontalScrollRight(){
    let element = this.scrollArea.nativeElement as HTMLElement;
    this.btnDisable2 = false;

    let inc = 0;

    var interval = setInterval(() => {
      inc += 1;
      element.scrollLeft += inc;
      inc = inc > 25 ? 25 : inc;

      if(inc == 25){
        if((element.scrollWidth - element.clientWidth) == element.scrollLeft ){
          this.btnDisable = true;
        }else{
          this.btnDisable = false;
        }
        clearInterval(interval)
      }
    } ,10)
  }


}
