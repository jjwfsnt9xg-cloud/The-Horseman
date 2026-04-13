/* Hero stars */
const starsEl = document.getElementById('stars');
if (starsEl) {
  for (let i = 0; i < 130; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 2 + 0.5;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random()*65}%;left:${Math.random()*100}%;animation-duration:${Math.random()*4+2}s;animation-delay:${Math.random()*5}s;`;
    starsEl.appendChild(s);
  }
}

/* Video swap */
const video = document.querySelector('.hero-video');
if (video) {
  video.addEventListener('canplay', () => {
    video.style.display = 'block';
    document.querySelector('.horse-bg').style.opacity = '0';
  });
}
