import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  private apiUrl ='http://api.arabfluent.com/v1/'; // Update with the actual API URL

  constructor(private http: HttpClient) {}

  registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      apiKey : '22259fd8-0696-45d1-8a8b-9ee69658cc4d'
    });

    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    console.log(body);

    return this.http.post(`${this.apiUrl}auth/register`, body, {
      headers: headers,
    });
  }
}
