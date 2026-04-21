/* ── Chronicles particles ── */
const cp = document.getElementById('chrParticles');
if (cp) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'chr-p';
    const sz = Math.random() * 2.5 + .5;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;--d:${(Math.random()-0.5)*60}px;animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*10}s;`;
    cp.appendChild(p);
  }
}

/* ── Chronicles video swap ── */
const chrVideo = document.querySelector('.chr-video');
if (chrVideo) {
  chrVideo.addEventListener('canplay', () => {
    chrVideo.style.display = 'block';
    const bg = document.querySelector('.chr-animated-bg');
    if (bg) bg.style.opacity = '0';
  });
}

/* ─────────────────────────────────────────────
   ARTICLES SYSTEM (CLEAN + CONSISTENT)
───────────────────────────────────────────── */

const articles = [

/* ─────────────────────────────
   ARTICLE I (UNCHANGED – BASE)
───────────────────────────── */
{
  label: 'Foundational · Article I',
  title: 'Understanding Horse Psychology',
  tagline: 'Sixty million years of evolution. One question. Am I safe?',
  keywords: ['horse psychology','equine mindset','prey behavior'],
  pages: [
    { type: 'title' },

    {
      type: 'section',
      heading: 'The First Misunderstanding',
      sub: 'You believe the horse sees you. It feels you.'
    },

    {
      type: 'text',
      section: 'The First Misunderstanding',
      html: `
      <p><span class="rd-dropcap">T</span>o a horse, you are not a person. You are movement, pressure, intention. Before you speak, before you act, before you even decide what you are about to do — the horse has already read you.</p>
      <p>This is not intuition. This is survival.</p>
      `
    },

    {
      type: 'quote',
      text: 'Horses do not misunderstand humans. Humans misunderstand horses.'
    }
  ]
},

/* ─────────────────────────────
   ARTICLE II (FULLY FIXED)
───────────────────────────── */
{
  label: 'Foundational · Article II',
  title: 'Fear Is the Language of Survival',
  tagline: 'You cannot remove fear. You can only become safer than it.',
  keywords: ['fear biology','horse fear','flight response'],
  pages: [

    { type: 'title' },

    {
      type: 'section',
      heading: 'Fear Is Not the Problem',
      sub: 'It is the system that kept the horse alive.'
    },

    {
      type: 'text',
      section: 'Fear Is Not the Problem',
      html: `
      <p><span class="rd-dropcap">F</span>ear is not resistance. It is recognition.</p>
      <p>The horse is not asking whether something is truly dangerous. It is asking whether it could be. And in that uncertainty, it chooses life.</p>
      <p>The human mistake is trying to remove fear instead of understanding it. Fear is not an obstacle. It is the foundation of the horse’s mind.</p>
      `
    },

    {
      type: 'section',
      heading: 'The Speed of Survival',
      sub: 'The body moves before the mind understands.'
    },

    {
      type: 'text',
      section: 'The Speed of Survival',
      html: `
      <p><span class="rd-dropcap">T</span>he horse does not think, then react. It reacts, then survives.</p>
      <p>By the time you notice the spook, the horse has already completed the decision. Muscles fire. Heart rate rises. Escape becomes the only available answer.</p>
      <p>This is not disobedience. This is design.</p>
      `
    },

    {
      type: 'quote',
      text: 'The horse that hesitated did not survive long enough to become your horse.'
    }
  ]
},

/* ─────────────────────────────
   ARTICLE III
───────────────────────────── */
{
  label: 'Foundational · Article III',
  title: 'Trust vs Control',
  tagline: 'Control restricts. Trust invites.',
  keywords: ['trust','control','horsemanship'],
  pages: [
    { type: 'title' },

    {
      type: 'section',
      heading: 'Two Different Paths',
      sub: 'They look the same. They are not.'
    },

    {
      type: 'text',
      section: 'Two Different Paths',
      html: `
      <p><span class="rd-dropcap">C</span>ontrol creates obedience.</p>
      <p>Trust creates willingness.</p>
      <p>One forces the body. The other reaches the mind.</p>
      `
    },

    {
      type: 'quote',
      text: 'A controlled horse stays because it must. A trusting horse stays because it chooses to.'
    }
  ]
},

/* ─────────────────────────────
   ARTICLE IV
───────────────────────────── */
{
  label: 'Foundational · Article IV',
  title: 'Reading the Horse',
  tagline: 'Every movement is communication.',
  keywords: ['body language','signals'],
  pages: [
    { type: 'title' },

    {
      type: 'section',
      heading: 'The Body Speaks First',
      sub: 'Before action, there is signal.'
    },

    {
      type: 'text',
      section: 'The Body Speaks First',
      html: `
      <p><span class="rd-dropcap">E</span>ars, eyes, breath, muscle — none of it is random.</p>
      <p>The horse is speaking constantly. The only question is whether you are literate enough to read it.</p>
      `
    }
  ]
},

/* ─────────────────────────────
   ARTICLE V
───────────────────────────── */
{
  label: 'Foundational · Article V',
  title: 'The Human Error',
  tagline: 'The horse reflects. It does not create.',
  keywords: ['mistakes','human behavior'],
  pages: [
    { type: 'title' },

    {
      type: 'section',
      heading: 'The Reflection',
      sub: 'The horse returns what you bring.'
    },

    {
      type: 'text',
      section: 'The Reflection',
      html: `
      <p><span class="rd-dropcap">M</span>ost problems begin before the horse is even touched.</p>
      <p>The tension, the expectation, the noise — all of it arrives first. The horse only answers it.</p>
      `
    }
  ]
},

/* ─────────────────────────────
   PRACTICAL (VI–X)
───────────────────────────── */

{
  label: 'Practical · Article VI',
  title: 'Building Trust',
  tagline: 'Consistency is the only proof.',
  keywords: ['trust'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Trust',
      html: `<p><span class="rd-dropcap">T</span>rust is not given. It is observed over time.</p>`
    }
  ]
},

{
  label: 'Practical · Article VII',
  title: 'When the Horse Does Not Listen',
  tagline: 'It is not silence. It is feedback.',
  keywords: ['listening'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Listening',
      html: `<p><span class="rd-dropcap">A</span> horse that does not respond is still communicating.</p>`
    }
  ]
},

{
  label: 'Practical · Article VIII',
  title: 'Calming the Nervous Horse',
  tagline: 'You regulate before you guide.',
  keywords: ['calm'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Calm',
      html: `<p><span class="rd-dropcap">C</span>alm is not taught. It is transferred.</p>`
    }
  ]
},

{
  label: 'Practical · Article IX',
  title: 'First Contact',
  tagline: 'The first moment defines the rest.',
  keywords: ['first contact'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'First Contact',
      html: `<p><span class="rd-dropcap">F</span>irst impressions do not fade for a horse.</p>`
    }
  ]
},

{
  label: 'Practical · Article X',
  title: 'Signs of Trust',
  tagline: 'Trust is visible.',
  keywords: ['trust signs'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Trust Signs',
      html: `<p><span class="rd-dropcap">T</span>rust appears in behavior, not belief.</p>`
    }
  ]
},

/* ─────────────────────────────
   UNIQUE EDGE (XI–XV)
───────────────────────────── */

{
  label: 'Unique · Article XI',
  title: 'What Horses Reveal About Humans',
  tagline: 'They remove the mask.',
  keywords: ['reflection'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Reflection',
      html: `<p><span class="rd-dropcap">H</span>orses do not judge. They expose.</p>`
    }
  ]
},

{
  label: 'Unique · Article XII',
  title: 'Presence',
  tagline: 'The only place a horse lives.',
  keywords: ['presence'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Presence',
      html: `<p><span class="rd-dropcap">P</span>resence is not effort. It is absence of distraction.</p>`
    }
  ]
},

{
  label: 'Unique · Article XIII',
  title: 'The Mind Before Movement',
  tagline: 'The horse feels intention first.',
  keywords: ['intention'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Intention',
      html: `<p><span class="rd-dropcap">I</span>ntention moves before the body does.</p>`
    }
  ]
},

{
  label: 'Unique · Article XIV',
  title: 'The Silent Language',
  tagline: 'Energy speaks louder than words.',
  keywords: ['communication'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Language',
      html: `<p><span class="rd-dropcap">S</span>ilence carries meaning.</p>`
    }
  ]
},

{
  label: 'Unique · Article XV',
  title: 'Working With, Not Against',
  tagline: 'Only one path leads to partnership.',
  keywords: ['philosophy'],
  pages: [
    { type: 'title' },
    {
      type: 'text',
      section: 'Philosophy',
      html: `<p><span class="rd-dropcap">P</span>artnership cannot be forced.</p>`
    }
  ]
}

];

/* ─────────────────────────────
   ENGINE (UNCHANGED CORE)
───────────────────────────── */

const panel = document.getElementById('articlePanel');
let openIdx = -1;

function cleanText(html) {
  return html.replace(/<span class="rdrop">(.)<\/span>/g,
    (_, c) => `<span class="rd-dropcap">${c}</span>`);
}

function buildArticleHTML(art) {
  let html = `<div class="rd-title-block">
    <div class="rd-tb-title">${art.title}</div>
    <div class="rd-tb-tagline">${art.tagline}</div>
  </div>`;

  art.pages.forEach(pg => {
    if (pg.type === 'section') {
      html += `<div class="rd-section">
        <h2>${pg.heading}</h2>
        <p>${pg.sub}</p>
      </div>`;
    }
    if (pg.type === 'text') {
      html += `<div class="rd-text">${cleanText(pg.html)}</div>`;
    }
    if (pg.type === 'quote') {
      html += `<div class="rd-quote">${pg.text}</div>`;
    }
  });

  return html;
}

function openArticle(i) {
  const art = articles[i];
  openIdx = i;
  panel.innerHTML = buildArticleHTML(art);
  panel.classList.add('open');
}

function closeArticle() {
  panel.classList.remove('open');
  openIdx = -1;
}

document.querySelectorAll('.book-wrap').forEach(bk => {
  bk.addEventListener('click', () => {
    const i = parseInt(bk.dataset.article);
    openArticle(i);
  });
});
