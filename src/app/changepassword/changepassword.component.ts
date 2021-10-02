import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { ChangepasswordService } from './changepassword.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  
  currentpassword: any;
  newpassword: any;
  user!: User;
  myForm:FormGroup;

  constructor(private service:ChangepasswordService,private router:Router) { 
    this.myForm=new FormGroup({
      currentpassword:new FormControl(this.currentpassword,[Validators.required]),
      newpassword:new FormControl(this.newpassword,[Validators.required]),

  })
}

  ngOnInit(): void {
  }
  email=JSON.parse(sessionStorage.getItem("user")||'').email;
  
  
/*
  onSubmit(myForm:any) {
    
    console.log("current password is",myForm.currentpassword); // { first: '', last: '' }
    console.log("new password is",myForm.newpassword); // false
console.log("email is",this.email);
    this.getUserByEmail(this.email);
    
  }*/
  currentpass:string="";
  newpass:string="";
  onSubmit(f: NgForm) {
  //  console.log(f.value); // { first: '', last: '' }
  //  console.log(f.valid); // false
this.currentpass=f.value.currentpassword;
this.newpass=f.value.newpassword;
//console.log(this.currentpass);
    this.getUserByEmail(f.value.email);
  }
    
  public getUserByEmail(email:string) {
    this.service
      .getUserByEmail(this.email)
      .subscribe((response: User) => {
        if (response.password === this.currentpass) {
          this.user = response;
          console.log('verified');
          sessionStorage.setItem('user', JSON.stringify(response));
          //console.log(JSON.parse(sessionStorage.getItem('user')||"").firstname);
this.updateUserDetail(response,this.email,this.newpass);

        } else {
          console.log('unverified');
        }

        this.user = response;
      });
  }
public updateUserDetail(f:User,email:string,password:string){
    this.service.updateUserDetail(f,email,password)  
  .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
  }

}
