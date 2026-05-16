import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

type Tema = 'claro' | 'oscuro';

@Injectable({ providedIn: 'root' })
export class TemaService {
  private readonly documento = inject(DOCUMENT);
  readonly temaActual = signal<Tema>('claro');

  constructor() {
    effect(() => {
      const temaOscuro = this.temaActual() === 'oscuro';
      this.documento.body.classList.toggle('tema-oscuro', temaOscuro);
    });
  }

  alternarTema(): void {
    this.temaActual.update((tema) => (tema === 'claro' ? 'oscuro' : 'claro'));
  }
}
