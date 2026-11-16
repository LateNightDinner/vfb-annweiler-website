// Bildarchiv-Carousel: Bilder aus bilder/bildarchiv mit Überschrift (Info) und Unterschrift (abgebildete Personen).
// Neues Bild hinzufügen: Datei nach bilder/bildarchiv/ legen und hier einen Eintrag ergänzen.
const bildarchivBilder = [
  {
    datei: 'bildarchiv-1922-1923-VfB-Sportplatz-am-heutigen-Schwimmbad.jpg',
    titel: '1922/1923: VfB Sportplatz am heutigen Schwimmbad',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1926-1930-aktive.jpg',
    titel: '1926–1930: Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1926-aktive.jpg',
    titel: '1926: Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1928-1929-suedpfalzgaumeister-der-bklasse.jpg',
    titel: '1928/1929: Südpfalzgaumeister der B-Klasse',
    unterschrift: 'Stehend v.l.n.r. Karl Grasmück, Heiner Zuleg, Heiner Winter, Heiner Schnäbele, Johannes Jopp, Richard Brachat, Otto Veit, Bert Müller, Johannes Metz, Otto Metz, Adam Metz <br> Sitzend v.l.n.r. Hermann Trautmann, Philipp Speyerer'
  },
  {
    datei: 'bildarchiv-1937-1938-jugend.jpg',
    titel: '1937/1938: Jugend',
    unterschrift: 'Stehend v.l.n.r. Hans Döllinger, Albert Speyerer, Kurt Gabelmann, Kurt Hautz, Georg Konrad, Georg Künzl, Erich Köhler <br> Knieend v.l.n.r. Gottfried Steiner, Alfred Kellerhans, Helmut Göttel, Walter Bretz'
  },
  {
    datei: 'bildarchiv-1939-jugend.jpg',
    titel: '1939: Jugend',
    unterschrift: 'Stehend v.l.n.r. Georg Künzl, Georg Konrad, Otto Gotthold, Heiner Schnäbele, Walter Schüssler <br> Sitzend v.l.n.r. Erich Köhler, Helmut Göttel, Alfred Kellerhans, Hans Döllinger <br> Liegend v.l.n.r. Kurt Gabelmann, Albert Speyerer'
  },
  {
    datei: 'bildarchiv-1941-jugend.jpg',
    titel: '1941: Jugend',
    unterschrift: 'Stehend v.l.n.r. Hans Döllinger, Robert Breiner, Erich Köhler, Ottmar Lamott, Albert Speyerer, Heiner Schnäbele <br> Knieend v.l.n.r. Alfred Kellerhans, Kurt Kopp, Georg Künzl <br> Liegend v.l.n.r. Helmut Göttel, Georg Konrad'
  },
  {
    datei: 'bildarchiv-1948-aktive.jpg',
    titel: '1948: Aktive Mannschaft',
    unterschrift: 'Stehend v.l.n.r. Richard Herbst, Georg Künzl, Josef Herbst, Albert Speyerer, Ottmar Lamott, Bruno Gorski, Adolf Borger, Hans Gillmann, Heinz Schäffler, Erwin Würtz, Johannes Jopp'
  },
  {
    datei: 'bildarchiv-1949-aktive-aufstiegsspiel-zur-aklasse.jpg',
    titel: '1949: Aktive, Aufstiegsspiel zur A-Klasse',
    unterschrift: 'Stehend v.l.n.r. Helmut Göttel, Adolf Borger, Ottmar Bolldorf, Hans Gillmann, Georg Künzl, Albert Speyerer, Wolfgang Neher, Edgar Göttel <br> Knieend v.l.n.r. Heinz Schäffler, Bruno Gorski, Josef Herbst'
  },
  {
    datei: 'bildarchiv-1951-aktive.jpg',
    titel: '1951: Aktive Mannschaft',
    unterschrift: 'Stehend v.l.n.r. Helmut Göttel, Adolf Borger, Richard Herbst, Albert Speyerer, Hans Albert, .... Tim, Georg Künzl, Heinz Schäffler, Ottmar Lamott, Erwin Würtz, Josef Grein'
  },
  {
    datei: 'bildarchiv-1953-1953-meister-der-bklasse.jpg',
    titel: '1953: Meister der B-Klasse',
    unterschrift: 'Stehend v.l.n.r. Georg Künzl, Hans Albert, Robert Mayer, Werner Rink, Rolf Krämer, Fritz Künzl <br> Knieend v.l.n.r. Manfred Klein, Erich Göltz, Bruno Gorski, Ottmar Lamott, Edgar Göttel'
  },
  {
    datei: 'bildarchiv-1955-1958-aktive.jpg',
    titel: '1955–1958: Aktive Mannschaft',
    unterschrift: 'Stehend v.l.n.r. Kurt Köder, Gerd Kuhn, Georg Goldfuß, Arno Kunz, Edmund Zimmerle, Helmut Völker, Werner Rink, Karl-Friedrich Bosch, Rudi Kuhn (Spielertrainer), Adolf Theobald, Ferenc Matusz'
  },
  {
    datei: 'bildarchiv-1955-aktive.jpg',
    titel: '1955: Aktive Mannschaft',
    unterschrift: 'Stehend v.l.n.r. Manfred Klein, Edgar Göttel, Rolf Krämer, Georg Künzl, Arno Kunz, Karl-Friedrich Bosch, Edmund Zimmerle, Georg Goldfuß, Trainer Rudi Kuhn <br> Knieend v.l.n.r. Ottmar Lamott, Bruno Gorski, Robert Mayer'
  },
  {
    datei: 'bildarchiv-1957-1958-meister-der-bklasse.jpg',
    titel: '1957/1958: Meister der B-Klasse',
    unterschrift: 'Stehend v.l.n.r. Karl-Friedrich Bosch, Werner Rink, Arno Kunz, Robert Mayer, Fritz Künzl, Gerd Kuhn, Edmund Zimmerle, Georg Goldfuß, Rudi Kuhn (Spielertrainer), Kurt Trautmann (Spielleiter) <br> Knieend v.l.n.r. Norbert Klein, Helmut Völker, Kurt Köder'
  },
  {
    datei: 'bildarchiv-1958-ah.jpg',
    titel: '1958: Altherren',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1960-ah-einweihung-trifelsstadion.jpg',
    titel: '1960: Altherren, Einweihung Trifelsstadion',
    unterschrift: 'Bild A (v.l.n.r.): VfB-Spielführer Oswald Ludwig, Schiedsrichter Johannes Jopp, Waldhof-Spielführer <br> Bild B (v.l.n.r.): Oswald Ludwig, Ottmar Bolldorf, Helmut Göttel, Fritz Künzl, Hans Bignotti, Erich Ludwig, ..... Johann, Georg Künzl, Adolf Borger, Hermann Kindler, Bruno Gorski'
  },
  {
    datei: 'bildarchiv-1981-meister-der-bklasse-und-pokalsieger.jpg',
    titel: '1981: Meister der B-Klasse und Pokalsieger',
    unterschrift: 'Stehend v.l.n.r. Wolfgang Feierabend, Malewski, Hanß, Hübl, Eugenio dos Santos, Straub, Böck, Siegfried Hoffmann, Gökhan, Rottmann, Walter Bitzer, Chomik, Peter, Franz Bitzer, Finger <br> Knieend v.l.n.r. Hautz, Wolf, Wittmann, Bohn, Heß, Zuleg <br> Nicht anwesend: Kuhl, Kopf, Fuchs, Franz, Würtz, Nikolaus, Axel Feierabend, Dentzer'
  },
  {
    datei: 'bildarchiv-1981-meister-der-bklasse-und-pokalsieger1.jpg',
    titel: '1981: Meister der B-Klasse und Pokalsieger',
    unterschrift: 'Stehend v.l.n.r. Wolfgang Feierabend, Malewski, Hanß, Hübl, Eugenio dos Santos, Straub, Böck, Siegfried Hoffmann, Gökhan, Rottmann, Walter Bitzer, Chomik, Peter, Franz Bitzer, Finger <br> Knieend v.l.n.r. Hautz, Wolf, Wittmann, Bohn, Heß, Zuleg <br> Nicht anwesend: Kuhl, Kopf, Fuchs, Franz, Würtz, Nikolaus, Axel Feierabend, Dentzer'
  },
  {
    datei: 'bildarchiv-1986-meister-der-bklasse-kreispokalsieger-bezirkspokalsieger.jpg',
    titel: '1986: Meister der B-Klasse, Kreis- und Bezirkspokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1986-meister-der-bklasse-kreispokalsieger-bezirkspokalsieger1.jpg',
    titel: '1986: Meister der B-Klasse, Kreis- und Bezirkspokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1992-meister-der-aklasse.jpg',
    titel: '1992: Meister der A-Klasse',
    unterschrift: 'Eberhard Greiner, "Kando", Michael Stadel, Rainer Weisbrod, Frank Götten, Emil Straßner, Heinz Jeblick, Günther Götten <br> Knieend v.l.n.r. Ralf Münster, Patrick Seibel, Mustafa Seradni, Michael Woiznick, Kai-Uwe Lippler, Rolf Franz, Dirk Münster, Rolf Odebrecht'
  },
  {
    datei: 'bildarchiv-2010-2011-aufsteiger-nach-entscheidungsspiel-und-relegationsspielen.jpg',
    titel: '2010/2011: Aufsteiger nach Entscheidungs- und Relegationsspielen',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-abschiedsspiel-zuleg-bitzer-hautz.jpg',
    titel: 'Abschiedsspiel',
    unterschrift: 'Stehend v.l.n.r. Masseur Fick, Hans-Jürgen Zuleg, Manfred Hübl, Walter Bitzer, Ayhan Gökhan, Siegfried Hoffmann, Manfred Finger <br> Knieend v.l.n.r. Manfred Hautz, Rainer Fuchs, Rolf Franz, Jürgen Würtz, Ewald Wittmann, Klaus Rothmann, Bernd Wolf, Erdogan Gökhan <br> Stehend v.l.n.r. Michael Denzer, Thomas Chini, Manfred Finger, Bernd Gröber, Andreas Harde'
  },
];

(() => {
  const viewport = document.querySelector('#bildarchiv-carousel');
  if (!viewport) return;

  const track = viewport.querySelector('.bildarchiv-carousel-track');
  const dotsContainer = document.querySelector('#bildarchiv-carousel-dots');

  track.innerHTML = bildarchivBilder.map((bild) => `
    <div class="bildarchiv-carousel-slide">
      <figure class="bildarchiv-figure">
        <div class="bildarchiv-figure-media"><img src="bilder/bildarchiv/${bild.datei}" alt="${bild.titel}" loading="lazy"></div>
        <figcaption>
          <div class="bildarchiv-titel">${bild.titel}</div>
          ${bild.unterschrift !== '' ? `<div class="bildarchiv-unterschrift">${bild.unterschrift}</div>` : ''}
        </figcaption>
      </figure>
    </div>
  `).join('');

  dotsContainer.innerHTML = bildarchivBilder.map((bild, index) => `
    <button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-label="Bild ${index + 1} von ${bildarchivBilder.length}" aria-selected="${index === 0}" data-slide="${index}"></button>
  `).join('');

  const slides = [...track.children];
  const dots = [...dotsContainer.children];
  let activeIndex = 0;

  const updateViewportHeight = () => {
    viewport.style.height = `${slides[activeIndex].offsetHeight}px`;
  };

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    updateViewportHeight();
    updateCarouselDots(dots, activeIndex);
  };

  showSlide(activeIndex);
  window.addEventListener('resize', updateViewportHeight);

  document.querySelector('#bildarchiv-carousel-controls .carousel-button--prev').addEventListener('click', () => showSlide(activeIndex - 1));
  document.querySelector('#bildarchiv-carousel-controls .carousel-button--next').addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
})();
