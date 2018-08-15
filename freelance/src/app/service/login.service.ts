import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*Interface*/
import { Login } from '../interface/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  params;
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  login(userData) {
    this.params = 'email=' + userData[0].email + '&password=' + userData[0].password + '';
    return this.http.post<Login[]>('http://127.0.0.1:3000/login', this.params, { headers: this.headers });
  }
}
