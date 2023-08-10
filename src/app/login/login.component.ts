import { Component } from '@angular/core';
import { AuthService } from '../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth:AuthService){}
  emailLogin(){
  this.emailLogin();
  }

  googleLogin(){
  this.googleLogin();
  }

  facebookLogin(){
   this.facebookLogin();
  }
}
