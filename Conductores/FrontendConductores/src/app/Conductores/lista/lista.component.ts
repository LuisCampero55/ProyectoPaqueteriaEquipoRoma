import { Component, OnInit } from '@angular/core';
import {ConductorService, Register} from '../../Services/conductor.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ListarRegister: Register[];

  constructor(private ConductorService:ConductorService) { }

  ngOnInit(): void {
    this.listarRegister();
  }

  listarRegister(){
    this.ConductorService.getRegister().subscribe(
      res =>{
        console.log(res)
        this.ListarRegister=<any>res;
      },
      err => console.log(err)
    );
  }

}
