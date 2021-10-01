import { Component, OnInit } from '@angular/core';
import { Payment } from '../Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  p!: Payment;
  id!: number;

  constructor(private service:PaymentService) { }

  ngOnInit(): void {
  }

  public  addPayment(p:Payment){
    this.service.addPayment(this.p)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
  }

  public  getPaymentList(){
    this.service.getPaymentList()  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
    
  }
  public getPaymentById(id:number){
    this.service.getPaymentById(this.id)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

}
