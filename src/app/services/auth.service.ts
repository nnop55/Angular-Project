import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private authUser:any = null
  constructor() { }

  public userLogIn (user:any):void{
this.authUser = user;
  }

  public isUserLogIn():boolean{
return this.authUser!=null
  }
}
