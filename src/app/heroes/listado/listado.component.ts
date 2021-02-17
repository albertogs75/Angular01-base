import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['heroe 1','heroe 2','heroe 3','heroe 4'];
  heroeBorrado: string = '';
  mostrarEtiqueta: boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.mostrarEtiqueta =(this.heroeBorrado != undefined)
    
  }
}
