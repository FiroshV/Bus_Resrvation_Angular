import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl="http:localhost:8040/paymentshr";
  public  getPaymentList(){
    return this.httpClient.get<any>(this.baseUrl);
  }
  public getPaymentById(id:number){
    return this.httpClient.get<any>(this.baseUrl+id);
  }
  public  addPayment(p:Payment){
    return this.httpClient.post(this.baseUrl,p);
  }
  constructor(private httpClient:HttpClient) { }
}
