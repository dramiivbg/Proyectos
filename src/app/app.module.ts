//ruta
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { EdadesComponent } from './componentes/estadisticas/edades/edades/edades.component';
import { FemeninoComponent } from './componentes/estadisticas/femenino/femenino/femenino.component';
import { HoyComponent } from './componentes/estadisticas/hoy/hoy/hoy.component';
import { MasculinoComponent } from './componentes/estadisticas/masculino/masculino/masculino.component';
import { MesComponent } from './componentes/estadisticas/mes/mes/mes.component';
import { MunicipioComponent } from './componentes/estadisticas/municipio/municipio/municipio.component';
import { HistorialComponent } from './componentes/historial/historial/historial.component';
import { Paguina404Component } from './componentes/paguina404/paguina404/paguina404.component';
import { FooterComponent } from './componentes/principal/footer/footer/footer.component';
import { MenuComponent } from './componentes/principal/menu/menu/menu.component';
import { PrincipalComponent } from './componentes/principal/principal/principal/principal.component';
import { CargarNoticiaComponent } from './componentes/administardor/cargarNoticia/cargar-noticia/cargar-noticia.component';
import { MandarNoticiaComponent } from './componentes/administardor/mandarNoticia/mandar-noticia/mandar-noticia.component';
import { NoticiasComponent } from './componentes/administardor/noticias/noticias/noticias.component';

//angularfire2

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule,AngularFireStorageReference} from 'angularfire2/storage';


//@angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//environment

import { environment } from '../environments/environment';
import { from } from 'rxjs';

//http

import {HttpClientModule} from '@angular/common/http';

//servicios

import {PacienteServicioService} from './servicio/pacienteServicio/paciente-servicio.service';
import {ServicioLoginService} from './servicio/servicioLogin/servicio-login.service';
import {Paciente} from './modelo/paciente/paciente';

//chartjs

import { ChartsModule } from 'ng2-charts';
import { GraveComponent } from './componentes/estadisticas/grave/grave/grave.component';

@NgModule({
  declarations: [
    AppComponent,
    EdadesComponent,
    FemeninoComponent,
    HoyComponent,
    MasculinoComponent,
    MesComponent,
    MunicipioComponent,
    HistorialComponent,
    Paguina404Component,
    FooterComponent,
    MenuComponent,
    PrincipalComponent,
    CargarNoticiaComponent,
    MandarNoticiaComponent,
    NoticiasComponent,
    GraveComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    AngularFireStorageModule,
    ReactiveFormsModule 
  
  ],
  providers: [
    PacienteServicioService,
    ServicioLoginService,
   
 
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
