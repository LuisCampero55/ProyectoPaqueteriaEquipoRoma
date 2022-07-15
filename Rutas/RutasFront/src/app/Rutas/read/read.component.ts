import { RutasServiceService, Ruta, CP, Colonia, Consulta } from './../../service/rutas-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  ListarRutas: Ruta[] = [];
  ListarCPs: CP[] = [];
  ListarColonias: Colonia[] = [];
  ListarConsultas: Consulta[] = [];

  brutas=false;
  bcolonias=false;
  bcps=false;
  bconsultas=false;

  constructor( private RutasServies: RutasServiceService, private router: Router) { }

  ngOnInit(): void {
    this.listarRutas();
    this.listarColonias();
    this.listarCPs();
    this.listarConsultas();
  }

  mrutas(){
    this.brutas=true;
    this.bcolonias=false;
    this.bcps=false;
    this.bconsultas=false;
  }
  mcolonias(){
    this.brutas=false;
    this.bcolonias=true;
    this.bcps=false;
    this.bconsultas=false;
  }
  mcps(){
    this.brutas=false;
    this.bcolonias=false;
    this.bcps=true;
    this.bconsultas=false;
  }
  mconsultas(){
    this.brutas=false;
    this.bcolonias=false;
    this.bcps=false;
    this.bconsultas=true;
  }

  listarRutas(){
    this.RutasServies.getRuta().subscribe(
      res=>{
        console.log(res)
        this.ListarRutas=<any> res;
        this.ListarCPs=<any> res;
        this.ListarColonias=<any> res;
      },
      err=>console.log(err)
    );
  }

  listarColonias(){
    this.RutasServies.getColonias().subscribe(
      res=>{
        console.log(res)
        this.ListarColonias=<any> res;
      },
      err=>console.log(err)
    );
  }

  listarCPs(){
    this.RutasServies.getCPs().subscribe(
      res=>{
        console.log(res)
        this.ListarCPs=<any> res;
      },
      err=>console.log(err)
    );
  }

  listarConsultas(){
    this.RutasServies.getConsultas().subscribe(
      res=>{
        console.log(res)
        this.ListarConsultas=<any> res;
      },
      err=>console.log(err)
    );
  }

  eruta(id:string){
    this.RutasServies.deleteRuta(id).subscribe(
      res=>{
        console.log('Ruta eliminada');
        this.listarRutas();
      },
      err=> console.log(err)
    );
  }

  mruta(id:string){
    this.router.navigate(['update/'+id])
  }

  ecolonia(id:string){
    this.RutasServies.deleteColonia(id).subscribe(
      res=>{
        console.log('Colonia eliminada');
        this.listarColonias();
      },
      err=> console.log(err)
    );
  }

  mcolonia(id:string){
    this.router.navigate(['ucolonia/'+id])
  }

  ecp(id:string){
    this.RutasServies.deleteCP(id).subscribe(
      res=>{
        console.log('Codigo Postal eliminado');
        this.listarCPs();
      },
      err=> console.log(err)
    );
  }

  mcp(id:string){
    this.router.navigate(['ucp/'+id])
  }
}

