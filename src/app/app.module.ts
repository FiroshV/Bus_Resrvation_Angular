import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
import { SeatComponent } from './bus-seats/seat/seat.component';
import { ProfileComponent } from './profile/profile.component';
import { DriverComponent } from './admin/driver/driver.component';
import { BusComponent } from './admin/bus/bus.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SignupComponent,
    PaymentComponent,
    FeedbackComponent,
    SigninComponent,
    AdminComponent,
    BusSeatsComponent,
    SeatComponent,
    ProfileComponent,
    DriverComponent,
    BusComponent,
    ChangepasswordComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
