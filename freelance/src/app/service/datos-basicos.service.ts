import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

/*Interface */
import { DatosBasicos } from '../interface/DatosBasicos';

@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  constructor(private http: HttpClient) { }
  params;
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  getDataUser(userData) {
    this.params = 'id=' + userData;
    return this.http.post<DatosBasicos[]>('http://127.0.0.1:3000/getDataUser', this.params, { headers: this.headers });
  }
}
