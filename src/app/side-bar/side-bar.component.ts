import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

  get historial(){
    return this.GifsService.historial;
  }

  constructor( private GifsService: GifsService ) {}

  Buscar ( termino: string ){
    this.GifsService.BuscarGifs( termino );
    
  }
}

