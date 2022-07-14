import { Component, OnInit } from '@angular/core';
import {Conductor, ConductorDatos, ConductorService} from '../../Services/conductor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

 ListarConduc: ConductorDatos[];

  constructor(private ConductorService:ConductorService, private router:Router) { }

  ngOnInit(): void {
    this.listarConduc();
  }

  listarConduc(){
    this.ConductorService.getConduc().subscribe(
      res =>{
        console.log(res)
        this.ListarConduc=<any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:string){
    this.ConductorService.deleteConduc(id).subscribe(
      res =>{
        console.log('Conductor eliminado');
        this.listarConduc();
      },
      err => console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }


}
