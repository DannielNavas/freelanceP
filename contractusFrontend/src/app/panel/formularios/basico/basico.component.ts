import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private datosBasicosService: DatosBasicosService, private router: Router) {
    this.datosBasicosService.getDataUser(localStorage.getItem('userIdC')).subscribe(data => {
      this.datos = data;
      console.log(data);
    });

  }

  ngOnInit() {
  }

}
