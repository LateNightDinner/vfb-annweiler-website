const formatSpielDatum = (datum) => {
  const [jahr, monat, tag] = datum.split('-');
  return `${tag}.${monat}.${jahr}`;
};

const escapeHtml = (text) => String(text)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const renderSpiel = (spiel, istVergangen) => {
  const ergebnis = istVergangen ? spiel.ergebnis : spiel.uhrzeit || 'Anstoß folgt';
  const ortLabel = spiel.ort === 'Heim' ? 'Heimspiel' : 'Auswärtsspiel';
  const anker = `spiel-${spiel.datum}-${spiel.mannschaft.toLowerCase().replaceAll(' ', '-')}`;
  const heimteam = spiel.ort === 'Heim' ? spiel.verein : spiel.gegner;
  const gastteam = spiel.ort === 'Heim' ? spiel.gegner : spiel.verein;

  return `
    <article id="${escapeHtml(anker)}" class="spiel-card ${istVergangen ? 'spiel-card--past' : ''}">
      <div class="spiel-card-date">
        <span>${escapeHtml(formatSpielDatum(spiel.datum))}</span>
        <span>${escapeHtml(ortLabel)}</span>
      </div>
      <div class="spiel-card-main">
        <div class="spiel-card-meta">${escapeHtml(spiel.mannschaft)}${spiel.wettbewerb ? ` <span>${escapeHtml(spiel.wettbewerb)}</span>` : ''}</div>
        <h3><span class="spiel-team">${escapeHtml(heimteam)}</span><span class="spiel-vs">gegen</span><span class="spiel-team">${escapeHtml(gastteam)}</span></h3>
        <div class="spiel-card-location">${escapeHtml(spiel.ort)}${spiel.uhrzeit && !istVergangen ? ` &middot; ${escapeHtml(spiel.uhrzeit)} Uhr` : ''}</div>
      </div>
      <div class="spiel-card-result ${istVergangen ? 'spiel-card-result--final' : ''}">${escapeHtml(ergebnis)}</div>
    </article>
  `;
};

const renderSpiele = (containerId, spieldaten, istVergangen, leertext) => {
  const container = document.querySelector(containerId);

  if (!container) return;

  const sortierteSpiele = [...spieldaten].sort((erstesSpiel, zweitesSpiel) => {
    const sortierung = erstesSpiel.datum.localeCompare(zweitesSpiel.datum);
    return istVergangen ? -sortierung : sortierung;
  });

  const limit = Number.parseInt(container.dataset.limit, 10);
  const sichtbareSpiele = Number.isNaN(limit) ? sortierteSpiele : sortierteSpiele.slice(0, limit);

  container.innerHTML = sichtbareSpiele.length
    ? sichtbareSpiele.map((spiel) => renderSpiel(spiel, istVergangen)).join('')
    : `<p class="spiele-empty">${leertext}</p>`;
};

renderSpiele(
  '#spiele-anstehend-container',
  spieleAnstehend,
  false,
  'Keine anstehenden Spiele eingetragen.'
);
renderSpiele(
  '#spiele-ergebnisse-container',
  spieleErgebnisse,
  true,
  'Noch keine Ergebnisse eingetragen.'
);
