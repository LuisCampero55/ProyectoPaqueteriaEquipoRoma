import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AEMRoutingModule } from './aem-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CitasComponent } from './citas/citas.component';
import { LoginComponent } from './login/login.component';
import { Citas2Component } from './citas2/citas2.component';
import { RecoverComponent } from './recover/recover.component';
import { AdministrarcitasComponent } from './administrarcitas/administrarcitas.component';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        NavbarComponent,
        RegistrarComponent,
        CitasComponent,
        LoginComponent,
        Citas2Component,
        RecoverComponent,
        AdministrarcitasComponent,
        SolicitarCitaComponent
    ],
    exports: [
        NavbarComponent,
        CitasComponent,
        RegistrarComponent,
        LoginComponent,
        RecoverComponent,
        Citas2Component,
        AdministrarcitasComponent,
        SolicitarCitaComponent
    ],
    imports: [
        CommonModule,
        AEMRoutingModule,
      ReactiveFormsModule,
      FormsModule
    ]
})
export class AEMModule { }
