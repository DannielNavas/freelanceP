import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.less']
})
export class FacturacionComponent implements OnInit {

  constructor(private router: Router) { }

  salir() {
    localStorage.removeItem('login');
    localStorage.removeItem('userIdC');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
