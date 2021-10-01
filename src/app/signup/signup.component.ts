import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { signup } from './signup';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  obj_signup:signup=new signup();

  firstname:string | undefined;
lastname:string | undefined;
email:string | undefined;
  password:string | undefined;
  mobile:string | undefined;
  gender:string | undefined;
  wallet_balance:number | undefined;
  user_role:string | undefined;
  dob:string | undefined;
  address:string | undefined;
  myForm:FormGroup;
    constructor(fb : FormBuilder,private service : SignupService,private router : Router) { 
      this.myForm=new FormGroup({
        firstname:new FormControl(this.firstname,[Validators.required, Validators.maxLength(15), 
          Validators.pattern("^[a-zA-Z]+$")]),
        lastname:new FormControl(this.lastname,[Validators.required, Validators.maxLength(15), 
          Validators.pattern("^[a-zA-Z]+$")]),
        email:new FormControl(this.email,[Validators.email,Validators.required]),
        password:new FormControl(this.password,[Validators.required, Validators.minLength(8),Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
         mobile:new FormControl(this.mobile,[Validators.required, Validators.maxLength(10)]),
        gender:new FormControl(this.gender,[Validators.required, Validators.maxLength(10)]),
        address:new FormControl(this.address,[Validators.required, Validators.maxLength(10)]),
    
        dob:new FormControl(this.dob,[Validators.required, Validators.maxLength(10)])
    
      })
      
    }
    get getControl(){
      return this.myForm.controls;
    }
    
  onSubmit(myForm : any): void{
    this.obj_signup=new signup();
    console.log(myForm);
    this.obj_signup.email =myForm.email ;
    this.obj_signup.firstname=myForm.firstname;
this.obj_signup.lastname=myForm.lastname;
 this.obj_signup.dob=myForm.dob;
  this.obj_signup.mobile=myForm.mobile;
  this.obj_signup.gender=myForm.gender;
  this.obj_signup.address=myForm.address;
  this.obj_signup.password=myForm.password;
  this.obj_signup.wallet_balance=0;
  this.obj_signup.user_role="regular";
  this.service.createUser(this.obj_signup)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
console.log("inside component",this.obj_signup);
//console.log("email is",this.obj_signup.vemail);
this.router.navigate(['/signin']);
  }
  ngOnInit(): void {
  }

}
