import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://api.arabfluent.com/v1/';

  constructor(private http: HttpClient) { }

  emailLogin(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      apiKey: '22259fd8-0696-45d1-8a8b-9ee69658cc4d'
    });
    const body = {
      email: email,
      password: password,
    };

    console.log(body)

    return this.http.post(`${this.baseUrl}auth/login`, body, {
      headers: headers
    });
  }

  // googleLogin(): Observable<any> {
  //   // Implement Google login logic here
  // }

  facebookLogin(): Observable<any> {
    return localStorage['getLoginStatus'](function (response: { status: string; authResponse: { accessToken: any; }; }) {
      if (response.status === 'connected') {
        console.log(response.authResponse.accessToken);
      }
    });
  }

  logout(): void {
    // Implement logout logic here
  }
}
