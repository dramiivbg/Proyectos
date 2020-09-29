import { Component, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import {Paciente} from '../../../../modelo/paciente/paciente';
import {PacienteServicioService} from '../../../../servicio/pacienteServicio/paciente-servicio.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';



@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  public barChartLabels: Label[];
  public barChartOptions: ChartOptions;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];
 
  pacientesList : Paciente[];

  bogotaRecuperado:number  = 0;
  bogotaFallecido:number  = 0;
  bogotaUci:number  = 0;

  amazonasRecuperado:number  = 0;
  amazonasFallecido:number  = 0;
  amazonasUci:number  = 0;

  antioquiaRecuperado:number  = 0;
  antioquiaFallecido:number  = 0;
  antioquiaUci:number  = 0;

  araucaRecuperado:number  = 0;
  araucaFallecido:number  = 0;
  araucaUci:number  = 0;

  atlanticoRecuperado:number  = 0;
  atlanticoFallecido:number  = 0;
  atlanticoUci:number  = 0;

  bolivarRecuperado:number  = 0;
  bolivarFallecido:number  = 0;
  bolivarUci:number  = 0;

  boyacaRecuperado:number  = 0;
  boyacaFallecido:number  = 0;
  boyacaUci:number  = 0;

  caldasRecuperado:number  = 0;
  caldasFallecido:number  = 0;
  caldasUci:number  = 0;

  caquetaRecuperado:number  = 0;
  caquetaFallecido:number  = 0;
  caquetaUci:number  = 0;

  casanareRecuperado:number  = 0;
  casanareFallecido:number  = 0;
  casanareUci:number  = 0;

  
  caucaRecuperado:number  = 0;
  caucaFallecido:number  = 0;
  caucaUci:number  = 0;

  cesarRecuperado:number  = 0;
  cesarFallecido:number  = 0;
  cesarUci:number  = 0;

  chocoRecuperado:number  = 0;
  chocoFallecido:number  = 0;
  chocoUci:number  = 0;

  cordobaRecuperado:number  = 0;
  cordobaFallecido:number  = 0;
  cordobaUci:number  = 0;

  
  cundinamarcaRecuperado:number  = 0;
  cundinamarcaFallecido:number  = 0;
  cundinamarcaUci:number  = 0;

  guainiaRecuperado:number  = 0;
  guainiaFallecido:number  = 0;
  guainiaUci:number  = 0;

  guaviareRecuperado:number  = 0;
  guaviareFallecido:number  = 0;
  guaviareUci:number  = 0;

  huilaRecuperado:number  = 0;
  huilaFallecido:number  = 0;
  huilaUci:number  = 0;

  guajiraRecuperado:number  = 0;
  guajiraFallecido:number  = 0;
  guajiraUci:number  = 0;

  magdalenaRecuperado:number  = 0;
  magdalenaFallecido:number  = 0;
  magdalenaUci:number  = 0;

  
  metaRecuperado:number  = 0;
  metaFallecido:number  = 0;
  metaUci:number  = 0;

  nariñoRecuperado:number  = 0;
  nariñoFallecido:number  = 0;
  nariñoUci:number  = 0;

  norte_santanderRecuperado:number  = 0;
  norte_santanderFallecido:number  = 0;
  norte_santanderUci:number  = 0;

  
  putumayoRecuperado:number  = 0;
  putumayoFallecido:number  = 0;
  putumayoUci:number  = 0;

  quindioRecuperado:number  = 0;
  quindioFallecido:number  = 0;
  quindioUci:number  = 0;

  risaraldaRecuperado:number  = 0;
  risaraldaFallecido:number  = 0;
  risaraldaUci:number  = 0;

  sanandresRecuperado:number  = 0;
  sanandresFallecido:number  = 0;
  sanandresUci:number  = 0;

  santanderRecuperado:number  = 0;
  santanderFallecido:number  = 0;
  santanderUci:number  = 0;

  sucreRecuperado:number  = 0;
  sucreFallecido:number  = 0;
  sucreUci:number  = 0;

  tolimaRecuperado:number  = 0;
  tolimaFallecido:number  = 0;
  tolimaUci:number  = 0;

  valle_caucaRecuperado:number  = 0;
  valle_caucaFallecido:number  = 0;
  valle_caucaUci:number  = 0;

  vaupesRecuperado:number  = 0;
  vaupesFallecido:number  = 0;
  vaupesUci:number  = 0;

  vichadaRecuperado:number  = 0;
  vichadaFallecido:number  = 0;
  vichadaUci:number  = 0;

  santamartaRecuperado:number  = 0;
  santamartaFallecido:number  = 0;
  santamartaUci:number  = 0;

  cartagenaRecuperado:number  = 0;
  cartagenaFallecido:number  = 0;
  cartagenaUci:number  = 0;
 


  constructor(public  pacienteServicio : PacienteServicioService) { }

  ngOnInit(): void {
    this.getMunicipio();
  }


  
  getMunicipio(){
     
    
    this.pacienteServicio.getPacients('?$limit=7000').subscribe((pacietsAPI: Paciente[]) =>{
      
      this.pacientesList = [...pacietsAPI];
      
       //itera respecto a la longitud del arreglo pacientesList
      
      for (let index = 0; index < this.pacientesList.length; index++) {      
                                   
       
                  

       switch (this.pacientesList[index].departamento) {
         case 'Bogotá D.C.': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
                              this.bogotaRecuperado++;

                          }else{

                            if (this.pacientesList[index].atenci_n == 'Fallecido'){
                              this.bogotaFallecido++;

                            }

                            if (this.pacientesList[index].atenci_n == 'Uci'){
                              this.bogotaUci++;

                            }


                          }

                  break;
                        

   case 'Amazonas': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
                            this.amazonasRecuperado++;

                        }else{

                          if (this.pacientesList[index].atenci_n == 'Fallecido'){
                            this.amazonasFallecido++;

                          }

                          if (this.pacientesList[index].atenci_n == 'Uci'){
                            this.amazonasUci++;

                          }


                        }
           
            break;   
    case 'Antioquia': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
                          this.antioquiaRecuperado++;

                      }else{

                        if (this.pacientesList[index].atenci_n == 'Fallecido'){
                          this.antioquiaFallecido++;

                        }

                        if (this.pacientesList[index].atenci_n == 'Uci'){
                          this.antioquiaUci++;

                        }


                      }
            break;

   case 'Arauca': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
                        this.araucaRecuperado++;

                    }else{

                      if (this.pacientesList[index].atenci_n == 'Fallecido'){
                        this.araucaFallecido++;

                      }

                      if (this.pacientesList[index].atenci_n == 'Uci'){
                        this.araucaUci++;

                      }


                    }
           
      break;    
       
 case 'Atlántico': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
            this.atlanticoRecuperado++;

        }else{

          if (this.pacientesList[index].atenci_n == 'Fallecido'){
            this.atlanticoFallecido++;

          }

          if (this.pacientesList[index].atenci_n == 'Uci'){
            this.atlanticoUci++;

          }


        }

break;

case 'Bolívar': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.bolivarRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.bolivarFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.bolivarUci++;

}


}

break;

case 'Boyacá': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.boyacaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.boyacaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.boyacaUci++;

}


}


 break;     

case 'Caldas': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.caldasRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.caldasFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.caldasUci++;

}


}

break;
      

case 'Caldas': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.caldasRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.caldasFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.caldasUci++;

}


}

break;

case 'Caquetá': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.caquetaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.caquetaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.caquetaUci++;

}


}
break;

case 'Casanare': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.casanareRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.casanareFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.casanareUci++;

}


}

break;


case 'Cauca': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.caucaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.caucaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.caucaUci++;

}


}

break;


case 'Cesar': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.cesarRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.cesarFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.cesarUci++;

}


}

break;

      
case 'Chocó': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.chocoRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.chocoFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.chocoUci++;

}


}

break;

case 'Córdoba': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.cordobaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.cordobaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.cordobaUci++;

}


}

break;

case 'Cundinamarca': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.cundinamarcaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.cundinamarcaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.cundinamarcaUci++;

}


}

break;

case 'Guainía': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.guainiaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.guainiaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.guainiaUci++;

}


}

break;
      

case 'Guaviare': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.guaviareRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.guaviareFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.guaviareUci++;

}


}

break;
      

case 'Huila': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.huilaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.huilaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.huilaUci++;

}


}

break;
      


case 'La Guajira': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.guajiraRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.guajiraFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.guajiraUci++;

}


}

break;


case 'Magdalena': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.magdalenaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.magdalenaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.magdalenaUci++;

}


}

break;


case 'Meta': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.metaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.metaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.metaUci++;

}


}

break;


case 'Nariño': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.nariñoRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.nariñoFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.nariñoUci++;

}


}

break;

case 'Norte de Santander' :if (this.pacientesList[index].atenci_n == 'Recuperado'){

                              
  this.norte_santanderRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.norte_santanderFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.norte_santanderUci++;

}


}

break;


case 'Putumayo': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.putumayoRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.putumayoFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.putumayoUci++;

}


}

break;
      
case 'Quindío': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.quindioRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.quindioFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.quindioUci++;

}


}

break;


case 'Risaralda': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.risaraldaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.risaraldaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.risaraldaUci++;

}


}

break;



case 'San Andrés': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.sanandresRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.sanandresFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.sanandresUci++;

}


}

break;

case 'Santander': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.santanderRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.santanderFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.santanderUci++;

}


}

break;

case 'Sucre': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.sucreRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.sucreFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.sucreUci++;

}


}

break;


case 'Tolima': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.tolimaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.tolimaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.tolimaUci++;

}


}

break;

case 'Valle del Cauca': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.valle_caucaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.valle_caucaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.valle_caucaUci++;

}


}

break;

case 'Vaupés': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.vaupesRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.vaupesFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.vaupesUci++;

}


}

break;


case 'Vichada': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.vichadaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.vichadaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.vichadaUci++;

}


}

break;

case 'Santa Marta D.T. y C.': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.santamartaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.santamartaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.santamartaUci++;

}


}

break;

case 'Cartagena D.T. y C.': if (this.pacientesList[index].atenci_n == 'Recuperado'){
                              
  this.cartagenaRecuperado++;

}else{

if (this.pacientesList[index].atenci_n == 'Fallecido'){
  this.cartagenaFallecido++;

}

if (this.pacientesList[index].atenci_n == 'Uci'){
  this.cartagenaUci++;

}


}

break;



default:

                    console.log('el departamento:'+this.pacientesList[index].departamento+',no existe en colombia');
           break;
       }
      
  

    
     
   }

  

  
    
      
   //creacion de la grafica

   this.barChartOptions= {
    responsive: true,

   };
      
   this.barChartData= [

    //datos fallecidos
    { data: [this.bogotaFallecido, this.amazonasFallecido, this.antioquiaFallecido, this.araucaFallecido, 
      this.atlanticoFallecido, this.bolivarFallecido, this.boyacaFallecido,this.caldasFallecido,
    this.caquetaFallecido,this.casanareFallecido,this.caucaFallecido,this.cesarFallecido,this.chocoFallecido,
  this.cundinamarcaFallecido,this.guainiaFallecido,this.guaviareFallecido,this.huilaFallecido,this.guajiraFallecido,
   this.magdalenaFallecido,this.metaFallecido,this.nariñoFallecido,this.norte_santanderFallecido,this.putumayoFallecido,
   this.quindioFallecido,this.risaraldaFallecido,this.sanandresFallecido,this.santanderFallecido,this.sucreFallecido,
   this.tolimaFallecido,this.valle_caucaFallecido,this.vaupesFallecido,this.vichadaFallecido,this.santamartaFallecido,
   this.cartagenaFallecido], label: 'FALLECIDOS' },

  //datos recuperados
    { data: [this.bogotaRecuperado, this.amazonasRecuperado, this.antioquiaRecuperado, this.araucaRecuperado, 
      this.atlanticoRecuperado, this.bolivarRecuperado, this.boyacaRecuperado,this.caldasRecuperado,this.caquetaRecuperado,
    this.casanareRecuperado,this.caucaRecuperado,this.cesarRecuperado,this.chocoRecuperado,this.cundinamarcaRecuperado,
  this.guainiaRecuperado,this.guaviareRecuperado,this.huilaRecuperado,this.guajiraRecuperado,this.magdalenaRecuperado,
   this.metaRecuperado,this.nariñoRecuperado,this.norte_santanderRecuperado,this.putumayoRecuperado,this.quindioRecuperado,
   this.risaraldaRecuperado,this.sanandresRecuperado,this.santanderRecuperado,this.sucreRecuperado,this.tolimaRecuperado,
    this.valle_caucaRecuperado,this.vaupesRecuperado,this.vichadaRecuperado,this.santamartaRecuperado,
   this.cartagenaRecuperado], label: 'RECUPERADOS' },

//datos uci
    { data: [this.bogotaUci, this.amazonasUci, this.antioquiaUci, this.araucaUci, this.atlanticoUci, this.bolivarUci, 
      this.boyacaUci,this.caldasUci,this.caquetaUci,this.casanareUci,this.caucaUci,this.cesarUci,this.chocoUci,
    this.cundinamarcaUci,this.guainiaUci,this.guaviareUci,this.huilaUci,this.guajiraUci,this.magdalenaUci,
    this.metaUci,this.nariñoUci,this.norte_santanderUci,this.putumayoUci,this.quindioUci,this.risaraldaUci,this.sanandresUci,
    this.santanderUci,this.sucreUci,this.tolimaUci,this.valle_caucaUci,this.vaupesUci,this.vichadaUci,this.santamartaUci,
    this.cartagenaUci], label: 'UCI' }
   ];

  this.barChartLabels = [ 'Bogotá D.C.', 'Amazonas', 'Antioquia', 'Arauca', 'Atlántico' ,'Bolívar' ,'Boyacá', 'Caldas', 
    'Caquetá', 'Casanare' ,'Cauca', 'Cesar', 'Chocó', 'Córdoba' ,'Cundinamarca', 'Guainía', 'Guaviare', 'Huila', 'La Guajira' 
    ,'Magdalena',  'Meta', 'Nariño', 'Norte  Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés', 'Santander', 'Sucre', 
    'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada','Santa Marta D.T. y C.','Cartagena D.T. y C.'];

  this.barChartType
  this.barChartLegend
  this.barChartPlugins
  // events

  
  
    
   
  

    },(error: any)=> {
      console.error('Error: '+ error)
    })

   
  }


}
