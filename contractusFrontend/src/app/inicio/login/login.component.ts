import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

/*Service */
import { LoginService } from '../../service/login.service';
/*Models */
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private cookie: CookieService) { }

    loginArray: Login[] = [];
    selectedLogin: Login = new Login();
    datos: any = [];
    resp = false;
    iniciar() {
        this.loginArray.push(this.selectedLogin);
        console.log(this.loginArray);
        this.loginService.login(this.loginArray).subscribe(data => {
            console.log(data)
            this.datos = data;
            if (this.datos.respuesta === 'Success') {
                this.cookie.set('login', btoa('true'));
                this.cookie.set('userIdC', btoa(this.datos.id));
                this.router.navigate(['/perfil']);
            } else if (this.datos.respuesta === 'Usuario y/o contraseña no son validos') {
                this.resp = true;
            }
        });
    }

  ngOnInit() {
  }

}
