import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.less']
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  salir() {
    this.cookie.delete('login');
    this.cookie.delete('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
