/**
 * dropdown.js
 * Dropdown accesible "Temáticas" del navbar de escritorio y el acordeón
 * equivalente dentro del menú móvil. Soporta click, teclado (Enter/Espacio,
 * Escape, flechas) y cierre al hacer click fuera.
 */
(function () {
  "use strict";

  function setupDesktopDropdown() {
    const wrapper = document.getElementById("nav-tematicas-dropdown-wrapper");
    const trigger = document.getElementById("nav-tematicas-btn");
    const menu = document.getElementById("nav-tematicas-menu");
    if (!wrapper || !trigger || !menu) return;

    function open() {
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
    }

    function close() {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }

    function toggle() {
      if (menu.hidden) {
        open();
      } else {
        close();
      }
    }

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      toggle();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("click", function (event) {
      if (!wrapper.contains(event.target)) close();
    });

    wrapper.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        close();
        trigger.focus();
      }

      if (event.key === "ArrowDown" && document.activeElement === trigger) {
        event.preventDefault();
        open();
        const firstLink = menu.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });
  }

  function setupMobileAccordion() {
    const toggle = document.getElementById("mobile-tematicas-toggle");
    const sublist = document.getElementById("mobile-tematicas-sublist");
    if (!toggle || !sublist) return;

    toggle.addEventListener("click", function () {
      const isHidden = sublist.hidden;
      sublist.hidden = !isHidden;
      toggle.setAttribute("aria-expanded", String(isHidden));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupDesktopDropdown();
    setupMobileAccordion();
  });
})();
