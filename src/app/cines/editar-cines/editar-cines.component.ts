import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CinesService } from '../cines.service';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";

@Component({
  selector: 'app-editar-cines',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css',
  providers: [{
    provide: SERVICIO_CURD_TOKEN, useClass: CinesService
  }]
})
export class EditarCinesComponent {
  @Input({ transform: numberAttribute }) id!: number;

  formularioCines = FormularioCinesComponent;
}

