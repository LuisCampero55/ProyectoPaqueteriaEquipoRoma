import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./Conductores/inicio/inicio.component";
import {AgregarComponent} from "./Conductores/agregar/agregar.component";
import {ModificarComponent} from "./Conductores/modificar/modificar.component";
import {ListaComponent} from "./Conductores/lista/lista.component";
import {ListacompComponent} from "./Conductores/listacomp/listacomp.component";

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:AgregarComponent},
  {path:'edit/:id', component:ModificarComponent},
  {path:'list', component:ListaComponent},
  {path:'listcomp', component:ListacompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
