import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Route, Router, RouterModule } from '@angular/router';
import { CheckbooleansService } from './services/checkbooleans.service';
import { FirebaseWorkerService } from './services/firebase-worker.service';
import * as moment from 'moment';
import { map } from 'rxjs';
import { ContinueBookingModalComponent } from './components/continue-booking-modal/continue-booking-modal.component';
import { User } from './models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Project';


  constructor(private router: Router, public check: CheckbooleansService, public firebaseService: FirebaseWorkerService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.hideHeader();
    this.checkUserIfLoggedIn();
  }

  hideHeader() {                                  //Filter categoriebis damalva sxva komponentebshi
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/') {
          this.check.showHeader = true;
        } else {
          this.check.showHeader = false;
        }
      }
    })
  }

  checkUserIfLoggedIn() {                            //Vamowmebs useri aris tuara shemosuli
    this.firebaseService.user$.subscribe((user: any) => {
      if (user && user.uid.length > 0) {
        this.check.checkUserLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(user));
        this.checkHistory(user);
      }
    })
  }

  checkHistory(user: User) {             //Vamowmebt istorias imitom rom tu ki dajavshna ar dausrulebia konkretul user-s shevtavazot gagrdzeleba
    let date = moment().format("YYYY-MM-DD HH:mm");
    let index = 0;
    let url = window.location.href;
    if (!(url.indexOf("reserve-hotel") > 0)) {
      this.firebaseService.getDataByDocumentName("book-history").valueChanges().pipe(
        map((items: any) =>
          items.filter((item: any) =>
            item.datetime <= date && moment(item.datetime).add(1, "days").format("YYYY-MM-DD HH:mm")
            >= date && item.status == "Active" && item.user_id == user.uid
          ))).subscribe((filteredData: any) => {
            if (index == 0 && filteredData && filteredData.length > 0) {
              this.openDialog(filteredData[0]);
            }
            index++;
          });
    }

  }
  openDialog(data: any) {               //Dialogi dajavshnis gasagrdzeleblad
    const dialogRef = this.dialog.open(ContinueBookingModalComponent);


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate([`/reserve-hotel/${data.hotel_id}`])
      } else {
        this.check.bookStatus = "Cancelled"

        const postData = {
          status: this.check.bookStatus
        }

        this.firebaseService.setDataByDocumentName("book-history", data.uid).update(postData);
      }

    });
  }
}


