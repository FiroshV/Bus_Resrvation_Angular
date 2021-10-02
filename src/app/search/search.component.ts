import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Bus_Detail } from '../Bus_Detail';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  City: any = ['Pune', 'Mumbai', 'Delhi', 'Nagpur','Goa'] //fetch from database
  // let map = new Map(); 
  // map.set(0,'Sunday');map.set(1,'Sunday');map.set(2,'Sunday');map.set(3,'Sunday');
  // map.set(4,'Sunday');map.set(5,'Sunday');map.set(6,'Sunday');

  busList:Bus_Detail[]=[];
  vsource:string="";
  vdestination:string="";
  Day:string="";
  myForm:FormGroup;
  cityNamefrom: any;
  cityNameto: any;
  var_date!:Date;
  vdate!: Date;


    constructor(public fb : FormBuilder,private search_service : SearchService,private router:Router) { 
      this.myForm=new FormGroup({
        cityNamefrom:new FormControl(this.vsource),
        cityNameto:new FormControl(this.vdestination),
        var_date:new FormControl(this.vdate),
      })
    }
    
  onBook(bus:Bus_Detail)
  {
    sessionStorage.setItem("bus",JSON.stringify(bus));
    var bookingdate = new Date(this.vdate).toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'numeric',
      year : 'numeric'
  }).split('/').join('-');

  sessionStorage.setItem("bookingdate",JSON.stringify(bookingdate));

    
this.router.navigate(['/seats'])
  }
  onSubmit(myForm : any): void{
    console.log(myForm);
    this.vsource=myForm.cityNamefrom;
    this.vdestination=myForm.cityNameto;
    this.vdate=myForm.var_date;

    console.log("source: " + this.vsource);
    console.log("destination: " + this.vdestination);
    console.log("date: " + this.vdate);

    var d = new Date(this.vdate); 
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    console.log(weekday[d.getDay()]);

    this.getBusList(this.vsource,this.vdestination,weekday[d.getDay()]) ;
  }

  ngOnInit(): void {
    // this.getBusList(this.search_service);
    console.log(new Date().getDay());
  }

  //search
  public getBusList(vsource:string, vdestination:string, Day:string) {
    console.log("day:==== ");
    this.search_service.getBusList(vsource,vdestination,Day)
    .subscribe(
      (response: Bus_Detail[])=>{this.busList=response}
    );
  }

  

  registrationForm = this.fb.group({
    cityNamefrom: ['', [Validators.required]],
    cityNameto: ['', [Validators.required]]
  })

  changeCityTo(e:any) {
    // console.log(e.value)
    // this.cityNameto.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
  changeCityFrom(e:any) {
    // console.log(e.value)
    // this.cityNamefrom.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
  
  // Getter method to access formcontrols
  get cityNameFrom() {
    return this.registrationForm.get('cityNamefrom');
  }
  // Getter method to access formcontrols
  get cityNameTo() {
    return this.registrationForm.get('cityNameto');
  } 
}



  // DATE
  // private formatDate(date: Date) {
  //   const d = new Date(date);
  //   let month = '' + (d.getMonth() + 1);
  //   let day = '' + d.getDate();
  //   const year = d.getFullYear();
  //   if (month.length < 2) month = '0' + month;
  //   if (day.length < 2) day = '0' + day;
  //   return [year, month, day].join('-');
  // }