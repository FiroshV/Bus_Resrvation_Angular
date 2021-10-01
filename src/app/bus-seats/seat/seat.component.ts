import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BusSeatsComponent } from '../bus-seats.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  seat_booked_list!: number[]; // from database
  seat_selected_list: number[] = [];

  @Input()
  seat_no: number = -1;



  constructor() { }

  ngOnInit(): void {
    this.seat_booked_list =  JSON.parse(localStorage.getItem('bookedSeats')||'[]');
    
  }

  @HostListener('click', ['$event']) click(event: { preventDefault: () => void; }) {
    if (this.seat_selected_list.includes(this.seat_no)) {
      this.seat_selected_list = this.seat_selected_list.
        filter(obj => obj !== this.seat_no);
    sessionStorage.setItem("seat_booked_list",JSON.stringify(this.seat_selected_list));
    console.log("hiii",JSON.stringify(this.seat_selected_list));
      }
    else if (!this.seat_booked_list.includes(this.seat_no) && !this.seat_selected_list.includes(this.seat_no)) {
      this.seat_selected_list.push(this.seat_no);
      sessionStorage.setItem("seat_booked_list",JSON.stringify(this.seat_selected_list.toString()));
      
    }

  }
}
