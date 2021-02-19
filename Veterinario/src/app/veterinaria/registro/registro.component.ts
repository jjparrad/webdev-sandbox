import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Paciente } from '../paciente';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  sintomasPrioritarios = ['Posible fractura', 'Sangrado', 'En estado de inconsciencia', 'No puede caminar'];
  
  constructor(private pacientesService: PacientesService) {}
  
  registrar(form: NgForm){
    const id = form.value.id;
    const sintomasPaciente = [];
    for (let v in form.value) {
      if(v != 'id' && form.value[v]){
        sintomasPaciente.push(v);
      }
    }
    const paciente = new Paciente(id, sintomasPaciente);
    this.agregarPaciente(paciente);
  }

  agregarPaciente(paciente: Paciente){
    this.pacientesService.agregarPaciente(paciente);
  }

  ngOnInit(): void {

  }
}
