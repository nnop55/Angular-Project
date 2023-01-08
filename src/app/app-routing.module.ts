import { HotelMapComponent } from './components/hotel-cards/hotel-map/hotel-map.component';
import { HotelInnerComponent } from './components/hotel-cards/hotel-inner/hotel-inner/hotel-inner.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelCardsComponent } from './components/hotel-cards/hotel-cards.component';
import { LoginFormComponent } from './components/authorization-forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/authorization-forms/register-form/register-form.component';
import { ForgotPasswordComponent } from './components/authorization-forms/forgot-password/forgot-password.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MastercardEditComponent } from './components/mastercard-edit/mastercard-edit.component';
import { ReserveHotelComponent } from './components/hotel-cards/reserve-hotel/reserve-hotel.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';

const routes: Routes = [
  { path: "", component: HotelCardsComponent },
  {path: "hotel-map", component: HotelMapComponent},
  {
    path: 'authorization', children: [
      { path: "login", component: LoginFormComponent },
      { path: "register", component: RegisterFormComponent },
      {path: "forgot-password", component: ForgotPasswordComponent},
    ]
  },
  {path: 'profile', component:ProfileComponent},
  {path: 'profile-edit', component: ProfileEditComponent},
  {path: 'mastercard-edit', component: MastercardEditComponent},
  {path: 'reserve-hotel', component: ReserveHotelComponent},
  {path: 'reserve-hotel/:id', component: ReserveHotelComponent},
  {path: 'booking-modal', component: BookingModalComponent},
  { path: 'inner/:id', component: HotelInnerComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
