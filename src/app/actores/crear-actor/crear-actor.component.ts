import { Component } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActoresService } from '../actores.service';
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-actor',
  imports: [CrearEntidadComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css',
  providers: [
    { provide: SERVICIO_CURD_TOKEN, useClass: ActoresService }
  ]
})
export class CrearActorComponent {
  formularioActores = FormularioActoresComponent;

}
