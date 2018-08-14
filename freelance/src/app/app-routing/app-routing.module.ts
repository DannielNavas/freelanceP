import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*Componentes*/
import { IndexComponent } from '../simple/index/index.component';
import { LoginComponent } from '../simple/login/login.component';
import { RegisterComponent } from '../simple/register/register.component';
import { RegisterProjectComponent } from '../simple/register-project/register-project.component';
import { NewuserComponent } from '../simple/newuser/newuser.component';
import { ForgetPasswordComponent } from '../simple/forget-password/forget-password.component';
import { PanelUsuarioComponent } from '../panel/user/panel-usuario/panel-usuario.component';
import { PerfilComponent } from '../panel/user/perfil/perfil.component';



const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-project',
    component: RegisterProjectComponent
  },
  {
    path: 'new',
    component: NewuserComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'portal',
    component: PanelUsuarioComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
