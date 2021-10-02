import { Component, HostListener, Input, OnInit } from '@angular/core';
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



  constructor() { }

  ngOnInit(): void {
    
  }

  get staticSeatSelectedList() {
    return SeatComponent.seat_selected_list;
  }

  @HostListener('click', ['$event']) click(event: { preventDefault: () => void; }) {
    if (SeatComponent.seat_selected_list.includes(this.seat_no)) {
      SeatComponent.seat_selected_list = SeatComponent.seat_selected_list.
        filter(obj => obj !== this.seat_no);
    console.log("hiii",JSON.stringify(SeatComponent.seat_selected_list));
      }
    else if (!this.seat_booked_list.includes(this.seat_no) && !SeatComponent.seat_selected_list.includes(this.seat_no)) {
      SeatComponent.seat_selected_list.push(this.seat_no);      
    }

  }
}
