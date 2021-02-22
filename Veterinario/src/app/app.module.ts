import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './veterinaria/pacientes/pacientes.component';
import { RegistroComponent } from './veterinaria/registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { InicioPacienteComponent } from './inicio/inicio-paciente/inicio-paciente.component';
import { InicioAdminComponent } from './inicio/inicio-admin/inicio-admin.component';
import { FormsModule } from '@angular/forms';
import { PacientesService } from './veterinaria/pacientes.service';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    RegistroComponent,
    HeaderComponent,
    InicioPacienteComponent,
    InicioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
