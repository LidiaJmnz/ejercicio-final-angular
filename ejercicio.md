	Introducción 

En esta serie de ejercicios vas a trabajar de forma progresiva en el desarrollo de aplicaciones web modernas utilizando Angular. El objetivo no es solo aprender a programar funcionalidades, sino entender cómo se construye una aplicación real desde cero, cómo se organiza el código y cómo se despliega en un entorno accesible públicamente.

A lo largo de las prácticas desarrollarás aplicaciones interactivas, trabajarás con el modelo de componentes, manipularás el DOM y aplicarás buenas prácticas de diseño y documentación. Además, se dará especial importancia al uso de herramientas profesionales que forman parte del flujo de trabajo real en el desarrollo web.

Cada ejercicio deberá ser gestionado mediante control de versiones utilizando GitHub. Esto implica que tendrás que realizar commits organizados y coherentes por cada tarea completada, permitiendo así hacer un seguimiento claro de tu progreso. Al finalizar, deberás entregar tanto el repositorio como la documentación técnica del proyecto.

En cuanto al despliegue, utilizarás Vercel para publicar tu aplicación Angular conectándola directamente con tu repositorio de GitHub, de forma que cada cambio se despliegue automáticamente en un dominio público. Además, realizarás un segundo despliegue manual mediante FTP utilizando un servicio como InfinityFree, con el objetivo de comprender distintos métodos de publicación en servidores web.

Estas prácticas están diseñadas para simular un entorno de trabajo real, donde no solo importa que la aplicación funcione, sino también cómo se construye, se versiona, se despliega y se documenta.

#  Desarrollo Web Entorno Cliente

## Resultados de aprendizaje

- R.A.5. Desarrolla aplicaciones web interactivas integrando mecanismos de manejo de eventos
- R.A.6. Desarrolla aplicaciones web analizando y aplicando las características del modelo de objetos del documento.
- R.A.7. Desarrolla aplicaciones web dinámicas, reconociendo y aplicando mecanismos de comunicación asíncrona entre cliente y servidor.
- R.A.3. Escribe código utilizando las funcionalidades aportadas por los objetos predefinidos del lenguaje.

---

Vamos a crear una web en Angular con diferentes componentes que contendrá lo siguiente:

# Ejercicio 1 (Navegación con Angular Router)

Deberás crear tres secciones: Inicio, Servicios y Contacto, cada una asociada a su propio componente. La navegación entre ellas se realizará mediante el sistema de rutas de Angular, configurando correctamente el RouterModule.

Es importante comprobar que al cambiar de sección no se produce una recarga completa de la página, sino que el contenido se actualiza dinámicamente. Además, la aplicación debe mostrar de forma clara qué sección está activa en cada momento.

## Resumen

Crear links con RouteModule.

- Inicio: Pantalla de Bienvenida con la descripción del proyecto.
- Servicios: Componente galería y blog
- Contacto: Componente Formulario.

## Requisitos

- Usar RouterModule
- Navegación sin recargar página
- Sección activa visible según ruta

---

# Ejercicio 2. Formulario con validación en Angular (Contacto)

## Componente Formulario

En la parte de contacto deberás crear un formulario con los campos Nombre, Email y Mensaje, utilizando FormGroup y FormControl. Será necesario aplicar validaciones básicas como campos obligatorios, formato de email válido y una longitud mínima para el mensaje.

Además, tendrás que gestionar eventos como los cambios en los valores (`valueChanges`), la pérdida de foco (`blur`) y el envío del formulario (`submit`).

El formulario debe mostrar los errores en tiempo real sin recargar la página y no permitir el envío si los datos no son válidos. Como mejora, puedes añadir indicadores visuales que muestren el estado de validez de cada campo.

---

# Ejercicio 3. Galería de imágenes interactiva (Servicio)

## Componente Galería

En este ejercicio vas a crear una galería de imágenes dentro de la sección de Servicios, trabajando el binding de propiedades en Angular.

La aplicación deberá mostrar varias miniaturas de imágenes y una imagen principal que se actualizará dinámicamente según la selección del usuario. Al hacer clic en una miniatura, esta pasará a mostrarse como imagen principal.

Además, la imagen seleccionada deberá quedar visualmente resaltada para mejorar la experiencia de usuario.

Para su desarrollo utilizarás directivas y bindings como `[src]`, `[alt]`, `[ngClass]` y `*ngIf`, gestionando la lógica de visualización de forma dinámica.

Como mejora, puedes añadir animaciones con Angular Animations para hacer la transición entre imágenes más fluida y atractiva.

---

# Ejercicio 4. Sistema de posts dinámicos

## Componente blog

En este ejercicio vas a desarrollar un pequeño sistema de gestión de contenido (CMS) utilizando Angular, trabajando la creación de estructuras dinámicas mediante componentes.

Deberás crear un formulario con los campos título y descripción. Al enviar el formulario, se generará un nuevo “post card” que se añadirá dinámicamente a la lista de publicaciones.

Cada post se mostrará como un componente independiente dentro de la interfaz, permitiendo visualizar múltiples elementos de forma ordenada y dinámica.

Como mejora, puedes añadir funcionalidades adicionales como botones para editar, eliminar y destacar publicaciones, lo que permitirá modificar el contenido en tiempo real.

---

# Ejercicio 5. Variables CSS + Angular binding (Modo Oscuro/Claro)

En este ejercicio vas a trabajar el uso de variables CSS junto con Angular para crear un sistema de cambio de tema visual en la aplicación.

Partirás de la definición de variables CSS para los colores principales de la interfaz, que serán utilizadas en los distintos componentes de la aplicación.

Como mejora principal, implementarás un botón que permita alternar entre modo claro y modo oscuro. Este botón deberá cambiar dinámicamente los estilos de la aplicación sin recargar la página.

Para ello, podrás utilizar Angular para modificar clases o estilos globales mediante binding, permitiendo que la interfaz cambie de apariencia en tiempo real.

#  Despliegues

## Resultados de Aprendizaje

- R.A.4. Administra servidores de transferencia de archivos, evaluando y aplicando criterios de configuración que garanticen la disponibilidad del servicio.
- R.A.5. Verifica la ejecución de aplicaciones web comprobando los parámetros de configuración de servicios de red.

En esta parte del proyecto se evaluará no solo el funcionamiento de la aplicación, sino también la forma en la que se organiza, versiona y publica el trabajo en entornos reales.

---

## Primera parte

En primer lugar, será obligatorio utilizar GitHub como sistema de control de versiones. Cada ejercicio deberá desarrollarse de forma independiente y quedar reflejado mediante commits diferenciados y descriptivos, evitando subir todo el proyecto en un único commit final. El objetivo es que se pueda seguir claramente la evolución del trabajo.

### Ejemplo de nombre de ramas

- `Feature/ejercicio1_1`
- `Feature/ejercicio2_x`

Todo debe acabar en la rama `main` con sus correspondientes pull request.

---

## Segunda Parte

Una vez finalizado el desarrollo, el repositorio de GitHub deberá conectarse con Vercel para realizar el despliegue automático de la aplicación. De este modo, el proyecto quedará publicado en un dominio público, actualizándose automáticamente cada vez que se realicen cambios en la rama principal.

Debe publicarse lo que contiene la rama `main`.

---

## Tercera parte

Además, como segunda forma de despliegue, se deberá subir el proyecto mediante FTP a un servicio de hosting gratuito como InfinityFree. En este caso, será necesario generar la versión de producción de Angular y transferir los archivos manualmente al servidor.

Crear una cuenta y publicar el proyecto en un dominio público.

---

# Final

Como resultado final, deberéis de entregar:

- Enlace al repositorio de GitHub con commits organizados.
- URL pública del despliegue en Vercel.
- Acceso o URL del proyecto subido por FTP en InfinityFree.

Este proceso permitirá trabajar un flujo de despliegue profesional, combinando control de versiones, integración continua y publicación manual en servidor.

#  Libre Configuración

## Resultados de aprendizaje

- R.A.6. Elabora la documentación de la aplicación web evaluando y seleccionando herramientas de generación de documentación, control de versiones y de integración continua.

---

# 1. Documentación del proyecto Angular

En este ejercicio deberás elaborar la documentación técnica completa del proyecto desarrollado en Angular. El objetivo es que el trabajo no solo funcione correctamente, sino que también esté bien explicado y estructurado para que otra persona pueda entenderlo y desplegarlo sin dificultades.

La documentación debe incluir una explicación clara de la arquitectura de la aplicación, detallando los componentes creados y la organización en módulos. También es necesario describir el sistema de routing, explicando las rutas implementadas y su funcionamiento dentro de la aplicación.

Además, deberás incluir una guía básica de instalación y despliegue, indicando los pasos necesarios para ejecutar el proyecto correctamente en local y en entorno de producción.

Este documento debe estar estructurado, ser claro y servir como guía técnica del proyecto completo.

---

# 2. Documentación de código Angular

En este ejercicio te centrarás en la documentación del código fuente del proyecto, aplicando buenas prácticas de desarrollo.

Deberás documentar correctamente los componentes, servicios y métodos TypeScript, explicando su propósito y funcionamiento de forma clara y comprensible.

Es importante utilizar comentarios dentro del código que ayuden a entender la lógica de cada parte del sistema, especialmente en funciones o bloques que tengan cierta complejidad.

El objetivo es que el código no solo funcione, sino que también sea fácil de mantener, revisar y comprender por otros desarrolladores o por ti mismo en el futuro.

#  Entregables

Se debe entregar lo siguiente:

- Código de los ejercicios.
- URL del Github.
- URL Vercel con la web funcionando.
- URL de Infinityfree con la web funcionando.
- Documentación.

#  Criterios de Evaluación

# 1. Funcionamiento de la aplicación (30%)

- La aplicación funciona correctamente sin errores.
- Todas las funcionalidades de los ejercicios están implementadas.
- Se utilizan correctamente los componentes, rutas, formularios y servicios de Angular.
- La navegación SPA se realiza sin recargas de página.
- Las interacciones del usuario responden correctamente (eventos, formularios, etc.).

# 2. Estructura y calidad del código (20%)

- Correcta organización del proyecto en componentes, módulos y servicios.
- Uso adecuado de buenas prácticas en Angular.
- Código limpio, legible y bien estructurado.
- Uso correcto de binding, directivas y manejo del DOM.
- Separación adecuada de lógica y presentación.

# 3. Control de versiones con GitHub (15%)

- Uso correcto de GitHub como sistema de control de versiones.
- Commits organizados, progresivos y con mensajes descriptivos.
- No se aceptan repositorios con un único commit final.
- Evidencia clara del trabajo incremental en cada ejercicio.

# 4. Despliegue de la aplicación (15%)

- Despliegue correcto en Vercel con conexión al repositorio.
- Aplicación accesible mediante URL pública funcional.
- Despliegue adicional mediante FTP en InfinityFree.
- Correcta generación del build de producción de Angular.
- Funcionamiento correcto de rutas en entorno de producción.

# 5. Documentación del proyecto (20%)

- Documentación completa del proyecto Angular.
- Explicación clara de arquitectura, routing y estructura general.
- Inclusión de guía de instalación y despliegue.
- Documentación del código con comentarios claros en componentes, servicios y métodos.
- Claridad, orden y presentación del documento.



# REGLAS DE ORO: 
- Se debe usar: 
-- Angular v19
-- Angular Materials
-- EN NINGUN CASO SE USARÁ EL TIPO ANY
-- Es obligatorio el uso de Signal
-- Codigo sencillo y en castellano