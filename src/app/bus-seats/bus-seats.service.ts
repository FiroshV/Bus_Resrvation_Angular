import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seat } from './seat/Seat';

@Injectable({
  providedIn: 'root',
})
export class BusSeatsService {
  private baseUrl: string = "http://localhost:8040";
  busid=JSON.parse(sessionStorage.getItem("bus")|| '').busId;
  bookingdate=JSON.parse(sessionStorage.getItem("bookingdate")|| '');
    constructor(private http: HttpClient) { }
  
    public getSeatsList() {
      console.log("service layer",this.bookingdate);
      return this.http.get<number[]>(this.baseUrl + '/seatshr/bookedseats/'+this.busid+'/'+this.bookingdate);
    }

    public addSeats(s:Seat)
    {
      console.log('service ',s);
      return this.http.post(this.baseUrl+'/seatshr' + '/addSeat',s);
    }

  }