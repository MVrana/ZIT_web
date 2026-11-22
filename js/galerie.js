// Posuvník pro galerii
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.gallery-slider-container');

  sliders.forEach(container => {
    const slider = container.querySelector('.gallery-slider');
    const prevBtn = container.querySelector('.slider-btn.prev');
    const nextBtn = container.querySelector('.slider-btn.next');

    if (!slider || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener('click', () => {
      const scrollAmount = slider.clientWidth * 0.8;
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      const scrollAmount = slider.clientWidth * 0.8;
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Podpora ovládání klávesnicí (šipky vlevo/vpravo)
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        slider.scrollBy({ left: -slider.clientWidth * 0.5, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        slider.scrollBy({ left: slider.clientWidth * 0.5, behavior: 'smooth' });
      }
    });
  });
});
