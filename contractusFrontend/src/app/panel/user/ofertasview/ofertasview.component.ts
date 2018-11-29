import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ofertasview',
  templateUrl: './ofertasview.component.html',
  styleUrls: ['./ofertasview.component.less']
})
export class OfertasviewComponent implements OnInit {

  constructor(private router: Router) { }

  registrarOferta() {
    console.log('Entra');
    /*if (window.confirm('Desea postularse a esta oferta?')) {
      window.alert('Gracias!');
    }*/
  }

  salir() {
    localStorage.removeItem('login');
    localStorage.removeItem('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
