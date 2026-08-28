const redaktionelleNews = [
  {
    datum: '2026-08-28',
    kategorie: 'Steeldart',
    titel: 'Trifels Steeldart Club beim VfB',
    text: 'Seit 2026 gehört auch der Steeldart Club zur Vereinsgemeinschaft. Aktuelle Informationen gibt es auf der Steeldart-Seite.',
    link: 'steeldart.html'
  },
  {
    datum: '2026-08-28',
    kategorie: 'Damen',
    titel: 'Damenmannschaft stellt sich vor',
    text: 'Die Damen freuen sich über neue Mitspielerinnen. Training und Ansprechpartner findest du auf der Mannschaftsseite.',
    link: 'mannschaften.html#damen-vorstellung'
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

const ergebnisTitel = (spiel) => {
  const [heimTore, gastTore] = spiel.ergebnis.split(':').map(Number);
  const gewonnen = (spiel.ort === 'Heim' && heimTore > gastTore)
    || (spiel.ort === 'Auswärts' && gastTore > heimTore);
  const unentschieden = heimTore === gastTore;
  const verb = unentschieden ? 'spielt unentschieden' : gewonnen ? 'gewinnt' : 'verliert';
  const eigeneMannschaft = spiel.ort === 'Heim' ? spiel.verein : spiel.gegner;
  const gegner = spiel.ort === 'Heim' ? spiel.gegner : spiel.verein;

  return `${eigeneMannschaft} ${verb} ${spiel.ergebnis} gegen ${gegner}`;
};

const ergebnisNews = spieleErgebnisse.map((spiel) => ({
  datum: spiel.datum,
  kategorie: spiel.mannschaft,
  titel: ergebnisTitel(spiel),
  text: `${spiel.wettbewerb} - ${spiel.ort === 'Heim' ? 'Heimspiel' : 'Auswärtsspiel'} am ${formatNewsDatum(spiel.datum)}.`,
  link: `mannschaften.html#spiel-${spiel.datum}-${spiel.mannschaft.toLowerCase().replaceAll(' ', '-')}`
}));

const news = [
  ...ergebnisNews.sort((erstes, zweites) => zweites.datum.localeCompare(erstes.datum)).slice(0, 4),
  ...redaktionelleNews
].sort((erstes, zweites) => zweites.datum.localeCompare(erstes.datum)).slice(0, 6);

const newsContainer = document.querySelector('#news-container');

if (newsContainer) {
  newsContainer.innerHTML = news.map((meldung) => `
    <a class="news-card" href="${escapeNewsHtml(meldung.link)}">
      <div class="news-card-label">${escapeNewsHtml(meldung.kategorie)}</div>
      <div class="news-card-body">
        <div class="news-card-date">${escapeNewsHtml(formatNewsDatum(meldung.datum))}</div>
        <h3>${escapeNewsHtml(meldung.titel)}</h3>
        <p>${escapeNewsHtml(meldung.text)}</p>
      </div>
    </a>
  `).join('');
}

const renderSpielPanel = (spiel, istVergangen, mitAnker = false) => {
  const heimteam = spiel.ort === 'Heim' ? spiel.verein : spiel.gegner;
  const gastteam = spiel.ort === 'Heim' ? spiel.gegner : spiel.verein;
  const anker = `spiel-${spiel.datum}-${spiel.mannschaft.toLowerCase().replaceAll(' ', '-')}`;

  return `
    <article${mitAnker ? ` id="${escapeNewsHtml(anker)}"` : ''} class="spiel-card ${istVergangen ? 'spiel-card--past' : ''}">
      <div class="spiel-card-date"><span>${escapeNewsHtml(formatNewsDatum(spiel.datum))}</span><span>${istVergangen ? (spiel.ort === 'Heim' ? 'Heimspiel' : 'Auswärtsspiel') : `${spiel.uhrzeit} Uhr`}</span></div>
      <div class="spiel-card-main">
        <div class="spiel-card-meta">${escapeNewsHtml(spiel.mannschaft)} <span>${escapeNewsHtml(spiel.wettbewerb)}</span></div>
        <h3><span class="spiel-team">${escapeNewsHtml(heimteam)}</span><span class="spiel-vs">gegen</span><span class="spiel-team">${escapeNewsHtml(gastteam)}</span></h3>
        <div class="spiel-card-location">${escapeNewsHtml(spiel.ort)}${istVergangen ? '' : ` &middot; ${escapeNewsHtml(spiel.uhrzeit)} Uhr`}</div>
      </div>
      <div class="spiel-card-result ${istVergangen ? 'spiel-card-result--final' : ''}">${escapeNewsHtml(istVergangen ? spiel.ergebnis : 'Anstoß')}</div>
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
      <button class="carousel-button carousel-button--prev" type="button" aria-label="Vorheriges Spiel">&#8592;</button>
      <div class="carousel-dots" role="tablist" aria-label="Spiel auswählen">
        ${sortierteSpiele.map((spiel, index) => `<button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-label="Spiel ${index + 1} von ${sortierteSpiele.length}" aria-selected="${index === 0}" data-slide="${index}"></button>`).join('')}
      </div>
      <button class="carousel-button carousel-button--next" type="button" aria-label="Nächstes Spiel">&#8594;</button>
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
