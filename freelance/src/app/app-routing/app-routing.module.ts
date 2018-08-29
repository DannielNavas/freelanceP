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
import { OfertasviewComponent } from '../panel/user/ofertasview/ofertasview.component';
import { VerOfertasComponent } from '../panel/user/ver-ofertas/ver-ofertas.component';
import { ProfesionalComponent } from '../panel/formularios/profesional/profesional.component';
import { PortafolioComponent } from '../panel/formularios/portafolio/portafolio.component';
import { ContratosComponent } from '../panel/billing/contratos/contratos.component';
import { FacturacionComponent } from '../panel/billing/facturacion/facturacion.component';



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
  },
  {
    path: 'viewofertas',
    component: OfertasviewComponent
  },
  {
    path: 'ofertas',
    component: VerOfertasComponent
  },
  {
    path: 'perfilProfesional',
    component: ProfesionalComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'contratos',
    component: ContratosComponent
  },
  {
    path: 'facturacion',
    component: FacturacionComponent
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
