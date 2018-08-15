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
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  createUser(userData) {
    this.params = 'email=' + userData[0].email + '&password=' + userData[0].password + '';
    return this.http.post<CreateUser[]>('http://127.0.0.1:3000/createuser', this.params, { headers: this.headers });
  }
}
