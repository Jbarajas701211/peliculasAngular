import { GenerosService } from './../generos.service';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormulariosGeneroComponent } from "../formularios-genero/formularios-genero.component";
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, CrearEntidadComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  providers: [{
    provide: SERVICIO_CURD_TOKEN, useClass: GenerosService
  }]
})
export class CrearGenerosComponent {
  formularioGeneros = FormulariosGeneroComponent;

}
