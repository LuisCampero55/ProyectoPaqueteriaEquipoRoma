import { Router, ActivatedRoute } from '@angular/router';
import { RutasServiceService, CP } from './../../../service/rutas-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucp',
  templateUrl: './ucp.component.html',
  styleUrls: ['./ucp.component.css']
})
export class UcpComponent implements OnInit {

  cp:CP={
    idCP:'',
    Numero:''
  };

  constructor(private RutasServiceService:RutasServiceService, private router:Router, private activadeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idCP1 = <string> this.activadeRoute.snapshot.params['id'];
    console.log('ID de entrada: ' + idCP1);
    if(idCP1){
      this.RutasServiceService.getCPid(idCP1).subscribe(
        (res:any)=>{
          this.cp = <any>res[0]
          console.log(res[0])
        },
        err=>console.log(err)
      );
    }
  }

  mcp(){
    this.RutasServiceService.updateCP(this.cp.idCP, this.cp).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
    this.router.navigate(['/read']);
  }
}
