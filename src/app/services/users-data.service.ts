import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  checkStorage: boolean = true;

  constructor() { }

  storageInfo() {                                             //This is for log out btn.
    if (localStorage.getItem('authorized') != 'true') {
      this.checkStorage = false;
    } else {
      this.checkStorage = true;
    }
  }

  getUsers() {                                                //Gets users data 
    let users: any = localStorage.getItem('users');
    let getExistedUsers = users ? JSON.parse(users) : [];

    return getExistedUsers;
  }

  setUser(usersList: any) {                                  //Sets user dara
    localStorage.setItem('users', JSON.stringify(usersList));
  }
}
