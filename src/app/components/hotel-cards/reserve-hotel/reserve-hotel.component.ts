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
    this.activatedRoute.params.subscribe((params: any) => {   //Erti sastumros informacia ID-is mixedvit
      this.hotelId = params['id'];
      this.http.getHotelById(this.hotelId).subscribe(res => {
        this.currentHotel = res;
        console.log(this.currentHotel);
      })
    });

    this.checkUser();

    this.date.date_from = moment().format("YYYY-MM-DD");         //Tarigis formati moment-js
    this.date.date_to = moment().add(1, "days").format("YYYY-MM-DD");         //Tarigis formati moment-js
  }

  checkUser() {                                       //Momxmareblis shemowmeba aris tu ara shemosuli
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    if (this.user) {
      this.checkBookHistory();
    }
  }

  getDifferenceInDays() {               //Archeuli tarigs shoris dgeebis datvla
    const postData = {
      start_date: moment(this.date.date_from).format("YYYY-MM-DD"),
      end_date: moment(this.date.date_to).format("YYYY-MM-DD")
    }

    console.log(this.uid);

    this.firebase.setDataByDocumentName("book-history", this.uid).update(postData);


    let to: any = new Date(this.date.date_to);
    let from: any = new Date(this.date.date_from);

    const diffInMs = Math.abs(to - from);
    this.diffInMs = diffInMs / (1000 * 60 * 60 * 24);
    this.calculatePrice();
    console.log(this.diffInMs)
    return this.diffInMs
  }

  calculatePrice() {                  //Datvlili dgeebis raodenoba gamrvaldeba yvela otaxis pasze
    this.currentHotel['rooms'].forEach((e: any) => {
      e['oldPriceTmp'] = e.oldPriceTmp == undefined ? e.price : e.oldPriceTmp;
      e.price = this.diffInMs * e.oldPriceTmp;
    })
  }

  checkBookHistory() { //Vamowmebt shemosul momxmarebels tu konda akamde raime sastumros dajavshna dawkebuli romelic ar daumtavrebia,
    // tu konda shevtavazebt gagrdzelebas tu ar konda sheikmneba axali istoria konkretul momxmarebelze
    let date = moment().format('YYYY-MM-DD HH:mm');
    let index = 0;

    this.firebase.getDataByDocumentName("book-history").valueChanges().pipe(
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

  continueBookingModal(data: any) { //Dajavshnis gagrdzelebis dialogi
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

  createBookHistory() {                  //Ikmneba axali istoria im konkretul momxmarebelze romelsac akamde arasdros daujavshnia
    const postData: HotelBook = {
      uid: '',
      datetime: moment().format('YYYY-MM-DD HH:mm'),
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().add(1, 'days').format('YYYY-MM-DD'),
      hotel_id: this.hotelId,
      status: 'Active',
      user_id: this.user.uid
    }

    this.uid = this.firebase.createBookHistory(postData)
  }

  openDialog(item: any) {   //Dialogi dadasturebistvis namdvilat surs tu ara am otaxis dajavshna     
    const dialogRef = this.dialog.open(BookingModalComponent);

    if (this.uid == '') {
      this.createBookHistory();
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.check.bookStatus = 'Done';
        this.router.navigate(['/'])
        this.openSnackBar(`${item.price} dollars were deducted from your card`, 'OK')
      } else {
        this.check.bookStatus = 'Cancelled'
      }

      const postData = {
        status: this.check.bookStatus
      }

      this.firebase.setDataByDocumentName("book-history", this.uid).update(postData);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  previousImage(item: any) {      //Suratis slider
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;

    if (item.imgIndex != 0) {
      item.imgIndex--;
    } else {
      item.imgIndex = item.images.length - 1
    }
  }

  nextImage(item: any) {      //Suratis slider
    item.imgIndex = item.imgIndex ? item.imgIndex : 0;
    item.imgIndex++;

    if (item.imgIndex > (item.images.length - 1)) {
      item.imgIndex = 0;
    }
  }

  updateUrl(event: Event) {  //Tu romelime surati ar chaitvirteba mag shemtxvevashi gaeshveba es funkcia da image not found daewereba
    let ev = event.target as HTMLImageElement;
    ev.src = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
  }



}
