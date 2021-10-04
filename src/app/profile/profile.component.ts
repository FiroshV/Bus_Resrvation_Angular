import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../Booking';
import { Profile } from './Profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profile!: Profile;
var1: boolean=false;
gender!:boolean;
bookingList:any;
  constructor(private service:ProfileService,private router:Router) { }

  ngOnInit(): void {
    this.profile=JSON.parse(sessionStorage.getItem("user") || "{}");
    this.gender=this.getGender();
    
  }
  
  onShow()
  {
    
this.router.navigate(['/changePassword'])

  }

  getGender(){
    return JSON.parse(sessionStorage.getItem('user')||"m").gender=="m";
  }
  
public getBooking()
{
  this.service.getBooking(this.profile.email).subscribe(
    (response: any)=>{this.bookingList =response; console.log(response);}
  );
  
}
public updateBookingInfo(ticketNo:number)
{
  this.service.updateBookingInfo(ticketNo).subscribe(
    (response: any)=>{this.bookingList =response; console.log(response);}
  );
  this.getBooking();
}

}
