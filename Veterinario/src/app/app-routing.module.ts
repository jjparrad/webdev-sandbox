import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdminComponent } from './inicio/inicio-admin/inicio-admin.component';
import { InicioPacienteComponent } from './inicio/inicio-paciente/inicio-paciente.component';
import { PacientesComponent } from './veterinaria/pacientes/pacientes.component';
import { RegistroComponent } from './veterinaria/registro/registro.component';

const routes: Routes = [
  {path: "inicio", component: InicioPacienteComponent},
  {path: "admin", component: InicioAdminComponent},
  {path: "registro", component: RegistroComponent},
  {path: "pacientes", component: PacientesComponent},
  {path: "**", redirectTo: "inicio"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
