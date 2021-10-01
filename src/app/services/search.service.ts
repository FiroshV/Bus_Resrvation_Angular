import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus_Detail } from '../Bus_Detail';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  baseUrl:string="http://localhost:8040/bus";
  constructor(private http:HttpClient) { }

  public getBusList(vsource: string, vdestination: string, Day:string): Observable<Bus_Detail[]> {
  //  console.log(`${this.baseUrl + '/search'}/${vsource}/${vdestination}`);
    return this.http.get<any>(`${this.baseUrl + '/search'}/${vsource}/${vdestination}/${Day}`);
}
}