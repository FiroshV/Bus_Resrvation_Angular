import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  private baseUrl: string = 'http://localhost:8040/hr/user';
  private baseUrl1: string = 'http://localhost:8040/hr/updateUser/';
  constructor(private http:HttpClient) { }

  public getUserByEmail(email: string) {
    return this.http.get<User>(this.baseUrl + '/' + email);
  }

  public updateUserDetail(d:User,email:string,password:string)
  {
    console.log(this.baseUrl1);
    return this.http.post(this.baseUrl1+email+'/'+password,d);
  }

}
