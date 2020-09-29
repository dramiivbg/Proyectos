import { Injectable } from '@angular/core';
//import {AngularFirestore} from '@angular/';
import {Paciente} from '../../modelo/paciente/paciente';

import { from } from 'rxjs';


//Importaciones necesarias para la conexión con el API
//Url en enviroment.apiURL
import {environment} from 'src/environments/environment';
//Modulo para conexiones http
import { HttpClient } from '@angular/common/http';
//Propiedad para poderme subscribirme al API
import { Observable } from 'rxjs';
//Modelo de los datos
@Injectable({
  providedIn: 'root'
})
export class PacienteServicioService {
  baseURL = environment.apiURL

  constructor(public http: HttpClient) { }

  getPacients(option: string): Observable<Paciente[]>{
    const url = this.baseURL + option;
    return this.http.get<Paciente[]>(url);
  
  
  
  }
}
