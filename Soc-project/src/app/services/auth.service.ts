import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:5000/';



  constructor(private http: HttpClient, private router: Router) { }


  register(user: any) {

    return this.http.post(this.url + 'register', user);

  }

  /*login(email: string, password: string): Observable<any> {
    const credentials = { email, password };

    // Set content type to JSON
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.router.navigate(['/login']);
    // Make sure to send the credentials in the request body
    return this.http.post(`${this.url}/login`, credentials, { headers });

  }*/


  /*login(user: any) {
    return this.http.post<any>(this.url + 'login', user)
      .subscribe(response => {
        localStorage.setItem('token', response.token); // Assuming your token is returned by the server
      });
  */
  login(user: any) {
    return this.http.post(this.url + 'login', user);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getDataFromToken() {
    let token = localStorage.getItem('token');

    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1]));
      return data;
    }
  }
  getToken() {
    return localStorage.getItem('token') || '';
  }
  HaveAccess() {
    var loginToken = localStorage.getItem('token') || ''
  }

}
