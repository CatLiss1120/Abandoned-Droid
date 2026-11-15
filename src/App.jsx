import { useEffect, useRef, useState } from 'react';

const stories = [
  {
    id: 'apollo11', group: 'moon', x: 8, y: 17, sprite: 'apollo-11.png', pixelArt: 'apollo11.png', drawing: 'children/Apolo11.jpg', photo: 'apollo-11.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'El módulo lunar Eagle de Apollo 11 sobre la Luna.', en: 'Apollo 11’s Eagle lunar module on the Moon.' }, photoCredit: { es: 'NASA', en: 'NASA' }, retired: true,
    status: { es: 'La etapa de descenso quedó en la Luna; ya no está en funcionamiento.', en: 'The descent stage remains on the Moon; it is no longer operating.' },
    title: { es: 'Etapa de descenso del Eagle — Apolo 11', en: 'Eagle descent stage — Apollo 11' },
    text: {
      es: 'Soy la etapa de descenso del Eagle. El 20 de julio de 1969 frené el módulo hasta posarse en el Mar de la Tranquilidad. Neil Armstrong y Buzz Aldrin exploraron la superficie y luego despegaron en el módulo de ascenso para reunirse con Michael Collins, que seguía en órbita. Yo me quedé en la Luna, como plataforma del primer alunizaje humano.',
      en: 'I am Eagle’s descent stage. On July 20, 1969, I slowed the lunar module until it touched down in the Sea of Tranquility. Neil Armstrong and Buzz Aldrin explored the surface, then lifted off in the ascent stage to rejoin Michael Collins, who remained in orbit. I stayed on the Moon as the base of the first crewed lunar landing.',
    },
  },
  {
    id: 'apollo12', group: 'moon', x: 20, y: 14, sprite: 'apollo-12.png', pixelArt: 'apollo12.png', drawing: 'children/Apolo12.jpg', photo: 'apollo-12.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'El módulo lunar Intrepid de Apollo 12 en órbita lunar.', en: 'Apollo 12’s Intrepid lunar module in lunar orbit.' }, photoCredit: { es: 'NASA / JSC', en: 'NASA / JSC' }, retired: true,
    status: { es: 'La etapa de descenso del Intrepid quedó en la Luna.', en: 'Intrepid’s descent stage remains on the Moon.' },
    title: { es: 'Módulo lunar Intrepid — Apolo 12', en: 'Intrepid lunar module — Apollo 12' },
    text: {
      es: 'Soy Intrepid, el módulo lunar de Apollo 12. En noviembre de 1969 llevé a Charles Conrad y Alan Bean hasta el Océano de las Tormentas, cerca de Surveyor 3. La tripulación estudió rocas, instaló instrumentos científicos y visitó la antigua sonda. Mi etapa de descenso se quedó allí después de ayudarles a despegar de la superficie.',
      en: 'I am Intrepid, Apollo 12’s lunar module. In November 1969, I carried Charles Conrad and Alan Bean to the Ocean of Storms, near Surveyor 3. The crew studied rocks, set up science instruments, and visited the older probe. My descent stage stayed there after helping them lift off from the surface.',
    },
  },
  {
    id: 'apollo15', group: 'moon', x: 15, y: 29, sprite: 'apollo-15.png', pixelArt: 'apollo15.png', drawing: 'children/Apolo15.jpg', photo: 'apollo-15.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'El módulo lunar Falcon de Apollo 15 en Hadley-Apennine.', en: 'Apollo 15’s Falcon lunar module at Hadley-Apennine.' }, photoCredit: { es: 'NASA', en: 'NASA' }, retired: true,
    status: { es: 'La etapa de descenso de Falcon quedó en la Luna.', en: 'Falcon’s descent stage remains on the Moon.' },
    title: { es: 'Módulo lunar Falcon — Apolo 15', en: 'Falcon lunar module — Apollo 15' },
    text: {
      es: 'Soy Falcon, el módulo lunar de Apollo 15. En 1971 llevé a David Scott y James Irwin a Hadley-Apennine, entre una llanura y montañas lunares. Desde aquí salieron a recorrer la región, recoger rocas y estudiar sus formas. Cuando la tripulación regresó a órbita, mi etapa de descenso se quedó junto al lugar que ayudé a explorar.',
      en: 'I am Falcon, Apollo 15’s lunar module. In 1971, I carried David Scott and James Irwin to Hadley-Apennine, between a lunar plain and mountains. From here, they set out to explore, collect rocks, and study the landscape. When the crew returned to orbit, my descent stage stayed beside the place I helped them explore.',
    },
  },
  {
    id: 'surveyor3', group: 'moon', x: 9, y: 34, sprite: 'surveyor-3.png', pixelArt: 'surveyor3.png', drawing: 'children/Surveyor3.jpg', photo: 'surveyor3.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'El astronauta Pete Conrad junto a Surveyor 3.', en: 'Astronaut Pete Conrad beside Surveyor 3.' }, photoCredit: { es: 'NASA', en: 'NASA' }, retired: true,
    status: { es: 'Dejé de comunicarme en 1967; Apollo 12 trajo piezas mías a la Tierra.', en: 'I stopped communicating in 1967; Apollo 12 brought some of my parts to Earth.' },
    title: { es: 'Surveyor 3', en: 'Surveyor 3' },
    text: {
      es: 'Aterricé en la Luna en 1967. Reboté dos veces antes de posarme, y después usé mi cámara y mi pala para fotografiar y probar el suelo. Mis mediciones ayudaron a comprobar que una nave podía aterrizar con seguridad. Dos años más tarde, la tripulación de Apollo 12 me visitó y llevó mi cámara y otras piezas a la Tierra para estudiarlas.',
      en: 'I landed on the Moon in 1967. I bounced twice before settling down, then used my camera and scoop to photograph and test the soil. My measurements helped show that a spacecraft could land safely. Two years later, Apollo 12’s crew visited me and brought my camera and other parts back to Earth for study.',
    },
  },
  {
    id: 'pathfinder', group: 'mars', x: 80, y: 72, sprite: 'pathfinder.png', pixelArt: 'pathfinder.png', drawing: 'children/MarsPathfinderySojourner.jpg', photo: 'mars-pathfinder.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'El explorador Sojourner, parte de la misión Mars Pathfinder.', en: 'The Sojourner rover, part of the Mars Pathfinder mission.' }, photoCredit: { es: 'NASA / JPL-Caltech', en: 'NASA / JPL-Caltech' }, retired: true,
    status: { es: 'La última señal llegó en 1997; la misión terminó en 1998.', en: 'The last signal arrived in 1997; the mission ended in 1998.' },
    title: { es: 'Mars Pathfinder y Sojourner', en: 'Mars Pathfinder and Sojourner' },
    text: {
      es: 'Soy Sojourner, el pequeño rover que viajó dentro de Mars Pathfinder. Llegué a Marte el 4 de julio de 1997 y rodé entre rocas para estudiarlas. Mientras yo exploraba, mi módulo compañero enviaba imágenes y datos del tiempo. Diseñaron mi misión para durar una semana; seguí trabajando 83 días marcianos y ayudé a mostrar cómo podían aterrizar y moverse futuros robots.',
      en: 'I am Sojourner, the small rover carried by Mars Pathfinder. I reached Mars on July 4, 1997, and rolled among rocks to study them. While I explored, my lander sent pictures and weather data. My mission was designed for one week; I kept working for 83 Martian days and helped show how future robots could land and move around.',
    },
  },
  {
    id: 'insight', group: 'mars', x: 90, y: 76, sprite: 'insight.png', pixelArt: 'insight.png', drawing: 'children/InSight.jpg', photo: 'insight.png', imageLabel: { es: 'Foto real', en: 'Real photo' },
    photoCaption: { es: 'InSight durante una prueba en la Tierra.', en: 'InSight during a test on Earth.' }, photoCredit: { es: 'NASA / JPL-Caltech', en: 'NASA / JPL-Caltech' }, retired: true,
    status: { es: 'Misión finalizada en 2022; el polvo redujo la energía de mis paneles.', en: 'Mission ended in 2022 after dust reduced power from my solar panels.' },
    title: { es: 'InSight', en: 'InSight' },
    text: {
      es: 'Soy InSight, un módulo de aterrizaje que escuchó el interior de Marte. Mi sismómetro registró más de 1.300 temblores y sus vibraciones ayudaron a estudiar la corteza, el manto y el núcleo del planeta. El polvo cubrió poco a poco mis paneles solares. Mi última comunicación con la Tierra fue en diciembre de 2022.',
      en: 'I am InSight, a lander that listened to the inside of Mars. My seismometer recorded more than 1,300 quakes, and their vibrations helped scientists study the planet’s crust, mantle, and core. Dust gradually covered my solar panels. My last communication with Earth was in December 2022.',
    },
  },
  {
    id: 'ingenuity', group: 'mars', x: 75, y: 84, sprite: 'ingenuity.png', pixelArt: 'ingenuity.png', drawing: 'children/Ingenuity.jpg', photo: 'ingenuity.png', imageLabel: { es: 'Foto real', en: 'Real photo' }, retired: true, rotor: true,
    photoCaption: { es: 'El helicóptero Ingenuity en la superficie de Marte.', en: 'The Ingenuity helicopter on the surface of Mars.' }, photoCredit: { es: 'NASA / JPL-Caltech', en: 'NASA / JPL-Caltech' },
    status: { es: 'Ya no puede volar: una pala del rotor se dañó en su vuelo 72, en 2024.', en: 'It can no longer fly: a rotor blade was damaged on flight 72 in 2024.' },
    title: { es: 'Ingenuity', en: 'Ingenuity' },
    text: {
      es: 'Viajé bajo el rover Perseverance y en 2021 hice el primer vuelo propulsado y controlado en otro planeta. Me prepararon para cinco vuelos de prueba, pero completé 72 y también ayudé a observar el terreno desde el aire. En mi último aterrizaje se dañó una pala del rotor. Ya no puedo volar, pero mis vuelos demostraron que también se puede explorar Marte desde el cielo.',
      en: 'I rode beneath the Perseverance rover and, in 2021, made the first powered, controlled flight on another planet. I was built for five test flights, but completed 72 and also helped survey the ground from the air. A rotor blade was damaged during my final landing. I can no longer fly, but my flights showed that Mars can also be explored from the sky.',
    },
  },
  {
    id: 'viking1', group: 'mars', x: 88, y: 91, sprite: 'viking-1.png', pixelArt: 'viking1.png', drawing: 'children/Viking1.jpg', photo: 'viking1.png', imageLabel: { es: 'Esquema', en: 'Diagram' },
    photoCaption: { es: 'Esquema del módulo de aterrizaje Viking 1.', en: 'Diagram of the Viking 1 lander.' }, photoCredit: { es: 'NASA', en: 'NASA' }, retired: true,
    status: { es: 'El módulo dejó de comunicarse en 1982; el orbitador terminó en 1980.', en: 'The lander stopped communicating in 1982; the orbiter ended its mission in 1980.' },
    title: { es: 'Viking 1', en: 'Viking 1' },
    text: {
      es: 'Soy el módulo Viking 1. Llegué a Chryse Planitia en 1976 y envié las primeras imágenes tomadas por una nave estadounidense desde la superficie marciana. Analicé muestras de suelo, observé el clima y busqué señales de vida. Mis experimentos encontraron reacciones curiosas, pero no una prueba clara de organismos. Tras más de seis años, dejé de comunicarme con la Tierra.',
      en: 'I am the Viking 1 lander. I reached Chryse Planitia in 1976 and sent the first images taken by a U.S. spacecraft from the Martian surface. I analyzed soil samples, observed the weather, and searched for signs of life. My experiments found puzzling reactions, but no clear evidence of living organisms. After more than six years, I stopped communicating with Earth.',
    },
  },
  {
    id: 'kepler', group: 'deep-space', x: 68, y: 19, sprite: 'kepler.png', pixelArt: 'kepler.png', drawing: 'children/Kepler.jpg', photo: 'kepler.png', imageLabel: { es: 'Ilustración', en: 'Illustration' }, retired: true,
    photoCaption: { es: 'Ilustración del telescopio espacial Kepler.', en: 'Illustration of the Kepler Space Telescope.' }, photoCredit: { es: 'NASA / JPL-Caltech', en: 'NASA / JPL-Caltech' },
    status: { es: 'Retirado en 2018; agoté mi combustible y quedé en órbita alrededor del Sol.', en: 'Retired in 2018; I ran out of fuel and remained in orbit around the Sun.' },
    title: { es: 'Telescopio espacial Kepler', en: 'Kepler Space Telescope' },
    text: {
      es: 'Soy Kepler, un telescopio espacial que buscó planetas alrededor de otras estrellas. Observé pequeños cambios en la luz de más de medio millón de estrellas: esos parpadeos podían delatar un planeta pasando por delante. Ayudé a confirmar más de 2.600 mundos fuera de nuestro sistema solar. En 2018 agoté mi combustible y mi misión terminó; mis datos siguen ayudando a descubrir planetas.',
      en: 'I am Kepler, a space telescope that searched for planets around other stars. I watched tiny changes in the light of more than half a million stars: those dips could reveal a planet passing in front. I helped confirm more than 2,600 worlds beyond our solar system. I ran out of fuel in 2018 and my mission ended, but my data still help reveal planets.',
    },
  },
  {
    id: 'pioneer10', group: 'deep-space', x: 32, y: 80, sprite: 'pioneer10.png', pixelArt: 'pioneer10.png', drawing: 'children/Pioner10.jpg', photo: 'pioner10.png', imageLabel: { es: 'Ilustración', en: 'Illustration' }, retired: true,
    photoCaption: { es: 'Ilustración de Pioneer 10 durante su encuentro con Júpiter.', en: 'Illustration of Pioneer 10 during its Jupiter encounter.' }, photoCredit: { es: 'NASA', en: 'NASA' },
    status: { es: 'Sin señal desde 2003; sigo viajando hacia el espacio interestelar.', en: 'No signal since 2003; I continue traveling toward interstellar space.' },
    title: { es: 'Pioneer 10', en: 'Pioneer 10' },
    text: {
      es: 'Soy Pioneer 10. En 1972 partí hacia Júpiter y fui la primera nave en cruzar el cinturón principal de asteroides y observar de cerca ese planeta gigante. Mis mediciones ayudaron a preparar misiones posteriores para atravesar la intensa radiación de Júpiter. En 2003 llegó mi última señal; desde entonces sigo alejándome en silencio, rumbo al espacio interestelar.',
      en: 'I am Pioneer 10. I left for Jupiter in 1972 and became the first spacecraft to cross the main asteroid belt and study the giant planet up close. My measurements helped prepare later missions to cross Jupiter’s intense radiation environment. My last signal arrived in 2003; since then, I have continued silently toward interstellar space.',
    },
  },
];

const scrapParts = [
  { id: 'camera', icon: 'camera', name: { es: 'Cámara', en: 'Camera' }, source: { es: 'Surveyor 3', en: 'Surveyor 3' } },
  { id: 'wheels', icon: 'wheels', name: { es: 'Ruedas', en: 'Wheels' }, source: { es: 'Sojourner (Mars Pathfinder)', en: 'Sojourner (Mars Pathfinder)' } },
  { id: 'seismo', icon: 'seismo', name: { es: 'Sensor sísmico', en: 'Seismic sensor' }, source: { es: 'InSight', en: 'InSight' } },
  { id: 'solar', icon: 'solar', name: { es: 'Panel solar', en: 'Solar panel' }, source: { es: 'Viking 1', en: 'Viking 1' } },
  { id: 'rotor', icon: 'rotor', name: { es: 'Rotor', en: 'Rotor' }, source: { es: 'Ingenuity', en: 'Ingenuity' } },
];
function Earth() {
  return (
    <svg className="earth" viewBox="0 0 160 160" role="img" aria-label="Tierra">
      <path fill="#102b57" d="M80 2h32v4h16v8h12v12h8v16h6v32h4v24h-4v20h-8v14h-12v12h-16v8H52v-4H36v-8H20v-8H12v-12H6v-16H2V48h4V32h8V20h8v-8h16V6h20V2z" />
      <path fill="#237ac1" d="M80 6h30v4h16v8h12v14h8v16h4v28h4v20h-4v18h-8v14h-14v8h-20v4H54v-4H38v-8H24v-8H16v-14H10v-16H6V50h4V34h8V22h10v-8h16v-4h22V6z" />
      <path fill="#51b978" d="M21 36h8v-8h8v-6h14v4h10v8h-4v8h-8v6h-8v8h-8v-4h-8v-8h-8zM47 63h10v-5h12v5h8v9h-4v11h-7v13h-5v12h-7v-7h-5V91h-5V80h-4v-9h7zM77 33h11v-5h14v4h13v7h10v7h-8v7h-9v5h-8v-4H88v-6h-8v8h-7v-8h-8v-7h8zM92 60h11v-5h12v4h11v8h-6v7h-8v11h-9v-8h-7v-8h-8zM118 96h11v-5h11v5h7v12h-7v7h-8v6h-10v-7h-8v-10h4zM61 20h8v-4h8v5h-4v5h-8z" />
      <path fill="#b8e1bb" d="M50 12h15v4H50zM79 12h9v4h-9zM18 68h4v10h-4zM137 48h5v7h-5z" />
      <path fill="#d8f2f5" d="M7 46h7v-8h5v16h-5v12H9v14H6V50h1zM130 21h9v9h7v15h-5V34h-7v-5h-4zM119 133h12v-8h9v-7h8v8h-8v12h-9v6h-12zM25 130h12v8h10v8H36v-5H25z" />
      <path fill="#82d4e5" d="M23 47h14v4H23zM96 18h15v4H96zM71 119h17v4H71zM114 78h11v4h-11z" opacity=".8" />
      <path fill="#b7efff" d="M16 43h14v4H16zM95 25h16v4H95zM72 114h13v4H72z" opacity=".8" />
      <path fill="#0b2045" d="M80 6h30v4h16v8h12v14h8v16h4v28h4v20h-4v18h-8v14h-14v8h-20v4H80z" opacity=".34" />
    </svg>
  );
}

function Moon() {
  return <svg className="moon" viewBox="0 0 64 64" aria-label="Luna" role="img" shapeRendering="crispEdges">
    <path fill="#d9e1ed" d="M20 2h24v4h8v8h6v8h4v24h-4v8h-8v6h-8v4H20v-4h-8v-8H6v-8H2V20h4v-8h8V6h6z" />
    <path fill="#aebbd0" d="M24 6h20v4h8v8h4v8h-4v4h-8v-4h-8v-8h-8v4h-8v-8h4zM10 32h8v-4h8v8h-4v8h-8v8h-4zM36 42h8v-4h8v8h-4v8h-8v-4h-4z" />
    <path fill="#eef1f5" d="M16 14h8v4h-8zM42 16h8v4h-8zM20 52h8v4h-8z" />
    <path fill="#8e9db4" d="M28 30h8v8h-8zM12 24h4v4h-4zM44 48h4v4h-4z" />
  </svg>;
}

function Mars() {
  return <svg className="mars" viewBox="0 0 64 64" aria-label="Marte" role="img" shapeRendering="crispEdges">
    <path fill="#9e3e35" d="M20 2h24v4h8v8h6v8h4v24h-4v8h-8v6h-8v4H20v-4h-8v-8H6v-8H2V20h4v-8h8V6h6z" />
    <path fill="#d96b4f" d="M20 6h24v4h8v8h4v8h-8v4h-8v-4h-8v-8h-8v4h-8v-8h4zM8 30h12v4h8v8h-8v8h-8v-8H8zM38 40h8v-4h8v8h-4v8h-8v4h-4z" />
    <path fill="#f19268" d="M18 14h8v4h-8zM42 20h8v4h-8zM28 50h8v4h-8z" />
    <path fill="#72383b" d="M28 30h8v8h-8zM44 44h4v4h-4zM12 24h4v4h-4z" />
  </svg>;
}

function Astronaut({ girl = false }) {
  const suit = girl ? '#bd85e9' : '#60c8c4';
  const dark = girl ? '#8558b9' : '#368a94';
  return <svg className={`astronaut ${girl ? 'girl' : 'boy'}`} viewBox="0 0 48 64" role="img" aria-label={girl ? 'Niña astronauta con lentes' : 'Niño astronauta'} shapeRendering="crispEdges">
    <path fill="#d7e8ef" d="M8 28h6v20H8zM34 28h6v20h-6z" />
    <path fill="#8ca8bb" d="M8 32h4v12H8zM36 32h4v12h-4z" />
    <path fill="#eff5ee" d="M12 8h4V4h16v4h4v4h4v16h-4v4h-4v4H16v-4h-4v-4H8V12h4z" />
    {girl && <path fill="#50394e" d="M10 8h4V4h20v4h4v8h-4v-4h-4v-4H18v4h-4v8h-4zM8 24h4v8h-4zM36 24h4v8h-4z" />}
    {!girl && <path fill="#4c5365" d="M12 8h4V4h16v4h4v8h-4v-4H16v4h-4z" />}
    <path fill="#24435d" d="M12 14h4v-4h16v4h4v12h-4v4H16v-4h-4z" />
    <path fill="#8ed7db" d="M16 14h4v-2h8v2h4v10h-4v3h-8v-3h-4z" />
    <path fill="#d8fcf4" d="M18 14h4v2h-4z" />
    {girl && <g><path fill="#392c68" d="M14 16h10v2h-10zM14 18h2v5h-2zM22 18h2v5h-2zM16 23h6v2h-6zM25 16h10v2H25zM25 18h2v5h-2zM33 18h2v5h-2zM27 23h6v2h-6zM24 18h2v2h-2z" /><path fill="#e8f4ff" d="M17 18h5v4h-5zM28 18h5v4h-5z" /><path fill="#fff" d="M18 18h2v1h-2zM29 18h2v1h-2z" /></g>}
    <path fill="#edf4ec" d="M14 34h20v4h4v14h-6v-4H16v4h-6V38h4z" />
    <path fill={suit} d="M16 36h16v12H16zM10 39h4v9h-4zM34 39h4v9h-4z" />
    <path fill={dark} d="M20 38h8v6h-8z" />
    <path fill="#ffe27a" d="M22 39h4v4h-4z" />
    <path fill="#e5edf0" d="M16 50h7v7h-3v4h-8v-4h4zM26 50h7v7h4v4h-8v-4h-3z" />
    <path fill="#49576d" d="M12 58h8v3H9v-2h3zM29 58h8v3h-9v-2h1z" />
  </svg>;
}

function MissionPortrait({ story, language }) {
  const [showCharacterDetails, setShowCharacterDetails] = useState(true);
  const [imageMode, setImageMode] = useState('pixel');
  const imageModes = [
    { id: 'pixel', es: 'Pixel art', en: 'Pixel art' },
    { id: 'photo', es: story.imageLabel[language], en: story.imageLabel[language] },
    ...(story.drawing ? [{ id: 'drawing', es: 'Dibujo', en: 'Drawing' }] : []),
  ];
  const imageSrc = imageMode === 'photo'
    ? '/imagenes/' + story.photo
    : imageMode === 'drawing'
      ? '/drawings/' + story.drawing
      : '/sprites/children/' + story.pixelArt;
  const imageAlt = imageMode === 'photo'
    ? story.photoCaption[language]
    : story.title[language] + ' — ' + (imageMode === 'drawing'
      ? (language === 'es' ? 'dibujo original' : 'original drawing')
      : 'pixel art');
  const imageCredit = imageMode === 'photo'
    ? story.photoCaption[language] + ' · ' + story.photoCredit[language]
    : imageMode === 'drawing'
      ? (language === 'es'
        ? 'Dibujo de Thiago y Belén (10 años).'
        : 'Drawing by Thiago and Belén (age 10).')
      : story.drawing
        ? (language === 'es'
          ? 'Pixel Art del dibujo de Thiago y Belén, niños de 10 años.'
          : 'Pixel art based on a drawing by Thiago and Belén, age 10.')
        : (language === 'es'
          ? 'Pixel art pendiente del dibujo infantil.'
          : 'Pixel art waiting for the children’s drawing.');

  return <div className="portrait-card" key={story.id}>
    <div className="portrait-frame">
      <div className={['mission-portrait', imageMode, story.retired ? 'retired' : 'active'].join(' ')}>
        <img src={imageSrc} alt={imageAlt} />
        {imageMode === 'pixel' && story.rotor && <span className="portrait-rotor" aria-hidden="true" />}
        {imageMode === 'pixel' && showCharacterDetails && <span className="portrait-arm left" aria-hidden="true" />}
        {imageMode === 'pixel' && showCharacterDetails && <span className="portrait-arm right" aria-hidden="true" />}
        {imageMode === 'pixel' && showCharacterDetails && <span className="portrait-face" aria-hidden="true"><i /><i /><b /></span>}
        {imageMode === 'pixel' && showCharacterDetails && story.retired && <span className="portrait-tear" aria-hidden="true" />}
      </div>
      <div className="portrait-tools">
        <div className="portrait-view-switch" role="group" aria-label={language === 'es' ? 'Vista de imagen' : 'Image view'}>
          {imageModes.map((mode) => <button
            key={mode.id}
            type="button"
            className={imageMode === mode.id ? 'active' : ''}
            aria-pressed={imageMode === mode.id}
            onClick={() => setImageMode(mode.id)}
          >{mode[language]}</button>)}
        </div>
        {imageMode === 'pixel' && <button
          className="face-switch"
          type="button"
          role="switch"
          aria-checked={showCharacterDetails}
          aria-label={language === 'es' ? 'Mostrar carita y brazos' : 'Show face and arms'}
          onClick={() => setShowCharacterDetails((visible) => !visible)}
        >
          <span>{language === 'es' ? 'Carita y brazos' : 'Face & arms'}</span>
          <i aria-hidden="true" />
        </button>}
      </div>
    </div>
    <p className={['portrait-credit', imageMode === 'photo' ? 'photo-credit' : ''].join(' ')}>{imageCredit}</p>
    <p className="portrait-status">
      <span aria-hidden="true" />
      <span className="portrait-status-copy">
        <strong>{language === 'es' ? 'Estado actual:' : 'Current status:'}</strong> {story.status[language]}
      </span>
    </p>
  </div>;
}
function Android({ parts, language, downloadable = false }) {
  const svgRef = useRef(null);
  const [downloadMessage, setDownloadMessage] = useState('');
  const hasPart = (id) => parts.some((part) => part.id === id);
  const pieceColors = {
    camera: '#ffe38d',
    wheels: '#8de4e4',
    seismo: '#ffbd86',
    solar: '#76c8e3',
    rotor: '#d6f1e9',
  };

  const downloadPng = async () => {
    if (!svgRef.current) return;
    setDownloadMessage('');
    let svgUrl;
    try {
      const svgText = new XMLSerializer().serializeToString(svgRef.current);
      svgUrl = URL.createObjectURL(new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' }));
      const image = new Image();
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
        image.src = svgUrl;
      });
      URL.revokeObjectURL(svgUrl);
      const canvas = document.createElement('canvas');
      canvas.width = 1120;
      canvas.height = 1480;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas is unavailable');
      context.imageSmoothingEnabled = false;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const png = await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('PNG export failed')), 'image/png');
      });
      const pngUrl = URL.createObjectURL(png);
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = 'abandoned-droid.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
      setDownloadMessage(language === 'es' ? 'Imagen PNG descargada.' : 'PNG image downloaded.');
    } catch {
      if (svgUrl) URL.revokeObjectURL(svgUrl);
      setDownloadMessage(language === 'es' ? 'No se pudo crear la imagen.' : 'The image could not be created.');
    }
  };

  const selectedObjects = parts.map((part) => part.source[language]).join(', ');
  const accessibleName = language === 'es'
    ? `Androide espacial${selectedObjects ? ` con piezas inspiradas en ${selectedObjects}` : ''}`
    : `Space android${selectedObjects ? ` with parts inspired by ${selectedObjects}` : ''}`;

  return <div className="android-preview">
    <svg
      ref={svgRef}
      className="android-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 370"
      role="img"
      aria-label={accessibleName}
      shapeRendering="crispEdges"
    >
      <rect width="280" height="370" fill="#0d162a" />
      <rect x="5" y="5" width="270" height="360" fill="none" stroke="#4d6c8e" strokeWidth="4" />
      <text x="140" y="25" fill="#fff0a5" textAnchor="middle" fontFamily="monospace" fontSize="12" fontWeight="700">ABANDONED DROID</text>
      <path d="M140 65V47" stroke="#d6f1e9" strokeWidth="6" />
      <circle cx="140" cy="42" r="6" fill="#ffe38d" />
      {hasPart('rotor') && <g className="droid-rotor">
        <rect x="135" y="46" width="10" height="20" fill="#d6f1e9" />
        <rect x="82" y="42" width="116" height="7" fill="#d6f1e9" />
        <rect x="92" y="38" width="96" height="3" fill="#8de4e4" />
      </g>}
      {hasPart('solar') && <g>
        <path d="M188 156h14" stroke="#d6f1e9" strokeWidth="7" />
        <rect x="199" y="130" width="48" height="64" fill="#204364" stroke="#8de4e4" strokeWidth="4" />
        <path d="M215 132v60M231 132v60M201 150h44M201 168h44M201 184h44" stroke="#78c8df" strokeWidth="3" />
      </g>}
      <rect x="94" y="65" width="92" height="74" fill="#8ed7db" stroke="#d6f1e9" strokeWidth="7" />
      <rect x="103" y="76" width="74" height="52" fill="#20344f" />
      <rect x="116" y="91" width="10" height="12" fill="#fff0a5" />
      <rect x="154" y="91" width="10" height="12" fill="#fff0a5" />
      <path d="M130 115h20v5h-20z" fill="#ffbdab" />
      {hasPart('camera') && <g>
        <path d="M185 101h12" stroke="#d6f1e9" strokeWidth="6" />
        <rect x="194" y="87" width="31" height="29" fill="#ffe38d" stroke="#d6f1e9" strokeWidth="3" />
        <circle cx="210" cy="101" r="8" fill="#15283f" stroke="#8de4e4" strokeWidth="4" />
        <circle cx="210" cy="101" r="3" fill="#d7f8ff" />
      </g>}
      <rect x="130" y="139" width="20" height="12" fill="#d6f1e9" />
      <path d="M82 159h-23v15h23M198 159h23v15h-23" fill="#66d5d4" stroke="#d6f1e9" strokeWidth="5" />
      <path d="M60 172v24h18M220 172v24h-18" fill="none" stroke="#66d5d4" strokeWidth="11" />
      <rect x="52" y="192" width="25" height="17" fill="#ffe38d" stroke="#fff0bd" strokeWidth="4" />
      <rect x="203" y="192" width="25" height="17" fill="#ffe38d" stroke="#fff0bd" strokeWidth="4" />
      <rect x="80" y="151" width="120" height="82" fill="#4c82a3" stroke="#d6f1e9" strokeWidth="7" />
      <rect x="132" y="163" width="18" height="18" fill="#ffe38d" stroke="#b48a53" strokeWidth="4" />
      <rect x="104" y="188" width="72" height="29" fill="#15283f" stroke="#8de4e4" strokeWidth="4" />
      {hasPart('seismo') && <g>
        <path d="M109 203h9l5-8 7 16 8-12 6 5h12l5-7 7 6h10" fill="none" stroke="#ffbd86" strokeWidth="4" />
        <circle cx="113" cy="193" r="3" fill="#fff0a5" />
      </g>}
      {!hasPart('seismo') && <g fill="#8de4e4">
        <rect x="112" y="198" width="9" height="9" />
        <rect x="130" y="198" width="9" height="9" />
        <rect x="148" y="198" width="9" height="9" />
      </g>}
      <rect x="107" y="233" width="22" height="44" fill="#d6f1e9" />
      <rect x="151" y="233" width="22" height="44" fill="#d6f1e9" />
      <path d="M92 279h51v12H92zM137 279h51v12h-51z" fill="#9db8cc" stroke="#d6f1e9" strokeWidth="4" />
      {hasPart('wheels') && <g>
        <circle cx="93" cy="267" r="14" fill="#18283e" stroke="#8de4e4" strokeWidth="5" />
        <circle cx="187" cy="267" r="14" fill="#18283e" stroke="#8de4e4" strokeWidth="5" />
        <path d="M93 257v20M83 267h20M187 257v20M177 267h20" stroke="#ffe38d" strokeWidth="3" />
      </g>}
      <path d="M24 297h232" stroke="#344969" strokeWidth="2" />
      {parts.length === 0 && <text x="140" y="327" fill="#a7bad1" textAnchor="middle" fontFamily="monospace" fontSize="8">{language === 'es' ? 'ELIGE UNA PIEZA' : 'CHOOSE A PART'}</text>}
      {parts.map((part, index) => <g key={part.id}>
        <rect x="17" y={305 + index * 18} width="8" height="8" fill={pieceColors[part.id]} />
        <text x="33" y={312 + index * 18} fill="#d6e3f4" fontFamily="monospace" fontSize="7">
          {part.name[language]} · {language === 'es' ? 'restos de ' : 'remains from '}{part.source[language]}
        </text>
      </g>)}
    </svg>
    {downloadable && <>
      <button className="android-download" type="button" onClick={downloadPng} disabled={parts.length === 0}>
        {language === 'es' ? 'DESCARGAR PNG' : 'DOWNLOAD PNG'}
      </button>
      {downloadMessage && <span className="android-download-status" role="status">{downloadMessage}</span>}
    </>}
  </div>;
}

function createSpaceTone() {
  let context;
  let masterGain;
  let noteTimer;
  let isMuted = false;
  let melodyIndex = 0;
  const oscillators = [];
  let noiseSource;

  const build = () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;

    context = new AudioContextClass();
    masterGain = context.createGain();
    masterGain.gain.value = isMuted ? 0 : 0.42;
    masterGain.connect(context.destination);

    const spaceFilter = context.createBiquadFilter();
    spaceFilter.type = 'lowpass';
    spaceFilter.frequency.value = 720;
    spaceFilter.Q.value = 0.45;
    spaceFilter.connect(masterGain);

    const padBus = context.createGain();
    padBus.gain.value = 0.4;
    padBus.connect(spaceFilter);
    [55, 82.41, 110, 164.81].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const voiceGain = context.createGain();
      oscillator.type = index === 2 ? 'triangle' : 'sine';
      oscillator.frequency.value = frequency;
      oscillator.detune.value = index % 2 === 0 ? -4 : 4;
      voiceGain.gain.value = index === 0 ? 0.035 : 0.022;
      oscillator.connect(voiceGain);
      voiceGain.connect(padBus);
      oscillator.start();
      oscillators.push(oscillator);
    });

    const filterLfo = context.createOscillator();
    const filterLfoDepth = context.createGain();
    filterLfo.frequency.value = 0.035;
    filterLfoDepth.gain.value = 210;
    filterLfo.connect(filterLfoDepth);
    filterLfoDepth.connect(spaceFilter.frequency);
    filterLfo.start();
    oscillators.push(filterLfo);

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i += 1) noiseData[i] = (Math.random() * 2 - 1) * 0.25;
    noiseSource = context.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    const noiseFilter = context.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 260;
    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.025;
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noiseSource.start();

    return true;
  };

  const playNextNote = () => {
    if (!context || context.state !== 'running') return;
    const melody = [392, 440, 523.25, 440, 349.23, 392, 293.66, 349.23, 329.63, 392, 493.88, 440];
    const now = context.currentTime;
    const note = context.createOscillator();
    const envelope = context.createGain();
    note.type = 'sine';
    note.frequency.value = melody[melodyIndex % melody.length];
    melodyIndex += 1;
    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(0.045, now + 0.24);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);
    note.connect(envelope);
    envelope.connect(masterGain);
    note.start(now);
    note.stop(now + 1.6);
  };

  return {
    async start() {
      try {
        if (!context && !build()) return;
        await context.resume();
        if (context.state === 'running' && !noteTimer) {
          playNextNote();
          noteTimer = window.setInterval(playNextNote, 1200);
        }
      } catch {
        // Autoplay may be blocked until the user interacts with the page.
      }
    },
    setMuted(muted) {
      isMuted = muted;
      if (context && masterGain) {
        masterGain.gain.setTargetAtTime(muted ? 0 : 0.42, context.currentTime, 0.2);
      }
    },
    destroy() {
      if (noteTimer) window.clearInterval(noteTimer);
      noiseSource?.stop();
      oscillators.forEach((oscillator) => {
        try { oscillator.stop(); } catch { /* An oscillator may already be stopped. */ }
      });
      if (context && context.state !== 'closed') context.close();
    },
  };
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [language, setLanguage] = useState('es');
  const [soundMuted, setSoundMuted] = useState(false);
  const [mode, setMode] = useState('story');
  const [pickedParts, setPickedParts] = useState([]);
  const spaceToneRef = useRef(null);

  useEffect(() => {
    const tone = createSpaceTone();
    spaceToneRef.current = tone;
    tone.start();
    const unlockAudio = () => tone.start();
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
      tone.destroy();
      spaceToneRef.current = null;
    };
  }, []);

  useEffect(() => {
    spaceToneRef.current?.setMuted(soundMuted);
  }, [soundMuted]);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selected]);

  return <main className="space">
    <div className="pixel-stars" aria-hidden="true" />
    <button
      className={`sound-toggle ${soundMuted ? 'muted' : ''}`}
      type="button"
      aria-label={soundMuted ? (language === 'es' ? 'Activar música espacial' : 'Turn on space music') : (language === 'es' ? 'Silenciar música espacial' : 'Mute space music')}
      aria-pressed={!soundMuted}
      title={soundMuted ? (language === 'es' ? 'Activar música espacial' : 'Turn on space music') : (language === 'es' ? 'Silenciar música espacial' : 'Mute space music')}
      onClick={() => setSoundMuted((muted) => !muted)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" shapeRendering="crispEdges">
        <path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor" />
        {soundMuted
          ? <path d="m16 9 5 6m0-6-5 6" fill="none" stroke="#ffbdab" strokeWidth="2" />
          : <path d="M15 9a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" />}
      </svg>
    </button>
    <div className="scene-heading">
      <h1>Abandoned Droid</h1>
      <p>{language === 'es' ? 'Haz clic en los puntos brillantes y descubre sus brillantes historias.' : 'Click the bright points and discover their brilliant stories.'}</p>
    </div>
    <div className="language-switch" role="group" aria-label="Language / Idioma">
      <button className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button>
      <span />
      <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
    </div>
    <div className="world">
      <div className="earth-orbit" />
      <div className="earth-turn">
        <Earth />
        <div className="surface-kids"><Astronaut /><Astronaut girl /></div>
      </div>
    </div>
    <div className="corner-object moon-object"><Moon /></div>
    <div className="corner-object mars-object"><Mars /></div>
    {stories.map((story) => <button
      key={story.id}
      className={`point ${story.group}`}
      style={{ left: `${story.x}%`, top: `${story.y}%` }}
      aria-label={story.title[language]}
      title={story.title[language]}
      onClick={() => { setSelected(story); setMode('story'); setPickedParts([]); }}
    ><span /></button>)}
    {selected && <div className="card-backdrop" onClick={() => setSelected(null)}>
      <section className="info-card" role="dialog" aria-modal="true" aria-labelledby="story-title" onClick={(event) => event.stopPropagation()}>
        <button className="card-close" aria-label={language === 'es' ? 'Cerrar' : 'Close'} onClick={() => setSelected(null)} />
        {mode === 'story' && <>
          <h1 id="story-title">{selected.title[language]}</h1>
          <div className="story-layout">
            <MissionPortrait story={selected} language={language} />
            <div className="story-copy"><p>{selected.text[language]}</p></div>
          </div>
          <button className="pixel-button story-action" onClick={() => setMode('invite')}>{language === 'es' ? 'ARMAR UN ANDROIDE' : 'BUILD AN ANDROID'}</button>
        </>}
        {mode === 'invite' && <div className="builder-invite">
          <h1 id="story-title">{language === 'es' ? 'Una nueva misión te espera' : 'A new mission awaits'}</h1>
          <p>{language === 'es' ? 'La próxima vez, crea tu propia historia y ayuda a la NASA.' : 'Next time, create your own story and help NASA.'}</p>
          <button className="pixel-button" onClick={() => setMode('builder')}>{language === 'es' ? 'CONTINUAR' : 'CONTINUE'}</button>
        </div>}
        {mode === 'builder' && <div className="builder-view">
          <div className="builder-heading"><h1 id="story-title">{language === 'es' ? 'Arma tu androide' : 'Build your android'}</h1><p>{language === 'es' ? 'Elige 3 piezas con tecnología de nuestras misiones.' : 'Choose 3 parts inspired by our mission technology.'}</p></div>
          <div className="builder-layout">
            <div className="builder-parts">
              <div className="scrap-grid">{scrapParts.map((part) => {
                const isPicked = pickedParts.includes(part.id);
                const sourceText = language === 'es' ? `Restos de ${part.source.es}` : `Remains from ${part.source.en}`;
                return <button
                  key={part.id}
                  className={`scrap-part ${isPicked ? 'picked' : ''}`}
                  aria-pressed={isPicked}
                  aria-label={`${part.name[language]} — ${sourceText}`}
                  onClick={() => setPickedParts((current) => isPicked ? current.filter((id) => id !== part.id) : current.length < 3 ? [...current, part.id] : current)}
                >
                  <span className={`scrap-icon ${part.icon}`} />
                  <span className="scrap-label">{part.name[language]}</span>
                  <span className="scrap-source">{sourceText}</span>
                </button>;
              })}</div>
              <p className="selected-parts-summary" aria-live="polite">
                {pickedParts.length
                  ? scrapParts.filter((part) => pickedParts.includes(part.id)).map((part) => `${part.name[language]} — ${language === 'es' ? 'restos de ' : 'remains from '}${part.source[language]}`).join(' · ')
                  : language === 'es' ? 'Selecciona piezas para ver de qué objeto vienen sus restos.' : 'Select parts to see which object their remains come from.'}
              </p>
            </div>
            <div className="android-workbench"><Android parts={scrapParts.filter((part) => pickedParts.includes(part.id))} language={language} downloadable /></div>
          </div>
          <button className="pixel-button" disabled={pickedParts.length !== 3} onClick={() => setMode('ready')}>{language === 'es' ? 'CREAR ANDROIDE' : 'BUILD ANDROID'}</button>
        </div>}
        {mode === 'ready' && <div className="android-ready">
          <h1 id="story-title">{language === 'es' ? '¡Tu androide está listo!' : 'Your android is ready!'}</h1>
          <Android parts={scrapParts.filter((part) => pickedParts.includes(part.id))} language={language} downloadable />
          <p>{language === 'es' ? 'Hecho con ideas que dejaron nuestros exploradores.' : 'Built from ideas our explorers left behind.'}</p>
          <button className="pixel-button" onClick={() => setSelected(null)}>{language === 'es' ? 'VOLVER AL ESPACIO' : 'BACK TO SPACE'}</button>
        </div>}
      </section>
    </div>}
  </main>;
}
