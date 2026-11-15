# Diseño del Objeto de Aprendizaje  
## HTML EVIL · Recuperá el informe  
**Sprint 3 · Ciencias de la Computación**  
**Autor:** Braian Mosqueira  

---

## 1. Título y datos generales

| Campo | Valor |
|-------|--------|
| Nombre del OA | HTML EVIL · Recuperá el informe |
| Versión | 1.0 – Sprint 3 |
| Autor | Braian Mosqueira |
| Modalidad | Individual o en pareja |
| Tiempo estimado | 15–20 minutos |
| Nivel | Inicial |

---

## 2. Público objetivo

Estudiantes de educación media que se inician en HTML.  
**Conocimientos previos:** lectura de frases breves y escritura básica.  
No se necesita saber programar.

---

## 3. Objetivo general del OA

Que los estudiantes puedan escribir un título principal y un párrafo con HTML, utilizando correctamente las etiquetas `<h1>` y `<p>` con sus cierres, al resolver tres retos de recuperación de un informe de laboratorio.

Al finalizar, el estudiante será capaz de:

- Identificar la etiqueta del título principal (`<h1>`).
- Completar un párrafo con sus etiquetas de apertura y cierre (`<p>` … `</p>`).
- Reparar un fragmento de código que tiene un error en el cierre de un párrafo.

---

## 4. Narrativa utilizada

El estudiante asume el rol de **agente de recuperación** del Laboratorio Cero.  

El sistema del laboratorio perdió la estructura del informe. Su misión es restaurar el título principal y el párrafo usando solo dos etiquetas de HTML.  

La narrativa de acción atraviesa todo el OA:

- Títulos y textos de presentación
- Consignas de los retos
- Mensajes de feedback
- Panel de integridad y progreso
- Mensaje final y recompensa

Cada acierto suma **puntos de integridad** al sistema. Al completar los tres retos se desbloquea la recompensa narrativa:  
**«Informe recuperado · Sector asegurado»**.

---

## 5. Estructura del OA

1. **Cabecera** – Nombre del OA + navegación  
2. **Panel de puntaje** – Integridad, retos resueltos y barra de progreso (siempre visible)  
3. **Misión** – Narrativa y rol del estudiante  
4. **Objetivo** – Qué va a poder hacer al terminar  
5. **Aprender** – Explicación de `<h1>` y `<p>` + ejemplo + imagen de apoyo  
6. **Retos** – Tres formularios de distinto tipo  
7. **Cierre** – Mensaje final + botón de reinicio  

---

## 6. Actividades (formularios)

| # | Nombre del reto | Tipo de formulario | Respuesta correcta |
|---|-----------------|--------------------|--------------------|
| 1 | Identificá la etiqueta del título | Radio (opción múltiple) | `<h1>` |
| 2 | Completá el párrafo | Dos campos de texto | `p` y `p` |
| 3 | Repará el informe final | Textarea | Código con cierre `</p>` correcto |

Cada formulario:

- Detecta respuesta vacía y muestra un aviso.
- Corrige con lógica `if / else`.
- Escribe el feedback en el DOM (sin `alert` ni recarga de página).
- Suma puntos y marca el reto como resuelto solo la primera vez que se responde bien.

---

## 7. Gamificación

### Mecánicas usadas
- Puntos
- Barra de progreso
- Misiones / retos
- Recompensas narrativas

### Cómo funcionan

- **Puntos:** se ganan 10 puntos de integridad por cada reto resuelto correctamente (máximo 30).
- **Barra de progreso:** muestra visualmente cuántos retos se completaron (0/3 a 3/3).
- **Misiones:** tres retos secuenciales (identificar, completar y reparar) que el estudiante resuelve en su rol de agente de recuperación.
- **Recompensa narrativa:** al completar los tres retos aparece el mensaje «Informe recuperado · Sector asegurado» y el badge de Agente de recuperación. El contador de integridad y el estado de la misión se actualizan en tiempo real en el panel superior.

---

## 8. Diseño visual

### Paleta (laboratorio en emergencia)

| Nombre | Hex | Uso |
|--------|-----|-----|
| Carbón de laboratorio | `#0a0e14` | Fondo principal |
| Superficie | `#121a24` | Paneles y tarjetas |
| Cian de consolas | `#5eead4` | Acentos, botones, etiquetas |
| Rojo de alerta | `#f87171` | Marca EVIL y errores |
| Verde de sistema estable | `#4ade80` | Respuestas correctas y recompensa |

### Tipografías
- Interfaz: system-ui / Segoe UI / Roboto
- Código: Consolas / Cascadia Code / monoespaciada del sistema

### Recursos visuales
- Imagen `etiquetas.png`: diagrama de apertura, texto y cierre de un párrafo.

Los estilos están en un archivo separado (`styles.css`) y se eligieron para reforzar la narrativa de laboratorio en emergencia.

---

## 9. Archivos del OA

| Archivo | Contenido |
|---------|-----------|
| `index.html` | Estructura semántica + formularios |
| `styles.css` | Estilos (paleta de laboratorio) |
| `script.js` | Lógica de corrección, feedback DOM y puntos |
| `etiquetas.png` | Imagen de apoyo didáctico |
| `DISENO.md` | Este documento |

---

## 10. Guía de uso

### Para el estudiante (uso autogestionado)
1. Leé la misión y el objetivo.
2. Revisá la sección «Dos etiquetas para ordenar el texto» (explicación + ejemplo + imagen).
3. Resolvé los tres retos en orden. Podés reintentar si te equivocás.
4. Observá el feedback y los puntos de integridad que se suman.
5. Al completar los tres retos, leé el mensaje final y el logro alcanzado.
6. Si querés practicar de nuevo, usá el botón «Reiniciar misión».

### Para el docente (uso en clase)
1. Presentá el OA como una misión breve de recuperación.
2. Dejá que los estudiantes resuelvan de forma individual o en parejas.
3. Circulá y observá el panel de integridad y los feedbacks.
4. Al final, pedí que expliquen para qué sirve `<h1>` y para qué sirve `<p>`.
5. Opcional: pedí que escriban un título y un párrafo sobre un tema propio.

---

## 11. Ajustes aplicados de las entregas anteriores

Se aplicaron los comentarios de la tutora:

- Documentación y encuadre del OA gamificado: se explicitó el estilo de narrativa (acción / recuperación) y el rol del estudiante (agente de recuperación).
- Colores e imágenes acordes a la narrativa: paleta de laboratorio en emergencia y uso de la imagen de etiquetas.
- Recompensas explícitas más allá de la respuesta correcta: puntos de integridad, barra de progreso, mensaje final y badge «Agente de recuperación».
- Elemento de autoría: estilos y lógica de misión diseñados y documentados en el CSS y en el footer del recurso.

---

## 12. Nota sobre el uso de Inteligencia Artificial

Se utilizó asistencia de IAG (Grok – xAI) para proponer la organización de la estructura HTML, la lógica de corrección de los formularios, el diseño visual coherente con la narrativa y la redacción de los textos de feedback y de este documento.

Todo el contenido pedagógico, la selección de actividades y la validación final fueron revisados y ajustados por el autor.  
La adecuación al grupo y la decisión de uso en clase corresponden al docente.

---

**Enlaces del OA**

- OA publicado: https://braianm-dev.github.io/oa/  
- Código fuente: https://github.com/BraianM-dev/oa  
