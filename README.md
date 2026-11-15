HTML EVIL · Recuperá el informe
Objeto de Aprendizaje (OA) para el Sprint 3 de Ciencias de la Computación.  
El estudiante asume el rol de agente de recuperación del Laboratorio Cero y debe restaurar un informe usando las etiquetas HTML `<h1>` y `<p>`.
OA publicado: https://braianm-dev.github.io/oa/  
Documento de diseño: DISENO.md
---
Qué enseña
Al terminar el OA el estudiante podrá:
Identificar la etiqueta del título principal (`<h1>`)
Completar un párrafo con sus etiquetas de apertura y cierre (`<p>` … `</p>`)
Reparar un fragmento de código con un error en el cierre de un párrafo
Público: nivel inicial  
Tiempo estimado: 15–20 minutos  
Conocimientos previos: lectura y escritura básica (no se necesita programar)
---
Archivos del proyecto
Archivo	Contenido
`index.html`	Estructura semántica + 3 formularios
`styles.css`	Estilos (paleta de laboratorio en emergencia)
`script.js`	Lógica de corrección, feedback DOM y puntos
`etiquetas.png`	Imagen de apoyo (apertura, texto y cierre)
`DISENO.md`	Documento de diseño completo
`README.md`	Este archivo
---
Actividades
Identificá la etiqueta del título — opción múltiple (radio)
Completá el párrafo — dos campos de texto
Repará el informe final — textarea
Cada formulario:
Detecta respuesta vacía y muestra un aviso
Corrige con lógica `if / else`
Escribe el feedback en el DOM (sin `alert` ni recarga de página)
Suma puntos de integridad y marca el reto como resuelto
---
Gamificación
Puntos de integridad: +10 por cada reto correcto (máximo 30)
Barra de progreso: muestra 0/3 a 3/3 retos resueltos
Recompensa narrativa: al completar los tres retos aparece el mensaje «Informe recuperado · Sector asegurado» y el badge de Agente de recuperación
---
Cómo probarlo localmente
Abrí `index.html` en el navegador o serví la carpeta:
```bash
python -m http.server 5500
```
Luego visitá `http://localhost:5500/`.
No necesita servidor extra ni conexión a internet una vez cargado.
---
Narrativa
El sistema del laboratorio perdió la estructura del informe.  
El estudiante es el agente de recuperación. Su misión es restaurar el título principal y el párrafo usando solo dos etiquetas HTML. Cada acierto suma integridad al sistema.
---
Nota sobre Inteligencia Artificial
Se utilizó asistencia de IAG (Grok – xAI) para proponer la organización de la estructura, la lógica de los formularios, el diseño visual y la redacción de textos de apoyo.  
El contenido pedagógico, la selección de actividades y la validación final fueron revisados y ajustados por el autor.
---
Autor: Braian Mosqueira  
Módulo: Ciencias de la Computación · Sprint 3
