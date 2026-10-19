# Estopas Medellín

Sitio web informativo para Estopas Medellín, empresa colombiana especializada en estopa y trapos industriales para limpieza, pulido y mantenimiento.

## Diseño

El diseño gráfico se realizó con asistencia de Inteligencia Artificial empleando [Google Stitch](https://stitch.withgoogle.com/), y tomando como base la información proporcionada sobre la empresa, sus productos, trayectoria y clientes. La interfaz presenta la oferta comercial, características de calidad, sectores de uso, presentaciones, preguntas frecuentes y opciones de contacto.

## Tecnologías

El proyecto es un sitio estático implementado con HTML, CSS y JavaScript vanilla. Tailwind CSS 4 se compila localmente a `styles.css`; no se carga desde CDN. Las dependencias instaladas son `tailwindcss`, `@tailwindcss/cli` y `esbuild` para la minificación y bundling del JavaScript.

- **HTML:** estructura y contenido de la página.
- **CSS:** estilos propios, diseño adaptable, transiciones y soporte para movimiento reducido.
- **JavaScript:** menú móvil, resaltado de navegación, revelado de elementos al desplazarse y comportamiento del acordeón de preguntas frecuentes.
- **Tailwind CSS 4:** utilidades generadas desde las clases de `index.html`; el tema se define en `src/input.css`.
- **esbuild:** bundling y minificación del archivo `src/main.js` para producción, generando el bundle en `dist/main.js`.
- **Google Fonts y Material Symbols locales:** las tipografías e iconografía se descargaron al repositorio y ahora se sirven desde `assets/fonts/` para evitar dependencias externas.

## Desarrollo

Instala las dependencias con `npm install`. Ejecuta `npm run build` para generar la versión final del sitio, compilar el CSS con Tailwind y minificar el bundle JavaScript con esbuild. También puedes usar `npm run build:css` si solo necesitas regenerar el stylesheet o `npm run watch:css` durante el desarrollo para recompilar al cambiar las clases o el tema. Las clases se detectan desde `index.html` y los tokens del tema se definen en `src/input.css`. Edita este archivo de entrada en lugar de modificar directamente el CSS generado. Sirve la carpeta del proyecto con un servidor estático para probarlo en el navegador.

### Comandos útiles

```bash
npm install
npm run watch:css
npm run build:css
npm run buildjs
npm run build
```

- `npm run watch:css`: vigila cambios en el CSS y recompila automáticamente.
- `npm run build:css`: genera el stylesheet final sin minificar el JS.
- `npm run buildjs`: empaqueta y minifica el JavaScript con esbuild.
- `npm run build`: compila CSS y JS para producción.

## Navegación móvil

Se refactorizó el menú principal para pantallas menores a desktop con un overlay fijo que cubre todo el alto del viewport. El panel se desplaza desde la izquierda, mantiene la posición fija, bloquea el scroll del contenido al abrirse y conserva un espaciado compacto superior para mejorar la legibilidad del primer nivel del menú.

## Imágenes adaptables

Las imágenes principales se sirven en WebP con tamaños adecuados al viewport: el hero usa un recorte vertical en móviles y variantes `srcset` en escritorio; la imagen de producto se selecciona según su espacio de visualización. Los originales se conservan como alternativa para navegadores que no soportan WebP. El logo y el sello también se sirven en versiones WebP reducidas a su tamaño de uso.

## Estructura

```text
.
├── .gitignore
├── AGENTS.md
├── DESIGN.md
├── README.md
├── assets/
├── dist/
│   ├── main.js
│   └── styles.css
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── screenshots/
├── src/
│   ├── input.css
│   └── main.js
└── ...
```

## Visualización


Tailwind CSS se genera localmente. Google Fonts y Material Symbols requieren conexión a internet, por lo que las tipografías e iconos pueden no aparecer sin conexión.

## Capturas

### Vista móvil (390 × 844)

![Captura del sitio en viewport móvil](./screenshots/mobile.png)

### Vista escritorio (1440 × 1000)

![Captura del sitio en viewport de escritorio](./screenshots/desktop.png)

### Documentación adicional

El proyecto se creó empleando documentación basada en datos recopilados de la empresa, estableciendo requerimientos funcionales y de diseño. 

- [Documentación para agentes](./AGENTS.md)
- [Documentación de diseño](./DESIGN.md)
