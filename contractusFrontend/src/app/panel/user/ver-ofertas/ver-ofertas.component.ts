import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-ver-ofertas',
  templateUrl: './ver-ofertas.component.html',
  styleUrls: ['./ver-ofertas.component.less']
})
export class VerOfertasComponent implements OnInit {

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
