import { Component, OnInit } from '@angular/core';
import { Feedback } from './Feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  id!: number;
  f!: Feedback;

  constructor(private service:FeedbackService) { }

  ngOnInit(): void {
  }

  public getFeedbackById(id:number){
    this.service.getFeedbackById(this.id)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

  public addFeedback(f:Feedback){
    this.service.addFeedback(this.f)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

}
