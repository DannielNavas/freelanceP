import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.less']
})
export class PanelUsuarioComponent implements OnInit {

  constructor(private router: Router) { }
    login = localStorage.getItem('login');

    salir() {
        localStorage.removeItem('login');
        localStorage.removeItem('userIdC');
        this.router.navigate(['/']);
    }

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
