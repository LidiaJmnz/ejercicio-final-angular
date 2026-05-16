import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface ImagenGaleria {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Component({
  selector: 'app-galeria',
  imports: [CommonModule, MatCardModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  readonly imagenes = signal<ImagenGaleria[]>([
    {
      id: 1,
      titulo: 'Desarrollo Frontend',
      descripcion: 'Interfaz moderna desarrollada con Angular y Material.',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      titulo: 'Trabajo en equipo',
      descripcion: 'Planificacion y organizacion de tareas en proyectos reales.',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      titulo: 'Diseño UI',
      descripcion: 'Prototipado y experiencia de usuario para aplicaciones SPA.',
      url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80'
    }
  ]);

  readonly imagenSeleccionada = signal<ImagenGaleria>(this.imagenes()[0]);

  seleccionarImagen(imagen: ImagenGaleria): void {
    this.imagenSeleccionada.set(imagen);
  }
}
