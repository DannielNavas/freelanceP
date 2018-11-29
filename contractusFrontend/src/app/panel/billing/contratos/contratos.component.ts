import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.less']
})
export class ContratosComponent implements OnInit {

  constructor(private router: Router) { }

  salir() {
    localStorage.removeItem('login');
    localStorage.removeItem('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
