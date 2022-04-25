import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[]= [];

  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.hayError= false;
    this.termino = termino;

    this.paisService.buscarPorCapital(termino)
      .subscribe((paises) => { //el subscribe es para que el observable se dispare, ya que no es una promesa 
        this.paises= paises;
      }, (err) => {
        // console.info(err);
        this.hayError = true;
        this.paises = [];
      });

  }


}
