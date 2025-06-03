window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.mitglieder-slider');
    const btnLeft = document.querySelector('.slider-btn.left');
    const btnRight = document.querySelector('.slider-btn.right');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const btnPrev = document.querySelector('.lightbox-btn.prev');
    const btnNext = document.querySelector('.lightbox-btn.next');
  
    // Bilder aus dem Slider
    const images = Array.from(slider.querySelectorAll('img'));
    let currentIndex = 0;
  
    // Scroll Buttons im Slider
    btnLeft.addEventListener('click', () => {
      slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
      });
    });
  
    btnRight.addEventListener('click', () => {
      slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
      });
    });
  
    // Lightbox öffnen
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });
  
    // Lightbox schließen
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    // Klick auf Overlay (außerhalb des Bildes) schließt Lightbox
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  
    // Vorheriges Bild
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation(); // Verhindert Schließen beim Klicken des Buttons
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });
  
    // Nächstes Bild
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation(); // Verhindert Schließen beim Klicken des Buttons
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    });
  });