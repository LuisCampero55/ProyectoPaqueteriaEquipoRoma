import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasServiceService {
  constructor(private http: HttpClient) {
    console.log("Servicio Corriendo");
   }

  getRuta(){
    return this.http.get('http://localhost:4500/login/consulta/1');
  }

  getColonias(){
    return this.http.get('http://localhost:4500/login/consulta/4');
  }

  getCPs(){
    return this.http.get('http://localhost:4500/login/consulta/5');
  }

  getConsultas(){
    return this.http.get('http://localhost:4500/login/consulta/6');
  }

  getRutaid(id:string){
    return this.http.get('http://localhost:4500/login/consulta/3/' + id);
  }

  getColoniaid(id:string){
    return this.http.get('http://localhost:4500/login/consulta/7/' + id);
  }

  getCPid(id:string){
    return this.http.get('http://localhost:4500/login/consulta/8/' + id);
  }

  createRuta(ruta:Ruta){
    return this.http.post('http://localhost:4500/login/insert/ruta', ruta);
  }

  createColonia(colonia:Colonia){
    return this.http.post('http://localhost:4500/login/insert/colonias', colonia);
  }

  createCP(cp:CP){
    return this.http.post('http://localhost:4500/login/insert/cp', cp);
  }

  deleteRuta(id:string){
    return this.http.delete('http://localhost:4500/login/delete/ruta/' + id)
  }

  deleteColonia(id:string){
    return this.http.delete('http://localhost:4500/login/delete/colonias/' + id)
  }

  deleteCP(id:string){
    return this.http.delete('http://localhost:4500/login/delete/cp/' + id);
  }

  updateRuta(id:string, ruta:Ruta){
    return this.http.put('http://localhost:4500/login/put/ruta/' + id, ruta);
  }

  updateColonia(id:string, colonia:Colonia){
    return this.http.put('http://localhost:4500/login/put/colonias/' + id, colonia);
  }

  updateCP(id:string, cp:CP){
    return this.http.put('http://localhost:4500/login/put/cp/' + id, cp);
  }
}

export interface Ruta{
  idRuta:any;
  Ruta?:any;
  idColCP?:any;
}

export interface CP{
  idCP:any;
  Numero?:any;
}

export interface Colonia{
  idColonias:any;
  Nombre?:any;
}

export interface Consulta{
  idRuta:any;
  Ruta?:any;
  idColCP?:any;
  idTransRuta?:any;
  //idTransporte?:any;
  Placas?:any;
  Tipo?:any;
}
