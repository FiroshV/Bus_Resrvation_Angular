import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service:ProfileService,private router:Router) { }

  ngOnInit(): void {
    this.profile=JSON.parse(sessionStorage.getItem("user") || "{}");
  }
  
  onShow()
  {
    console.log("gfvgbhnj");
this.router.navigate(['/changePassword'])

  }

  getGender(){
    return JSON.parse(sessionStorage.getItem('user')||"male").gender=="male";
  }
  
}
