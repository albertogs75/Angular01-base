import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

interface Personaje {
  nombre:string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

nuevo: Personaje = {
  nombre: 'Trunks',
  poder : 14000
}

  cambiarNombre(event: any)
  {
    console.log(event);
  }
  agregar () 
  {
    console.log(this.nuevo);
  }
  agregar2 (event: any) 
  {
    event.preventDefault();
    console.log("agregar");
  }

}
