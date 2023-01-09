import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckbooleansService {


  showHotelsBtn: boolean = false;

  checkUserLoggedIn: boolean = false;
  showHeader: boolean = true;

  constructor() { }
}
