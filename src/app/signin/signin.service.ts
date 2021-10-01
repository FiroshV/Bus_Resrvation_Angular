import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private baseUrl: string = 'http://localhost:8040/hr/user';

  //private baseUrl: string = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  public getUserByEmail(email: string) {
    return this.http.get<User>(this.baseUrl + '/' + email);
  }
}
