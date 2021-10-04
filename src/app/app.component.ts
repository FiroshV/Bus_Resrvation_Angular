import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BusReservation';
 // let temp=JSON.parse(sessionStorage.getItem("seat_booked_list") || '').split(',').map(Number);
 // console.log('temp is',temp);
 // console.log(typeof temp);
  static isadmin:boolean=false;
  static islogin:boolean=false;

 static isAdmin(){  
  AppComponent.isadmin=JSON.parse(sessionStorage.getItem('user') || '').user_role==="admin";
  }

  get getisAdmin()
  {
    return AppComponent.isadmin;
  }

  static isLoggedIn(log:boolean) {
    AppComponent.islogin=log;
    console.log('log in',AppComponent.islogin);

  }

  get getisLogin()
  {
    return AppComponent.islogin;
  }
  ngOnInit(): void {

   // sessionStorage.setItem('bookedseats',JSON.stringify([]));
    sessionStorage.setItem('seat_booked_list',JSON.stringify([]));
    sessionStorage.setItem('seats_selected',JSON.stringify([]));
    sessionStorage.setItem('booking',JSON.stringify([]));
 
  }

 logout()
 {
sessionStorage.setItem("user",'');
AppComponent.isLoggedIn(false);
 }



}
