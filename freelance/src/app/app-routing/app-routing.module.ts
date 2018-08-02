import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*Componentes*/

import { RegisterComponent } from '../simple/register/register.component';
import { LoginComponent } from '../simple/login/login.component';
import { PortalComponent } from '../simple/portal/portal.component';

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
