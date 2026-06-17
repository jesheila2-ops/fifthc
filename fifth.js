// Scatter floating hearts (red, white outline) like the reference image
const heartSVG = `
  <svg viewBox="0 0 100 88" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 84 C18 60 0 40 0 23 C0 9 11 0 24 0 C35 0 45 7 50 17
             C55 7 65 0 76 0 C89 0 100 9 100 23 C100 40 82 60 50 84 Z"
          fill="#e22236" stroke="#ffffff" stroke-width="7" stroke-linejoin="round"/>
  </svg>`;

// {top%, left%, size px, delay s}
const hearts = [
  {top:8,  left:6,  size:62, delay:0},
  {top:12, left:88, size:70, delay:0.6},
  {top:34, left:14, size:50, delay:1.2},
  {top:30, left:93, size:46, delay:0.3},
  {top:58, left:2,  size:60, delay:1.8},
  {top:70, left:80, size:54, delay:0.9},
  {top:88, left:62, size:58, delay:1.4},
  {top:90, left:18, size:48, delay:0.4},
  {top:90, left:94, size:50, delay:1.0}
];

const scene = document.getElementById('scene');
hearts.forEach(h => {
  const el = document.createElement('div');
  el.className = 'heart';
  el.style.top = h.top + '%';
  el.style.left = h.left + '%';
  el.style.width = h.size + 'px';
  el.style.animationDelay = h.delay + 's';
  el.innerHTML = heartSVG;
  scene.appendChild(el);
});

const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.add('opening');

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 800);
});