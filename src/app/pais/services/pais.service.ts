import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pais } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiURL: string = 'https://restcountries.com/v3.1/';
private apiURLv2: string = 'https://restcountries.com/v2/regionalbloc/';



  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    
    const url = `${this.apiURL}name/${termino}`;
    return this.http.get<Pais[]>(url);
     //   .pipe(
          // catchError( err=>of(['Error controlado desde el of']))   //el of es una funcion que genera observable el cual transforma lo que pongamos 
                                                                  //en parentesis en un nuevo observable (lo que devuelve la peticion en caso de error)
     //   )
  }

  buscarPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiURL}capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorCodigo(idPais: string): Observable<Pais> {
    const url = `${this.apiURL}alpha/${idPais}`;
    return this.http.get<Pais>(url);
  }

  
  buscarPorRegion(region: string): Observable<Pais[]> {
    const httpParams = new HttpParams() 
          .set('fields', 'name,capital,alpha2Code,flag,population');

    const url = `${this.apiURLv2}${region}`;
    return this.http.get<Pais[]>(url, {params: httpParams}); //o puedo dejarlo solo {params}  cambiando el httpParams por params
  }

}
