import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TemaService } from './servicios/tema.service';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly temaService = inject(TemaService);
  readonly temaOscuro = computed(() => this.temaService.temaActual() === 'oscuro');

  cambiarTema(): void {
    this.temaService.alternarTema();
  }
}
