import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../Booking';
import { Profile } from './Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl:string="http://localhost:8040/hr";
baseUrl1:string="http://localhost:8040/bookingshr/Booking/";
baseUrl2:string="http://localhost:8040/bookingshr/updateStatus";
  constructor(private http:HttpClient) { }

  public getProfile(vemail: string) {
    console.log(`${this.baseUrl + '/user'}/${vemail}`);
    return this.http.get<Profile>(`${this.baseUrl + '/user'}/${vemail}`);
  }

public getBooking(email:string):Observable<Booking[]>
{
  return this.http.get<any>(`${this.baseUrl1}/${email}`);
}

public updateBookingInfo(ticketNo:number)
{
  console.log('url is',`${this.baseUrl2}/${ticketNo}`);
  return this.http.get<any>(`${this.baseUrl2}/${ticketNo}`);
}
}
