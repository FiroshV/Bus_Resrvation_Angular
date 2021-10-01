import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BusReservation';
}













// ==========================================================================//
// export class AppComponent {
//   websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  
//   form = new FormGroup({
//     website: new FormControl('', Validators.required)
//   });
  
//   get f(){
//     return this.form.controls;
//   }
  
//   submit(){
//     console.log(this.form.value);
//   }
  
//   changeWebsite(e:any) {
//     console.log(e.target.value);
//   }
  
// }
