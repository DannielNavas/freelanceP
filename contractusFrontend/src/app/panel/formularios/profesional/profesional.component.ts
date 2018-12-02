import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.less']
})
export class ProfesionalComponent implements OnInit {

  constructor(private router: Router, private cookie: CookieService) { }

  salir() {
    this.cookie.delete('login');
    this.cookie.delete('userIdC');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
  }

}
