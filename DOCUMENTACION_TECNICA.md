# Documentacion tecnica del proyecto Angular

## 1. Arquitectura general

Aplicacion SPA construida con Angular 19 usando componentes standalone.

### Estructura principal

- `src/app/app.component.*`: shell principal con barra de navegacion y cambio de tema.
- `src/app/app.routes.ts`: definicion de rutas de la aplicacion.
- `src/app/servicios/tema.service.ts`: servicio global para alternar tema claro/oscuro con signals.
- `src/app/pages/`: paginas de primer nivel (`inicio`, `servicios`, `contacto`).
- `src/app/components/`: componentes reutilizables (`galeria`, `blog`, `tarjeta-post`).
- `src/app/modelos/post.interface.ts`: contrato de tipo para publicaciones del blog.

## 2. Routing implementado

Rutas configuradas:

- `/inicio`: pantalla de bienvenida y descripcion del proyecto.
- `/servicios`: incluye galeria interactiva y blog dinamico.
- `/contacto`: formulario reactivo con validaciones y eventos.
- `**`: redireccion a `/inicio`.

La navegacion es SPA, por tanto el contenido cambia sin recarga completa.

## 3. Componentes y funcionalidad

### 3.1 Inicio

- Presenta el objetivo del proyecto y tecnologias usadas.
- Uso de Angular Material para maquetacion.

### 3.2 Servicios

- Contenedor de los componentes `app-galeria` y `app-blog`.

### 3.3 Contacto

- Formulario tipado con:
  - `nombre` (obligatorio, minimo 2).
  - `email` (obligatorio, formato valido).
  - `mensaje` (obligatorio, minimo 10).
- Eventos implementados:
  - `valueChanges`: seguimiento de cambios en tiempo real.
  - `blur`: registro al salir de cada campo.
  - `submit`: envio solo si es valido.
- Muestra errores sin recargar pagina y bloquea envio si es invalido.

### 3.4 Galeria

- Usa binding y directivas solicitadas: `[src]`, `[alt]`, `[ngClass]`, `*ngIf`.
- Muestra miniaturas + imagen principal dinamica.
- Resalta visualmente la miniatura activa.
- Estado gestionado con `signals`.

### 3.5 Blog dinamico

- Formulario para crear posts con `titulo` y `descripcion`.
- Cada elemento se renderiza en una tarjeta independiente (`app-tarjeta-post`).
- Mejora implementada:
  - Editar post.
  - Eliminar post.
  - Marcar/desmarcar destacado.
- Estado de lista y edicion gestionado con `signals`.

### 3.6 Tema claro/oscuro

- Definicion de variables CSS globales en `src/styles.scss`.
- Alternancia de tema con `TemaService` y `signal`.
- Cambio dinamico de clase en `body` sin recargar pagina.

## 4. Buenas practicas aplicadas

- Tipado estricto y sin `any`.
- Separacion clara de responsabilidad por componentes.
- Formularios reactivos tipados.
- Estado local con signals para simplificar logica.
- Comentarios breves en bloques de logica menos obvios.

## 5. Guia de instalacion

1. Clonar el repositorio.
2. Ejecutar:
   ```bash
   npm install
   ```
3. Iniciar entorno local:
   ```bash
   npm start
   ```
4. Abrir `http://localhost:4200/`.

## 6. Guia de despliegue

### 6.1 Vercel (automatico)

1. Subir cambios a rama `main` en GitHub.
2. Importar repositorio en Vercel.
3. Configurar:
   - Framework preset: Angular
   - Build command: `npm run build`
   - Output directory: `dist/angular-final/browser`
4. Desplegar.

### 6.2 InfinityFree por FTP (manual)

1. Generar build de produccion:
   ```bash
   npm run build
   ```
2. Abrir cliente FTP (FileZilla, por ejemplo).
3. Conectar con credenciales de InfinityFree.
4. Subir contenido de `dist/angular-final/browser` a `htdocs`.
5. Comprobar URL publica del hosting.

## 7. Entregables finales

- Codigo fuente completo.
- URL del repositorio GitHub.
- URL publica en Vercel.
- URL publica en InfinityFree.
- Esta documentacion tecnica.
