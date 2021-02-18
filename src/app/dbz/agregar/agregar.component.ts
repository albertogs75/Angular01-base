
import { Component, Input, Output,EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {


 
  @Input() nuevo: Personaje = {
    nombre: '',
    poder : 0
  }
  
  @Output() onNuevoPersonajeCreado: EventEmitter<Personaje> = new EventEmitter();


    cambiarNombre(event: any)
    {
      console.log(event);
      
    }
    agregar () 
    {
      if (this.nuevo.nombre.trim().length == 0) {return;}
      this.onNuevoPersonajeCreado.emit(this.nuevo);
      console.log(this.nuevo);
      this.nuevo = {nombre: '', poder: 0}
      
    }
  
  }


