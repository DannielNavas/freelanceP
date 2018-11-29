import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.less']
})
export class PortafolioComponent implements OnInit {

  constructor(private router: Router) { }

  salir() {
    localStorage.removeItem('login');
    localStorage.removeItem('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
