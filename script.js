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
// ---------- Timer since March 30, 2025 ----------
const startDate = new Date('2025-03-30T00:00:00');
const timerEl = document.getElementById('timer');

function updateTimer() {
  if (!timerEl) return;
  const now = new Date();

  // months difference
  let months = (now.getFullYear() - startDate.getFullYear()) * 12 +
               (now.getMonth() - startDate.getMonth());

  // days difference
  let days = now.getDate() - startDate.getDate();
  if (days < 0) {
    // adjust if the current day is earlier than the start day
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // last day of prev month
    days += prevMonth.getDate();
  }

  timerEl.textContent = `${months} months, ${days} days`;
}

updateTimer();
setInterval(updateTimer, 1000 * 60 * 60); // update every hour (no need every second)


// ---------- Heart trail cursor ----------
document.addEventListener('mousemove', (e) => {
  const heart = document.createElement('span');
  heart.textContent = '💖';
  heart.style.position = 'fixed';
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';
  heart.style.pointerEvents = 'none';
  heart.style.fontSize = Math.random() * 18 + 12 + 'px';
  heart.style.opacity = 1;
  heart.style.transition = 'transform 1s ease, opacity 1s ease';
  document.body.appendChild(heart);

  // force reflow so transition works
  heart.getBoundingClientRect();

  heart.style.transform = `translateY(-40px) scale(0.6) rotate(${Math.random()*90-45}deg)`;
  heart.style.opacity = 0;

  setTimeout(() => heart.remove(), 1000);
});
