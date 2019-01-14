import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/*Service*/
import { LoginService } from './service/login.service';
import { CreateUserService } from './service/create-user.service';
import { DatosBasicosService } from './service/datos-basicos.service';
import { EthcontractService } from './service/ethcontract.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './inicio/index/index.component';
import { LoginComponent } from './inicio/login/login.component';
import { ForgetPasswordComponent } from './inicio/forget-password/forget-password.component';
import { NewuserComponent } from './inicio/newuser/newuser.component';
import { RegisterComponent } from './inicio/register/register.component';
import { RegisterProjectComponent } from './inicio/register-project/register-project.component';
import { ContratosComponent } from './panel/billing/contratos/contratos.component';
import { FacturacionComponent } from './panel/billing/facturacion/facturacion.component';
import { BasicoComponent } from './panel/formularios/basico/basico.component';
import { PortafolioComponent } from './panel/formularios/portafolio/portafolio.component';
import { ProfesionalComponent } from './panel/formularios/profesional/profesional.component';
import { ContractusComponent } from './panel/user/contractus/contractus.component';
import { OfertasviewComponent } from './panel/user/ofertasview/ofertasview.component';
import { PanelUsuarioComponent } from './panel/user/panel-usuario/panel-usuario.component';
import { PerfilComponent } from './panel/user/perfil/perfil.component';
import { VerOfertasComponent } from './panel/user/ver-ofertas/ver-ofertas.component';
import { PagosComponent } from './panel/user/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NewuserComponent,
    RegisterComponent,
    RegisterProjectComponent,
    ContratosComponent,
    FacturacionComponent,
    BasicoComponent,
    PortafolioComponent,
    ProfesionalComponent,
    ContractusComponent,
    OfertasviewComponent,
    PanelUsuarioComponent,
    PerfilComponent,
    VerOfertasComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    CreateUserService,
    DatosBasicosService,
    CookieService,
    EthcontractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
