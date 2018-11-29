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
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwibmFtZSI6Im5vZGUiLCJsYXN0bmFtZSI6ImpzIn0.7X6Cq2p2BR3HhiQs_wBsMLP0N2ID-jCcnhn3i1neu84'
  });
  login(userData) {
    this.params = 'email=' + userData[0].email + '&password=' + userData[0].password + '';
    return this.http.post<Login[]>('//127.0.0.1:3000/login', this.params, { headers: this.headers });
  }
}
