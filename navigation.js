const homepage = 'aktuelles.html';
const pages = {
  aktuelles: 'aktuelles.html',
  mannschaften: 'mannschaften.html',
  steeldart: 'steeldart.html',
  jugend: 'jugend.html',
  verein: 'verein.html',
  bilderarchiv: 'bilderarchiv.html',
  sponsoring: 'sponsoring.html',
  mitglied: 'mitglied-werden.html',
  kontakt: 'kontakt.html'
};
const currentPage = window.location.pathname.split('/').pop() || homepage;

const navigation = document.querySelector('#site-nav');

if (navigation) {
  navigation.innerHTML = `
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" href="${pages.aktuelles}" aria-label="VfB Annweiler Aktuelles">
          <img src="bilder/logo-vfb-annweiler.png" alt="VfB Annweiler Logo">
          VfB <span>Annweiler</span> 1919
        </a>
        <button class="nav-burger" type="button" aria-label="Menü öffnen" aria-expanded="false" aria-controls="nav-links-menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links-menu">
          <li><a href="${pages.aktuelles}">Aktuelles</a></li>
          <li class="nav-dropdown">
            <a href="${pages.mannschaften}">Mannschaften</a>
            <button class="nav-dropdown-toggle" type="button" aria-label="Untermenü Mannschaften öffnen" aria-expanded="false"></button>
            <ul class="nav-submenu">
              <li><a href="${pages.mannschaften}#herren-vorstellung">Herren</a></li>
              <li><a href="${pages.mannschaften}#frauen-vorstellung">Frauen</a></li>
              <li><a href="${pages.mannschaften}#herren-ue32-vorstellung">Herren Ü32</a></li>
              <li><a href="${pages.mannschaften}#herren-ue40-vorstellung">Herren Ü40</a></li>
              <li><a href="${pages.mannschaften}#ah-vorstellung">Altherren</a></li>

            </ul>
          </li>
          <li><a href="${pages.steeldart}">Steeldart</a></li>
          <li><a href="${pages.jugend}">Jugend</a></li>
          <li class="nav-dropdown">
            <a href="${pages.verein}">Verein</a>
            <button class="nav-dropdown-toggle" type="button" aria-label="Untermenü Verein öffnen" aria-expanded="false"></button>
            <ul class="nav-submenu">
              <li><a href="${pages.verein}">Über den Verein</a></li>
              <li><a href="${pages.bilderarchiv}">Bilderarchiv</a></li>
              <li><a href="${pages.mitglied}">Mitglied werden</a></li>
            </ul>
          </li>
          <li><a href="${pages.sponsoring}">Sponsoring</a></li>
          <li><a href="${pages.kontakt}">Kontakt</a></li>
        </ul>
      </div>
    </nav>
  `;

  const burger = navigation.querySelector('.nav-burger');
  const navLinks = navigation.querySelector('.nav-links');

  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menü öffnen');
  };

  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  const isMobile = () => window.matchMedia('(max-width: 720px)').matches;

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (isMobile() && link.closest('.nav-dropdown') && link.parentElement === link.closest('.nav-dropdown')) return;
      closeMenu();
    });
  });

  const toggleDropdown = (dropdown, toggle) => {
    const isExpanded = dropdown.classList.toggle('is-expanded');
    toggle.setAttribute('aria-expanded', String(isExpanded));
  };

  navLinks.querySelectorAll('.nav-dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => toggleDropdown(toggle.closest('.nav-dropdown'), toggle));
  });

  navLinks.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
    const parentLink = dropdown.querySelector(':scope > a');
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    parentLink.addEventListener('click', (event) => {
      if (isMobile()) {
        event.preventDefault();
        toggleDropdown(dropdown, toggle);
      }
    });
  });

  navigation.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    const linkPage = href.split('#')[0];
    if (linkPage === currentPage) {
      if (!href.includes('#')) {
        link.setAttribute('aria-current', 'page');
        link.addEventListener('click', (event) => event.preventDefault());
      }
      const dropdown = link.closest('.nav-dropdown');
      if (dropdown) {
        dropdown.querySelector(':scope > a').setAttribute('aria-current', 'page');
      }
    }
  });
}
