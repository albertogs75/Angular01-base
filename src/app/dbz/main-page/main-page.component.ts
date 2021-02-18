import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  nuevo: Personaje ={nombre: 'Maestro Alguien', poder:100};
  

  agregar2 (event: any) 
  {
    event.preventDefault();
    console.log("agregar");
  }

  
}
