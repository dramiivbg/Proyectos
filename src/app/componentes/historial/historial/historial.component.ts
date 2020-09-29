import { Component, OnInit } from '@angular/core';


import {Paciente} from '../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../servicio/pacienteServicio/paciente-servicio.service';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';




@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  Edades : Paciente[];
  pacientesList : Paciente[];
  contador : number;


  constructor(public  pacienteServicio : PacienteServicioService) { }

  ngOnInit(): void {

    this.getPacientes();
  }

  getPacientes(){
    this.pacienteServicio.getPacients('?$limit=7000').subscribe((pacietsAPI: Paciente[]) =>{

      this.pacientesList = [...pacietsAPI];
      console.log(this.pacientesList); 

    }, (error: any)=> {
      console.error('Error: '+ error)
    }) 
    }

}
