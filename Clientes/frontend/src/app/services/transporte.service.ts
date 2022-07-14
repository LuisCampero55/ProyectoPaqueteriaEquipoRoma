import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  url="http://localhost:4500/paqueteria/lista-transporte";
  constructor(private http: HttpClient) { }


  //get Transportes
  getTransportes()
  {
    return this.http.get(this.url);
  }
  //get un Transporte
  getunTransporte(id:string){
    return this.http.get(this.url+'/'+id);
  }
  //Agregar un Usuario
  addTransporte(transporte:Transporte){
    return this.http.post("http://localhost:4500/paqueteria/agregar-transporte",transporte);
  }
  //eliminar Usuario
  deleteTransporte(id:string){
    return this.http.delete("http://localhost:4500/paqueteria/"+id);
  }
  //modificar Usuario
  editTransporte(id:string,transporte:Transporte){
    return this.http.put("http://localhost:4500/paqueteria/transporte/"+id,transporte);
  }
  getConsultas(){
    return this.http.get("http://localhost:4500/paqueteria/detalles");
  }

}
export interface Transporte{
  idEmpresa:string;
  Nombre?:string;
  Direccion?:string;
}
export interface Consulta{
  idEmpresa?:any;
  Nombre?:string;
  Direccion?:string;
  idPaquete?:string;
  Peso?:string;
  Dimension:string;

}
