import { Component, OnInit } from '@angular/core';
import {ConductorDatosComp, ConductorService} from '../../Services/conductor.service';

@Component({
  selector: 'app-listacomp',
  templateUrl: './listacomp.component.html',
  styleUrls: ['./listacomp.component.css']
})
export class ListacompComponent implements OnInit {

  ListarTodo: ConductorDatosComp[];

  constructor(private ConductorService:ConductorService) { }

  ngOnInit(): void {
    this.listarConductoresComp();
  }
  listarConductoresComp(){
    this.ConductorService.getConductoresComp().subscribe(
      res =>{
        console.log(res)
        this.ListarTodo=<any>res;
      },
      err => console.log(err)
    );
  }

}
