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

  nuevo: Personaje ={nombre: 'Maestro Alguien', poder:100};

  agregar2 (event: any) 
  {
    event.preventDefault();
    console.log("agregar");
  }
  agregarNuevoPersonaje (personaje: Personaje) 
  {
      this.personajes.push(personaje);
      console.log("hola" ,personaje.nombre);
  }

}
