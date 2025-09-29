// ---------- Floating hearts ----------
const layer = document.getElementById('hearts-layer');

function spawnHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '❤';

  const size = Math.floor(Math.random() * 26) + 14; // 14–40 px
  const left = Math.random() * 100;                  // vw
  const duration = Math.random() * 6 + 6;            // 6–12 s

  heart.style.left = left + 'vw';
  heart.style.fontSize = size + 'px';
  heart.style.animationDuration = duration + 's';

  layer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(spawnHeart, 350);
for (let i = 0; i < 12; i++) setTimeout(spawnHeart, i * 120);

// ---------- Music button ----------
const musicBtn = document.getElementById('musicBtn');
const player = document.getElementById('player');

if (musicBtn && player) {
  musicBtn.addEventListener('click', async () => {
    try {
      if (player.paused) {
        await player.play();
        musicBtn.textContent = 'Pause music ♫';
      } else {
        player.pause();
        musicBtn.textContent = 'Play ♫';
      }
    } catch (e) {
      console.log('Playback blocked:', e);
    }
  });
}

// ---------- Count-up timer ----------
// CHANGE THIS to your real start date/time:
const startDate = new Date('2025-03-03T00:00:00');
const timerEl = document.getElementById('timer');

function pad(n){ return String(n).padStart(2,'0'); }
function updateTimer() {
  if (!timerEl) return;
  const now = new Date();
  let diff = Math.max(0, Math.floor((now - startDate) / 1000)); // seconds

  const days = Math.floor(diff / 86400); diff %= 86400;
  const hours = Math.floor(diff / 3600); diff %= 3600;
  const mins = Math.floor(diff / 60);
  const secs = diff % 60;

  timerEl.textContent = `${days} days • ${pad(hours)}h ${pad(mins)}m ${pad(secs)}s`;
}
updateTimer();
setInterval(updateTimer, 1000);

