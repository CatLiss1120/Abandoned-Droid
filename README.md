# Orbitarios

Prototipo interactivo 2D para aprender sobre diez objetos y misiones espaciales mediante relatos breves en primera persona, en español e inglés.

## Abrir en Visual Studio Code

Abre esta carpeta en Visual Studio Code. Necesitas Node.js LTS instalado.

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

## Contenido

- Luna: Apollo 11, Apollo 12, Apollo 15 y Surveyor 3.
- Marte: Mars Pathfinder / Sojourner, InSight, Ingenuity y Viking 1.
- Espacio profundo: Kepler y Pioneer 10. No se clasifican como misiones a Marte.
- `imagenes/`: imágenes de referencia suministradas para las historias.
- `ImagenesNiñosBase/`: dibujos infantiles originales; sus copias web están en `public/drawings/`.
- `public/sprites/`: versiones pixel art utilizadas por la experiencia.
- `src/App.jsx`: escena, relatos, selector de idioma y tarjetas interactivas.
- `src/styles.css`: diseño pixel art y animaciones.