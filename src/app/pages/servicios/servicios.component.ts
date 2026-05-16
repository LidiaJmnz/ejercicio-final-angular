import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { BlogComponent } from '../../components/blog/blog.component';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-servicios',
  imports: [BlogComponent, GaleriaComponent, MatDividerModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {}
