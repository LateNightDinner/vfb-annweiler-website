const redaktionelleNews = [
  {
    datum: '2026-08-28',
    kategorie: 'Steeldart',
    titel: 'Trifels Steeldart Club beim VfB',
    text: 'Seit 2026 gehört auch der Steeldart Club zur Vereinsgemeinschaft. Aktuelle Informationen gibt es auf der Steeldart-Seite.',
    link: 'steeldart.html'
  },
  {
    datum: '2026-08-08',
    kategorie: 'Verein',
    titel: 'Aufräumaktion',
    text: 'Freiwillige Helfer haben die Räumlichkeiten im Vereinsheim entrümpelt und neu geordnet. Die Vorher-Nachher-Bilder gibt es hier auf der Seite.',
    link: 'aktuelles.html#aufraeumaktion'
  },
  {
    datum: '2026-09-20',
    kategorie: 'Newsletter',
    titel: 'Vereins-Newsletter',
    text: 'Unser Newsletter erscheint einmal im Quartal mit Neuigkeiten aus dem Verein. Die aktuelle Ausgabesteht als PDF zum Download bereit.',
    link: 'dokumente/vfb-newsletter-202605.pdf',
    download: true
  }
];

const formatNewsDatum = (datum) => {
  const [jahr, monat, tag] = datum.split('-');
  return `${tag}.${monat}.${jahr}`;
};

const escapeNewsHtml = (text) => String(text)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

// erlaubt Zeilenumbrüche nach Schrägstrichen statt mitten im Wort
const mitUmbruchNachSlash = (text) => escapeNewsHtml(text).replaceAll('/', '/<wbr>');

const news = [...redaktionelleNews]
  .sort((erstes, zweites) => zweites.datum.localeCompare(erstes.datum))
  .slice(0, 6);

const newsContainer = document.querySelector('#news-container');

if (newsContainer) {
  newsContainer.innerHTML = news.map((meldung) => `
    <a class="news-card" href="${escapeNewsHtml(meldung.link)}"${meldung.download ? ' target="_blank" rel="noopener" download' : ''}>
      <div class="news-card-label">${escapeNewsHtml(meldung.kategorie)}</div>
      <div class="news-card-body">
        <div class="news-card-date">${escapeNewsHtml(formatNewsDatum(meldung.datum))}</div>
        <h3>${escapeNewsHtml(meldung.titel)}</h3>
        <p>${escapeNewsHtml(meldung.text)}</p>
        ${meldung.download ? '<span class="news-card-download">PDF herunterladen &darr;</span>' : ''}
      </div>
    </a>
  `).join('');
}

const renderSpielPanel = (spiel, istVergangen, mitAnker = false) => {
  const heimteam = spiel.ort === 'Heim' ? spiel.verein : spiel.gegner;
  const gastteam = spiel.ort === 'Heim' ? spiel.gegner : spiel.verein;
  const anker = `spiel-${spiel.datum}-${spiel.mannschaft.toLowerCase().replaceAll(' ', '-')}`;
  const datumZeit = spiel.uhrzeit ? `${formatNewsDatum(spiel.datum)} - ${spiel.uhrzeit}` : formatNewsDatum(spiel.datum);
  const idAttribut = mitAnker ? ` id="${escapeNewsHtml(anker)}"` : '';

  if (istVergangen) {
    const [heimTore, gastTore] = spiel.ergebnis.split(':');

    return `
    <article${idAttribut} class="spiel-card spiel-card--past">
      <div class="spiel-result-header">
        <span>${escapeNewsHtml(spiel.wettbewerb || '')}</span>
        <span>${escapeNewsHtml(spiel.mannschaft)}</span>
        <span>${escapeNewsHtml(datumZeit)}</span>
      </div>
      <div class="spiel-result-teams">
        <span class="spiel-team">${mitUmbruchNachSlash(heimteam)}</span>
        <span class="spiel-vs">vs.</span>
        <span class="spiel-team">${mitUmbruchNachSlash(gastteam)}</span>
      </div>
      <div class="spiel-result-score">
        <span>${escapeNewsHtml(heimTore)}</span>
        <span>:</span>
        <span>${escapeNewsHtml(gastTore)}</span>
      </div>
      ${spiel.link
        ? `<a class="spiel-result-bericht" href="${escapeNewsHtml(spiel.link)}" target="_blank" rel="noopener">Bericht auf fußball.de</a>`
        : '<span class="spiel-result-bericht spiel-result-bericht--leer">Kein Bericht verfügbar</span>'}
    </article>
  `;
  }

  const ortLabel = spiel.ort === 'Heim' ? 'Heim' : 'Auswärts';
  const spielort = spiel.spielort || (spiel.ort === 'Heim' ? 'Rasenplatz, Landauer Str., 76855 Annweiler am Trifels' : `${spiel.gegner}, Fußballplatz`);
  const mapsLink = spiel.mapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spielort)}`;

  return `
    <article${idAttribut} class="spiel-card">
      <div class="spiel-card-category">
        <span>${escapeNewsHtml(spiel.mannschaft)}</span>
        ${spiel.wettbewerb ? `<span class="spiel-card-competition">${escapeNewsHtml(spiel.wettbewerb)}</span>` : ''}
      </div>
      <div class="spiel-card-body">
        <div class="spiel-card-datetime">${escapeNewsHtml(datumZeit)}</div>
        <div class="spiel-card-teams">
          <span class="spiel-team">${mitUmbruchNachSlash(heimteam)}</span>
          <span class="spiel-vs">vs.</span>
          <span class="spiel-team">${mitUmbruchNachSlash(gastteam)}</span>
        </div>
        <a class="spiel-card-ort-link" href="${escapeNewsHtml(mapsLink)}" target="_blank" rel="noopener">${escapeNewsHtml(ortLabel)}</a>
      </div>
    </article>
  `;
};

const renderSpielCarousel = (containerId, spieldaten, istVergangen) => {
  const container = document.querySelector(containerId);
  if (!container || !spieldaten.length) return;

  const sortierteSpiele = [...spieldaten].sort((erstes, zweites) => {
    const sortierung = erstes.datum.localeCompare(zweites.datum);
    return istVergangen ? -sortierung : sortierung;
  });
  const sichtbareKarten = Number.parseInt(getComputedStyle(container).getPropertyValue('--carousel-visible'), 10) || 3;
  const kopienVorne = sortierteSpiele.slice(-sichtbareKarten);
  const kopienHinten = sortierteSpiele.slice(0, sichtbareKarten);
  const carouselId = `${containerId.slice(1)}-carousel`;

  container.innerHTML = `
    <div class="spiele-carousel-viewport" id="${carouselId}" aria-live="polite">
      <div class="spiele-carousel-track">
        ${kopienVorne.map((spiel) => `<div class="spiele-carousel-slide">${renderSpielPanel(spiel, istVergangen)}</div>`).join('')}
        ${sortierteSpiele.map((spiel) => `<div class="spiele-carousel-slide">${renderSpielPanel(spiel, istVergangen, true)}</div>`).join('')}
        ${kopienHinten.map((spiel) => `<div class="spiele-carousel-slide">${renderSpielPanel(spiel, istVergangen)}</div>`).join('')}
      </div>
    </div>
    <div class="spiele-carousel-controls">
      <button class="carousel-button carousel-button--prev" type="button" aria-label="Vorheriges Spiel"></button>
      <div class="carousel-dots" role="tablist" aria-label="Spiel auswählen">
        ${sortierteSpiele.map((spiel, index) => `<button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-label="Spiel ${index + 1} von ${sortierteSpiele.length}" aria-selected="${index === 0}" data-slide="${index}"></button>`).join('')}
      </div>
      <button class="carousel-button carousel-button--next" type="button" aria-label="Nächstes Spiel"></button>
    </div>
  `;

  const track = container.querySelector('.spiele-carousel-track');
  const dots = [...container.querySelectorAll('.carousel-dot')];
  let activeIndex = sichtbareKarten;
  let isAnimating = false;

  const showSlide = (index, animate = true) => {
    if (isAnimating && animate) return;
    isAnimating = animate;
    track.style.transition = animate ? 'transform 0.35s ease' : 'none';
    activeIndex = index;
    track.style.transform = `translateX(-${activeIndex * (100 / sichtbareKarten)}%)`;
    const dotIndex = (activeIndex - sichtbareKarten + sortierteSpiele.length) % sortierteSpiele.length;
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === dotIndex);
      dot.setAttribute('aria-selected', index === dotIndex);
    });
  };

  track.addEventListener('transitionend', () => {
    if (activeIndex >= sortierteSpiele.length + sichtbareKarten) showSlide(sichtbareKarten, false);
    if (activeIndex < sichtbareKarten) showSlide(sortierteSpiele.length + sichtbareKarten - 1, false);
    isAnimating = false;
  });

  showSlide(activeIndex, false);
  container.querySelector('.carousel-button--prev').addEventListener('click', () => showSlide(activeIndex - 1));
  container.querySelector('.carousel-button--next').addEventListener('click', () => showSlide(activeIndex + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide) + sichtbareKarten)));
};

const heute = new Date();
const heuteAlsDatum = `${heute.getFullYear()}-${String(heute.getMonth() + 1).padStart(2, '0')}-${String(heute.getDate()).padStart(2, '0')}`;
const kommendeSpiele = spieleAnstehend.filter((spiel) => spiel.datum >= heuteAlsDatum);

renderSpielCarousel('#news-spiele-container', kommendeSpiele, false);
renderSpielCarousel('#news-ergebnisse-container', spieleErgebnisse, true);
