import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './Payment';
import { Booking } from '../Booking';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl="http://localhost:8040/paymentshr";
  private baseUrl1="http://localhost:8040";
  public  getPaymentList(){
    return this.httpClient.get<any>(this.baseUrl);
  }
  public getPaymentById(id:number){
    return this.httpClient.get<any>(this.baseUrl+id);
  }
  public  addPayment(p:Payment){
    return this.httpClient.post(this.baseUrl,p);
  }

  public  addBookingDetails(b:Booking){
    console.log("hello22");
    return this.httpClient.post("http://localhost:8040/bookingshr/addBookingDetail",b);
  }

  public getTicketNo()
  {
    return this.httpClient.get<any>(this.baseUrl1+'/bookingshr/'+'getTicketNo');
  }
  constructor(private httpClient:HttpClient) { }
}
