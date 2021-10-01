import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BusSeatsComponent } from './bus-seats/bus-seats.component';
// import { BusSeatsComponent } from './bus-seats/bus-seats.component';
// import { SeatComponent } from './bus-seats/seat/seat.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CardpaymentComponent } from './payment/cardpayment/cardpayment.component';
import { PaymentComponent } from './payment/payment.component';
import { WalletComponent } from './payment/wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'search',component:SearchComponent},
  {path:'seats',component:BusSeatsComponent},
  {path:'payment',component:PaymentComponent,
  children:[{path:'cardpayment',component:CardpaymentComponent},
            {path:'walletpayment',component:WalletComponent}]},
  {path:'feedback',component:FeedbackComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admin',component:AdminComponent},
   {path:'**',component:SigninComponent},
  {path:'',component:SigninComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
