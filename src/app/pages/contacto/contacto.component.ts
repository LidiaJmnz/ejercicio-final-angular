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

type TipoEstadoPanelContacto = 'info' | 'exito' | 'aviso';

@Component({
  selector: 'app-contacto',
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  readonly textoEstado = signal<string>('Rellena el formulario. Aqui veras los eventos del ejercicio.');
  readonly tipoEstadoPanel = signal<TipoEstadoPanelContacto>('info');
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
      this.tipoEstadoPanel.set('info');
      const nombre = valorActual.nombre ?? '';
      const email = valorActual.email ?? '';
      this.textoEstado.set(`Cambios en el formulario: nombre "${nombre}", correo "${email}".`);
    });
  }

  marcarBlur(campo: 'nombre' | 'email' | 'mensaje'): void {
    this.tipoEstadoPanel.set('info');
    const etiquetas: Record<'nombre' | 'email' | 'mensaje', string> = {
      nombre: 'Nombre',
      email: 'Correo',
      mensaje: 'Mensaje'
    };
    this.textoEstado.set(`Has salido del campo "${etiquetas[campo]}".`);
  }

  /**
   * Encapsula el envio para poder llamar preventDefault y evitar errores del navegador con submit nativo.
   */
  onSubmitFormulario(evento: SubmitEvent): void {
    evento.preventDefault();
    this.enviarFormulario();
  }

  enviarFormulario(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.tipoEstadoPanel.set('aviso');
      this.textoEstado.set('Faltan datos o hay errores. Revisa los campos en rojo y vuelve a intentarlo.');
      return;
    }

    // Reset sin disparar valueChanges hasta terminar evita estados intermedios extranos en Material.
    this.formulario.reset(
      {
        nombre: '',
        email: '',
        mensaje: ''
      },
      { emitEvent: false }
    );
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();

    this.tipoEstadoPanel.set('exito');
    this.textoEstado.set(
      '¡Listo! Los datos son validos (solo practica en el navegador, no se envian a ningun servidor).'
    );
  }

  mostrarError(campo: 'nombre' | 'email' | 'mensaje'): boolean {
    const control = this.formulario.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }
}
