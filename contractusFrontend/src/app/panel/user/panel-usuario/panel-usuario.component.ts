import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.less']
})
export class PanelUsuarioComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }
    login = atob(this.cookie.get('login'));

    salir() {
        this.cookie.delete('login');
        this.cookie.delete('userIdC');
        sessionStorage.removeItem('currentUser');
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
