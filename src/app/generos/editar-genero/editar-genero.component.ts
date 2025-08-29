import { Component, Input, numberAttribute } from '@angular/core';
import { FormulariosGeneroComponent } from "../formularios-genero/formularios-genero.component";
import { GenerosService } from '../generos.service';
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";

@Component({
  selector: 'app-editar-genero',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
  providers: [
    { provide: SERVICIO_CURD_TOKEN, useClass: GenerosService }
  ]
})
export class EditarGeneroComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  formularioGenero = FormulariosGeneroComponent;
}
