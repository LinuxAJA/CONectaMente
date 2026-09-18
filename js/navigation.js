/**
 * navigation.js
 * Menú móvil, resaltado del enlace activo según la sección visible y
 * botón de retorno al inicio.
 */
(function () {
  "use strict";

  function setupMobileDrawer() {
    const toggle = document.getElementById("mobile-nav-toggle");
    const drawer = document.getElementById("mobile-nav-drawer");
    const icon = document.getElementById("mobile-nav-icon");
    if (!toggle || !drawer) return;

    function closeDrawer() {
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (icon) icon.textContent = "menu";
    }

    function openDrawer() {
      drawer.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      if (icon) icon.textContent = "close";
    }

    toggle.addEventListener("click", function () {
      const isHidden = drawer.hidden;
      if (isHidden) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeDrawer();
    });
  }

  function setupScrollSpy() {
    const sections = document.querySelectorAll("main section[id]");
    const desktopLinks = document.querySelectorAll(".main-nav__link[href^='#']");
    const mobileLinks = document.querySelectorAll(".mobile-nav-drawer__link[href^='#']");

    if (!sections.length) return;

    const setActive = function (id) {
      [desktopLinks, mobileLinks].forEach(function (group) {
        group.forEach(function (link) {
          const isMatch = link.getAttribute("href") === "#" + id;
          link.classList.toggle("is-active", isMatch);
        });
      });
    };

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function setupBackToTop() {
    const button = document.getElementById("back-to-top");
    if (!button) return;

    button.addEventListener("click", function () {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupMobileDrawer();
    setupScrollSpy();
    setupBackToTop();
  });
})();
