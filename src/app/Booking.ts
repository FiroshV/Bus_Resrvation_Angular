import { Payment } from "./payment/Payment";

export class Booking{
    ticketNo:number=0;
    passengerName:string="";
    dateTime:string="";
    totalCost:number=0;
    status:string="";
    busId:number=0;
    email:string="";
    payment=new Payment();
}