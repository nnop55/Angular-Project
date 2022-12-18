import { HotelInnerComponent } from './components/hotel-cards/hotel-inner/hotel-inner/hotel-inner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelCardsComponent } from './components/hotel-cards/hotel-cards.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  { path: "", component: HotelCardsComponent },
  { path: "login", component: LoginFormComponent },
  { path: "register", component: RegisterFormComponent },
<<<<<<< Updated upstream
  { path: 'inner/:id', component: HotelInnerComponent },
=======
  {path: 'inner/:id', component: HotelInnerComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
