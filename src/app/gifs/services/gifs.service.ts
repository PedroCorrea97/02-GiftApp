import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private apiKey: string = '6i8dCEi5VjS4Yh9rLDhsARE48WTDstPA';
    private _historial: string [] = [];

    get historial () {
      return [...this._historial];
    }

    BuscarGifs( query: string = '') {

      query = query.trim().toLocaleLowerCase();

      if ( !this._historial.includes( query ) ) {
        this._historial.unshift( query );
        this._historial = this._historial.splice(0,10);
      }
      console.log(this._historial);
      
       
    }

}
