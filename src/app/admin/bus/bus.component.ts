import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bus } from './Bus';
import { BusService } from './bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  obj_bus=new Bus();
  myForm: FormGroup;
  no_of_seats: any;
  source: any;
  destination: any;
  day: any;
  time: any;
  ticket_price: any;
  bus: Bus[]=[];
  bus1!:Bus;
  id=150;
  f!: Bus;
  constructor(private service : BusService) {
    this.myForm=new FormGroup({
      no_of_seats:new FormControl(this.no_of_seats,[Validators.required]),
      source:new FormControl(this.source,[Validators.required]),
      destination:new FormControl(this.destination,[Validators.required]),
      day:new FormControl(this.day,[Validators.required]),
    time:new FormControl(this.time,[Validators.required]),
      ticket_price:new FormControl(this.ticket_price,[Validators.required])
    })

   }

  ngOnInit(): void {
    this.getBusDetail(this.id);
  }
  onSubmit(myForm : any): void{
    this.obj_bus.bus_id=1;
    this.obj_bus.no_of_seats=myForm.no_of_seats;
    this.obj_bus.source=myForm.source;
    this.obj_bus.destination=myForm.destination;
    this.obj_bus.day=myForm.day;
    this.obj_bus.time=myForm.time;
    this.obj_bus.ticket_price=myForm.ticket_price;
    console.log(myForm);
    //this.addPayment(this.p);
  }
  public getBusDetail(id:number){
    this.service.getBusDetail(this.id).subscribe(
      (      response: Bus)=>{this.bus1=response; console.log("response is",response);}
    );
    console.log(this.bus);
   }

   public addBusDetail(f:Bus){
    this.service.addBusDetail(f)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }
    
   public deleteBusDetail(f1:number)
   {
    this.service.deleteBusDetail(f1)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  
   }

   public getAllBuses(){
    this.service.getAllBuses().subscribe(
      (      response: Bus[])=>{this.bus=response}
    );
    console.log(this.bus);
   }

   public updateBusDetail(f:Bus,bus_id:number,no_of_seats:number){
    this.service.updateBusDetail(f,bus_id,no_of_seats)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }


}

