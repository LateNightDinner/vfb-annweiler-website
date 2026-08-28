const sponsorLogos = [
  {
    name: 'UNION Bauzentrum / Hornbach',
    image: 'Logos/sponsor-union.jpg',
    url: 'https://union-bauzentrum.com/'
  },
  {
    name: 'Emanuel Haustechnik',
    image: 'Logos/sponsor-emanuel.jpg',
    url: null
  },
  {
    name: 'voestalpine',
    image: 'Logos/sponsor-voestalpine.jpg',
    url: 'https://www.voestalpine.com/group/de/'
  },
  {
    name: 'Brillen Lippok',
    image: 'Logos/sponsor-brillen-lippok.jpg',
    url: 'https://www.brillen-lippok.de/'
  },
  {
    name: 'Schuh Merkel',
    image: 'Logos/sponsor-schuh-merkel.jpg',
    url: 'https://www.schuh-merkel.de/'
  },
  {
    name: 'Fahrschule Peter Grimm',
    image: 'Logos/sponsor-fahrschule-grimm.jpg',
    url: null
  }
];

const footer = document.querySelector('#site-footer');

if (footer) {
  footer.innerHTML = `
    <section class="sponsor-strip" aria-labelledby="sponsor-strip-title">
      <div class="container">
        <div class="section-label">Unsere Partner</div>
        <h2 id="sponsor-strip-title" class="section-title">Danke an unsere Sponsoren</h2>
        <div class="sponsor-logo-grid">
          ${sponsorLogos.map((sponsor) => `
            ${sponsor.url ? `<a class="sponsor-logo" href="${sponsor.url}" target="_blank" rel="noopener" aria-label="${sponsor.name}"><img src="${sponsor.image}" alt="${sponsor.name}"></a>` : `<div class="sponsor-logo"><img src="${sponsor.image}" alt="${sponsor.name}"></div>`}
          `).join('')}
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-inner">
        <div>VfB Annweiler 1919 e.V. &mdash; Annweiler am Trifels</div>
        <ul class="footer-links">
          <li><a href="https://www.vfbannweiler.de/impressum/">Impressum</a></li>
          <li><a href="https://www.vfbannweiler.de/datenschutz/">Datenschutz</a></li>
          <li><a href="mitglied-werden.html">Mitglied werden</a></li>
        </ul>
      </div>
    </footer>
  `;
}
