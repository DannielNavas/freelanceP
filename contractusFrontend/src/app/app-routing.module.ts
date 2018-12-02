import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateViaAuthGuard } from './guards/can-activate-via-auth.guard';

import { IndexComponent } from './inicio/index/index.component';
import { LoginComponent } from './inicio/login/login.component';
import { RegisterComponent } from './inicio/register/register.component';
import { RegisterProjectComponent } from './inicio/register-project/register-project.component';
import { NewuserComponent } from './inicio/newuser/newuser.component';
import { ForgetPasswordComponent } from './inicio/forget-password/forget-password.component';
import { PanelUsuarioComponent } from './panel/user/panel-usuario/panel-usuario.component';
import { PerfilComponent } from './panel/user/perfil/perfil.component';
import { OfertasviewComponent } from './panel/user/ofertasview/ofertasview.component';
import { VerOfertasComponent } from './panel/user/ver-ofertas/ver-ofertas.component';
import { ProfesionalComponent } from './panel/formularios/profesional/profesional.component';
import { PortafolioComponent } from './panel/formularios/portafolio/portafolio.component';
import { ContratosComponent } from './panel/billing/contratos/contratos.component';
import { FacturacionComponent } from './panel/billing/facturacion/facturacion.component';

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
    component: PerfilComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'viewofertas',
    component: OfertasviewComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'ofertas',
    component: VerOfertasComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'perfilProfesional',
    component: ProfesionalComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'portafolio',
    component: PortafolioComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'contratos',
    component: ContratosComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'facturacion',
    component: FacturacionComponent,
    canActivate: [CanActivateViaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
