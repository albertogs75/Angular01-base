import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService 
{

private _personajes:  Personaje[] = [
    { nombre : 'Goku', poder : 15000},
    { nombre : 'Trunk', poder : 1500},
    { nombre : 'Otro', poder : 1200},
  ]

get personaje(){
    return [...this._personajes];
    // estos 3 puntos es un clone
}
constructor (){}

agregarPersonaje (personaje: Personaje) {
      this._personajes.push(personaje);
  }
}