import { Component, OnInit } from '@angular/core';
import { Booking } from '../Booking';
import { Payment } from './Payment';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  p!:Payment;
  id!: number;
  q:Payment[]=[];
  constructor(private service:PaymentService) { }

  booking=new Booking();
  
  ngOnInit(): void {
    /*
    this.booking.ticket_no=101;
    this.booking.dateTime="12:00";
    this.booking.passengerName="gauri";
    this.booking.status="booked";
    this.booking.totalCost=102;
    console.log("hello");
    this.addPayment();*/
  }

  public  addPayment(){
    //get from session storage
    console.log("payment is");
    this.booking.ticketNo=199;

    this.booking.dateTime=JSON.parse(sessionStorage.getItem("bookingdate") || '');
    console.log(this.booking.dateTime);
    this.booking.passengerName=JSON.parse(sessionStorage.getItem("user") || '').firstname;
    console.log(this.booking.passengerName);

    this.booking.busId=JSON.parse(sessionStorage.getItem("bus") || '').busId;
this.booking.email=JSON.parse(sessionStorage.getItem("user") || '').email;
    console.log(this.booking.busId);
    this.booking.status="booked";
    this.booking.totalCost=102;
    this.booking.payment.cost=12;
    this.booking.payment.paymentMode="online";
    this.booking.payment.trxId=191;
    console.log("payment is",this.booking);

    //post
    this.service.addBookingDetails(this.booking)
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
  }

  public  getPaymentList(){
    this.service.getPaymentList().subscribe(
      (      response: Payment[])=>{this.q =response; console.log(response);}
    );
  }
   
  public getPaymentById(id:number){
    this.service.getPaymentById(this.id).subscribe(
      (      response: Payment)=>{this.p =response; console.log(response);}
    );
  }
  
}
function subscribe(arg0: (data: any) => void, arg1: (error: any) => void) {
  throw new Error('Function not implemented.');
}
