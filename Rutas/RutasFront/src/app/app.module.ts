import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './Rutas/create/create.component';
import { ReadComponent } from './Rutas/read/read.component';
import { UpdateComponent } from './Rutas/update/update.component';
import { FormsModule } from '@angular/forms';
import { UcoloniaComponent } from './Rutas/update/ucolonia/ucolonia.component';
import { UcpComponent } from './Rutas/update/ucp/ucp.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    UcoloniaComponent,
    UcpComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
