import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';

import { HotelCardsComponent } from './components/hotel-cards/hotel-cards.component';
import { MatCardModule } from '@angular/material/card';
import { RegisterFormComponent } from './components/authorization-forms/register-form/register-form.component';
import { LoginFormComponent } from './components/authorization-forms/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FilterSliderComponent } from './components/header/filter-slider/filter-slider.component';
import { HotelInnerComponent } from './components/hotel-cards/hotel-inner/hotel-inner/hotel-inner.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ForgotPasswordComponent } from './components/authorization-forms/forgot-password/forgot-password.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MastercardEditComponent } from './components/mastercard-edit/mastercard-edit.component';
import { ReserveHotelComponent } from './components/hotel-cards/reserve-hotel/reserve-hotel.component';

import { AgmCoreModule } from '@agm/core';
import { HotelMapComponent } from './components/hotel-cards/hotel-map/hotel-map.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelCardsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FilterModalComponent,
    FilterSliderComponent,
    HotelInnerComponent,
    ForgotPasswordComponent,
    ProfileEditComponent,
    ProfileComponent,
    MastercardEditComponent,
    ReserveHotelComponent,
    HotelMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
