import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './Bus';
import { Driver } from './Driver';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://localhost:8040/bus/addbusdetail";
  private baseUrl1="http://localhost:8040/bus/busdetail/";
  private baseUrl2="http://localhost:8040/bus/allbuses"
  private base1Url="http://localhost:8040/bus/updateBus/";
  private base2Url="http://localhost:8040/bus/deleteBus";
  

  private basedUrl="http://localhost:8040/driverhr/addDriver";
private basedUrl1="http://localhost:8040/driverhr/driver/";
private basedUrl2="http://localhost:8040/driverhr/drivers";
private based1Url="http://localhost:8040/driverhr/updateDriver/";
private basedUrl3="http://localhost:8040/driverhr/deleteDriver";

id1:number=10;
  id:number=150;

  constructor(private httpClient:HttpClient) { }


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
    public updateBusDetail(bus_id:number,driverId:number)
    {
      console.log(this.base1Url);
      console.log(driverId);
      return this.httpClient.get(this.base1Url+bus_id+'/'+driverId);
    }
public deleteBusDetail(f1:number)
{
  return this.httpClient.get(this.base2Url+'/'+f1);
}

public getDriverInfo(id1:number){
  console.log(this.basedUrl1+id1);
  return this.httpClient.get<Driver>(this.basedUrl1+id1);
}
public addDriverDetail(f:Driver){
  return this.httpClient.post(this.basedUrl,f);
}

public getDriverList()
{
  return this.httpClient.get<Driver[]>(this.basedUrl2);
}

public updateDriverInfo(driverId:number,mobile:String)
{
  console.log(this.based1Url);
  return this.httpClient.get(this.based1Url+driverId+'/'+mobile);
}

public deleteDriver(f1:number)
{
  return this.httpClient.get(this.basedUrl3+'/'+f1);
}

    }
