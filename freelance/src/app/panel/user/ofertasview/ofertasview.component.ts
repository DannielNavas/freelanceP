import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertasview',
  templateUrl: './ofertasview.component.html',
  styleUrls: ['./ofertasview.component.css']
})
export class OfertasviewComponent implements OnInit {

  constructor() { }

  registrarOferta() {
    console.log('Entra');
    if (window.confirm('Desea postularse a esta oferta?')) {
      window.alert('Gracias!');
    }
  }

  ngOnInit() {
  }

}
