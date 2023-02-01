import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-mostrar-gifs',
  templateUrl: './mostrar-gifs.component.html',
})
export class MostrarGifsComponent {

    get resultados() {
      return this.GifsService.resultados;
    }

    constructor( private GifsService: GifsService ) {}
}
