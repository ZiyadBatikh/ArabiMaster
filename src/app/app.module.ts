import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TutorProfileComponent } from './Tutor/tutor-profile/tutor-profile.component';
import { TutorEditProfileComponent } from './Tutor/tutor-edit-profile/tutor-edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OurTutorsComponent } from './our-tutors/our-tutors.component';
import { OurMethodologyComponent } from './our-methodology/our-methodology.component';
import { AuthService } from './services/authentication/auth.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegisterService } from './services/user-register.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    TutorProfileComponent,
    TutorEditProfileComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    OurTutorsComponent,
    OurMethodologyComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path :"" , component:HomeComponent},
      {path:"Login" , component:LoginComponent},
      {path:"Register" , component:RegisterComponent},
      {path:"Reservations" , component:ReservationsComponent },
      {path:"how-we-teach" , component:OurMethodologyComponent},
      {path:"featured-tutors" , component:OurTutorsComponent},
      {path:"profile" , component : TutorEditProfileComponent},





    ])
  ],
  providers: [
   AuthService,
   AuthGuardService,
   UserRegisterService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
