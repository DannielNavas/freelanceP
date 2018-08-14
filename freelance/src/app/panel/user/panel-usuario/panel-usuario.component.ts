import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css']
})
export class PanelUsuarioComponent implements OnInit {

  constructor() { }

  buscar() {
    console.log('Busqueda');
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    });
  }

}
