import { Injectable } from '@angular/core';
import { Observable, ObservableInput} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: ObservableInput<any> | undefined;
  constructor() {

   }



  emailLogin(){

  }

  googleLogin(){

  }

  facebookLogin(){

  }

  logout(){

  }
}
