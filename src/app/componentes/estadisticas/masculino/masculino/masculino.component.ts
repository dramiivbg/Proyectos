import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';
import { SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.component.html',
  styleUrls: ['./masculino.component.css']
})
export class MasculinoComponent implements OnInit {

  pacientesList : Paciente[];

  recuperados:number = 0;
  fallecidos:number = 0;
  uci:number = 0;
  casa:number = 0;


  //variables de la grafica
  public polarAreaChartLabels: Label[] = ['RECUPERADOS', 'FALLECIDOS', 'UCI', 'CASA'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';




  constructor(public pacienteServicio:PacienteServicioService) { }

  ngOnInit(): void {

    this.getMasculino();
  }

  getMasculino(){

    this.pacienteServicio.getPacients('?$limit=7000').subscribe((pacietsAPI: Paciente[]) =>{
      
      this.pacientesList = [...pacietsAPI];
      
       //itera respecto a la longitud del arreglo pacientesList
      
      for (let index = 0; index < this.pacientesList.length; index++) {
        
         
        if (this.pacientesList[index].sexo == 'M' && this.pacientesList[index].atenci_n == 'Recuperado'){

          this.recuperados++;

     } else{ 
       
      if (this.pacientesList[index].sexo == 'M' && this.pacientesList[index].atenci_n == 'Fallecido'){

         this.fallecidos++;
     }
     
     if(this.pacientesList[index].sexo == 'M' && this.pacientesList[index].atenci_n == 'Uci'){

      this.uci++;

     } if(this.pacientesList[index].sexo == 'M' && this.pacientesList[index].atenci_n == 'Casa'){

      this.casa++;

     }

    }      
  }

 

this.polarAreaChartData = [this.recuperados, this.fallecidos, this.uci,this.casa];



 





  
    },(error: any)=> {
      console.error('Error: '+ error)
    }) 
  
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
