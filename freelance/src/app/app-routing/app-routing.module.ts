import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*Componentes*/

import { RegisterComponent } from '../simple/register/register.component';
import { LoginComponent } from '../simple/login/login.component';
import { PortalComponent } from '../simple/portal/portal.component';
import { RegisterProjectComponent } from '../simple/register-project/register-project.component';
import { NewuserComponent } from '../simple/newuser/newuser.component';
import { ForgetPasswordComponent } from '../simple/forget-password/forget-password.component';
import { PanelUsuarioComponent } from '../panel/user/panel-usuario/panel-usuario.component';
import { VerOfertasComponent } from '../panel/user/ver-ofertas/ver-ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'new-project',
    component: RegisterProjectComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'new',
    component: NewuserComponent,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'portal',
    component: PanelUsuarioComponent,
  },
  {
    path: 'ofertas',
    component: VerOfertasComponent,
  },
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
