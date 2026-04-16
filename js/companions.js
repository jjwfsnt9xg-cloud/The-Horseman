/* Companions - Horse Stories */

const horses = [
  {
    issue: 'Companion No. 01',
    name: 'T-Rex',
    breed: 'Hanoverian',
    age: '8',
    gender: 'Stallion',
    photo: 'trex.jpg',
    memorial: false,
    story: `<p>He arrived imported, four years old, barely schooled. A living storm wrapped in midnight muscle and raw sensitivity. Every horse I had worked with before had been preparation for this one, though I did not know it yet.</p><div class="story-quote">The universe had not sent me a horse to train. It had sent me a mirror that weighed half a ton and refused to lie.</div><p>We built the piaffe together inside a bamboo circle no wider than fifteen metres. He felt every ounce of pressure I carried. When I stopped trying to fix him and simply stayed, present, honest, unguarded, he offered me everything. Today when he sees me, he calls out. He did not just teach me how to train horses. He taught me how to train myself.</p>`
  },
  {
    issue: 'Companion No. 02',
    name: 'Gladiator',
    breed: 'Warmblood',
    age: '20',
    gender: 'Stallion',
    photo: 'gladiator.jpg',
    memorial: true,
    story: `<p>Gladiator arrived wearing his name like armour. Aggressive on the outside, coiled and sharp. But underneath that fire lived something ancient and tender, a sensitivity so deep it frightened him as much as it frightened everyone around him.</p><div class="story-quote">He taught me that fire and fragility have always lived in the same body, in horses and in men.</div><p>Twenty years of life lived at full intensity, and he burned every single day of it bright. He is gone now. But I feel him every time a horse tests me and I choose to stay.</p>`
  },
  {
    issue: 'Companion No. 03',
    name: 'Xanthos',
    breed: 'Warmblood',
    age: '15',
    gender: 'Gelding',
    photo: 'xanthos.jpg',
    memorial: false,
    story: `<p>Xanthos, named after the immortal horse of Achilles, the one who could speak and who wept at his rider's fate. From the first day, this horse carried a mythic quality in his stillness.</p><div class="story-quote">He did not move like a horse being ridden. He moved like a horse choosing to carry you and the difference is everything.</div><p>Fifteen years and still carrying wisdom in his body that words cannot translate. He is the kind of horse that reminds you why you chose this life in the first place.</p>`
  },
  {
    issue: 'Companion No. 04',
    name: 'Rubin',
    breed: 'Warmblood',
    age: '10',
    gender: 'Stallion',
    photo: 'rubin.jpg',
    memorial: false,
    story: `<p>Rubin. A gemstone of a name for a horse who made you work to find his brilliance. He was not easy in the beginning, layered, complex, a horse who required patience before he would show you anything real.</p><div class="story-quote">The horses that make you earn their trust always give you something more precious than the ones who offer it freely.</div><p>When Rubin finally let you in, what you found was luminous. A mind as sharp as his body, and a willingness that felt like a gift.</p>`
  },
  {
    issue: 'Companion No. 05',
    name: 'Highsocity',
    breed: 'Warmblood',
    age: '7',
    gender: 'Mare',
    photo: 'highsocity.jpg',
    memorial: true,
    story: `<p>Seven years. That is all she had, and yet she lived those seven years with an elegance that most creatures never find in a lifetime. Highsocity moved through the world as though she had been born knowing something the rest of us were still searching for.</p><div class="story-quote">She taught me about grace, the kind that costs nothing and means everything.</div><p>She is gone. She is not forgotten. Not for a single day.</p>`
  },
  {
    issue: 'Companion No. 06',
    name: 'Yuvraj',
    breed: 'Indian Breed',
    age: '20',
    gender: 'Stallion',
    photo: 'yuvraj.jpg',
    memorial: false,
    story: `<p>Yuvraj means prince, and he has worn that title without vanity for twenty years. There is a quality to old horses that young ones cannot manufacture, a gravity, a patience, a knowing that settles into their eyes like still water.</p><div class="story-quote">Twenty years of living had not made him slow. It had made him true.</div><p>At twenty, he still moves like a king. He reminds me every day that wisdom is simply patience that has stayed long enough to become real.</p>`
  },
  {
    issue: 'Companion No. 07',
    name: 'Arjun',
    breed: 'Warmblood',
    age: '12',
    gender: 'Gelding',
    photo: 'horse7.jpg',
    memorial: false,
    story: `<p>If T-Rex was the storm, Arjun was the mountain. Twelve years old, steady as stone, honest in a way that asked nothing dramatic of you. Only that you show up and mean it.</p><div class="story-quote">The quiet horses teach the deepest lessons, because they simply live patience and wait for you to understand.</div><p>Some teachers shout. Arjun simply stood and waited until I was worth standing beside.</p>`
  },
  {
    issue: 'Companion No. 08',
    name: 'Storm',
    breed: 'Thoroughbred',
    age: '9',
    gender: 'Mare',
    photo: 'horse8.jpg',
    memorial: false,
    story: `<p>She arrived wild. A Thoroughbred mare with electric energy and a deep suspicion of the entire human world. Storm was not a horse you approached with a plan. She dismantled plans.</p><div class="story-quote">She arrived wild and left refined, though I suspect it was she who refined me and not the other way around.</div><p>Working with Storm was working with weather. You did not control it. You learned to move inside it with respect.</p>`
  }
];

let ci = 0;

function openStory(i) {
  ci = i;
  render();
  document.getElementById('storyOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStory() {
  document.getElementById('storyOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function render() {
  const h = horses[ci];
  document.getElementById('storyIssue').textContent = h.issue;
  document.getElementById('storyName').textContent = h.name;
  document.getElementById('navCount').textContent = (ci + 1) + ' / ' + horses.length;
  document.getElementById('storyPageNum').textContent = "The Horseman's Journal · " + h.issue;
  document.getElementById('storyMemorialTag').innerHTML = h.memorial ? '<span class="story-memorial-tag">In Memoriam — Passed Away</span>' : '';
  document.getElementById('storyVitals').innerHTML = '<span class="story-vital">' + h.breed + '</span><span class="story-vital">Age: ' + h.age + '</span><span class="story-vital">' + h.gender + '</span>';
  
  const p = document.getElementById('storyPhoto');
  p.innerHTML = '';
  p.style.fontSize = '';
  const img = document.createElement('img');
  img.src = h.photo;
  img.alt = h.name;
  img.onerror = function() {
    p.innerHTML = '🐴';
    p.style.fontSize = '8rem';
  };
  p.appendChild(img);
  
  document.getElementById('storyText').innerHTML = h.story;
  document.querySelector('.story-right').scrollTop = 0;
}

document.querySelectorAll('.horse-card').forEach((c, i) => c.addEventListener('click', () => openStory(i)));
document.getElementById('storyClose').addEventListener('click', closeStory);
document.getElementById('storyBackdrop').addEventListener('click', closeStory);
document.getElementById('prevBtn').addEventListener('click', () => {
  ci = (ci - 1 + horses.length) % horses.length;
  render();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  ci = (ci + 1) % horses.length;
  render();
});

document.addEventListener('keydown', e => {
  if (!document.getElementById('storyOverlay').classList.contains('open')) return;
  if (e.key === 'Escape') closeStory();
  if (e.key === 'ArrowRight') {
    ci = (ci + 1) % horses.length;
    render();
  }
  if (e.key === 'ArrowLeft') {
    ci = (ci - 1 + horses.length) % horses.length;
    render();
  }
});

const cardObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 120);
  });
}, {threshold: 0.1});

document.querySelectorAll('.horse-card').forEach(c => cardObs.observe(c));
