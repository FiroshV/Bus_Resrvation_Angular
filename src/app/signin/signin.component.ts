import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../User';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user!: User;

  //router: ActivatedRoute;

  constructor(
    private signinService: SigninService,
    /* private route:ActivatedRoute,*/ private router: Router
  ) {
    //this.router = route;
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false

    this.getUserByEmail(f.value.email, f.value.password);

    


  }

  public getUserByEmail(email: string, password: string) {
    this.signinService.getUserByEmail(email).subscribe((response: User) => {
      console.log(response); 
      if (response.password === password) {
        this.user = response;
        console.log('verified');
        sessionStorage.setItem('user', JSON.stringify(response));
        //console.log(JSON.parse(sessionStorage.getItem('user')||"").firstname);
            AppComponent.isAdmin();
            AppComponent.isLoggedIn(true);
          this.router.navigate(['/search']);
      } else {
        console.log('unverified');
      }

      this.user = response;
    }, (error)=>(console.log(error))
    
    );
  }
}
