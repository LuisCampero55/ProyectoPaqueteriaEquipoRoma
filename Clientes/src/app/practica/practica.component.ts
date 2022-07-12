import { Component, OnInit } from '@angular/core';
import {ServicioService, Datos_personales} from "../servicio/servicio.service";
import { Router} from '@angular/router';


@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent implements OnInit {
//Variable
  ListarUsuarios: Datos_personales[];

  constructor(private ServicioService:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo()
  {
    this.ServicioService.getEquipos().subscribe(
      res=>{
        console.log(res);
        this.ListarUsuarios=<any>res;
      },
      err => {console.log(err); console.log("Error brother")}
    );
  }
  eliminar(id:string)
  {
    this.ServicioService.deleteEquipo(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }


}
