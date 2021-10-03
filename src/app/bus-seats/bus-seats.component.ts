import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusSeatsService } from './bus-seats.service';
import { Seat } from './seat/Seat';
import { SeatComponent } from './seat/seat.component';

@Component({
  selector: 'app-bus-seats',
  templateUrl: './bus-seats.component.html',
  styleUrls: ['./bus-seats.component.css'],
})
export class BusSeatsComponent implements OnInit {
  static seats_selected:number;
    seatsList:number[] = [];
  
    

  constructor(private busSeatsService:BusSeatsService,private router:Router) { }

  ngOnInit(): void {
    this.getSeatsList();

    console.log("selected count",SeatComponent.seat_selected_list.length);
    BusSeatsComponent.seats_selected = JSON.parse(sessionStorage.getItem("seat_booked_list")||'').length;

    //.seats_selected=JSON.parse(sessionStorage.getItem("seats_selected_list")||'');

  }

static getSeatsListFromChild(numlist : number[])
{
this.seats_selected=numlist.length;
}
get staticSeatSelectedList() {
  console.log("seat list", BusSeatsComponent.seats_selected);
  return BusSeatsComponent.seats_selected;
}

onBook()
{
  
  this.router.navigate(['/payment']);

}
  public getSeatsList(){
    this.busSeatsService.getSeatsList().subscribe(
      (response:number[])=>{
        this.seatsList=response;
        console.log(response);
        if(JSON.stringify(response).length!=0){
        localStorage.setItem('bookedSeats',JSON.stringify(response));}
        else{
          localStorage.setItem('bookedSeats','');
        }
      }
    );

  }
}