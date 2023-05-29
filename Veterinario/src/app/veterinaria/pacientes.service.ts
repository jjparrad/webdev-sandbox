import { Injectable } from '@angular/core';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientesEnOrden: Paciente[] = [];

  constructor() { }

  public agregarPaciente(paciente: Paciente){
    let prioridadNuevo = paciente.sintomas.length;
    if(this.pacientesEnOrden.length == 0){
      this.pacientesEnOrden.push(paciente);
    } else {
      for(let i = 0; i < this.pacientesEnOrden.length; i++){ 
        let p = this.pacientesEnOrden[i];
        let prioridadActual = p.sintomas.length;
        
        if(prioridadActual < prioridadNuevo){
          this.pacientesEnOrden.splice(i, 0, paciente);
          break;
        }
        if(i == this.pacientesEnOrden.length-1){
          this.pacientesEnOrden.push(paciente);
          break;
        }
      }
    }
  }

  public consultarPacientes(): Paciente[]{
    return [...this.pacientesEnOrden];
  }
}
