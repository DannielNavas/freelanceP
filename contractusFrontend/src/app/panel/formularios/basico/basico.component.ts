import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

/*Service */
import { DatosBasicosService } from '../../../service/datos-basicos.service';
/*Models */
import { DatosBasicos } from '../../../models/datos-basicos';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.less']
})
export class BasicoComponent implements OnInit {

  datos: any = [];

  constructor(private datosBasicosService: DatosBasicosService, private router: Router, private cookie: CookieService) {
    this.datosBasicosService.getDataUser(atob(cookie.get('userIdC'))).subscribe(data => {
      this.datos = data;
      console.log(data);
    });

  }

  ngOnInit() {
  }

}
