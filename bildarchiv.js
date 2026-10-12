// Bildarchiv-Carousel: Bilder aus bilder/bildarchiv mit Überschrift (Info) und Unterschrift (abgebildete Personen).
// Neues Bild hinzufügen: Datei nach bilder/bildarchiv/ legen und hier einen Eintrag ergänzen.
const bildarchivBilder = [
  {
    datei: 'bildarchiv-1922-1923-VfB-Sportplatz-am-heutigen-Schwimmbad.jpg',
    titel: '1922/1923 – VfB Sportplatz am heutigen Schwimmbad',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1926-1930-aktive.jpg',
    titel: '1926–1930 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1926-aktive.jpg',
    titel: '1926 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1928-1929-suedpfalzgaumeister-der-bklasse.jpg',
    titel: '1928/1929 – Südpfalzgaumeister der B-Klasse',
    unterschrift: 'Stehend v.l.n.r. Karl Grasmück, Heiner Zuleg, Heiner Winter, Heiner Schnäbele, Johannes Jopp, Richard Brachat, Otto Veit, Bert Müller, Johannes Metz, Otto Metz, Adam Metz Sitzend v.l.n.r. Hermann Trautmann, Philipp Speyerer'
  },
  {
    datei: 'bildarchiv-1937-1938-jugend.jpg',
    titel: '1937/1938 – Jugend',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1939-jugend.jpg',
    titel: '1939 – Jugend',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1941-jugend.jpg',
    titel: '1941 – Jugend',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1948-aktive.jpg',
    titel: '1948 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1949-aktive-aufstiegsspiel-zur-aklasse.jpg',
    titel: '1949 – Aktive, Aufstiegsspiel zur A-Klasse',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1951-aktive.jpg',
    titel: '1951 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1953-1953-meister-der-bklasse.jpg',
    titel: '1953 – Meister der B-Klasse',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1955-1958-aktive.jpg',
    titel: '1955–1958 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1955-aktive.jpg',
    titel: '1955 – Aktive Mannschaft',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1957-1958-meister-der-bklasse.jpg',
    titel: '1957/1958 – Meister der B-Klasse',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1958-ah.jpg',
    titel: '1958 – Altherren',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1960-ah-einweihung-trifelsstadion.jpg',
    titel: '1960 – Altherren, Einweihung Trifelsstadion',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1981-meister-der-bklasse-und-pokalsieger.jpg',
    titel: '1981 – Meister der B-Klasse und Pokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1981-meister-der-bklasse-und-pokalsieger1.jpg',
    titel: '1981 – Meister der B-Klasse und Pokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1986-meister-der-bklasse-kreispokalsieger-bezirkspokalsieger.jpg',
    titel: '1986 – Meister der B-Klasse, Kreis- und Bezirkspokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1986-meister-der-bklasse-kreispokalsieger-bezirkspokalsieger1.jpg',
    titel: '1986 – Meister der B-Klasse, Kreis- und Bezirkspokalsieger',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-1992-meister-der-aklasse.jpg',
    titel: '1992 – Meister der A-Klasse',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-2010-2011-aufsteiger-nach-entscheidungsspiel-und-relegationsspielen.jpg',
    titel: '2010/2011 – Aufsteiger nach Entscheidungs- und Relegationsspielen',
    unterschrift: ''
  },
  {
    datei: 'bildarchiv-abschiedsspiel-zuleg-bitzer-hautz.jpg',
    titel: 'Abschiedsspiel',
    unterschrift: ''
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
          <div class="bildarchiv-unterschrift">${bild.unterschrift || 'Personen noch zu ergänzen'}</div>
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

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeIndex);
      dot.setAttribute('aria-selected', dotIndex === activeIndex);
    });
  };

  document.querySelector('#bildarchiv-carousel-controls .carousel-button--prev').addEventListener('click', () => showSlide(activeIndex - 1));
  document.querySelector('#bildarchiv-carousel-controls .carousel-button--next').addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
})();
