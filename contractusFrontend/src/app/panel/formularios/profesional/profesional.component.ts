import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.less']
})
export class ProfesionalComponent implements OnInit {

  constructor(private router: Router) { }

  salir() {
    localStorage.removeItem('login');
    localStorage.removeItem('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
  }

}
