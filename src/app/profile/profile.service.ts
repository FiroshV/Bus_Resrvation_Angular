import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl:string="http://localhost:8040/hr";

  constructor(private http:HttpClient) { }

  public getProfile(vemail: string) {
    console.log(`${this.baseUrl + '/user'}/${vemail}`);
    return this.http.get<Profile>(`${this.baseUrl + '/user'}/${vemail}`);
  }
}
