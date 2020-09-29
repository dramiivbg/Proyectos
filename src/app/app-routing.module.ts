import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//estadisticas
import {HoyComponent} from '../app/componentes/estadisticas/hoy/hoy/hoy.component';
import {EdadesComponent} from '../app/componentes/estadisticas/edades/edades/edades.component';
import {FemeninoComponent} from '../app/componentes/estadisticas/femenino/femenino/femenino.component';
import {MasculinoComponent} from '../app/componentes/estadisticas/masculino/masculino/masculino.component';
import {MesComponent} from '../app/componentes/estadisticas/mes/mes/mes.component';
import {MunicipioComponent} from '../app/componentes/estadisticas/municipio/municipio/municipio.component';

//componentes

import {Paguina404Component} from '../app/componentes/paguina404/paguina404/paguina404.component';
import {PrincipalComponent} from '../app/componentes/principal/principal/principal/principal.component';
import { HistorialComponent } from './componentes/historial/historial/historial.component';
import {GraveComponent} from './componentes/estadisticas/grave/grave/grave.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:  'historial', component:HistorialComponent},
  {path:'estadisticas', component: HoyComponent},
  {path:'edades', component:EdadesComponent},
  {path: 'femenino', component:FemeninoComponent},
  {path: 'meses', component:MesComponent},
  {path: 'masculino', component:MasculinoComponent},
  {path: 'municipios', component: MunicipioComponent},
  {path:'casos', component:GraveComponent},
  {path: '**', component:Paguina404Component },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
