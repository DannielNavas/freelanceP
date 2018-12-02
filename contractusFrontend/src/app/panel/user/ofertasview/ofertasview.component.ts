import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ofertasview',
  templateUrl: './ofertasview.component.html',
  styleUrls: ['./ofertasview.component.less']
})
export class OfertasviewComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  registrarOferta() {
    console.log('Entra');
    /*if (window.confirm('Desea postularse a esta oferta?')) {
      window.alert('Gracias!');
    }*/
  }

  salir() {
    this.cookie.delete('login');
    this.cookie.delete('userIdC');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
