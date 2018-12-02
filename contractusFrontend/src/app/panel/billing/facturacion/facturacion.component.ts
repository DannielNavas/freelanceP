import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.less']
})
export class FacturacionComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  salir() {
    this.cookie.delete('login');
    this.cookie.delete('userIdC');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
