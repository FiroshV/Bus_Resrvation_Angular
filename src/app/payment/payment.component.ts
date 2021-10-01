import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service:PaymentService) { }

  ngOnInit(): void {
  }

}
