// Top bar fade on scroll down, reappear on scroll up
let lastScrollY = window.scrollY;
const topBar = document.querySelector('.top-bar');
let ticking = false;

function handleScroll() {
  if (!topBar) return;
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    // Scrolling down
    topBar.style.opacity = '0.2';
    document.body.classList.add('topbar-scrolled');
  } else {
    // Scrolling up
    topBar.style.opacity = '1';
    document.body.classList.remove('topbar-scrolled');
  }
  lastScrollY = window.scrollY;
  ticking = false;
}

window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});