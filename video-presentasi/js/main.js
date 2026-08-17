// ═══════════════════════════════════════════════════════════════════════
// Verifin Presentation Deck — Navigation Controller
// ═══════════════════════════════════════════════════════════════════════

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.nav-dot'));
  const counterEl = document.querySelector('.slide-counter');
  const totalSlides = slides.length;

  if (totalSlides === 0) {
    console.error('No slides found in document!');
    return;
  }

  function updateUI(index) {
    // Deactivate all slides
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
        slide.style.display = 'flex';
      } else {
        slide.classList.remove('active');
        slide.style.display = 'none';
      }
    });

    // Deactivate / Activate dots
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Counter
    if (counterEl) {
      counterEl.textContent = `${index + 1} / ${totalSlides}`;
    }

    // Toggle dark theme indicators on body
    const isEvenSlide = index % 2 === 1; // 0-indexed: index 1 is Slide 2 (Dark), index 3 is Slide 4 (Dark), etc.
    document.body.classList.toggle('on-dark-slide', isEvenSlide);
    document.body.dataset.currentSlide = String(index + 1);

    // Update URL hash for easy bookmarking/reload
    if (history.replaceState) {
      history.replaceState(null, null, `#slide-${index + 1}`);
    }
  }

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentSlide = index;
    updateUI(currentSlide);
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // Check initial hash (e.g. #slide-3)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const slideNum = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      currentSlide = slideNum - 1;
    }
  }

  // Initialize first slide
  goToSlide(currentSlide);

  // Click Navigation Dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(index);
    });
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // Avoid interfering with input elements if any
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ': // Spacebar
      case 'n':
      case 'N':
      case 'Enter':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
      case 'p':
      case 'P':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
    }
  });

  // Wheel / Trackpad Scroll Navigation (Throttled)
  let lastWheelTime = 0;
  window.addEventListener('wheel', (e) => {
    const now = Date.now();
    if (now - lastWheelTime < 600) return; // 600ms throttle

    if (e.deltaY > 30) {
      lastWheelTime = now;
      nextSlide();
    } else if (e.deltaY < -30) {
      lastWheelTime = now;
      prevSlide();
    }
  }, { passive: true });

  // Touch / Mobile Swipe Navigation
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Horizontal swipe preferred
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });

  // Click on slide background sides (optional quick navigation)
  window.goToSlide = goToSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
