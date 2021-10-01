import { Component, OnInit } from '@angular/core';
import { BusSeatsService } from './bus-seats.service';

@Component({
  selector: 'app-bus-seats',
  templateUrl: './bus-seats.component.html',
  styleUrls: ['./bus-seats.component.css']
})
export class BusSeatsComponent implements OnInit {

  seats_selected:number =0;

  seatsList:number[] = [];

  constructor(private busSeatsService:BusSeatsService) { }

  ngOnInit(): void {
    this.getSeatsList();
    
    this.seats_selected=JSON.parse(sessionStorage.getItem("seats_selected_list")||'');

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
