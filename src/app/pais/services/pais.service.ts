import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiURL: string = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Pais[]>(url)
     //   .pipe(
          // catchError( err=>of(['Error controlado desde el of']))   //el of es una funcion que genera observable el cual transforma lo que pongamos 
                                                                  //en parentesis en un nuevo observable (lo que devuelve la peticion en caso de error)
     //   )
  }
}
   