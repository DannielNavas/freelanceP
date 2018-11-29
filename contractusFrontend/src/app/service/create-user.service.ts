import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

/*Interface */
import { CreateUser } from '../interface/CreateUser';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }
  params;
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwibmFtZSI6Im5vZGUiLCJsYXN0bmFtZSI6ImpzIn0.7X6Cq2p2BR3HhiQs_wBsMLP0N2ID-jCcnhn3i1neu84'
  });
  createUser(userData) {
    this.params = 'email=' + userData[0].email + '&user=' + userData[0].user + '&password=' + userData[0].password + '';
    return this.http.post<CreateUser[]>('//127.0.0.1:3000/createuser', this.params, { headers: this.headers });
  }
}
