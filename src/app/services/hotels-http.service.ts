import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsHttpService {

  private hotelApi: string = 'http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Hotel';
  private categoryApi: string = 'http://airbnb-dev.us-east-1.elasticbeanstalk.com/api/Category'


  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.categoryApi)
  }

  getHotels(): Observable<any> {
    return this.http.get(this.hotelApi)
  }

  getHotelById(hotelId: any): Observable<any> {
    return this.http.get(`${this.hotelApi}/${hotelId}`);
  }
}
