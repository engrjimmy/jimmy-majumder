// ---------- Year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Scroll progress bar ----------
const progressBar = document.getElementById('progressBar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ---------- Header scrolled state ----------
const header = document.getElementById('siteHeader');
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ---------- Typewriter effect ----------
const roles = [
  'Sr. Robotics Engineer III, QibiTech Inc., Japan',
  'MEXT Scholar & Graduate Researcher, Kyutech',
  'Founder & President, Bangladesh Advance Robotics Research Center',
  'Venture & Innovation Strategist, Google for Startups',
  '13 Publications · AI · Computer Vision · Autonomous Systems'
];
const typeEl = document.getElementById('typewriter');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typeEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

// ---------- Animated stat counters ----------
const statNums = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statNums.forEach(el => statObserver.observe(el));

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  const duration = 1200;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
