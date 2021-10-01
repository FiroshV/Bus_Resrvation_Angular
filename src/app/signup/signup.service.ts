import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl="http://localhost:8040/hr/addUser"

  // private userUrl="http://localhost:8040/hr/user/"
  // private usersUrl="http://localhost:8040/hr/users"

  constructor(private http:HttpClient) { }
  //vemail=localStorage.getItem("username");
  vemail="user@gmail.com";
  public createUser(user : signup) 
{
  console.log("inside service layer",user);
 return this.http.post(`${this.baseUrl}`, user);

}
}
