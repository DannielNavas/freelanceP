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
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwibmFtZSI6Im5vZGUiLCJsYXN0bmFtZSI6ImpzIn0.7X6Cq2p2BR3HhiQs_wBsMLP0N2ID-jCcnhn3i1neu84'
  });
  getDataUser(userData) {
    this.params = 'id=' + userData;
    return this.http.post<DatosBasicos[]>('//127.0.0.1:3000/getDataUser', this.params, { headers: this.headers });
  }
}
