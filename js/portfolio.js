/**
 * portfolio.js
 * Datos y comportamiento de "Nuestro Portafolio": pestañas por aprendiz
 * (Lino Aguirre, Matias Arena, Samuel Salcedo) y el modal de evidencia.
 *
 * Cada actividad reutiliza las 5 categorías definidas para la competencia.
 * Los campos "hicimos", "aprendimos" y "documentUrl" quedan vacíos a
 * propósito: son marcadores listos para reemplazar por el contenido real
 * de cada aprendiz (no se inventa contenido académico ni evidencias).
 */
(function () {
  "use strict";

  const ACTIVITY_TEMPLATE = [
    {
      num: "01",
      category: "Actividad Introductoria",
      icon: "auto_stories",
      title: 'Cuento "La Sapa Caramelo"',
      description:
        "Actividad de apertura del módulo: lectura y análisis del cuento como punto de partida para reconocer barreras comunicativas cotidianas.",
    },
    {
      num: "02",
      category: "Taller",
      icon: "psychology",
      title: "Tipos de Comunicación",
      description:
        "Taller práctico de identificación de estilos comunicativos (agresivo, pasivo, pasivo-agresivo, agresivo-pasivo y asertivo) en situaciones simuladas.",
    },
    {
      num: "03",
      category: "Presentación",
      icon: "slideshow",
      title: "Funciones del Lenguaje",
      description:
        "Sustentación del modelo de Roman Jakobson y sus seis funciones del lenguaje aplicadas a casos reales.",
    },
    {
      num: "04",
      category: "Investigación",
      icon: "article",
      title: "Comunicación No Verbal — Ensayo de investigación",
      description:
        "Ensayo académico de investigación sobre proxémica, kinesia y otros canales no verbales de la comunicación.",
    },
    {
      num: "05",
      category: "Ejercicio en Clase",
      icon: "movie",
      title: "Dos ejemplos del tema asignado (película)",
      description:
        "Análisis de dos escenas de una película que ejemplifican el tema de comunicación asignado en clase.",
    },
  ];

  const APPRENTICES = [
    { id: "lino", name: "Lino Aguirre" },
    { id: "matias", name: "Matias Arena" },
    { id: "samuel", name: "Samuel Salcedo" },
  ];

  function buildPortfolioData() {
    const data = {};
    APPRENTICES.forEach(function (apprentice) {
      data[apprentice.id] = ACTIVITY_TEMPLATE.map(function (activity) {
        return Object.assign({}, activity, {
          apprentice: apprentice.name,
          hicimos: "",
          aprendimos: "",
          documentUrl: "",
          documentLabel:
            apprentice.id +
            "-actividad-" +
            activity.num +
            " · [EVIDENCIA PENDIENTE]",
        });
      });
    });
    return data;
  }

  const portfolioData = buildPortfolioData();

  function renderActivities(apprenticeId) {
    const container = document.getElementById("portfolio-activities-container");
    if (!container) return;

    const activities = portfolioData[apprenticeId] || portfolioData.lino;

    container.innerHTML = activities
      .map(function (activity, index) {
        const wideClass = index === 4 ? " evidence-card--wide" : "";
        return (
          '<article class="evidence-card' +
          wideClass +
          '">' +
          '<div class="evidence-card__body">' +
          '<div class="evidence-card__header">' +
          '<span class="chip chip--activity">Actividad ' +
          activity.num +
          "</span>" +
          '<span class="icon evidence-card__icon" aria-hidden="true">' +
          activity.icon +
          "</span>" +
          "</div>" +
          '<p class="text-label-meta" style="color: var(--color-secondary); margin-top: 0.75rem;">' +
          activity.category +
          "</p>" +
          '<h3 class="text-headline-sm" style="margin-top: 0.25rem;">' +
          activity.title +
          "</h3>" +
          '<p class="text-body-sm" style="color: var(--color-on-surface-variant); margin-top: 0.5rem;">' +
          activity.description +
          "</p>" +
          "</div>" +
          '<button type="button" class="btn btn--ghost btn--block" data-evidence-index="' +
          index +
          '" data-apprentice="' +
          apprenticeId +
          '">' +
          "<span>Ver evidencia</span>" +
          '<span class="icon icon--sm" aria-hidden="true">visibility</span>' +
          "</button>" +
          "</article>"
        );
      })
      .join("");

    container.querySelectorAll("[data-evidence-index]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const apprenticeId = btn.getAttribute("data-apprentice");
        const index = Number(btn.getAttribute("data-evidence-index"));
        openEvidenceModal(portfolioData[apprenticeId][index]);
      });
    });
  }

  function switchApprenticeTab(apprenticeId) {
    document.querySelectorAll(".apprentice-tab-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-apprentice") === apprenticeId;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
    renderActivities(apprenticeId);
  }

  function setupApprenticeTabs() {
    const tabButtons = document.querySelectorAll(".apprentice-tab-btn");
    if (!tabButtons.length) return;

    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchApprenticeTab(btn.getAttribute("data-apprentice"));
      });
    });

    switchApprenticeTab("lino");
  }

  /* ---------- Modal de evidencia ---------- */
  let lastFocusedElement = null;

  function openEvidenceModal(activity) {
    const modal = document.getElementById("evidence-modal");
    if (!modal || !activity) return;

    document.getElementById("modal-evidence-title").textContent =
      "Actividad " + activity.num + ": " + activity.title;

    const hicimosEl = document.getElementById("modal-hicimos-text");
    const aprendimosEl = document.getElementById("modal-aprendimos-text");
    const docNameEl = document.getElementById("modal-doc-filename");
    const docLinkWrapper = document.getElementById("modal-document-link-wrapper");

    hicimosEl.textContent =
      activity.hicimos || "[PENDIENTE] Descripción del proceso desarrollado por " + activity.apprentice + " para esta evidencia.";
    hicimosEl.classList.toggle("pending-placeholder", !activity.hicimos);

    aprendimosEl.textContent =
      activity.aprendimos || "[PENDIENTE] Aprendizajes y reflexión de " + activity.apprentice + " sobre esta actividad.";
    aprendimosEl.classList.toggle("pending-placeholder", !activity.aprendimos);

    docNameEl.textContent = activity.documentLabel;

    if (activity.documentUrl) {
      docLinkWrapper.hidden = false;
      docLinkWrapper.querySelector("a").href = activity.documentUrl;
    } else if (docLinkWrapper) {
      docLinkWrapper.hidden = true;
    }

    switchModalTab("hicimos");

    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeEvidenceModal() {
    const modal = document.getElementById("evidence-modal");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function switchModalTab(tabKey) {
    document.querySelectorAll(".modal-tab-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-modal-tab") === tabKey;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll(".modal-view").forEach(function (view) {
      view.hidden = view.getAttribute("data-modal-view") !== tabKey;
    });
  }

  function setupModal() {
    const modal = document.getElementById("evidence-modal");
    if (!modal) return;

    modal.querySelectorAll(".modal-tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchModalTab(btn.getAttribute("data-modal-tab"));
      });
    });

    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeEvidenceModal);
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeEvidenceModal();
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) closeEvidenceModal();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupApprenticeTabs();
    setupModal();
  });
})();
