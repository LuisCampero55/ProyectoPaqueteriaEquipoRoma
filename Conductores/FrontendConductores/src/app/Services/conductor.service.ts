import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConductorService {

   url = 'http://localhost:4500/paqueteria/conductores';
   constructor(private http: HttpClient) {
    console.log("Servicio corriendo");
  }


  getConduc(){
    return this.http.get('http://localhost:4500/paqueteria/conduc');
  }

  getRegister(){
    return this.http.get('http://localhost:4500/paqueteria/datos');
  }

  getConductoresComp(){
     return this.http.get(this.url);
  }

  getConductores(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addConduc(conductor:Conductor){
    return this.http.post('http://localhost:4500/paqueteria/conduc/reg', conductor);
  }

  deleteConduc(id:string){
    return this.http.delete('http://localhost:4500/paqueteria/delete/'+id);
  }

  editConduc(id:string, conductor:Conductor){
    return this.http.put('http://localhost:4500/paqueteria/editconduc/'+id, conductor);
  }

}

export interface Conductor{
  idConductor:any;
  //nombre?:string;
  //apellido?:string;
  //edad?:number;
  idDatos?:any;
  idTransRuta?:any;
  Licencia?:any;
}

export interface ConductorDatos{
  idConductor:any;
  Nombre?:any;
  Apellido?:any;
  Edad?:any;
  Licencia?:any;
  idTransRuta?:any;

}
export interface Register{
  idDatos:any;
  Nombre?:string;
  Apellido?:string;
  Edad?:number;
  }

export interface ConductorDatosComp{
  idConductor:any;
  Nombre?:any;
  Apellido?:any;
  Edad?:any;
  Tipo?:any;
  Placas?:any;
  Ruta?:any;
  CP?:any;
  Colonia?:any;
  Licencia?:any;
}


