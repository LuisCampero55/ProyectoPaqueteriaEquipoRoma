import { Component, OnInit } from '@angular/core';
import {Transporte,TransporteService} from '../../services/transporte.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  transporte: Transporte={
    idTransporte:'',
    Placas:'',
    Tipo:''
  };

  constructor(private TransporteService:TransporteService,private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.TransporteService.addTransporte(this.transporte).subscribe();
    this.router.navigate(['/inicio']);
  }
}
