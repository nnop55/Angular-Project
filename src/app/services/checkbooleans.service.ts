import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckbooleansService {

  checkUserLoggedIn:boolean = false;

  constructor() { }
}
