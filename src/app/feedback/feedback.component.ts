import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
feedback_obj=new Feedback();
  description: any;
  
  rating: any;
  constructor(private service:FeedbackService) {  
  
  }
  
  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void
  {
    this.addFeedback(f); 
  }

  public getFeedbackById(id:number){
    this.service.getFeedbackById(this.id).subscribe(
      (      response: Feedback)=>{this.f=response; console.log("response feedbackid",response);}
    );
  
  }

  public addFeedback(f:NgForm){
    this.feedback_obj.feedbackId=11;
    this.feedback_obj.ticketNo=JSON.parse(sessionStorage.getItem("ticketno")||'');
    this.feedback_obj.description=f.value.description;
    this.feedback_obj.rating=f.value.rating;
    
    this.service.addFeedback(this.feedback_obj)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

}
