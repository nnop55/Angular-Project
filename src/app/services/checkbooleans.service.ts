import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckbooleansService {

  bookStatus: string = 'Active';

  showHotelsBtn: boolean = false;

  checkUserLoggedIn: boolean = false;
  showHeader: boolean = true;

  constructor() { }
}
