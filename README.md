# CONectaMente

Sitio web académico del proyecto final de la competencia de **Comunicaciones**. Presenta, en un
único recorrido, lo que el equipo aprendió sobre la comunicación humana y cómo lo aplicó en la
práctica: **Conocer → Comprender → Aplicar → Evidenciar → Reflexionar**.

El diseño visual de este sitio proviene del prototipo generado con Stitch en
[`stitch_conectamente_learning_portal/`](stitch_conectamente_learning_portal/), tomado como fuente
de verdad de la identidad de marca (colores, tipografías, logotipo y componentes) e implementado
aquí como HTML, CSS y JavaScript reales, sin frameworks.

## Objetivo

Evidenciar, de forma pública y navegable, el aprendizaje del trimestre en la competencia de
Comunicaciones: el marco teórico estudiado, el reto aplicado en equipo, el portafolio individual de
evidencias y las reflexiones personales de cada aprendiz.

## Integrantes

- Lino Aguirre
- Matias Arena
- Samuel Salcedo

## Temáticas

1. ¿Qué es la comunicación?
2. Los 4 Pilares (Observar, Escuchar, Analizar, Percibir/Experimentar)
3. Tipos de Comunicación (Agresiva, Pasiva, Pasivo-agresiva, Agresiva-pasiva, Asertiva)
4. Modelo de Roman Jakobson (6 factores y 6 funciones del lenguaje)

## Características

- Sitio 100% estático, sin backend ni base de datos.
- Totalmente responsive (móvil, tablet, laptop, escritorio).
- Navegación con dropdown accesible ("Temáticas") y menú móvil.
- Portafolio interactivo con pestañas por aprendiz y modal de evidencia.
- Explorador interactivo del modelo de Jakobson.
- Estructura preparada para recibir evidencias reales (PDF, DOCX, PPTX, imágenes) y fotografías del
  equipo sin tocar el diseño.
- Accesibilidad: HTML semántico, `aria-*`, foco visible, navegación por teclado y soporte de
  `prefers-reduced-motion`.

## Tecnologías

- HTML5
- CSS3 (variables nativas, sin preprocesadores ni frameworks)
- JavaScript Vanilla (sin librerías ni build step)

No se utiliza React, Vue, Angular, Tailwind, Bootstrap, jQuery, ni ninguna herramienta de bundling.

## Estructura del proyecto

```text
CONectaMente/
├── index.html                  # Única página del sitio
├── README.md
├── .gitignore
├── vercel.json
│
├── assets/
│   ├── images/
│   │   ├── logo.svg            # Logotipo oficial (fuente: Stitch)
│   │   └── team/                # Fotografías del equipo (pendientes)
│   ├── icons/
│   │   └── favicon.svg
│   └── documents/
│       ├── lino/                # Evidencias PDF/DOCX/PPTX de Lino
│       ├── matias/               # Evidencias de Matias
│       └── samuel/               # Evidencias de Samuel
│
├── css/
│   ├── reset.css                # Normalización base
│   ├── variables.css            # Tokens de diseño (colores, tipografía, radios, sombras, espaciado)
│   ├── main.css                 # Punto de entrada: importa el resto + tipografía base
│   ├── components.css           # Botones, tarjetas, chips, modal, tabs, dropdown…
│   ├── sections.css             # Layout de cada sección (header, hero, temáticas, portafolio…)
│   └── responsive.css           # Ajustes transversales por breakpoint
│
├── js/
│   ├── main.js                  # Inicialización general
│   ├── navigation.js            # Menú móvil, scrollspy, botón "volver arriba"
│   ├── dropdown.js               # Dropdown "Temáticas" (escritorio y móvil)
│   ├── portfolio.js              # Datos y render del portafolio + modal de evidencia
│   └── interactions.js           # Explorador del modelo de Jakobson
│
└── stitch_conectamente_learning_portal/   # Fuente de diseño original (Stitch), como referencia
```

## Instalación / ejecución local

No requiere instalación ni build. Basta con servir la carpeta como archivos estáticos:

```bash
# Opción 1: con Python (ya suele venir instalado)
python -m http.server 5500

# Opción 2: con Node, sin instalar nada globalmente
npx serve .
```

Luego abre `http://localhost:5500` (o el puerto que indique la herramienta) en el navegador.

También puedes abrir `index.html` directamente con doble clic, aunque se recomienda un servidor
local para evitar restricciones del navegador con rutas relativas.

## Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En Vercel, selecciona "Import Project" y elige el repositorio.
3. Framework: **Other** (sitio estático). No se requiere *build command* ni *output directory*
   personalizados: Vercel sirve `index.html` y los recursos de `assets/`, `css/` y `js/`
   directamente, según la configuración mínima de [`vercel.json`](vercel.json).
4. Despliega. El sitio quedará disponible en la URL que asigne Vercel.

## Evidencias

Las evidencias reales (PDF, DOCX, PPTX, imágenes, capturas) de cada aprendiz deben colocarse en:

```text
assets/documents/lino/
assets/documents/matias/
assets/documents/samuel/
```

Cada carpeta incluye un `README.md` con los nombres de archivo sugeridos y las instrucciones para
conectarlos al modal de evidencia en `js/portfolio.js`. Las fotografías del equipo van en
`assets/images/team/` (ver su `README.md`).

## Autores

Lino Aguirre · Matias Arena · Samuel Salcedo
