import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./aem/navbar/navbar.component";
import {PracticaComponent} from "./practica/practica.component";

const routes: Routes = [
  {path: 'practica',component:PracticaComponent},
  {path: 'navbar',component:NavbarComponent},
  {path: 'navbar', loadChildren:() => import('./aem/aem.module').then(m => m.AEMModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
