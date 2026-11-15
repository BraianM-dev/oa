/**
 * HTML EVIL · OA Sprint 3
 * Lógica de formularios + feedback con DOM + gamificación por puntos
 * Narrativa: Agente de recuperación del Laboratorio Cero
 */

const state = {
  puntos: 0,
  retos: {
    identificar: false,
    completar: false,
    reparar: false
  }
};

const PUNTOS_POR_RETO = 10;

/* ---------- Utilidades ---------- */

function $(id) {
  return document.getElementById(id);
}

function showFeedback(id, message, type) {
  const el = $(id);
  el.textContent = message;
  el.className = "feedback visible " + type; // ok | error | warn
}

function clearFeedback(id) {
  const el = $(id);
  el.textContent = "";
  el.className = "feedback";
}

function actualizarMarcador() {
  $("puntos-value").textContent = state.puntos;

  const resueltos = Object.values(state.retos).filter(Boolean).length;
  $("retos-value").textContent = resueltos;
  $("progreso").style.width = (resueltos / 3) * 100 + "%";

  if (resueltos === 0) {
    $("status-msg").textContent = "El laboratorio espera tu intervención…";
  } else if (resueltos < 3) {
    $("status-msg").textContent =
      resueltos + " reto" + (resueltos > 1 ? "s" : "") + " resuelto" + (resueltos > 1 ? "s" : "") + ". Seguí recuperando el informe.";
  } else {
    $("status-msg").textContent = "Informe recuperado. Sistema estable.";
  }

  if (resueltos === 3) {
    $("final-message").hidden = false;
    $("final-puntos").textContent = state.puntos;
  } else {
    $("final-message").hidden = true;
  }
}

function marcarResuelto(challengeId) {
  const article = $(challengeId);
  if (article) article.classList.add("is-solved");
}

/* ---------- Reto 1: Identificar (radio) ---------- */

function checkIdentificar(event) {
  event.preventDefault();

  const seleccion = document.querySelector('input[name="reto1"]:checked');

  if (!seleccion) {
    showFeedback(
      "feedback-1",
      "No elegiste ninguna opción. Seleccioná una respuesta antes de comprobar.",
      "warn"
    );
    return;
  }

  if (seleccion.value === "h1") {
    if (!state.retos.identificar) {
      state.puntos += PUNTOS_POR_RETO;
      state.retos.identificar = true;
      marcarResuelto("reto-1");
    }
    showFeedback(
      "feedback-1",
      "¡Correcto! <h1> es la etiqueta del título principal. +" + PUNTOS_POR_RETO + " puntos de integridad.",
      "ok"
    );
    $("btn-1").disabled = true;
  } else {
    let detalle = "";
    if (seleccion.value === "p") {
      detalle = " <p> abre un párrafo, no un título.";
    } else {
      detalle = " </p> cierra un párrafo.";
    }
    showFeedback(
      "feedback-1",
      "Todavía no." + detalle + " Revisá la sección “Dos etiquetas para ordenar el texto”.",
      "error"
    );
  }

  actualizarMarcador();
}

/* ---------- Reto 2: Completar (texto) ---------- */

function checkCompletar(event) {
  event.preventDefault();

  const apertura = $("apertura").value.trim().toLowerCase();
  const cierre = $("cierre").value.trim().toLowerCase();

  if (apertura === "" || cierre === "") {
    showFeedback(
      "feedback-2",
      "Faltan datos. Completá los dos espacios antes de enviar.",
      "warn"
    );
    return;
  }

  if (apertura === "p" && cierre === "p") {
    if (!state.retos.completar) {
      state.puntos += PUNTOS_POR_RETO;
      state.retos.completar = true;
      marcarResuelto("reto-2");
    }
    showFeedback(
      "feedback-2",
      "¡Correcto! El párrafo queda bien formado con <p>…</p>. +" + PUNTOS_POR_RETO + " puntos de integridad.",
      "ok"
    );
    $("btn-2").disabled = true;
    $("apertura").disabled = true;
    $("cierre").disabled = true;
  } else {
    let msg = "Todavía no. ";
    if (apertura !== "p" && cierre !== "p") {
      msg += "La etiqueta del párrafo usa la letra p en ambos lados.";
    } else if (apertura !== "p") {
      msg += "La apertura debe ser p.";
    } else {
      msg += "El cierre también debe ser p.";
    }
    showFeedback("feedback-2", msg, "error");
  }

  actualizarMarcador();
}

/* ---------- Reto 3: Reparar (textarea) ---------- */

function checkReparar(event) {
  event.preventDefault();

  const texto = $("codigo").value.trim();

  if (texto === "") {
    showFeedback(
      "feedback-3",
      "El campo está vacío. Escribí las dos líneas con el cierre corregido.",
      "warn"
    );
    return;
  }

  // Aceptamos la estructura correcta aunque haya espacios o saltos de línea
  const tieneH1 = /<h1>\s*sector asegurado\s*<\/h1>/i.test(texto);
  const tieneP = /<p>\s*el laboratorio funciona\.?\s*<\/p>/i.test(texto);
  const cierreMal = /<p>[\s\S]*<\/h1>/i.test(texto);

  if (tieneH1 && tieneP && !cierreMal) {
    if (!state.retos.reparar) {
      state.puntos += PUNTOS_POR_RETO;
      state.retos.reparar = true;
      marcarResuelto("reto-3");
    }
    showFeedback(
      "feedback-3",
      "¡Informe reparado! El párrafo ahora cierra correctamente con </p>. +" + PUNTOS_POR_RETO + " puntos de integridad.",
      "ok"
    );
    $("btn-3").disabled = true;
    $("codigo").disabled = true;
  } else {
    let msg = "Todavía no. ";
    if (cierreMal || /<\/h1>\s*$/i.test(texto)) {
      msg += "El párrafo abre con <p> pero todavía cierra con </h1>. Cambiá solo el cierre.";
    } else {
      msg += "Revisá que el título use <h1>…</h1> y el párrafo <p>…</p>.";
    }
    showFeedback("feedback-3", msg, "error");
  }

  actualizarMarcador();
}

/* ---------- Reinicio ---------- */

function reiniciarMision() {
  state.puntos = 0;
  state.retos.identificar = false;
  state.retos.completar = false;
  state.retos.reparar = false;

  $("form-1").reset();
  $("form-2").reset();
  $("form-3").reset();

  clearFeedback("feedback-1");
  clearFeedback("feedback-2");
  clearFeedback("feedback-3");

  document.querySelectorAll(".challenge").forEach(function (el) {
    el.classList.remove("is-solved");
  });

  $("btn-1").disabled = false;
  $("btn-2").disabled = false;
  $("btn-3").disabled = false;
  $("apertura").disabled = false;
  $("cierre").disabled = false;
  $("codigo").disabled = false;

  actualizarMarcador();
  $("status-msg").textContent = "Nueva misión. El laboratorio espera tu intervención…";
}

/* ---------- Inicialización ---------- */

function iniciar() {
  $("form-1").addEventListener("submit", checkIdentificar);
  $("form-2").addEventListener("submit", checkCompletar);
  $("form-3").addEventListener("submit", checkReparar);
  $("btn-reset").addEventListener("click", reiniciarMision);

  actualizarMarcador();
}

document.addEventListener("DOMContentLoaded", iniciar);
