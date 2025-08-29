import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActoresService } from '../actores.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SERVICIO_CURD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { IndiceEntidadComponent } from "../../compartidos/componentes/indice-entidad/indice-entidad.component";

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, SweetAlert2Module, IndiceEntidadComponent],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css',
  providers: [
    { provide: SERVICIO_CURD_TOKEN, useClass: ActoresService }
  ]
})
export class IndiceActoresComponent {


}
