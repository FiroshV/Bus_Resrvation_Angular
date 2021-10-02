import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Driver } from './Driver';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  id:number=11;
  f!:Driver;
  myForm: FormGroup;

  

  mobile="5678907865";
  firstName: any;
  lastName: any;
  driver: Driver[]=[];
  driver1!:Driver;
constructor(private service: DriverService){
  this.myForm=new FormGroup({
    firstName:new FormControl(this.firstName,[Validators.required]),
    lastName:new FormControl(this.lastName,[Validators.required]),
    mobile:new FormControl(this.mobile,[Validators.required])
  })


 }
  ngOnInit(): void {
   // this.updateDriverInfo(this.obj_driver,this.id,this.mobile);

    this.getDriverInfo(this.id);
    this.getDriverList();
  
  }
  
obj_driver=new Driver();
  onSubmit(myForm : any): void{
    this.obj_driver.firstName=myForm.firstName;
    this.obj_driver.driverId=11;
    this.obj_driver.lastName=myForm.lastName;
    this.obj_driver.mobile=myForm.mobile;
    console.log(myForm);
    console.log(this.obj_driver.firstName);
    //this.addPayment(this.p);
   // this.addDriverDetail(this.obj_driver);
  
    
  }


  public getDriverInfo(id:number){
    this.service.getDriverInfo(this.id ).subscribe(
      (      response: Driver)=>{this.driver1=response; console.log("response driverid",response);}
    );
  //  console.log(this.driver);
   }

  public addDriverDetail(f:Driver){
    this.service.addDriverDetail(f)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

  public deleteDriver(f1:number){
    this.service.deleteDriver(f1)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }
  
public getDriverList()
{
  this.service.getDriverList().subscribe(
    (      response: Driver[])=>{this.driver=response; console.log("response driverlist",response);}
  );
}
public updateDriverInfo(f:Driver,driverId:number,mobile:string){
  this.service.updateDriverInfo(f,driverId,mobile)  
.subscribe((data: any) => console.log(data), (error: any) => console.log(error));
}
}