const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
let currentSlide = 0;

totalSlidesEl.textContent = slides.length;

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  currentSlideEl.textContent = currentSlide + 1;

  slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    goToSlide(currentSlide + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    goToSlide(currentSlide - 1);
  }
});

// Scroll navigation
let isScrolling = false;
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;
  isScrolling = true;
  setTimeout(() => isScrolling = false, 800);

  if (e.deltaY > 0) {
    goToSlide(currentSlide + 1);
  } else {
    goToSlide(currentSlide - 1);
  }
});

// Touch navigation
let touchStartY = 0;
window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > 50) { // Threshold untuk swipe
    if (diff > 0) {
      goToSlide(currentSlide + 1); // Swipe up → next slide
    } else {
      goToSlide(currentSlide - 1); // Swipe down → prev slide
    }
  }
});

// Auto-play slideshow (optional, uncomment to enable)
// let autoPlay = setInterval(() => {
//   goToSlide(currentSlide + 1);
//   if (currentSlide === slides.length - 1) {
//     clearInterval(autoPlay);
//   }
// }, 5000); // Change every 5 seconds
