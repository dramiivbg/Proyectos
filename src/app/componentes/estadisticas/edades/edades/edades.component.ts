import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';




@Component({
  selector: 'app-edades',
  templateUrl: './edades.component.html',
  styleUrls: ['./edades.component.css']
})
export class EdadesComponent implements OnInit {

 //contadores 1-20 
 Recupedosnum1_20:number = 0;
 Fallecidosnum1_20:number = 0;
 Ucinum1_20:number = 0;
 //contadores 20-40
 Recupedosnum20_40:number = 0;
 Fallecidosnum20_40:number = 0;
 Ucinum20_40:number = 0;
 //contadores 40-60
 Recupedosnum40_60:number = 0;
 Fallecidosnum40_60:number = 0;
 Ucinum40_60:number = 0;
 //contadores 60-80
 Recupedosnum60_80:number = 0;
 Fallecidosnum60_80:number = 0;
 Ucinum60_80:number = 0;
 //contadores 80-100
 Recupedosnum80_100:number = 0;
 Fallecidosnum80_100:number = 0;
 Ucinum80_100:number = 0;
  //vector tipo paciente
 pacientesList : Paciente[];
 //variables grafica
 barChartData: ChartDataSets[];
 barChartLabels: Label[];
 barChartOptions: ChartOptions;
 barChartType: ChartType;
 barChartLegend = true;
 barChartPlugins = [];
  f:Date;


  constructor(public  pacienteServicio:PacienteServicioService) { }

  ngOnInit(): void {
 
    this.getEdades();

  }

  getEdades(){



    this.pacienteServicio.getPacients('?$limit=7000').subscribe((pacietsAPI: Paciente[]) =>{
      
      this.pacientesList = [...pacietsAPI];
      
       //itera respecto a la longitud del arreglo pacientesList
      
      for (let index = 0; index < this.pacientesList.length; index++) {      
          
       // iterador de edades entre 1-20
       for (let i = 1; i <=20; i++) {    
           
          if (Number(this.pacientesList[index].edad) == i && this.pacientesList[index].atenci_n == "Recuperado" ) {
  
         this.Recupedosnum1_20++;
          
        }
        else if (Number(this.pacientesList[index].edad) == i && this.pacientesList[index].atenci_n == "Fallecido"){
           
  
          this.Fallecidosnum1_20++;
        }
  
        else if (Number(this.pacientesList[index].edad) == i && this.pacientesList[index].atenci_n == "Uci"){
             this.Ucinum1_20++;
        }
          
       }
        // iterador de edades entre 20-40
  
       for (let j=20; j<=40; j++){
           
        if (Number(this.pacientesList[index].edad) == j && this.pacientesList[index].atenci_n == "Recuperado" ) {
  
          this.Recupedosnum20_40++;
           
         }
         else if (Number(this.pacientesList[index].edad) == j && this.pacientesList[index].atenci_n == "Fallecido"){
            
   
           this.Fallecidosnum20_40++;
         }
   
         else if (Number(this.pacientesList[index].edad) == j && this.pacientesList[index].atenci_n == "Uci"){
              this.Ucinum20_40++;
         }
  
  
  
   }
  
       // iterador de edades entre 40-60
   for (let k = 40; k <=60; k++ ){
    if (Number(this.pacientesList[index].edad) == k && this.pacientesList[index].atenci_n == "Recuperado" ) {
  
      this.Recupedosnum40_60++;
       
     }
     else if (Number(this.pacientesList[index].edad) == k && this.pacientesList[index].atenci_n == "Fallecido"){
        
  
       this.Fallecidosnum40_60++;
     }
  
     else if (Number(this.pacientesList[index].edad) == k && this.pacientesList[index].atenci_n == "Uci"){
          this.Ucinum40_60++;
     }
  
  
  }
  
  
     // iterador de edades entre 60-80
  for (let l = 60; l <= 80; l++) {
  
    if (Number(this.pacientesList[index].edad) == l && this.pacientesList[index].atenci_n == "Recuperado" ) {
  
      this.Recupedosnum60_80++;
       
     }
     else if (Number(this.pacientesList[index].edad) == l && this.pacientesList[index].atenci_n == "Fallecido"){
        
  
       this.Fallecidosnum60_80++;
     }
  
     else if (Number(this.pacientesList[index].edad) == l && this.pacientesList[index].atenci_n == "Uci"){
          this.Ucinum60_80++;
     }
  
  }
  
      // iterador de edades entre 80-100
  
   for (let m = 80; m <= 100; m ++) {
  
    if (Number(this.pacientesList[index].edad) == m && this.pacientesList[index].atenci_n == "Recuperado" ) {
  
      this.Recupedosnum80_100++;
       
     }
     else if (Number(this.pacientesList[index].edad) == m && this.pacientesList[index].atenci_n == "Fallecido"){
        
  
       this.Fallecidosnum80_100++;
     }
  
     else if (Number(this.pacientesList[index].edad) == m && this.pacientesList[index].atenci_n == "Uci"){
          
      this.Ucinum80_100++;
     }
  
  
  
    
     
   }
  
      
   //creacion de la grafica
      
  this.barChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  this.barChartLabels = ['1-20', '20-40', '40-60', '60-80', '80-100'];
  this.barChartType = 'bar';
  this.barChartLegend;
  this.barChartPlugins;
  
  this.barChartData = [
    { data: [this.Fallecidosnum1_20, this.Fallecidosnum20_40, this.Fallecidosnum40_60,  
      this.Fallecidosnum60_80, this.Fallecidosnum80_100], label: 'FALLECIDOS' },
    { data: [this.Recupedosnum1_20, this.Recupedosnum20_40, this.Recupedosnum40_60, 
      this.Recupedosnum60_80, this.Recupedosnum80_100], label: 'RECUPERADOS' },
    { data: [this.Ucinum1_20, this.Ucinum20_40, this.Ucinum40_60, this.Ucinum60_80, 
      this.Ucinum80_100], label: 'UCI' }
  ];
  
    
  }  
  
  
    },(error: any)=> {
      console.error('Error: '+ error)
    })
  
    
  
  }
  
  
  
  


}
