import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';



@Component({
  selector: 'app-femenino',
  templateUrl: './femenino.component.html',
  styleUrls: ['./femenino.component.css']
})
export class FemeninoComponent implements OnInit {


  pacientesList : Paciente[];

  recuperados:number = 0;
  fallecidos:number = 0;
  uci:number = 0;
  casa:number = 0;
  
  
  pieChartOptions: ChartOptions;
  pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors;


  constructor(public pacienteServicio:PacienteServicioService) { }

  ngOnInit(): void {
    this.getFemenino();


  }


  getFemenino(){

    this.pacienteServicio.getPacients('?$limit=7000').subscribe((pacietsAPI: Paciente[]) =>{
      
      this.pacientesList = [...pacietsAPI];
      
       //itera respecto a la longitud del arreglo pacientesList
      
      for (let index = 0; index < this.pacientesList.length; index++) {
        
         
        if (this.pacientesList[index].sexo == 'F' && this.pacientesList[index].atenci_n == 'Recuperado'){

          this.recuperados++;

     } else{ 
       
      if (this.pacientesList[index].sexo == 'F' && this.pacientesList[index].atenci_n == 'Fallecido'){

         this.fallecidos++;
     }
     
     if(this.pacientesList[index].sexo == 'F' && this.pacientesList[index].atenci_n == 'Uci'){

      this.uci++;

     } if(this.pacientesList[index].sexo == 'F' && this.pacientesList[index].atenci_n == 'Casa'){

      this.casa++;

     }

    }      
  }

 

  this.pieChartOptions={
    responsive: true,
  };

  this.pieChartLabels =  ['RECUPERADOS', 'FALLECIDOS', 'UCI','CASA'];
  this.pieChartData = [this.recuperados, this.fallecidos, this.uci, this.casa];
  this. pieChartType;
  this.pieChartLegend;
  this. pieChartPlugins; 

 





  
    },(error: any)=> {
      console.error('Error: '+ error)
    }) 
  
  }

}
