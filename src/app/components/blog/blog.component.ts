import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostBlog } from '../../modelos/post.interface';
import { TarjetaPostComponent } from '../tarjeta-post/tarjeta-post.component';

type FormularioPost = FormGroup<{
  titulo: FormControl<string>;
  descripcion: FormControl<string>;
}>;

@Component({
  selector: 'app-blog',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TarjetaPostComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  readonly formulario: FormularioPost = new FormGroup({
    titulo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  readonly posts = signal<PostBlog[]>([]);
  readonly postEnEdicionId = signal<number | null>(null);
  private ultimoId = 0;

  guardarPost(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const titulo = this.formulario.controls.titulo.value;
    const descripcion = this.formulario.controls.descripcion.value;
    const idEditando = this.postEnEdicionId();

    // Si hay un id en edicion, actualizamos ese post; si no, creamos uno nuevo.
    if (idEditando !== null) {
      this.posts.update((listaActual) =>
        listaActual.map((post) =>
          post.id === idEditando ? { ...post, titulo, descripcion } : post
        )
      );
      this.postEnEdicionId.set(null);
    } else {
      this.ultimoId += 1;
      const nuevoPost: PostBlog = {
        id: this.ultimoId,
        titulo,
        descripcion,
        fecha: new Date(),
        destacado: false
      };
      this.posts.update((listaActual) => [nuevoPost, ...listaActual]);
    }

    this.formulario.reset({
      titulo: '',
      descripcion: ''
    });
  }

  editarPost(id: number): void {
    const post = this.posts().find((item) => item.id === id);
    if (!post) {
      return;
    }

    this.postEnEdicionId.set(id);
    this.formulario.setValue({
      titulo: post.titulo,
      descripcion: post.descripcion
    });
  }

  eliminarPost(id: number): void {
    this.posts.update((listaActual) => listaActual.filter((post) => post.id !== id));
    if (this.postEnEdicionId() === id) {
      this.cancelarEdicion();
    }
  }

  alternarDestacado(id: number): void {
    // Cambia solo el estado destacado del post seleccionado.
    this.posts.update((listaActual) =>
      listaActual.map((post) =>
        post.id === id ? { ...post, destacado: !post.destacado } : post
      )
    );
  }

  cancelarEdicion(): void {
    this.postEnEdicionId.set(null);
    this.formulario.reset({
      titulo: '',
      descripcion: ''
    });
  }
}
