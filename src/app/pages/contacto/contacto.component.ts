import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

type FormularioContacto = FormGroup<{
  nombre: FormControl<string>;
  email: FormControl<string>;
  mensaje: FormControl<string>;
}>;

@Component({
  selector: 'app-contacto',
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  readonly ultimaInteraccion = signal<string>('Esperando acciones del usuario...');
  readonly formulario: FormularioContacto = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    mensaje: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)]
    })
  });

  constructor() {
    // Registro en tiempo real de cambios para cumplir el evento valueChanges.
    this.formulario.valueChanges.pipe(takeUntilDestroyed()).subscribe((valorActual) => {
      this.ultimaInteraccion.set(
        `valueChanges -> Nombre: ${valorActual.nombre ?? ''}, Email: ${valorActual.email ?? ''}`
      );
    });
  }

  marcarBlur(campo: 'nombre' | 'email' | 'mensaje'): void {
    this.ultimaInteraccion.set(`blur -> El usuario salio del campo ${campo}`);
  }

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.ultimaInteraccion.set('submit -> Formulario invalido, corrige errores');
      return;
    }

    this.ultimaInteraccion.set('submit -> Mensaje enviado correctamente');
    this.formulario.reset({
      nombre: '',
      email: '',
      mensaje: ''
    });
  }

  mostrarError(campo: 'nombre' | 'email' | 'mensaje'): boolean {
    const control = this.formulario.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }
}
