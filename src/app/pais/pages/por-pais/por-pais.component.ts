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

  buscar() {
    this.hayError= false;
    console.log(this.termino);
    
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => { //el subscribe es para que el observable se dispare, ya que no es una promesa 
        console.log(paises);
        this.paises= paises;
       
      }, (err) => {
        // console.info(err);
        this.hayError = true;
        this.paises = [];
      });

  }

}
