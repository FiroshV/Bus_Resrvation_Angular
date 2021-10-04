import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BusSeatsComponent } from '../bus-seats.component';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  seat_booked_list!: number[]; // from database
  static seat_selected_list: number[] = [];
  
  @Input()
  seat_no: number = -1;
  static seats_selected: number;


  static setSeatsList(numlist : number[])
{
SeatComponent.seat_selected_list=numlist;
}
  
    
  
  constructor() { }

  ngOnInit(): void {
    this.seat_booked_list =  JSON.parse(sessionStorage.getItem('bookedSeats')||'[]');
    console.log('booked seats are',this.seat_booked_list);
  }
  get staticSeatSelectedList() {
    console.log("seat list", SeatComponent.seat_selected_list);
    return SeatComponent.seat_selected_list;
  }

  @HostListener('click', ['$event']) click(event: { preventDefault: () => void; }) {
    if (SeatComponent.seat_selected_list.includes(this.seat_no)) {
      SeatComponent.seat_selected_list = SeatComponent.seat_selected_list.
        filter(obj => obj !== this.seat_no);
    sessionStorage.setItem("seat_booked_list",JSON.stringify(SeatComponent.seat_selected_list));
    console.log("hiii",JSON.stringify(SeatComponent.seat_selected_list));
    BusSeatsComponent.getSeatsListFromChild(SeatComponent.seat_selected_list);
      }
    else if (!this.seat_booked_list.includes(this.seat_no) && !SeatComponent.seat_selected_list.includes(this.seat_no)) {
      SeatComponent.seat_selected_list.push(this.seat_no);
      sessionStorage.setItem("seat_booked_list",JSON.stringify(SeatComponent.seat_selected_list.toString()));
      BusSeatsComponent.getSeatsListFromChild(SeatComponent.seat_selected_list);
    
    }

  }
}