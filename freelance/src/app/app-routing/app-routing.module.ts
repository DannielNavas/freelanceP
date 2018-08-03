import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*Componentes*/

import { RegisterComponent } from '../simple/register/register.component';
import { LoginComponent } from '../simple/login/login.component';
import { PortalComponent } from '../simple/portal/portal.component';
import { RegisterProjectComponent } from '../simple/register-project/register-project.component';

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
