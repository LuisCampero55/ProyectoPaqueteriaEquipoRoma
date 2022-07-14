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
  //Agregar un Transporte
  addTransporte(transporte:Transporte){
    return this.http.post("http://localhost:4500/paqueteria/agregar-transporte",transporte);
  }
  //eliminar transporte
  deleteTransporte(id:string){
    return this.http.delete("http://localhost:4500/paqueteria/"+id);
  }
  //modificar transporte
  editTransporte(id:string,transporte:Transporte){
    return this.http.put("http://localhost:4500/paqueteria/transporte/"+id,transporte);
  }
  getConsultas(){
    return this.http.get("http://localhost:4500/paqueteria/detalles");
  }

}
export interface Transporte{
  idTransporte:string;
  Placas?:string;
  Tipo?:string;
}
export interface Consulta{
  idRuta:any;
  Ruta?:any;
  idColCP?:any;
  idTransRuta:any;
  idTransporte:any;
  Placas?:any;
  Tipo?:any;
}