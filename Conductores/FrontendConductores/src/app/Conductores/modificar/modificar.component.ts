import { Component, OnInit } from '@angular/core';
import {Conductor,ConductorService} from '../../Services/conductor.service';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  conductores: Conductor = {
    idConductor: '',
    //nombre:'',
    //apellido:'',
    //edad:undefined,
    idDatos: '',
    idTransRuta: '',
    Licencia:''
  }

  constructor(private ConductorService: ConductorService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idEntrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log('id de entrada: ' + idEntrada);

    if (idEntrada) {
      this.ConductorService.getConductores(idEntrada).subscribe(
        (res: any) => {
          this.conductores = <any>res[0];
          console.log(res[0]);
        },
        err => console.log(err)
      );
    }
  }

  modificar() {
    this.ConductorService.editConduc(this.conductores.idConductor, this.conductores).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
    this.router.navigate(['/inicio']);
  }
}
