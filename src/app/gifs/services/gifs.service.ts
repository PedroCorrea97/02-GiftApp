import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Gifs, SearchGifsResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private apiKey: string = '6i8dCEi5VjS4Yh9rLDhsARE48WTDstPA';
    private _historial: string [] = [];

    public resultados: Gifs [] = [];

    get historial () {
      return [...this._historial];
    }

    constructor( private http: HttpClient) { }

    BuscarGifs( query: string = '') {

      query = query.trim().toLocaleLowerCase();

      if ( !this._historial.includes( query ) ) {
        this._historial.unshift( query );
        this._historial = this._historial.splice(0,10);

        localStorage.setItem('historial, ')
      }

      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=6i8dCEi5VjS4Yh9rLDhsARE48WTDstPA&q=${ query }&limit=10`)
            .subscribe( (resp ) => {
              console.log( resp.data );
              this.resultados = resp.data;
            });
    }

}
