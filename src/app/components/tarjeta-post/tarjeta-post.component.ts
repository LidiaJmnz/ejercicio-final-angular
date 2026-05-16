import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PostBlog } from '../../modelos/post.interface';

@Component({
  selector: 'app-tarjeta-post',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './tarjeta-post.component.html',
  styleUrl: './tarjeta-post.component.scss'
})
export class TarjetaPostComponent {
  readonly post = input.required<PostBlog>();
  readonly editar = output<number>();
  readonly eliminar = output<number>();
  readonly destacar = output<number>();
}
