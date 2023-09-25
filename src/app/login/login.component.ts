import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  emailLogin(email: string, password: string) {
    this.auth.emailLogin(email, password).subscribe(response => {
      // Handle the login response here
      console.log('Email login successful:', response);
      // Redirect or perform any other necessary actions
    });
  }

  // googleLogin() {
  //   this.auth.googleLogin().subscribe(response => {
  //     // Handle the Google login response here
  //     console.log('Google login successful:', response);
  //     // Redirect or perform any other necessary actions
  //   });
  // }

  facebookLogin() {
    this.auth.facebookLogin().subscribe(response => {
      // Handle the Facebook login response here
      console.log('Facebook login successful:', response);
      // Redirect or perform any other necessary actions
    });
  }
}
