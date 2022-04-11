import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[]= [];
  

  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.hayError= false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe((paises) => { //el subscribe es para que el observable se dispare, ya que no es una promesa 
        console.log(paises);
        this.paises= paises;
       
      }, (err) => {
        // console.info(err);
        this.hayError = true;
        this.paises = [];
      });

  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencias..
  }

}
