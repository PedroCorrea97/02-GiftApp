import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsMainPageComponent } from './gifs-main-page/gifs-main-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MostrarGifsComponent } from './mostrar-gifs/mostrar-gifs.component';



@NgModule({
  declarations: [
    GifsMainPageComponent,
    BusquedaComponent,
    MostrarGifsComponent
  ],
  exports: [
    GifsMainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
