import { Component, OnInit } from '@angular/core';
import { Profile } from './Profile';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profile!: Profile;

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.profile=JSON.parse(sessionStorage.getItem("user")|| "");
  }
  
  
}
