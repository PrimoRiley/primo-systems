// assets/nav.js
const t = document.getElementById('navToggle');
const l = document.getElementById('navLinks');
t?.addEventListener('click', () => l.classList.toggle('hidden'));
