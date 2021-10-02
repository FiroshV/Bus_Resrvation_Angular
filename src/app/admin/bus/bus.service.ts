import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './Bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseUrl="http://localhost:8040/bus/addBusDetail";
  private baseUrl1="http://localhost:8040/bus/busdetail/";
  private baseUrl2="http://localhost:8040/bus/allbuses"
  private base1Url="http://localhost:8040/bus/updateBus/";
  private base2Url="http://localhost:8040/bus/deleteBus";
  
  id:number=150;
    public getBusDetail(id:number){
      return this.httpClient.get<Bus>(this.baseUrl1+id);
    }
    public addBusDetail(f:Bus){
      return this.httpClient.post(this.baseUrl,f);
    }
  
    public getAllBuses()
    {
      return this.httpClient.get<Bus[]>(this.baseUrl2);
    }
    public updateBusDetail(d:Bus,bus_id:number,no_of_seats:number)
    {
      console.log(this.base1Url);
      return this.httpClient.post(this.base1Url+bus_id+'/'+no_of_seats,d);
    }
public deleteBusDetail(f1:number)
{
  return this.httpClient.post(this.base2Url,f1);
}
    constructor(private httpClient:HttpClient) { }
  }