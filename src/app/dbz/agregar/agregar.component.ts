
import { Component, Input, Output,EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {


 
  @Input() nuevo: Personaje = {
    nombre: '',
    poder : 0
  }
  
 // @Output() onNuevoPersonajeCreado: EventEmitter<Personaje> = new EventEmitter();


    cambiarNombre(event: any)
    {
      console.log(event);
      
    }

constructor(private dbzService: DbzService){}

    agregar () : void
    {
      if (this.nuevo.nombre.trim().length == 0) {return;}
      //this.onNuevoPersonajeCreado.emit(this.nuevo);
      this.dbzService.agregarPersonaje(this.nuevo);
      this.nuevo = {nombre: '', poder: 0}
      
    }
  
  }


