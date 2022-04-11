import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService  
  ) { } //ActivatedRoute me permite subscribirme a cualquier cambio del URL

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({idPais})=>{
      console.log(idPais);

      this.paisService.getPaisPorCodigo (idPais)
      .subscribe(pais =>{
        console.log(pais);

      })

    })
  }

}
