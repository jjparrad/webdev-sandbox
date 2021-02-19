import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes/* = [
    {id: "123", sintomas: []},
    {id: "456", sintomas: ["Gripa"]},
    {id: "789", sintomas: ["Tos seca", "Hambre"]}
  ]*/; 
  
  hayPacientes = false;

  constructor(private pacientesService: PacientesService) { }
    
  ngOnInit(): void {
    this.pacientes = this.pacientesService.consultarPacientes();
    this.hayPacientes = this.pacientes.length == 0 ? false : true;
  }

}
