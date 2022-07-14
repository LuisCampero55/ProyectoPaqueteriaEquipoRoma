import { Component, OnInit } from '@angular/core';
import { TransporteService, Transporte } from '../../services/transporte.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transporte: Transporte={
    idTransporte:'',
    Placas:'',
    Tipo:'',
  };

  ListarTransporte: Transporte[];
  constructor(private TransporteService: TransporteService, private router:Router, private activeRoute:ActivatedRoute) { }
 

  ngOnInit(): void {
    this.listarTransporte();
    /*const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada'+id_entrada);
  
      if(id_entrada){
        this.TransporteService.getunTransporte(id_entrada).subscribe(
          (res:any) =>{
            this.transporte = <any>res[0]
          },
          err => console.log(err)
        );///*
      } */
  }
  listarTransporte()
  {
    this.TransporteService.getTransportes().subscribe(
      res=>{
        console.log(res)
        this.ListarTransporte=<any>res;
      },
      err=>console.log(err)
    )
  }

  modificar(){

    this.TransporteService.editTransporte(this.transporte.idTransporte, this.transporte).subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    );

    this.router.navigate(['/inicio']);
  }

}
