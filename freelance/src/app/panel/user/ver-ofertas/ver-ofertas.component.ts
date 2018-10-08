import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-ver-ofertas',
  templateUrl: './ver-ofertas.component.html',
  styleUrls: ['./ver-ofertas.component.css']
})
export class VerOfertasComponent implements OnInit {

  constructor(private router: Router) { }

    salir() {
      localStorage.removeItem('login');
      localStorage.removeItem('userIdC');
      this.router.navigate(['/']);
    }

  ngOnInit() {
  }

}
