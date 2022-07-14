import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Conductores/inicio/inicio.component';
import { AgregarComponent } from './Conductores/agregar/agregar.component';
import { ModificarComponent } from './Conductores/modificar/modificar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListaComponent } from './Conductores/lista/lista.component';
import { ListacompComponent } from './Conductores/listacomp/listacomp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    ListaComponent,
    ListacompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
