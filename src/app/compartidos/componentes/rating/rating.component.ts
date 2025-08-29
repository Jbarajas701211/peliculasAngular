import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  ngOnInit(): void {
    this.ratingAnterior = this.ratingSeleccionado;
  }
  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0) })
  maximoRating!: number[];

  @Input()
  ratingSeleccionado = 0;

  @Output()
  votado = new EventEmitter<number>();

  ratingAnterior = 0;

  //maximoRatingArreglo: any[] = [];

  manejarMouseEnter(indice: number): void {
    this.ratingSeleccionado = indice + 1;
  }

  manejarMouseLeave(): void {
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior;
    } else {
      this.ratingSeleccionado = 0;
    }
  }

  manejarClick(indice: number): void {
    this.ratingSeleccionado = indice + 1;
    this.ratingAnterior = this.ratingSeleccionado;
    this.votado.emit(this.ratingSeleccionado);
  }
}
