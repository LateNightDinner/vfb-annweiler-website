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
          <img src="Logos/Logo_Ohne_BG.png" alt="VfB Annweiler Logo">
          VfB <span>Annweiler</span> 1919
        </a>
        <ul class="nav-links">
          <li><a href="${pages.aktuelles}">Aktuelles</a></li>
          <li><a href="${pages.mannschaften}">Mannschaften</a></li>
          <li><a href="${pages.steeldart}">Steeldart</a></li>
          <li><a href="${pages.jugend}">Jugend</a></li>
          <li class="nav-dropdown">
            <a href="${pages.verein}">Verein</a>
            <ul class="nav-submenu">
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

  navigation.querySelectorAll('a').forEach((link) => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
      link.addEventListener('click', (event) => event.preventDefault());
      const dropdown = link.closest('.nav-dropdown');
      if (dropdown) {
        dropdown.querySelector(':scope > a').setAttribute('aria-current', 'page');
      }
    }
  });
}
