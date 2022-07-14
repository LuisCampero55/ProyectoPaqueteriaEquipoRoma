import { Component, OnInit } from '@angular/core';
import { TransporteService, Transporte,Consulta} from '../../services/transporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  ListarTransporte: Transporte[];
  ListarConsultas: Consulta[];
  constructor(private TransporteService: TransporteService, private router:Router) { }

  ngOnInit(): void {
    this.listarTransporte();
    this.listarConsultas();
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

  eliminar(id:string){
    this.TransporteService.deleteTransporte(id).subscribe(
      res=>{
        console.log('eliminado');
        this.listarTransporte();
      },
      err=> console.log(err)
    );
  }

  listarConsultas(){
    this.TransporteService.getConsultas().subscribe(
      res=>{
        console.log(res)
        this.ListarConsultas=<any>res;
      },
      err=>console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }


}
