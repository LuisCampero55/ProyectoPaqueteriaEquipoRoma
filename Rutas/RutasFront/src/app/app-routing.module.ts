import { UcpComponent } from './Rutas/update/ucp/ucp.component';
import { UcoloniaComponent } from './Rutas/update/ucolonia/ucolonia.component';
import { UpdateComponent } from './Rutas/update/update.component';
import { CreateComponent } from './Rutas/create/create.component';
import { ReadComponent } from './Rutas/read/read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/read', pathMatch:'full'},
  {path: 'read', component: ReadComponent},
  {path: 'create', component: CreateComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'ucolonia/:id', component: UcoloniaComponent},
  {path: 'ucp/:id', component: UcpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
