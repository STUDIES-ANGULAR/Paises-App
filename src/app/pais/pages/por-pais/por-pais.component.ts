import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino          : string = '';
  hayError         : boolean = false;
  mostrarSugerencias: boolean = false;
  
  paises          : Pais[]= [];
  paisesSugeridos : Pais [] = []; 
  

  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe((paises) => { //el subscribe es para que el observable se dispare, ya que no es una promesa 
        this.paises= paises;
       
      }, (err) => {
        // console.info(err);
        this.hayError = true;
        this.paises = [];
      });

  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    console.log(termino);
    
    //creamos las sugerencias..
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos= []
   
    );

    console.log('this.paisesSugeridos');
    console.log(this.paisesSugeridos);

  }

}
