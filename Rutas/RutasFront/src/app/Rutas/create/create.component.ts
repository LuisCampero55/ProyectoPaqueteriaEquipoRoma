import { Component, OnInit } from '@angular/core';
import { Ruta, Colonia, CP, RutasServiceService } from '../../service/rutas-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bruta=false;
  bcolonia=false;
  bcp=false;

  mrutas(){
    this.bruta=true;
    this.bcolonia=false;
    this.bcp=false;
  }
  mcolonias(){
    this.bruta=false;
    this.bcolonia=true;
    this.bcp=false;
  }
  mcps(){
    this.bruta=false;
    this.bcolonia=false;
    this.bcp=true;
  }

  ruta:Ruta={
    idRuta:'',
    Ruta:'',
    idColCP:''
  };

  colonia:Colonia={
    idColonias:'',
    Nombre:''
  };

  cp:CP={
    idCP:'',
    Numero:''
  };

  constructor(private RutaService:RutasServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  cruta(){
    //delete this.ruta.idRuta;
    this.RutaService.createRuta(this.ruta).subscribe();
    this.router.navigate(['/read']);
  }

  ccolonia(){
    //delete this.colonia.idColonias;
    this.RutaService.createColonia(this.colonia).subscribe();
    this.router.navigate(['/read']);
  }

  ccp(){
    //delete this.cp.idCP;
    this.RutaService.createCP(this.cp).subscribe();
    this.router.navigate(['/read']);
  }
}
