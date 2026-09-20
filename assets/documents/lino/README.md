# Evidencias — Lino Aguirre

Coloca aquí los archivos reales de las 5 actividades del portafolio de Lino Aguirre.
Nombres de archivo sugeridos (pueden ajustarse, ver más abajo):

| #  | Actividad                                            | Archivo sugerido                                    |
| -- | ---------------------------------------------------- | --------------------------------------------------- |
| 01 | Actividad Introductoria — Cuento "La Sapa Caramelo" | `lino-actividad-01-sapa-caramelo.pdf`             |
| 02 | Taller — Tipos de Comunicación                     | `lino-actividad-02-taller-tipos-comunicacion.pdf` |
| 03 | Presentación — Funciones del Lenguaje              | `lino-actividad-03-funciones-del-lenguaje.pdf`    |
| 04 | Investigación — Comunicación No Verbal (ensayo)   | `lino-actividad-04-comunicacion-no-verbal.pdf`    |
| 05 | Ejercicio en Clase — Ejemplos de película          | `lino-actividad-05-ejemplos-pelicula.pdf`         |

Formatos aceptados: PDF, DOCX, PPTX, imágenes (JPG/PNG) o cualquier archivo académico relevante.

## Cómo conectar el archivo al sitio

En [`js/portfolio.js`](../../../js/portfolio.js), dentro de `buildPortfolioData()`, completa para cada
actividad del aprendiz correspondiente:

```js
documentUrl: "assets/documents/lino/lino-actividad-01-sapa-caramelo.pdf",
hicimos: "Texto real de qué se hizo…",
aprendimos: "Texto real de qué se aprendió…",
```

Al definir `documentUrl`, el modal de evidencia mostrará automáticamente el botón
"Abrir documento" enlazando al archivo.
