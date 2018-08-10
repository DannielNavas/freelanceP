import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Routing*/
import { AppRoutingModule } from './app-routing/app-routing.module';

/*Componentes*/
import { AppComponent } from './app.component';
import { PortalComponent } from './simple/portal/portal.component';
import { LoginComponent } from './simple/login/login.component';
import { RegisterComponent } from './simple/register/register.component';
import { PanelUsuarioComponent } from './panel/user/panel-usuario/panel-usuario.component';
import { RegisterProjectComponent } from './simple/register-project/register-project.component';
import { NewuserComponent } from './simple/newuser/newuser.component';
import { ForgetPasswordComponent } from './simple/forget-password/forget-password.component';
import { VerOfertasComponent } from './panel/user/ver-ofertas/ver-ofertas.component';
import { PerfilComponent } from './panel/user/perfil/perfil.component';
import { BasicoComponent } from './panel/formularios/basico/basico.component';
import { ProfesionalComponent } from './panel/formularios/profesional/profesional.component';
import { PortafolioComponent } from './panel/formularios/portafolio/portafolio.component';
import { FacturacionComponent } from './panel/billing/facturacion/facturacion.component';
import { ContratosComponent } from './panel/billing/contratos/contratos.component';
import { ContractusComponent } from './panel/user/contractus/contractus.component';
import { OfertasviewComponent } from './panel/user/ofertasview/ofertasview.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    RegisterComponent,
    PanelUsuarioComponent,
    RegisterProjectComponent,
    NewuserComponent,
    ForgetPasswordComponent,
    VerOfertasComponent,
    PerfilComponent,
    BasicoComponent,
    ProfesionalComponent,
    PortafolioComponent,
    FacturacionComponent,
    ContratosComponent,
    ContractusComponent,
    OfertasviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
