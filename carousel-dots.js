// Zeigt von allen Carousel-Punkten nur ein Fenster von maximal 5 Punkten rund um den aktiven Punkt.
const updateCarouselDots = (dots, activeIndex, maxDots = 5) => {
  const start = Math.max(0, Math.min(activeIndex - Math.floor(maxDots / 2), dots.length - maxDots));
  const end = start + maxDots;
  const hatMehr = dots.length > maxDots;

  dots.forEach((dot, index) => {
    const aktiv = index === activeIndex;
    dot.hidden = index < start || index >= end;
    dot.classList.toggle('is-active', aktiv);
    dot.classList.toggle('is-small', hatMehr && !aktiv && ((index === start && start > 0) || (index === end - 1 && end < dots.length)));
    dot.setAttribute('aria-selected', aktiv);
  });
};
