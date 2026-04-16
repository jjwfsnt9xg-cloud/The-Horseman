/* Essays stars */
const eStars = document.getElementById('essaysStars');
if (eStars) {
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'e-star';
    const sz = Math.random() * 2.5 + .5;
    s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;animation-duration:${Math.random() * 5 + 3}s;animation-delay:${Math.random() * 8}s;`;
    eStars.appendChild(s);
  }
}

/* Essay data - ADD YOUR ESSAY TEXT HERE */
const essays = [
  {
    title: 'A Bond Beyond Words',
    text: '<p>Your essay text goes here. Replace this with your actual essay content.</p>'
  },
  {
    title: 'The Unyielding March',
    text: '<p>Your essay text goes here.</p>'
  },
  {
    title: 'The Funeral I Attend Every Day',
    text: '<p>Your essay text goes here.</p>'
  },
  {
    title: 'The Flickering',
    text: '<p>Your essay text goes here.</p>'
  },
  {
    title: 'The Primitive Beneath',
    text: '<p>Your essay text goes here.</p>'
  },
  {
    title: 'Within These Walls',
    text: '<p>Your essay text goes here.</p>'
  },
  {
    title: 'I Miss My Writing',
    text: `<p>I never thought I would say that, but I do. There was a time when words came to me without effort. I did not have to search for them. They lived somewhere close to my skin. I would sit down, and they would arrive, honest, unfiltered, almost impatient to exist.</p><p>Now there is a distance.</p><p>I tell myself I cannot write at all. But even saying that feels like proof that something is still alive inside me. If I truly had nothing, I would not feel this absence so deeply.</p><p>Maybe I did not lose my writing. Maybe I lost the version of myself who wrote so freely.</p><p>I have changed. Life has added weight to me, responsibility, awareness, restraint. I think more now. I question more. I measure my own sentences before they are even formed. And in that hesitation, I mistake growth for loss.</p><p>When I used to write, I did not judge myself. I did not ask whether it was good enough or deep enough. I simply wrote because I needed to. Now I feel the need just as strongly, but I stand in my own way.</p><p>Sometimes I wonder if my voice is not gone, only evolving. Maybe it is slower because it carries more truth. Maybe it is quieter because it understands consequence. Maybe it is not as loud as before, but heavier.</p><p>I say I cannot write. But what I really mean is I do not know how to begin again.</p><p>And maybe beginning again requires accepting that I will not sound like who I used to be.</p><p>Maybe I am not empty. Maybe I am becoming.</p>`
  }
];

/* Essay functionality */
function openEssay(i) {
  document.getElementById('essayReaderTitle').textContent = essays[i].title;
  document.getElementById('essayReaderText').innerHTML = essays[i].text;
  document.getElementById('essayOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEssay() {
  document.getElementById('essayOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.essay-card').forEach((c, i) => c.addEventListener('click', () => openEssay(i)));
document.getElementById('essayClose').addEventListener('click', closeEssay);
document.getElementById('essayOverlay').addEventListener('click', e => {
  if (e.target.id === 'essayOverlay') closeEssay();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('essayOverlay').classList.contains('open')) closeEssay();
});

/* Essay scroll reveal */
const essayObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 150);
  });
}, {threshold: 0.15});

document.querySelectorAll('.essay-card').forEach(c => essayObs.observe(c));
