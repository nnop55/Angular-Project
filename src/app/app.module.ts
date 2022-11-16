import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './footer/footer/footer.component';

import { HotelCardsComponent } from './components/hotel-cards/hotel-cards.component';
import { MatCardModule } from '@angular/material/card';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component'
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    FooterComponent,
    HotelCardsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FilterModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
