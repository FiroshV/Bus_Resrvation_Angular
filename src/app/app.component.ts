import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BusReservation';

  isAdmin(){
    JSON.parse(sessionStorage.getItem('user') || '').user_role==="admin";
  }

 logout()
 {
sessionStorage.setItem("user",'');
 }
}
