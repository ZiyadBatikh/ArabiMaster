import { Component } from '@angular/core';
import { UserRegisterService } from '../services/user-register.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private userService: UserRegisterService){}

onSubmit(f: NgForm) {
  // Assuming you have form values for firstName, lastName, email, and password
  const { firstName, lastName, email, password } = f.value;

  console.log(f.value);

  // Replace 'YOUR_API_KEY' with your actual API key


  this.userService.registerUser(firstName, lastName, email, password).subscribe(
    (response) => {
      // Handle successful registration here
      console.log('User registered successfully:', response);
    },
    (error) => {
      // Handle registration error here
      console.error('Registration failed:', error);
    }
  );
}
}

