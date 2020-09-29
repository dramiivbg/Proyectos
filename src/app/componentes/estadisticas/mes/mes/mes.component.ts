import { Component, OnInit } from '@angular/core';
import {  Label } from 'ng2-charts';
import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';




@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  eneroRecuperado:number = 0;
  eneroFallecido:number = 0;
  eneroUci:number = 0;
  //contadores 20-40
  febreroRecuperado:number = 0;
  febreroFallecido:number = 0;
  febreroUci:number = 0;
  //contadores 40-60
  marzoRecuperado:number = 0;
  marzoFallecido:number = 0;
  marzoUci:number = 0;
  //contadores 60-80
  abrilRecuperado:number = 0;
  abrilFallecido:number = 0;
  abrilUci:number = 0;
  //contadores 80-100
  mayoRecuperado:number = 0;
  mayoFallecido:number = 0;
  mayoUci:number = 0;

  junioRecuperado:number = 0;
  junioFallecido:number = 0;
  junioUci:number = 0;

  julioRecuperado:number = 0;
  julioFallecido:number = 0;
  julioUci:number = 0;

  agostoRecuperado:number = 0;
  agostoFallecido:number = 0;
  agostoUci:number = 0;

  septiembreRecuperado:number = 0;
  septiembreFallecido:number = 0;
  septiembreUci:number = 0;

  octubreRecuperado:number = 0;
  octubreFallecido:number = 0;
  octubreUci:number = 0;

  noviembreRecuperado:number = 0;
  noviembreFallecido:number = 0;
  noviembreUci:number = 0;

  diciembreRecuperado:number = 0;
  diciembreFallecido:number = 0;
  diciembreUci:number = 0;
   //vector tipo paciente
  pacientesList : Paciente[];
  //variables grafica
  public barChartLabels: Label[];
  public barChartOptions: ChartOptions;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];
 
  meses: Paciente[];



  constructor(public  pacienteServicio :PacienteServicioService) { }

  ngOnInit(): void {
    this.getMeses();
  }

  getMeses(){
    this.pacientesList = [];

   this.pacienteServicio.getPacients('?$limit=5000').subscribe((pacietsAPI: Paciente[]) =>{
     
     this.pacientesList = [...pacietsAPI];
     
      //itera respecto a la longitud del arreglo pacientesList
for (let index = 0; index < this.pacientesList.length; index++) {      
                   

    
 
        
    switch ( this.pacientesList[index].fecha_diagnostico.split("-")[1]) {
       
       
     case '01':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

               console.log(this.eneroRecuperado++);
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

              console.log(this.eneroFallecido++);
          }
         }
         
         
          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.eneroUci++;
      }



            
                                  
          
          break;


  case '02':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.febreroRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.febreroFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.febreroUci++;
      }



            }
                                  
          
          break;
          
          
case '03':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.marzoRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.marzoFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.marzoUci++;
      }



            }
                                  
          
          break;       



  case '04':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.abrilRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.abrilFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.abrilUci++;
      }



            }
                                  
          
          break;       
      

   case '05':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.mayoRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.mayoFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.mayoUci++;
      }



            }
                                  
          
          break;       
          
      
    case '06':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.junioRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.junioFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.junioUci++;
      }



            }
                                  
          
          break;       
          


        



      case '07':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.julioRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.julioFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.julioUci++;
      }



            }
                                  
          
          break;       
          
   
          case '08':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.agostoRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.agostoFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.agostoUci++;
      }



            }
                                  
          
          break;
          
          
          case '09':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.septiembreRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.septiembreFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.septiembreUci++;
      }



            }
                                  
          
          break;     


          case '10':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.octubreRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.octubreFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.octubreUci++;
      }



            }
                                  
          
          break;  
          
          
          case '11':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.noviembreRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.noviembreFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.noviembreUci++;
      }



            }
                                  
          
          break;      


 case '12':
            
           if(this.pacientesList[index].atenci_n = ' Recuperado'){

                this.diciembreRecuperado++;
           }
            else{
             
             if(this.pacientesList[index].atenci_n = ' Fallecido'){

               this.diciembreFallecido++;
          }

          if(this.pacientesList[index].atenci_n = ' Uci'){

           this.diciembreUci++;
      }



            }
                                  
          
          break;      
       
       
  default:
                 
          break;
      }
      
    
     
 

   
    
    }

    

 
   
     
  //creacion de la grafica

  this.barChartOptions= {
   responsive: true,

  };
     
  this.barChartData= [
   { data: [this.eneroFallecido, this.febreroFallecido, this.marzoFallecido, this.abrilFallecido, this.mayoFallecido, 
     this.junioFallecido, this.julioFallecido,this.agostoFallecido,this.septiembreFallecido,this.octubreFallecido,
    this.noviembreFallecido,this.diciembreFallecido ], label: 'FALLECIDOS' },
   
   
   
   { data: [this.eneroRecuperado, this.febreroRecuperado, this.marzoRecuperado, this.abrilRecuperado, this.mayoRecuperado,
      this.junioRecuperado, this.julioRecuperado,this.agostoRecuperado,this.septiembreRecuperado,this.octubreRecuperado,
     this.noviembreRecuperado,this.diciembreRecuperado], label: 'RECUPERADOS' },
   
   
   
   
   { data: [this.eneroUci, this.febreroUci, this.marzoUci, this.abrilUci, this.mayoUci, this.junioUci, this.julioUci,
   this.agostoUci,this.septiembreUci,this.octubreUci,this.noviembreUci,this.diciembreUci ], label: 'UCI' }
 ];

 this.barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto',
 'Septiembre','Octubre','Noviembre','Diciembre'];

 this.barChartType
 this.barChartLegend
 this.barChartPlugins
 // events

 
 
   

 

   },(error: any)=> {
     console.error('Error: '+ error)
   })
 

 
}

}
