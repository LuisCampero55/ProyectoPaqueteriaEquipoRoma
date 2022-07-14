import { Component, OnInit } from '@angular/core';
import {Conductor,ConductorService} from '../../Services/conductor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

    conductores: Conductor={
      idConductor:'',
      //nombre:'',
      //apellido:'',
      //edad:undefined,
      idDatos:'',
      idTransRuta:'',
      Licencia:''

    };

  constructor(private ConductorService:ConductorService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    //console.log("Esta es valor de: "+this.conductores.idTransRuta);
    //delete this.conductores.idConductor;
    this.ConductorService.addConduc(this.conductores).subscribe();
    this.router.navigate(['/inicio']);
  }

}
