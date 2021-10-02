import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
name!:string;
source!:string;
destination!:string;
seats:number[]=[];
cost!:number;
busid!:number;

  constructor(private service:PaymentService,private router:Router) { }

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

    this.name=JSON.parse(sessionStorage.getItem("user") || '').firstname;
  this.source=JSON.parse(sessionStorage.getItem("bus") || '').source;
  this.destination=JSON.parse(sessionStorage.getItem("bus") || '').destination;
  this.seats=JSON.parse(sessionStorage.getItem("seat_booked_list") || '');
  this.busid=JSON.parse(sessionStorage.getItem("bus") || '').busId;
  this.cost=JSON.parse(sessionStorage.getItem("seat_booked_list") || '').length*JSON.parse(sessionStorage.getItem("bus") || '').ticketPrice;
  
  }

  public  addPayment(){
    //get from session storage
    console.log("payment is");
    this.booking.ticketNo=35;

    this.booking.dateTime=JSON.parse(sessionStorage.getItem("bookingdate") || '');
    console.log(this.booking.dateTime);
    this.booking.passengerName=JSON.parse(sessionStorage.getItem("user") || '').firstname;
    console.log(this.booking.passengerName);

    this.booking.busId=JSON.parse(sessionStorage.getItem("bus") || '').busId;
this.booking.email=JSON.parse(sessionStorage.getItem("user") || '').email;
    console.log(this.booking.busId);
    this.booking.status="booked";
    this.booking.totalCost=this.cost;
    this.booking.payment.cost=this.cost;
    this.booking.payment.paymentMode="online";
    this.booking.payment.trxId=19;
    console.log("payment is",this.booking);

    //post
    this.service.addBookingDetails(this.booking)
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  

  this.router.navigate(['/feedback']);

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
