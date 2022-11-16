import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckStorageService {

  checkStorage: boolean = true;

  constructor() { }

  storageInfo() {
    if (localStorage.getItem('authorized') != 'true') {
      this.checkStorage = false;
    } else {
      this.checkStorage = true;
    }
  }
}
