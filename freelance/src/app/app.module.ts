import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Routing*/
import { AppRoutingModule } from './app-routing/app-routing.module';

/*Service*/
import { LoginService } from './service/login.service';
import { CreateUserService } from './service/create-user.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './simple/index/index.component';
import { LoginComponent } from './simple/login/login.component';
import { RegisterComponent } from './simple/register/register.component';
import { RegisterProjectComponent } from './simple/register-project/register-project.component';
import { NewuserComponent } from './simple/newuser/newuser.component';
import { ForgetPasswordComponent } from './simple/forget-password/forget-password.component';
import { ContratosComponent } from './panel/billing/contratos/contratos.component';
import { FacturacionComponent } from './panel/billing/facturacion/facturacion.component';
import { BasicoComponent } from './panel/formularios/basico/basico.component';
import { ProfesionalComponent } from './panel/formularios/profesional/profesional.component';
import { PortafolioComponent } from './panel/formularios/portafolio/portafolio.component';
import { ContractusComponent } from './panel/user/contractus/contractus.component';
import { OfertasviewComponent } from './panel/user/ofertasview/ofertasview.component';
import { PanelUsuarioComponent } from './panel/user/panel-usuario/panel-usuario.component';
import { PerfilComponent } from './panel/user/perfil/perfil.component';
import { VerOfertasComponent } from './panel/user/ver-ofertas/ver-ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    RegisterProjectComponent,
    NewuserComponent,
    ForgetPasswordComponent,
    ContratosComponent,
    FacturacionComponent,
    BasicoComponent,
    ProfesionalComponent,
    PortafolioComponent,
    ContractusComponent,
    OfertasviewComponent,
    PanelUsuarioComponent,
    PerfilComponent,
    VerOfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    CreateUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
