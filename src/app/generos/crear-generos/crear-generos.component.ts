import { GenerosService } from './../generos.service';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormulariosGeneroComponent } from "../formularios-genero/formularios-genero.component";
import { GeneroCreacionDTO } from '../generos';
import { extraerErrores } from '../../compartidos/funciones/exetraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormulariosGeneroComponent, MostrarErroresComponent, CrearEntidadComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  providers: [{
    provide: SERVICIO_CURD_TOKEN, useClass: GenerosService
  }]
})
export class CrearGenerosComponent {
  formularioGeneros = FormulariosGeneroComponent;

}
