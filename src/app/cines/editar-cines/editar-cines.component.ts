import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent {
  @Input({ transform: numberAttribute }) id!: number;

  cine: CineDTO = { id: 1, nombre: 'Acropolis', latitud: 19.408183935275694, longitud: -99.11282045634084 };

  guardarCambios(cine: CineCreacionDTO) {
    console.log('actualizando cine', cine);
  }
}

