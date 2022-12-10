import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsHttpService {

  constructor(private http:HttpClient) { }

  getHotels():Observable <any>{
return this.http.get('http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel')
  }
  
  getHotelById(hotelId:any):any {
    var apiUr:string = `${this.getHotels}/${hotelId}`;
    return this.http.get(apiUr);
  }
}
