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
    document.querySelector('.chr-animated-bg').style.opacity = '0';
  });
}

/* ══════════════════════════════════════════════════════════════
   ARTICLE DATA
   Each article has pages[]. Page types:
     { type: 'title' }
     { type: 'section', heading: '...', sub: '...' }
     { type: 'text', section: '...', html: '...' }
     { type: 'quote', text: '...' }
   ══════════════════════════════════════════════════════════════ */

const articles = [

  /* ─────────────────────────────────────────────
     ARTICLE 1 — Understanding Horse Psychology
  ───────────────────────────────────────────── */
  {
    label: 'Foundational · Article I',
    title: 'Understanding Horse Psychology: How Horses Think and Perceive Humans',
    tagline: 'Sixty million years of evolution. One question. Am I safe?',
    keywords: ['horse psychology','how horses think','horse behavior explained','prey animal behavior','equine mindset'],
    pages: [

      { type: 'title' },

      /* ── OPENING ESSAY ── */
      { type: 'text', section: 'Opening', html: `
        <p><span class="rdrop">T</span>o feel what a horse feels is to first understand that you are noise. You arrive trailing the scent of purpose, your pockets full of plans, your mind full of what was and what will be. You walk with the heavy step of a predator, an animal that does not need to listen before it moves. To the horse, you are a storm on the horizon. They see the shape of you, but they feel the intention, the hurry, the jagged edges of a mind that never rests. And in your presence, they become what they have always been: a statue carved from a single question. Am I safe?</p>
        <p>To connect with them is to decide to become silent. Not just in your voice, but in your soul. You must let your agenda fall to the dust like a heavy coat. You stand at the edge of their space and learn to simply be. You begin to breathe. Not the shallow, forgotten breaths of a busy life, but deep, slow tides of air that tell every listening cell in their body: you are not a threat. You are just a creature, breathing.</p>
        <p>And that is when the world changes. You stop seeing with your eyes and start feeling with your skin. The wind on your cheek is the same wind in their mane. The earth under your feet is the same earth under theirs. You are no longer a man and a horse. You are two bodies in a field, sharing the same small slice of the world.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p>This is when the mirror appears. The horse begins to show you to yourself. If you carry tension, a tight jaw, a knot of worry in your gut, they will hold their own body tight, their head high, their muscles coiled. They will not come near the storm inside you. If you carry a grief you have refused to face, they will grow still and soft, their dark eye becoming a pool of sorrow that reflects your own. They absorb your truth and show it back without a word of judgment.</p>
        <p>They have lived in fear. They understand the hum of hypervigilance, the way a body becomes a prison of held-back energy. And when they see it in you, they do not run. They recognise it. It is a language they were born speaking.</p>
        <p>The moment of connection is not a grand event. It is a surrender. It is the slow exhale you have been holding. It is the quiet step they take toward you, not because you asked, but because you finally became a place of peace. The soft muzzle that touches your arm is a question asked without sound. In that touch, a universe of trust is exchanged. You are safe, and so are they.</p>
        <p>To walk away from that is to feel the noise of the world rush back in, but you are different now. You carry the stillness of the field inside you. You have learned that the deepest communication requires no words at all, only a shared and silent breath.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p>Every decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is not simply to understand an animal. It is to understand a completely different kind of mind, one built for a world where a single mistake means death, and where reading the world fast is the only thing that matters.</p>
        <p>Horses think in pictures. They think in feelings. They think in the language of energy and intention, so precise, so honest, that it makes human communication look clumsy by comparison. When a horse looks at you, it is not seeing a person. It is reading a pattern of energy. Your tension, your breath, the quality of your stillness, the direction of your gaze. Before you have spoken a word, the horse has already decided what you are.</p>
        <p>This is not mysticism. This is biology. A prey animal that could not read the world fast and accurately did not live long enough to become an ancestor. Every horse alive today is the child of the most perceptive, the most sensitive, the most finely tuned readers that ever lived. To work with horses well, you must first accept this: they are not failing to understand you. You are failing to understand them. The horse is reading everything correctly. The question is whether you are giving it anything honest to read.</p>
      `},

      /* ── SECTION: HOW HORSES THINK ── */
      { type: 'section', heading: 'How Horses Think', sub: 'They do not think in words. They think in the truth of this moment.' },

      { type: 'text', section: 'How Horses Think', html: `
        <p><span class="rdrop">H</span>orses do not think in sentences. They do not sort their experience into reasons or explanations. They think in pictures, in feelings, in what is happening right now. A horse scared once by a white plastic bag does not remember that plastic bags are scary. It remembers the exact feeling of that moment, the sudden movement, the crinkle of sound, the rush of fear, the need to run. When it sees another plastic bag, it does not think. It simply feels the same feeling, and the body moves.</p>
        <p>This is not stupidity. This is intelligence so sharp, so finely made, that it has kept horses alive for millions of years. A prey animal that had to stop and think, to figure out whether the sound in the bushes was dangerous or safe, did not survive long enough to have young. The horses that remain are the children of those who felt danger and moved before the thinking mind could catch up.</p>
        <p>You cannot explain to a horse why something is safe. You cannot tell it the needle will help, that the trailer leads somewhere good. The horse reads the world through different eyes entirely. It reads energy. It reads tension. It reads the tiny signals in your body that you do not even know you are sending. Before you move, the horse has already felt your intention to move.</p>
        <p>Your thoughts are not private. Your fear, your anger, your rush, your doubt, all of it shows in your body before you have even noticed it yourself. The horse that seems difficult is often simply giving back exactly what you are giving. The rider who learns to become truly calm, not acting calm, but being calm, finds that the horse changes in that same moment.</p>
      `},

      { type: 'quote', text: 'You cannot teach a horse with words. You can only speak to it with what you are.' },

      /* ── SECTION: HORSE BEHAVIOR EXPLAINED ── */
      { type: 'section', heading: 'Horse Behavior Explained', sub: 'Every behavior is a message. The question is whether you are listening.' },

      { type: 'text', section: 'Horse Behavior Explained', html: `
        <p><span class="rdrop">H</span>orse behavior is never random. It is always meaningful. The hard part for humans is that the meaning is often seen through human eyes that have nothing to do with how horses truly experience the world.</p>
        <p>When a horse pins its ears, people say it is angry. When it pulls away, people say it is stubborn. When it spooks, people say it is overreacting. But anger, stubbornness, and overreaction are human ideas placed on an animal that does not carry them. A horse is not angry when it pins its ears. It is saying: I feel uncomfortable. I am drawing a line. I am under stress. A horse that pulls away is not stubborn. It is saying clearly: I do not feel safe doing what you are asking. A horse that spooks is not overreacting. It is doing exactly what sixty million years of nature built it to do.</p>
        <p>Most problem behaviors are not problems with the horse. They are problems with the relationship, the method, or the human's ability to hear what the horse is saying. A horse that bites was not born mean. It learned that biting is the only message strong enough to make a human stop doing something painful. A horse that will not load is being honest about its fear of tight spaces.</p>
        <p>Stop asking: how do I make this horse stop? Start asking: what is this horse trying to tell me? Because once you understand what it is saying, the behavior often resolves on its own. Horses are not machines. They grieve. They play. They love. The rider who sees the horse as it truly is finds that it offers far more than obedience. It offers real partnership. And that, when it is real, changes everything.</p>
      `},

      { type: 'quote', text: 'The horse that misbehaves is not the problem. It is the question. And the answer always begins with you.' },

      /* ── SECTION: PREY ANIMAL BEHAVIOR ── */
      { type: 'section', heading: 'Prey Animal Behavior', sub: 'To understand the horse, you must first understand what it means to be hunted.' },

      { type: 'text', section: 'Prey Animal Behavior', html: `
        <p><span class="rdrop">T</span>o understand a horse, you must first understand what it means to be prey.</p>
        <p>A predator can take chances. It has time to watch, to think, to decide. A prey animal does not have this time. For a horse, waiting can mean death. A horse that pauses to figure out whether the movement in the grass is wind or a lion does not live long enough to make better choices. The horses whose bloodlines carry on today are the ones that ran first and asked questions later. They trusted their gut. They turned fear into fast movement. They treated every new thing as dangerous until proven safe.</p>
        <p>This history lives in every horse you will ever meet. It is written into their nervous system, coded in their DNA. The horse that spooks at a plastic bag is not being stupid. It is being a horse. The horse that will not walk past the dark corner is not stubborn. It is listening to a feeling that has kept its family alive for millions of years.</p>
        <p>The flight response is not a flaw. When a horse feels danger, its body moves in split seconds. Heart rate spikes. Fear floods the system. Muscles tighten. The brain drops everything else and asks one question: where is the exit? This is not a choice. It is a need built deep into the body. You cannot reason with a nervous system in survival mode. But you can become the thing the horse trusts more than it fears the unknown. You can be so steady, so calm, so consistent, that your presence becomes safety rather than stress. The horseman who works with the prey animal nature finds that fear is not a wall. It is simply information. And when that information is truly heard, the horse can finally let go.</p>
      `},

      { type: 'quote', text: 'Fear in a horse is not a fault. It is a memory older than language, and it deserves your respect, not your frustration.' },

      /* ── SECTION: EQUINE MINDSET ── */
      { type: 'section', heading: 'Equine Mindset', sub: 'The horse lives where most humans only visit, fully inside the present moment.' },

      { type: 'text', section: 'Equine Mindset', html: `
        <p><span class="rdrop">A</span> horse lives in the present moment with a fullness that most humans will never know. It is not worrying about tomorrow. It is not replaying yesterday. It is here, now, fully alive in this breath, this step, this meeting. This is not wisdom. This is simply what it means to be a horse.</p>
        <p>The equine mindset is built on a few basic truths. Safety comes first. Connection to the herd matters deeply. Movement is life. Trust must be earned. And the quality of your presence matters far more than any word you speak.</p>
        <p>When you walk toward a horse, it is reading you before you are ten feet away. Are you calm or worried? Sure or unsure? Present or somewhere else entirely? The horse does not care what you say. It cares what you are. And if what you are is scattered, tight, or disconnected, the horse will show that back to you with perfect honesty. This is why horsemanship is as much about knowing yourself as it is about knowing horses. You cannot hide from a horse. You cannot fake being present. The horse knows. It always knows.</p>
        <p>Horses do not hold grudges. They do not replay past hurts. If you make a mistake, if you lose your temper, if you handle something badly, the horse will give you another chance. It will meet you fresh in the next moment, willing to try again, as long as you are willing to be honest. This is the gift horses offer. Their complete, uncompromising honesty. They show us who we are. They teach us that the quality of the connection depends entirely on the quality of what we bring. And in teaching us that, they teach us something far more valuable than horsemanship. They teach us how to be human.</p>
      `},

      { type: 'quote', text: 'The horse does not ask you to be perfect. It only asks you to be real. And in being real, you become, at last, someone worth trusting.' }

    ]
  },
  
  /* ─────────────────────────────────────────────
     ARTICLES 2–15  (your text goes in html: '')
  ───────────────────────────────────────────── */
  {
    label: 'Foundational · Article II',
    title: 'Prey Animal Instincts in Horses: Why Fear Shapes Everything',
    tagline: 'The flight response is not a flaw. It is sixty million years of wisdom.',
    keywords: ['prey animal instincts horse','why horses are fearful','horse survival behavior','flight response in horses','equine instincts'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article II', html: `
        <p><span class="rdrop">F</span>ear is not a character flaw in a horse. It is the most finely built survival system ever created by sixty million years of nature. When a horse spooks at a plastic bag, it is not being stupid. It is being exactly what it was made to be — a creature whose life depends on treating the unfamiliar as dangerous until proven otherwise.</p>
        <p>The flight response is not a behavior problem. It is a nervous system working perfectly. The question for the horseman is never how to remove that response. You cannot, and you should not try. The question is how to become the thing the horse trusts more than it fears the unknown.</p>
        <p>When you understand the biology — how the fear center fires before the thinking brain has time to process, how stress chemicals flood the body in milliseconds, how the entire horse prepares for escape in the time it takes you to blink — you stop being frustrated by fear. You start having real compassion for what the horse is living through.</p>
      `}
    ]
  }

  // ... Articles 3-15 follow the same structure

];


/* ══════════════════════════════════════════════════════════════
   READER ENGINE
   ══════════════════════════════════════════════════════════════ */

const panel = document.getElementById('articlePanel');
let openIdx = -1;
let curPage = 0;

const HORSE_SVG = `<svg viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
  <g stroke="#E8C84A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M130 55 Q118 70 112 90 Q107 108 112 124 Q117 138 128 144 Q138 150 148 144 Q158 136 160 121 Q162 104 156 88 Q150 72 138 59 Q134 55 130 55Z"/>
    <path d="M112 90 Q100 83 88 77 Q76 72 68 77 Q62 83 66 93 Q72 101 84 103 Q96 105 108 100"/>
    <path d="M156 88 Q168 82 180 77 Q192 73 198 79 Q202 87 196 95 Q188 103 176 103 Q164 103 156 97"/>
    <path d="M128 144 Q120 161 116 181 Q113 196 115 211 Q117 224 122 228"/>
    <path d="M148 144 Q154 161 156 181 Q158 196 155 211 Q152 224 148 230"/>
    <path d="M122 228 Q118 244 116 261 Q114 276 118 284"/>
    <path d="M148 230 Q152 246 152 263 Q152 278 148 286"/>
    <path d="M116 261 Q112 278 110 294 Q108 308 112 316"/>
    <path d="M152 263 Q154 280 154 296 Q154 311 150 319"/>
    <path d="M68 77 Q56 67 45 57 Q36 48 34 37 Q33 27 40 23 Q48 20 56 25 Q64 31 68 41 Q72 53 68 67"/>
    <path d="M130 55 Q128 42 126 29 Q124 15 120 5"/>
    <path d="M135 53 Q140 43 146 33 Q152 23 156 17"/>
  </g>
</svg>`;

function buildTitleHTML(art) {
  return `<div class="rd-title-page">
    <div class="rd-tp-ornament">
      <div class="rd-oline"></div><div class="rd-gem"></div><div class="rd-oline rd-oline-r"></div>
    </div>
    <div class="rd-tp-label">${art.label}</div>
    <div class="rd-tp-title">${art.title}</div>
    <div class="rd-tp-divider">
      <div class="rd-dline"></div><span class="rd-dsym">✦</span><div class="rd-dline"></div>
    </div>
    <div class="rd-tp-horse">${HORSE_SVG}</div>
    <div class="rd-tp-tagline">${art.tagline}</div>
    <div class="rd-tp-tags">${art.keywords.map(k=>`<span class="rd-tag">${k}</span>`).join('')}</div>
    <div class="rd-tp-byline">The Horseman's Journal · Praveen Kumar</div>
  </div>`;
}

function buildSectionHTML(pg) {
  return `<div class="rd-section-page">
    <div class="rd-sp-ornament">
      <div class="rd-oline"></div><div class="rd-gem"></div><div class="rd-oline rd-oline-r"></div>
    </div>
    <div class="rd-sp-pre">Section</div>
    <div class="rd-sp-heading">${pg.heading}</div>
    <div class="rd-sp-rule"></div>
    <div class="rd-sp-sub">${pg.sub}</div>
  </div>`;
}

function buildTextHTML(pg, pgNum, total) {
  return `<div class="rd-text-page">
    <div class="rd-text-header">
      <span class="rd-text-section">${pg.section}</span>
      <div class="rd-text-hline"></div>
      <span class="rd-text-pgnum">${pgNum} / ${total}</span>
    </div>
    <div class="rd-text-body">${pg.html}</div>
  </div>`;
}

function buildQuoteHTML(pg) {
  return `<div class="rd-quote-page">
    <div class="rd-qp-rule"></div>
    <div class="rd-tp-ornament">
      <div class="rd-oline"></div><div class="rd-gem"></div><div class="rd-oline rd-oline-r"></div>
    </div>
    <div class="rd-qp-text">${pg.text}</div>
    <div class="rd-tp-ornament">
      <div class="rd-oline"></div><div class="rd-gem"></div><div class="rd-oline rd-oline-r"></div>
    </div>
    <div class="rd-qp-rule"></div>
    <div class="rd-qp-byline">— Praveen Kumar · The Horseman's Journal</div>
  </div>`;
}

function renderPage(art, idx) {
  const pg = art.pages[idx];
  const total = art.pages.length;
  const inner = panel.querySelector('.art-panel-inner');
  const body = inner.querySelector('.rd-body');

  let html = '';
  if (pg.type === 'title')   html = buildTitleHTML(art);
  if (pg.type === 'section') html = buildSectionHTML(pg);
  if (pg.type === 'text')    html = buildTextHTML(pg, idx, total);
  if (pg.type === 'quote')   html = buildQuoteHTML(pg);

  body.classList.remove('rd-fade-in');
  void body.offsetWidth;
  body.innerHTML = html;
  body.classList.add('rd-fade-in');

  /* nav state */
  inner.querySelector('.rd-nav-left').classList.toggle('rd-nav-disabled', idx === 0);
  inner.querySelector('.rd-nav-right').classList.toggle('rd-nav-disabled', idx === total - 1);

  /* progress */
  const pct = total > 1 ? (idx / (total - 1)) * 100 : 0;
  inner.querySelector('.rd-progress-fill').style.width = pct + '%';
  inner.querySelector('.rd-page-counter').textContent = (idx + 1) + ' of ' + total;

  /* ink reveal on text pages */
  if (pg.type === 'text') {
    setTimeout(() => inkReveal(body), 100);
  }

  curPage = idx;
}

function inkReveal(container) {
  container.querySelectorAll('p').forEach(p => {
    if (p.dataset.inked) return;
    p.dataset.inked = '1';
    const parts = [];
    p.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const wrapped = node.textContent.replace(/(\S+)/g, '<span class="rd-ink">$1</span>');
        parts.push(wrapped);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        parts.push(node.outerHTML);
      }
    });
    p.innerHTML = parts.join('');
  });
  setTimeout(() => {
    container.querySelectorAll('.rd-ink:not(.rd-ink-on)').forEach((w, i) => {
      setTimeout(() => w.classList.add('rd-ink-on'), i * 6);
    });
  }, 50);
}

function drawWatermark(inner) {
  const cv = inner.querySelector('.rd-wm-canvas');
  if (!cv) return;
  const W = inner.offsetWidth, H = inner.offsetHeight;
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  ctx.font = '500 11px Cinzel, serif';
  ctx.fillStyle = '#c9a030';
  const texts = ["The Horseman's Journal", "Praveen Kumar"];
  for (let y = -160; y < H + 160; y += 80) {
    for (let x = -160; x < W + 160; x += 240) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-Math.PI / 6);
      ctx.fillText(texts[Math.floor((x+y)/80)%2], 0, 0);
      ctx.restore();
    }
  }
}

function openArticle(i) {
  const art = articles[i];
  openIdx = i;
  curPage = 0;

  const inner = panel.querySelector('.art-panel-inner');

  inner.innerHTML = `
    <canvas class="rd-wm-canvas" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.03;"></canvas>
    <div class="rd-grain"></div>
    <div class="rd-vignette"></div>

    <div class="rd-book-3d">
      <div class="rd-book-spine"></div>
      <div class="rd-book-pages">
        <div class="rd-body" id="rdBody"></div>
      </div>
      <div class="rd-book-shadow"></div>
    </div>

    <div class="rd-bottom-bar">
      <div class="rd-progress-track"><div class="rd-progress-fill"></div></div>
      <div class="rd-bottom-row">
        <button class="rd-close-btn" id="rdClose">✕ Close</button>
        <div class="rd-page-counter"></div>
        <div class="rd-bottom-nav">
          <button class="rd-nav-left rd-nav-disabled" aria-label="Previous page">← Previous</button>
          <button class="rd-nav-right" aria-label="Next page">Next →</button>
        </div>
      </div>
    </div>
  `;

  inner.querySelector('.rd-nav-left').addEventListener('click', () => {
    if (curPage > 0) renderPage(art, curPage - 1);
  });
  inner.querySelector('.rd-nav-right').addEventListener('click', () => {
    if (curPage < art.pages.length - 1) renderPage(art, curPage + 1);
  });
  inner.querySelector('#rdClose').addEventListener('click', closeArticle);

  panel.classList.add('open');
  drawWatermark(inner);
  new ResizeObserver(() => drawWatermark(inner)).observe(inner);

  renderPage(art, 0);
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function closeArticle() {
  panel.classList.remove('open');
  openIdx = -1;
  curPage = 0;
}

/* keyboard navigation */
document.addEventListener('keydown', e => {
  if (!panel.classList.contains('open')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    const art = articles[openIdx];
    if (art && curPage < art.pages.length - 1) renderPage(art, curPage + 1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (curPage > 0) renderPage(articles[openIdx], curPage - 1);
  }
  if (e.key === 'Escape') closeArticle();
});

/* filter buttons */
document.querySelectorAll('.chr-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chr-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.book-wrap').forEach(bk => {
      bk.classList.toggle('hidden', !(f === 'all' || bk.dataset.category === f));
    });
    closeArticle();
  });
});

/* book card clicks */
document.querySelectorAll('.book-wrap').forEach(bk => {
  bk.addEventListener('click', () => {
    const i = parseInt(bk.dataset.article);
    if (openIdx === i) { closeArticle(); return; }
    openArticle(i);
  });
});

/* scroll reveal */
const bookObs = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), idx * 100);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.book-wrap').forEach(b => bookObs.observe(b));
