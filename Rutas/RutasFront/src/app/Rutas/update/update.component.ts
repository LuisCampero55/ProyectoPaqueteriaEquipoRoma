import { ActivatedRoute, Router } from '@angular/router';
import { Ruta, RutasServiceService } from './../../service/rutas-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  ruta:Ruta={
    idRuta:'',
    Ruta:'',
    idColCP:''
  };

  constructor(private RutasServiceService:RutasServiceService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idRuta1 = <string> this.activateRoute.snapshot.params['id'];
    console.log('ID de entrada: ' + idRuta1);
    if(idRuta1){
      this.RutasServiceService.getRutaid(idRuta1).subscribe(
        (res:any)=>{
          this.ruta = <any>res[0]
          console.log(res[0])
        },
        err=>console.log(err)
      );
    }
  }

  mruta(){
    this.RutasServiceService.updateRuta(this.ruta.idRuta, this.ruta).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
    this.router.navigate(['/read']);
  }

}
