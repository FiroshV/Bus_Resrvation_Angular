import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl="http:localhost:8040/feedback";

  public getFeedbackById(id:number){
    return this.httpClient.get<any>(this.baseUrl+id);
  }
  public addFeedback(f:Feedback){
    return this.httpClient.post(this.baseUrl,f);
  }
  constructor(private httpClient:HttpClient) { }
}
