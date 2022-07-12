import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarComponent} from "./registrar/registrar.component";
import {CitasComponent} from "./citas/citas.component";
import {Citas2Component} from "./citas2/citas2.component";
import {SolicitarCitaComponent} from "./solicitar-cita/solicitar-cita.component";
import {LoginComponent} from "./login/login.component";
import {RecoverComponent} from "./recover/recover.component";
import {AdministrarcitasComponent} from "./administrarcitas/administrarcitas.component";

const routes: Routes = [
  {path: '',children:[{path:'Registrar',component:RegistrarComponent},
      {path: '',children:[{path: 'Citas',component:CitasComponent},
          {path: '',children:[{path: 'Citas2', component:Citas2Component},
              {path: '',children:[{path:'Solicitarcita', component:SolicitarCitaComponent},
                  {path: '',children:[{path:'Salir', component:LoginComponent},
                      {path: '',children:[{path:'Recover', component:RecoverComponent},
                          {path: '',children:[{path:'Administrarcitas',component:AdministrarcitasComponent},
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AEMRoutingModule { }
