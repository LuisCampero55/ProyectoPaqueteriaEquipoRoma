import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Transportes/agregar/agregar.component';
import { InicioComponent } from './Transportes/inicio/inicio.component';
import { ModificarComponent } from './Transportes/modificar/modificar.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'add',component:AgregarComponent},
  {path:'edit/:id',component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
