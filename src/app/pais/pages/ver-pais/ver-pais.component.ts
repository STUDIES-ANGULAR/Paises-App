import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap, tap} from 'rxjs';

import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais[];

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService  
  ) { } //ActivatedRoute me permite subscribirme a cualquier cambio del URL

  ngOnInit(): void {
    
        //OPCION #1
  //   this.activatedRoute.params.subscribe( ({idPais})=>{
  //     console.log(idPais);

  //     this.paisService.getPaisPorCodigo (idPais)
  //     .subscribe(pais =>{
  //       console.log(pais);
  //     })
  //   })

        //  OPCION #2
        this.activatedRoute.params
          .pipe(
            switchMap(({idPais}) => this.paisService.getPaisPorCodigo(idPais) ), // el  switchMap es un operador de transformacion recibe un observable y devuelve otro observable
            tap(console.log) //el tap imprime lo que responde el  observable , es como imprimir la respuesta directamente ejem: tap (resp=> console.log(resp))

          )
          .subscribe(pais =>{
          //  console.log(pais); //es la respuesta de la peticion al servicio en el pipe
            this.pais = pais;
          });
  }

}
