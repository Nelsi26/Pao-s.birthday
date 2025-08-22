const flame = document.getElementById('flame');
const soplarBtn = document.getElementById('soplarBtn');
const overlay = document.getElementById('overlay');
const soplarBox = document.querySelector('.soplar-box');
const message = document.getElementById('message');

setTimeout(() => {
  flame.classList.add('show');
}, 3300);

// Eliminar el confeti automático y el mensaje posterior

soplarBtn.addEventListener('click', () => {
  flame.style.opacity = 0;

  // Ocultar el modal
  soplarBox.style.display = 'none';

  startConfetti(150);

  setTimeout(() => {
    overlay.classList.add('show');
  }, 2000);
});

function startConfetti(count) {
  const body = document.body;
  const colors = ['#ff3399', '#ff66cc', '#ff99cc', '#ff0066', '#ff66aa'];
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2 - 80;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${centerX}px`;
    confetti.style.top = `${centerY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = 150 + Math.random() * 100;
    const duration = 1800 + Math.random() * 1000;

    confetti.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;

    requestAnimationFrame(() => {
      confetti.style.transform = `translate(${Math.cos(angle)*distance}px, ${Math.sin(angle)*distance}px) rotate(${Math.random()*360}deg)`;
      confetti.style.opacity = '0';
    });

    body.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration + 500);
  }
}
