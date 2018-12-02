import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

/*Service */
import { DatosBasicosService } from '../../../service/datos-basicos.service';
import { LoginPersistService } from '../../../service/persist/login.service';
/*Models */
import { DatosBasicos } from '../../../models/datos-basicos';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.less']
})
export class BasicoComponent implements OnInit {

  datos: any = [];
  usserLogged: string;

  constructor(private datosBasicosService: DatosBasicosService, private router: Router, private cookie: CookieService, private loginPersist: LoginPersistService) {
    this.datosBasicosService.getDataUser(atob(cookie.get('userIdC'))).subscribe(data => {
      this.datos = data;
      this.usserLogged = this.loginPersist.getUserLoggedIn();
      console.log(this.usserLogged);
    });

  }

  ngOnInit() {
  }

}
