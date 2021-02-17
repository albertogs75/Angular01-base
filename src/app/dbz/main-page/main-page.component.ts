import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  personajes:  Personaje[] = [
    { nombre : 'Goku', poder : 15000},
    { nombre : 'Trunk', poder : 1500},
    { nombre : 'Otro', poder : 1200},
  ]

nuevo: Personaje = {
  nombre: '',
  poder : 0
}

  cambiarNombre(event: any)
  {
    console.log(event);
  }
  agregar () 
  {
    if (this.nuevo.nombre.trim().length == 0) {return;}
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '', poder: 0
    }
    console.log(this.nuevo);
  }
  agregar2 (event: any) 
  {
    event.preventDefault();
    console.log("agregar");
  }

}
