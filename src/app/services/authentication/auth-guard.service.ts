import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthService , private router:Router) {

  }

  // canActivate(){
  //   return this.auth.user.map((user: any) =>{
  //     if(user) return true

  //     this.router.navigate(['/Login']);
  //     return false
  //   })
  // }
}
