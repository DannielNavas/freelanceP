import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/*Service*/
import { CreateUserService } from '../../service/create-user.service';

/*Models*/
import { NewUser } from '../../models/new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private createUserService: CreateUserService, private router: Router) { }

  userArray: NewUser[] = [];
  selectedUser: NewUser = new NewUser();
  datos: any = [];
  resp = false;
  registrarUser() {
    this.userArray.push(this.selectedUser);
    this.createUserService.createUser(this.userArray).subscribe(data => {
      this.datos = data;
      console.log(this.datos);
      if (this.datos.respuesta === 'Success') {
        localStorage.setItem('primerInicio', 'true');
        this.router.navigate(['/login']);
      } else if (this.datos.respuesta === 'Error al registrar el usuario') {
        this.resp = true;
      }
    });
  }

  ngOnInit() {
  }

}
