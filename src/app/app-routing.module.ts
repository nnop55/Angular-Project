import { HotelInnerComponent } from './components/hotel-cards/hotel-inner/hotel-inner/hotel-inner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelCardsComponent } from './components/hotel-cards/hotel-cards.component';
import { LoginFormComponent } from './components/authorization-forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/authorization-forms/register-form/register-form.component';

const routes: Routes = [
  { path: "", component: HotelCardsComponent },
  {
    path: 'authorization', children: [
      { path: "login", component: LoginFormComponent },
      { path: "register", component: RegisterFormComponent },
    ]
  },
  { path: 'inner/:id', component: HotelInnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
