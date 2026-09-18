/**
 * interactions.js
 * Explorador interactivo del Modelo de Roman Jakobson y otras
 * micro-interacciones de la página (animaciones respetuosas con
 * prefers-reduced-motion).
 */
(function () {
  "use strict";

  const jakobsonData = {
    referencial: {
      factor: "Factor: Contexto",
      title: "Función Referencial",
      desc: "Orientada al contexto o referente exterior. Transmite información objetiva y comprobable sobre la realidad, sin valoraciones afectivas del emisor.",
      example: '"La sesión sincrónica de Comunicaciones inicia el martes a las 08:00 hrs."',
    },
    emotiva: {
      factor: "Factor: Emisor",
      title: "Función Emotiva o Expresiva",
      desc: "Orientada al emisor. Manifiesta su estado de ánimo, opiniones o actitudes mediante exclamaciones, entonación o adjetivos valorativos.",
      example: '"¡Qué alivio sentimos al ver que la presentación quedó tan clara!"',
    },
    conativa: {
      factor: "Factor: Receptor",
      title: "Función Conativa o Apelativa",
      desc: "Orientada al receptor. Busca influir, persuadir o solicitar una acción mediante imperativos, vocativos o preguntas directas.",
      example: '"Por favor, revisa la ortografía antes de enviar las diapositivas."',
    },
    fatica: {
      factor: "Factor: Canal / Contacto",
      title: "Función Fática",
      desc: "Orientada al canal. Comprueba que la conexión entre los hablantes funcione: sirve para iniciar, mantener o cerrar el contacto comunicativo.",
      example: '"¿Me escuchan bien? ¿Siguen viendo la pantalla compartida?"',
    },
    metalinguistica: {
      factor: "Factor: Código",
      title: "Función Metalingüística",
      desc: "Orientada al código. Se usa el lenguaje para explicar o definir el propio lenguaje y evitar ambigüedades interpretativas.",
      example: '"Cuando decimos \'kinesia\' nos referimos al estudio de los movimientos corporales."',
    },
    poetica: {
      factor: "Factor: Mensaje",
      title: "Función Poética",
      desc: "Orientada al mensaje y su forma. Pone el foco en la estética, el ritmo y la estructura del mensaje mismo.",
      example: '"El silencio no es vacío; es el espacio donde la escucha construye comprensión."',
    },
  };

  function setupJakobsonExplorer() {
    const buttons = document.querySelectorAll("[data-jakobson-factor]");
    const titleEl = document.getElementById("jakobson-title");
    const descEl = document.getElementById("jakobson-desc");
    const exampleEl = document.getElementById("jakobson-example");

    if (!buttons.length || !titleEl || !descEl || !exampleEl) return;

    function activate(key, button) {
      const item = jakobsonData[key];
      if (!item) return;

      titleEl.textContent = item.title;
      descEl.textContent = item.desc;
      exampleEl.textContent = item.example;

      buttons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn === button);
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activate(button.getAttribute("data-jakobson-factor"), button);
      });
    });
  }

  function setupFooterYear() {
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupJakobsonExplorer();
    setupFooterYear();
  });
})();
