import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Driver } from './Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseUrl="http://localhost:8040/driverhr/addDriver";
private baseUrl1="http://localhost:8040/driverhr/driver/";
private baseUrl2="http://localhost:8040/driverhr/drivers";
private base1Url="http://localhost:8040/driverhr/updateDriver/";
private baseUrl3="http://localhost:8040/driverhr/updateDriver/deleteDriver";

id:number=10;
  public getDriverInfo(id:number){
    console.log(this.baseUrl1+id);
    return this.httpClient.get<Driver>(this.baseUrl1+id);
  }
  public addDriverDetail(f:Driver){
    return this.httpClient.post(this.baseUrl,f);
  }

  public getDriverList()
  {
    return this.httpClient.get<Driver[]>(this.baseUrl2);
  }

  public updateDriverInfo(d:Driver,driverId:number,mobile:String)
  {
    console.log(this.base1Url);
    return this.httpClient.post(this.base1Url+driverId+'/'+mobile,d);
  }

  public deleteDriver(f1:number)
  {
    return this.httpClient.post(this.baseUrl3,f1);
  }
 
  constructor(private httpClient:HttpClient) { }
}

