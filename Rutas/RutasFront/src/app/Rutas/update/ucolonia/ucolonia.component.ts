import { RutasServiceService, Colonia } from './../../../service/rutas-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucolonia',
  templateUrl: './ucolonia.component.html',
  styleUrls: ['./ucolonia.component.css']
})
export class UcoloniaComponent implements OnInit {

  colonia:Colonia={
    idColonias:'',
    Nombre:''
  };

  constructor(private router:Router, private RutasServiceService:RutasServiceService, private activadeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idColonias1 = <string> this.activadeRoute.snapshot.params['id'];
    console.log('ID de entrada: ' + idColonias1);
    if(idColonias1){
      this.RutasServiceService.getColoniaid(idColonias1).subscribe(
        (res:any)=>{
          this.colonia = <any>res[0]
          console.log(res[0])
        },
        err=>console.log(err)
      );
    }
  }

  mcolonia(){
    this.RutasServiceService.updateColonia(this.colonia.idColonias, this.colonia).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
    this.router.navigate(['/read']);
  }
}
