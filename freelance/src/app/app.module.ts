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


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LoginComponent,
    RegisterComponent,
    PanelUsuarioComponent,
    RegisterProjectComponent
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
