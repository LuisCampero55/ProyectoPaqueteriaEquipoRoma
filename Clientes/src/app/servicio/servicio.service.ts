import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url='http://localhost:3000/axel';
  constructor(private http: HttpClient) { }

  //get equipos
  getEquipos()
  {
    return this.http.get(this.url+'/read');
  }











  //get departamentos
  getDepartamento()
  {
    return this.http.get("http://localhost:3000/empleados/departamento");
  }

  //get departamentos
  getRoles()
  {
    return this.http.get("http://localhost:3000/empleados/roles");
  }

  //get un Equipo
  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }


  //agregar equipo
  addEquipo(equipo:Datos_personales)
  {
    return this.http.post(this.url+"/create", equipo);
  }


  //eliminar
  deleteEquipo(id:string){
    console.log('El id es: '+id)
    return this.http.delete(this.url+'/delete/'+ id);
  }

  //modificar equipo
  editEquipo(id:string, equipo:Datos_personales){
    return this.http.put(this.url+'/'+id, equipo);
  }
}

export interface Datos_personales{
  idUsuario?: string,
  nombre_empresa?: string,
  cp?: string,
  Correo?: string,
  Contrasenia?: string,
}
