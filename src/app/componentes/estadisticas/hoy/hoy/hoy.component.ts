import { Component, OnInit,OnDestroy } from '@angular/core';

import {Chart, Point,ChartDataSets,ChartOptions} from "chart.js";

import{ Label,Color} from "ng2-charts"

import { from, Observable, Subscription} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';


@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.component.html',
  styleUrls: ['./hoy.component.css']
})
export class HoyComponent implements OnInit {


  


//contadores
recuperados:number = 0;
fallecidos:number = 0;
uci:number = 0;
casa:number = 0;
contador:number = 0;
//variables de la grafica



private intervalUpdate: any = null; 


public chart: any = null;

//variables de fecha actual
hoy = new Date();
fecha:string = '';

//vector de todos los pacientes
 pacientesList : Paciente[];
 
 


  constructor(private http: HttpClient,public pacienteServicio:PacienteServicioService) { }

 
 ngOnInit(): void {

 
  this.intervalUpdate = setInterval(function(){
    this.showData();
   }.bind(this), 500);


 }




 private ngOnDestroy(): void {
  clearInterval(this.intervalUpdate);
 }




 
 
 private showData(): void {
  
    this.pacientesList = [];

   this.pacienteServicio.getPacients('?$limit=500&$select=atenci_n, fecha_diagnostico').subscribe((pacietsAPI: Paciente[]) =>{
     
     this.pacientesList = [...pacietsAPI];
     
      //itera respecto a la longitud del arreglo pacientesList
for (let index = 0; index < this.pacientesList.length; index++) {      
               

   
  if ( this.pacientesList[index].atenci_n == 'Recuperado'){

    this.recuperados++;

} else{ 
 
if (this.pacientesList[index].atenci_n == 'Fallecido'){

   this.fallecidos++;
}

if( this.pacientesList[index].atenci_n == 'Uci'){

this.uci++;

} if( this.pacientesList[index].atenci_n == 'Casa'){

this.casa++;

}

}      
  this.chart = new Chart('realtime', {
    type: 'line',
    data: {
     labels: [ "recuperados" , "fallecidos" , "uci" , "casa"],
     datasets: [
       {
      label: 'Data',
      fill: false,
      data: [this.recuperados,this.fallecidos,this.uci,this.casa],
      backgroundColor: '#168ede',
      borderColor: '#168ede'
       }
     ]
      },
      options: {
     tooltips: {
      enabled: false
     },
     legend: {
      display: true,
      position: 'bottom',
      labels: {
       fontColor: 'white'
      }
     },
     scales: {
       yAxes: [{
        ticks: {
         fontColor: "white"
        }
       }],
       xAxes: [{
      ticks: {
       fontColor: "white",
       beginAtZero: true
      }
       }]
     }
      }
   })
  }
},(error: any)=> {
  console.error('Error: '+ error)
});
 

   this.getFromAPI().subscribe(response => {
    if(response.error === false) {
      let chartTime: any = new Date();
      chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
      if(this.chart.data.labels.length > 15) {
        this.chart.data.labels.shift();
        this.chart.data.datasets[0].data.shift();
  }
      
      this.chart.data.labels.push(chartTime);
      this.chart.data.datasets[0].data.push(response.data);
      this.chart.update();
     } else {
      console.error("ERROR: The response had an error, retrying");
     }
   
  }, error => {
   console.error("ERROR: Unexpected response");
  });

 

}
 

private getFromAPI(): Observable<any>{
  return this.http.post(
     'http://localhost:3000',
     { responseType: 'json' }
  );
}


}
