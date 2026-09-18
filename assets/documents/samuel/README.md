# Evidencias — Samuel Salcedo

Coloca aquí los archivos reales de las 5 actividades del portafolio de Samuel Salcedo.
Nombres de archivo sugeridos (pueden ajustarse, ver más abajo):

| # | Actividad | Archivo sugerido |
|---|-----------|-------------------|
| 01 | Actividad Introductoria — Cuento "La Sapa Caramelo" | `samuel-actividad-01-sapa-caramelo.pdf` |
| 02 | Taller — Tipos de Comunicación | `samuel-actividad-02-taller-tipos-comunicacion.pdf` |
| 03 | Presentación — Funciones del Lenguaje | `samuel-actividad-03-funciones-del-lenguaje.pdf` |
| 04 | Investigación — Comunicación No Verbal (ensayo) | `samuel-actividad-04-comunicacion-no-verbal.pdf` |
| 05 | Ejercicio en Clase — Ejemplos de película | `samuel-actividad-05-ejemplos-pelicula.pdf` |

Formatos aceptados: PDF, DOCX, PPTX, imágenes (JPG/PNG) o cualquier archivo académico relevante.

## Cómo conectar el archivo al sitio

En [`js/portfolio.js`](../../../js/portfolio.js), dentro de `buildPortfolioData()`, completa para cada
actividad del aprendiz correspondiente:

```js
documentUrl: "assets/documents/samuel/samuel-actividad-01-sapa-caramelo.pdf",
hicimos: "Texto real de qué se hizo…",
aprendimos: "Texto real de qué se aprendió…",
```

Al definir `documentUrl`, el modal de evidencia mostrará automáticamente el botón
"Abrir documento" enlazando al archivo.
