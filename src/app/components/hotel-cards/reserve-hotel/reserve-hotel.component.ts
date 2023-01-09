import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsHttpService } from 'src/app/services/hotels-http.service';
import { BookingModalComponent } from '../../booking-modal/booking-modal.component';
import * as moment from 'moment';
import { HotelBook } from 'src/app/models/hotel-book.model';
import { FirebaseWorkerService } from 'src/app/services/firebase-worker.service';
import { map } from 'rxjs';
import { CheckbooleansService } from 'src/app/services/checkbooleans.service';
import { ContinueBookingModalComponent } from '../../continue-booking-modal/continue-booking-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-reserve-hotel',
  templateUrl: './reserve-hotel.component.html',
  styleUrls: ['./reserve-hotel.component.css']
})
export class ReserveHotelComponent implements OnInit {

  currentHotel: any;
  placeOffers: any;
  HotelCategories: any;
  date: any = new Object();
  diffInMs: any;
  user: any;
  hotelId: string = '';
  uid: string = '';


  constructor(private http: HotelsHttpService, private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router, private firebase: FirebaseWorkerService,
    private check: CheckbooleansService,
    private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.hotelId = params['id'];

      console.log(this.hotelId);

      this.http.getHotelById(this.hotelId).subscribe(res => {
        this.currentHotel = res;
        this.placeOffers = this.currentHotel?.placeOffers;
        this.HotelCategories = this.currentHotel?.categories;
        console.log(this.currentHotel);
      })
    });

    this.date.date_from = moment().format('YYYY-MM-DD');         //Date format with moment js
    this.date.date_to = moment().add(1, 'days').format('YYYY-MM-DD');
  }

  checkUser() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if (this.user) {
      this.checkBookHistory();
    }
  }

  getDifferenceInDays() {
    const postData = {
      start_date: moment(this.date.date_from).format("YYYY-MM-DD"),
      end_date: moment(this.date.date_to).format("YYYY-MM-DD")
    }

    this.firebase.setDataByDocumentName('book-history', this.uid).update(postData);

    let to: any = new Date(this.date.date_to);
    let from: any = new Date(this.date.date_from);

    const diffInMs = Math.abs(to - from);
    this.diffInMs = diffInMs / (1000 * 60 * 60 * 24);
    this.calculatePrice();
    return this.diffInMs;
  }

  calculatePrice() {
    this.currentHotel['rooms'].forEach((e: any) => {
      e['oldPriceTmp'] = e.oldPriceTmp == undefined ? e.price : e.oldPriceTmp;
      e.price = this.diffInMs * e.oldPriceTmp;
    })
  }

  checkBookHistory() {
    let date = moment().format('YYYY-MM-DD HH:mm');
    let index = 0;

    this.firebase.getDataByDocumentName('book-history').valueChanges().pipe(
      map((items: any) =>
        items.filter((item: any) =>
          item.datetime <= date && moment(item.datetime).add(1, 'days').format('YYYY-MM-DD HH:mm') >=
          date && item.status == 'Active' && item.user_id == this.user.uid))).subscribe((filteredData: any) => {
            if (index == 0) {
              if (filteredData.length > 0) {
                let data = filteredData[0];
                this.uid = data.uid;

                if (data.hotel_id != this.hotelId) {
                  this.continueBookingModal(data)
                } else {
                  this.date.date_from = moment(data.start_date).format('YYYY-MM-DD');
                  this.date.date_to = moment(data.end_date).format('YYYY-MM-DD');
                }
              } else {
                this.createBookHistory();
              }
            }

            index++;
          })
  }

  continueBookingModal(data: any) {
    const dialogRef = this.dialog.open(ContinueBookingModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate([`/reserve-hotel/${data.hotel_id}`]);
        this.uid = data.uid;
        this.date.date_from = moment(data.start_date).format("YYYY-MM-DD");
        this.date.date_to = moment(data.end_date).format("YYYY-MM-DD");
      } else {
        this.check.bookStatus = "Cancelled";

        const postData = {
          status: this.check.bookStatus
        }

        this.firebase.setDataByDocumentName('book-history', this.uid).update(postData);
        this.uid = '';
      }
    })
  }

  createBookHistory() {
    const postData: HotelBook = {
      uid: '',
      datetime: moment().format('YYYY-MM-DD HH:mm'),
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().add(1, 'days').format('YYYY-MM-DD'),
      hotel_id: this.hotelId,
      status: 'Active',
      user_id: this.user.uid
    }

    this.firebase.createBookHistory(postData)
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(BookingModalComponent);

    if (this.uid == '') {
      this.createBookHistory();
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.check.bookStatus = 'Done';
        this.openSnackBar(`${item.price} dollars were deducted from your card`, 'OK')
      } else {
        this.check.bookStatus = 'Cancelled'
      }

      const postData = {
        status: this.check.bookStatus
      }

      this.firebase.setDataByDocumentName('book-history', this.uid).update(postData);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
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
