export interface CineDTO {
  id: number;
  nombre: string;
  latitud: number;
  longitud: number;
}

export interface CineCreacionDTO {
  nombre: string;
  ubicacion: ubicacionDTO;
}

export interface ubicacionDTO {
  latitud: number;
  longitud: number;
}
