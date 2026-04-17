/* Chronicles particles */
const cp = document.getElementById('chrParticles');
if (cp) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'chr-p';
    const sz = Math.random() * 2.5 + .5;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;bottom:${Math.random() * 20}%;--d:${(Math.random() - 0.5) * 60}px;animation-duration:${Math.random() * 10 + 8}s;animation-delay:${Math.random() * 10}s;`;
    cp.appendChild(p);
  }
}

/* Chronicles video swap */
const chrVideo = document.querySelector('.chr-video');
if (chrVideo) {
  chrVideo.addEventListener('canplay', () => {
    chrVideo.style.display = 'block';
    document.querySelector('.chr-animated-bg').style.opacity = '0';
  });
}

/* Article data */
const articles = [
  {
    label: 'Foundational · Article I',
    title: 'Understanding Horse Psychology: How Horses Think and Perceive Humans',
    keywords: ['horse psychology', 'how horses think', 'horse behavior explained', 'prey animal behavior', 'equine mindset'],
    body: `
      <p>To feel what a horse feels is to first understand that you are noise. You arrive trailing the scent of purpose, your pockets full of plans, your mind a cacophony of what was and what will be. You walk with the heavy footfalls of a predator, an animal that does not need to listen before it moves. To the horse, you are a storm on the horizon of their senses. They see the shape of you, but they feel the intention, the hurry, the jagged edges of a mind that never rests. And in your presence, they become what they have always been: a statue carved from a single question — Am I safe?</p>

      <p>To connect with them is to decide to become silent. Not just in your voice, but in your soul. You must consciously unburden yourself, letting your agenda fall to the dust like a heavy coat. You stand at the edge of their space and learn to simply be. You begin to breathe. Not the shallow, forgotten breaths of a busy life, but deep, slow tides of air that announce to every listening cell in their body that you are not a threat. You are just a creature, breathing.</p>

      <p>And that is when the world changes. You stop seeing with your eyes and start feeling with your skin. You feel the cool kiss of the wind on your cheek and understand it is the same wind that is rustling the mane on their neck. You hear the distant drone of a car not as an annoyance, but as a sound that pricks their ears and passes. You feel the solid earth beneath your feet and know they feel it too, a shared foundation. You are no longer a man and a horse. You are two bodies in a field, sharing the same small slice of existence.</p>

      <p>This is when the mirror appears. The horse, in its profound and silent honesty, begins to show you to yourself. If you carry tension, a tight jaw from unspoken words, a knot of worry in your gut — they will show it to you. They will hold their own body tight, their head high, their muscles coiled. They will not go near the storm inside of you. If you carry a hidden grief, a well of sadness you have refused to acknowledge, they will grow still and soft, their dark, deep eye becoming a pool of liquid sorrow that reflects your own. They absorb your truth and show it back to you without a word of judgment.</p>

      <p>They have lived in fear. They understand the hum of hypervigilance, the way a body can be a prison of held-back energy. And when they see it in you, they do not run. They recognise it. It is a language they were born speaking.</p>

      <p>The moment of connection, when it finally comes, is not a grand event. It is a surrender. It is the slow, deliberate exhale you have been holding. It is the horse, feeling that release, letting out its own shuddering sigh in response. It is the quiet step they take toward you, not because you asked, but because you finally became a place of peace. It is the soft, searching muzzle that touches your arm, a question asked without sound. And in that touch, a universe of trust is exchanged. You are no longer a predator. You have been accepted. You are, for a moment, part of the herd. You are safe, and so are they.</p>

      <p>To walk away from that is to feel the noise of the world rush back in, but you are different now. You are more solid, more present. You carry the stillness of the field inside you. You have been seen by an ancient soul, and in their honesty, you have been given a chance to honestly see yourself. You have learned that the deepest communication requires no words at all, only a shared and silent breath.</p>

      <div class="art-section-divider"><div class="art-sdline"></div><div class="art-sdgem"></div><div class="art-sdline"></div></div>

      <p>Every decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is not simply to understand an animal. It is to understand a completely different architecture of mind, one built for a world where the cost of a single mistake is death and where the speed of perception is the only currency that matters.</p>

      <p>Horses think in pictures. They think in patterns. They think in the language of energy and intention, a language so precise and so honest that it makes human communication look crude and unreliable by comparison. When a horse looks at you, it is not seeing a person. It is seeing a pattern of energy, reading your tension, your breath rate, the quality of your stillness, the direction of your gaze. Before you have spoken a word or taken a step, the horse has already formed an opinion.</p>

      <p>This is not mysticism. This is biology. A prey animal that could not read other animals with extraordinary speed and accuracy did not survive long enough to become an ancestor. Every horse alive today is the descendant of the most perceptive, the most sensitive, the most acutely attuned readers of the world that ever lived.</p>

      <p>To work with horses well, you must first understand this: they are not failing to understand you. You are failing to understand them. The horse is reading everything correctly. The question is whether you are giving it anything honest to read.</p>

      <h4 class="art-subheading">The Psychology of Prey Animals — and What It Teaches Us</h4>

      <p>A horse's entire nervous system is built around a single question: Am I safe? It is not "Is this interesting?" or "Is this rewarding?" It is, always and above all else, about safety. In the open landscapes where horses evolved, the cost of getting that answer wrong, even once, was death. There were no second chances for the horse that lingered too long, investigated too closely, or trusted too easily.</p>

      <p>This is not a flaw. It is wisdom encoded in flesh and bone.</p>

      <h4 class="art-subheading">What It Means to Live as Prey</h4>

      <p>A predator can afford curiosity. It can move toward an unknown sound with little personal risk. That is a luxury a horse has never known. For a horse, every strange sound is a potential threat, and its life has taught it that survival depends on treating it as such. Whether the danger is a lion in the grass or a sudden movement from a human, the response is the same: the body tenses, the breath holds, and every instinct screams, run.</p>

      <p>This is not a choice; it is a physical reality. It is the wisdom of an animal that understands vulnerability deep in its bones. This shapes everything. The wide-set eyes providing nearly 350 degrees of vision, the ears that rotate independently, the hair-trigger startle that fires before the conscious mind can engage. It is the source of their deep, instinctual need to be part of a herd — because to be alone is to be exposed, but to be together is to be protected.</p>

      <p>Understanding this is the beginning of true empathy in horsemanship. The horse that bolts from a flapping plastic bag is not being foolish, disobedient, or stubborn. It is a prey animal doing exactly what millions of years of evolution have designed it to do: survive.</p>

      <h4 class="art-subheading">The Herd and the Instinct for Safety</h4>

      <p>Horses are not solitary creatures. They live in herds because a herd offers safety in numbers — more eyes, more ears, and more warning time. Within these herds are social hierarchies, but they are not the brutal, dominance-based structures we once imagined. Studies of feral horses reveal complex relationships built on mutual protection, grooming, and companionship.</p>

      <p>When you see a horse standing at the edge of a pasture, neck stretched and gaze fixed on the horizon, it is performing essential work for the herd. It is the sentinel. When a horse learns to trust you, it accepts you into its herd. It includes you in its circle of safety and allows you to be the one watching the horizon. This is not submission; it is a profound sense of belonging.</p>

      <h4 class="art-subheading">What Horses Teach Us</h4>

      <p>Here is what I have learned in over a decade with horses: people who carry trauma often share a silent understanding with prey animals. It is in the hypervigilance, the constant scan of a room, the held breath. It is in the feeling that true relaxation is dangerous because it means letting down your guard.</p>

      <p>A horse will never judge this. It recognises it. Something extraordinary happens when a person who has been living in a state of chronic vigilance stands quietly beside a thousand-pound animal that is, in that moment, also learning to trust. They breathe each other in. They exhale together. And in that shared stillness, they find something close to peace.</p>

      <p>A horse is not a therapist. But a horse is always honest. And sometimes, that honesty — offered without judgment or agenda — is exactly what healing requires.</p>

      <div class="art-closing-quote">The horse is a mirror to your soul.</div>
    `
  },
  {
    label: 'Foundational · Article II',
    title: 'Prey Animal Instincts in Horses: Why Fear Shapes Everything',
    keywords: ['prey animal instincts horse', 'why horses are fearful', 'horse survival behavior', 'flight response in horses', 'equine instincts'],
    body: `<p>Fear is not a character flaw in a horse. It is the most sophisticated survival system ever built by sixty million years of natural selection. When a horse spooks at a plastic bag, it is not being stupid. It is being exactly what it was designed to be, a creature whose survival depends on treating the unfamiliar as dangerous until proven otherwise.</p>
    <p>The flight response in a horse is not a behaviour problem. It is the expression of a nervous system that is working perfectly. The question for the horseman is never how to eliminate that response. You cannot, and you should not try. The question is how to become the thing that the horse trusts more than it fears the unknown.</p>
    <p>When you understand the biology of prey animal instincts, how the amygdala fires before the thinking brain has time to process, how the body floods with cortisol and adrenaline in milliseconds, how the horse's entire physiology is mobilised for escape in the time it takes you to blink, you stop being frustrated by fear behaviour and start having genuine compassion for what the horse is experiencing.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Foundational · Article III',
    title: 'Trust vs Control in Horse Training: What Actually Works',
    keywords: ['horse training trust vs control', 'how to build trust with a horse', 'natural horsemanship basics', 'trust based training', 'horse behavior training methods'],
    body: `<p>There is a question that every horseman must eventually answer, not with words but with choices made in the arena every single day. Do you want to control your horse, or do you want to be trusted by it? These are not the same goal. They do not produce the same horse. And they do not ask the same things of you as a person.</p>
    <p>Control gives you a horse that obeys when it cannot escape. Trust gives you a horse that chooses you when all the exits are open. I have spent eleven years learning the difference, and I can tell you with absolute certainty: only one of these is real horsemanship. The other is something else, something that looks like horsemanship from the outside but has a hollow sound when you knock on it.</p>
    <p>The horse that is controlled knows where the boundary is. The horse that trusts you does not need to find the boundary, because it has no desire to leave. These two horses live in completely different relationships with their humans, move differently, breathe differently, and look at the world differently. One is managing its captivity. The other has chosen its companionship.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Foundational · Article IV',
    title: 'How to Read a Horse\'s Body Language (Beginner to Advanced)',
    keywords: ['horse body language', 'how to read horses', 'horse signals meaning', 'horse ears meaning', 'horse tail signals', 'signs of stress in horses'],
    body: `<p>Horses speak in the language of the body, constantly, precisely, and honestly. They do not have the human luxury of saying one thing while meaning another. Every ear position, every muscle tension, every shift of weight, every flick of the tail is a sentence in a language that has no capacity for deception. Learning to read it is the single most important skill a horseman can develop.</p>
    <p>The ears are the most readable part of a horse. Ears pointed forward indicate interest, attention and sometimes concern. The horse is focused on something ahead of it. Ears pinned flat back against the skull indicate aggression, pain, or extreme irritation. Soft ears, rotated slightly to the side and relaxed, indicate a horse that is calm and comfortable. One ear forward and one ear back indicates a horse that is splitting its attention between two things simultaneously, a skill humans can only envy.</p>
    <p>Below the ears, read the eyes. A soft, rounded eye with a visible pupil and relaxed muscles around the socket indicates a relaxed horse. A hard, tight eye showing white around the edges indicates fear or anger. The muscles of the jaw, the set of the mouth, the tension in the lips. All of these carry information that a horseman learns to read the way a musician reads notes on a page.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Foundational · Article V',
    title: 'Common Human Mistakes with Horses (And Why Horses React)',
    keywords: ['mistakes in horse training', 'why horses misbehave', 'horse behavior problems', 'human errors with horses', 'training mistakes beginners'],
    body: `<p>Most horses do not have problems. Most horses have people, people with tension they are not aware of, with agendas the horse can feel but not interpret, with expectations that have nothing to do with the horse's reality in this moment. The horse is simply doing the most honest thing it can: reflecting the human back to themselves.</p>
    <p>The most common mistake I see from people who are new to horses, and from many who have been working with them for years, is bringing the wrong quality of attention to the encounter. They arrive at the stable carrying the weight of their day. The deadline they missed, the argument they had, the anxiety about the session itself. They walk into the arena full of noise, and then they are confused when the horse does not settle.</p>
    <p>A horse does not separate you from your context. It reads the whole of you, the tightness in your jaw, the speed of your breath, the quality of your footfall. When you are scattered, the horse is scattered. When you are tense, the horse is tense. This is not the horse being difficult. This is the horse being honest, which is the only thing it knows how to be.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Practical · Article VI',
    title: 'How to Build Trust with a Horse (Step by Step Guide)',
    keywords: ['how to build trust with a horse', 'bonding with a horse', 'gain horse trust'],
    body: `<p>Trust between a human and a horse is not a feeling. It is a behaviour. And like all behaviour, it is built through repetition, through the accumulation of a thousand small moments where you did what you said you would do, where you did not punish what you could not understand, where you stayed when it would have been easier to leave.</p>
    <p>The first step is deceptively simple: stop trying to earn trust and start being trustworthy. These are different things. Trying to earn trust often involves performance, doing the things you think the horse will approve of, presenting yourself in a particular way, managing your image. Being trustworthy requires only one thing: consistency. The horse that sees the same person every single time, regardless of how the session is going, learns that this person is safe. And safety, for a prey animal, is the foundation of everything.</p>
    <p>The second step is learning to read the horse's communication and respond to it honestly. When a horse expresses discomfort, acknowledge it. When a horse tries, even when the try is small and imperfect, reward it. When a horse needs space, give it space. The horse that learns its communication is heard and respected is a horse that will communicate more, try more, and trust more.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Practical · Article VII',
    title: 'Why Your Horse Does Not Listen to You (Real Reasons Explained)',
    keywords: ['horse not listening', 'why horse ignores commands', 'horse training problems'],
    body: `<p>When a horse stops listening, the immediate human response is almost always to increase the pressure, to ask louder, to push harder, to repeat the same request with more force and greater frustration. This is the most natural thing in the world to do, and it is almost always the wrong thing.</p>
    <p>A horse that is not listening is not defying you. It is telling you something. It is saying: I do not understand. Or: I am not ready. Or: I am in pain. Or, most commonly: I do not trust that what happens next will be safe for me. These are not acts of stubbornness. They are acts of honest communication from an animal that cannot use words.</p>
    <p>In eleven years of working with horses, I have found three real reasons why horses stop responding. The first is clarity, the horse genuinely does not understand what is being asked. The second is physical, there is pain or discomfort making compliance impossible or frightening. The third is relational, the horse does not have sufficient trust in the person asking to be willing to try something uncertain. Solve the real problem, and the listening returns.</p>
    <div class="art-placeholder">   </div>`
  },
  {
    label: 'Practical · Article VIII',
    title: 'How to Calm a Nervous or Anxious Horse',
    keywords: ['how to calm a horse', 'anxious horse behavior', 'nervous horse training'],
    body: `<p>You cannot calm a horse by fighting its nervous system. The moment you escalate in response to a horse's anxiety, raising your voice, tightening your grip, moving faster, pushing harder, you have confirmed the horse's assessment of the situation. Something dangerous is happening. The evidence is right there in the energy of the person standing beside it.</p>
    <p>To calm an anxious horse, you must first calm yourself. This sounds obvious. In practice, in the moment, with a five hundred kilogram animal moving on the edge of panic, it is one of the most difficult things a human being can be asked to do. But it is the only thing that works. Horses do not respond to reassuring words. They respond to calm bodies. Your breath rate, your muscle tension, the quality of your stillness. These are the real messages you are sending.</p>
    <p>The technique is simple even if the execution is demanding: breathe out. Actively, deliberately, with awareness. When you exhale, your muscles soften and your heart rate drops. The horse feels this through the rope, through the pressure of your hand, through the simple quality of your presence beside it. One genuine breath from a genuinely calm human body communicates more than an hour of gentle talk.</p>
    <div class="art-placeholder"> </div>`
  },
  {
    label: 'Practical · Article IX',
    title: 'First Time Handling a Horse: What You Must Know',
    keywords: ['how to handle a horse for beginners', 'first time horse tips', 'horse safety basics'],
    body: `<p>The first impression you make on a horse is written in its memory with a permanence that no subsequent session can fully erase. There is no second first meeting. Everything you bring into that initial encounter, your speed, your energy, the tension in your hands, the quality of your breath, the horse will carry forward into every interaction that follows.</p>
    <p>The most important thing to understand before you approach a horse for the first time is this: approach is everything. A horse's entire existence is organised around the detection of predator approach, the speed, the angle, the directness of another creature moving toward it. A human who walks straight at a horse, making direct eye contact, moving quickly, is broadcasting predator approach. The horse's body knows this before its conscious mind has processed a single thought.</p>
    <p>Approach from the side, not the front. Move slowly, not because speed is inherently bad but because slowness communicates low arousal. A relaxed body moving with no urgency is a body that is not hunting. Avoid direct sustained eye contact on the approach. Let the horse see you before you are within striking distance. Allow it to come the last part of the way to you rather than closing all the distance yourself. These are not just safety protocols. They are the beginning of a conversation.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Practical · Article X',
    title: 'Signs Your Horse Trusts You (And Signs It Does Not)',
    keywords: ['signs a horse trusts you', 'horse bonding signs', 'horse trust behavior'],
    body: `<p>A horse's trust is not invisible. It is not a feeling you have to guess at or a relationship quality you can only evaluate in retrospect. Trust, in a horse, is a behaviour. And behaviour is visible, readable, and honest. When you know what to look for, you will never again need to wonder whether you and your horse have a genuine connection or simply a functional working relationship.</p>
    <p>The clearest sign of trust is voluntary approach. A horse that trusts you does not need to be caught. When you enter the field or the stable, it comes to you, not because it expects food, but because it finds your presence comfortable and desirable. This is the equivalent of a horse saying, clearly and without ambiguity: I choose to be here with you when I could be anywhere else.</p>
    <p>A second sign is the quality of relaxation in your presence. A horse that trusts you will lower its head when you are near, a gesture of absolute physiological relaxation in a prey animal whose survival depends on keeping its head up to watch for danger. The lowered head is the horse's equivalent of a deep exhale. It means: I am safe here. You are enough.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Unique Edge · Article XI',
    title: 'What Horses Teach Us About Human Behavior',
    keywords: ['what horses teach humans', 'horse psychology and humans', 'lessons from horses'],
    body: `<p>A horse has no ego. It has no agenda beyond the immediate reality of this moment, this body, this encounter. It cannot pretend. It cannot perform. It can only respond to what is genuinely present. Spend enough time with horses and you will learn more about yourself, your real self and not the one you present to the world, than any other method of self examination can reveal.</p>
    <p>What horses teach us, above all, is that our internal state is not private. We walk through the world believing that what we feel on the inside is contained, that we can choose what we show to others, that we can perform competence while feeling inadequate, project calm while being anxious, display confidence while being afraid. Horses expose this belief as the useful fiction it has always been.</p>
    <p>The horse does not see the performance. It sees what is underneath. It reads the cortisol in your body odour, the micro tensions in your muscles, the quality of your breath, the rhythm of your heartbeat. All the things you have learned to hide from other humans, the horse has read them before you have crossed the stable yard. And then it shows you, honestly and without cruelty, exactly who walked in.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Unique Edge · Article XII',
    title: 'To Feel What a Horse Feels: Understanding Presence and Intention',
    keywords: ['horse sensitivity to humans', 'horse energy and intention', 'connection with horses'],
    body: `<p>Presence is not a concept. It is not a state of mind you can think your way into. It is a physical reality, a quality of being fully here, fully alive, fully available to what is happening in this exact moment rather than the last one or the next one. Horses live in presence permanently and completely. It is not an achievement for them. It is simply what they are.</p>
    <p>Most humans have lost the ability to do this. We are almost never fully here. We are partly in the meeting we just left, partly in the obligation we have later, partly in the story we are telling ourselves about who we are and what we are doing and whether we are doing it correctly. We bring all of this into the arena. The horse feels every bit of it.</p>
    <p>To truly understand what a horse feels in your presence, try this experiment: stand still beside your horse, close your eyes, and simply feel your own body. Feel your breath, your heartbeat, the subtle tensions in your face, your jaw, your hands, your belly. Feel the narrative running through your mind. Now ask yourself honestly: if you were a prey animal, if your survival depended on reading energy accurately, what would you make of the creature standing beside you?</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Unique Edge · Article XIII',
    title: 'Why Horses React to Your Mind and Not Just Your Actions',
    keywords: ['do horses sense emotions', 'horse reaction to humans', 'horse awareness'],
    body: `<p>Before your hand moves, your mind has already moved. Before your leg gives the aid, your intention has already broadcast itself through every muscle, every tendon, every subtle shift of weight in your body. A horse does not wait for the action. It reads the intention. By the time you have done something, the horse has already felt it coming.</p>
    <p>This is not telepathy. This is something far more interesting and far more available than telepathy. It is the horse's extraordinary ability to read the micro signals of a human body with a precision and speed that our conscious mind cannot match. When you think about stopping, your body prepares to stop, slightly, imperceptibly, in ways too subtle for human eyes to register. The horse registers them. When you think about turning, your gaze shifts, your weight shifts, your pelvis makes a microscopic rotation. The horse is already turning.</p>
    <p>The implication of this is radical. It means that mental discipline, the quality of your thoughts, the clarity of your intentions, the absence of second guessing and conflict in your mind, is not a philosophical nicety but a practical training tool. The horse that seems to read your mind is simply reading your body with more accuracy than you are reading it yourself.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Unique Edge · Article XIV',
    title: 'Silence, Energy, and Movement: The Language Horses Understand',
    keywords: ['horse communication signals', 'how horses communicate', 'non verbal communication horses'],
    body: `<p>There is a language older than any human tongue, older than the first word any ancestor of ours ever spoke into the darkness. It predates writing, predates agriculture, predates the moment our species decided that everything important must be named. Horses speak it fluently. Most humans have forgotten it exists, and those who work with horses well have simply remembered how to listen.</p>
    <p>This language is made of silence. Of the quality of stillness, the difference between the stillness of a sleeping animal and the stillness of a predator that has found its prey. Of energy, the felt sense of aliveness in a body, the direction and quality of attention, the arousal level of the nervous system. Of movement, not just the direction and speed, but the weight and intention of movement, the confidence or hesitation in a footfall, the giving or taking quality of an approach.</p>
    <p>When I teach people to work with horses, I spend the first hour teaching them to be still. Not quiet but still. The quality of your stillness is more communicative to a horse than the quality of your voice. A still body with focused attention says: I am here, I am present, I am not going anywhere. This is one of the most reassuring messages a human can send to a prey animal that spends its life scanning for threat.</p>
    <div class="art-placeholder">
    </div>`
  },
  {
    label: 'Unique Edge · Article XV',
    title: 'The Philosophy of Working with Horses and Not Against Them',
    keywords: ['natural horsemanship philosophy', 'working with horses not against', 'ethical horse training'],
    body: `<p>There are two ways to work with a horse. They look similar from the outside, especially to the uninitiated observer standing at the fence watching a horse and rider move together through a series of complex exercises with apparent ease and harmony. But from the inside, from inside the horse, they feel completely different. And the horse always knows the difference, even if the audience does not.</p>
    <p>The first way is the way of force and management. It is not necessarily brutal. It does not require cruelty or excessive punishment. It can be perfectly professional, technically correct, and produce impressive results in competition arenas. But its foundation is control, the human's agenda, the human's timeline, the human's definition of what the horse should do and when it should do it. The horse in this system learns to manage its existence within the boundaries of what is permitted. It may be content. It is not free.</p>
    <p>The second way is the way of genuine partnership. It begins not with what you want the horse to do but with understanding what the horse is. It requires that you bring more curiosity than certainty, more listening than instruction, more patience than agenda. It produces a horse that is not performing for you. It is participating with you. The difference is everything. Partnership requires two willing participants. Everything else, however graceful or technically accomplished, is something less.</p>
    <div class="art-placeholder">
    </div>`
  }
];

/* ── Filter buttons ── */
document.querySelectorAll('.chr-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chr-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.book-wrap').forEach(bk => {
      const match = f === 'all' || bk.dataset.category === f;
      bk.classList.toggle('hidden', !match);
    });
    closeArticle();
  });
});

/* ── Open / close article ── */
const panel = document.getElementById('articlePanel');
let openArticleIndex = -1;

function buildWatermarkCanvas() {
  const existing = panel.querySelector('.art-wm-canvas');
  if (existing) existing.remove();
  const canvas = document.createElement('canvas');
  canvas.className = 'art-wm-canvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.038;';
  const inner = panel.querySelector('.art-panel-inner');
  inner.insertBefore(canvas, inner.firstChild);

  function drawWM() {
    const W = inner.offsetWidth, H = inner.offsetHeight;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    ctx.font = '600 13px Cinzel, serif';
    ctx.fillStyle = '#c9a96e';
    ctx.save();
    const texts = ["The Horseman's Journal", "Praveen Kumar"];
    const spacing = 180;
    for (let y = -spacing; y < H + spacing; y += 90) {
      for (let x = -spacing; x < W + spacing; x += 260) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 6);
        ctx.fillText(texts[Math.floor((x + y) / 90) % 2], 0, 0);
        ctx.restore();
      }
    }
    ctx.restore();
  }
  drawWM();
  new ResizeObserver(drawWM).observe(inner);
}

function initInkReveal() {
  const body = document.getElementById('artBody');
  if (!body) return;

  /* wrap every word in a span */
  body.querySelectorAll('p').forEach(p => {
    const raw = p.innerHTML;
    p.innerHTML = raw.replace(/(\S+)/g, '<span class="ink-word">$1</span>');
  });

  function revealVisible() {
    const winH = window.innerHeight;
    body.querySelectorAll('.ink-word').forEach(w => {
      if (w.classList.contains('ink-on')) return;
      const rect = w.getBoundingClientRect();
      if (rect.top < winH * 0.94) {
        const delay = Math.random() * 220;
        setTimeout(() => w.classList.add('ink-on'), delay);
      }
    });
  }

  window.addEventListener('scroll', revealVisible, { passive: true });
  /* also fire immediately for words already in view */
  setTimeout(revealVisible, 80);
}

function openArticle(i) {
  const a = articles[i];
  openArticleIndex = i;
  document.getElementById('artLabel').textContent = a.label;
  document.getElementById('artTitle').textContent = a.title;
  document.getElementById('artKeywords').innerHTML = a.keywords.map(k => `<span class="art-kw">${k}</span>`).join('');
  document.getElementById('artBody').innerHTML = a.body;
  document.getElementById('artWatermark').textContent = i < 5 ? '🐴' : i < 10 ? '🐎' : '🐴';
  panel.classList.add('open');

  buildWatermarkCanvas();
  initInkReveal();

  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function closeArticle() {
  panel.classList.remove('open');
  openArticleIndex = -1;
}

document.getElementById('artClose').addEventListener('click', closeArticle);

document.querySelectorAll('.book-wrap').forEach((bk, i) => {
  bk.addEventListener('click', () => {
    if (openArticleIndex === parseInt(bk.dataset.article)) {
      closeArticle();
      return;
    }
    openArticle(parseInt(bk.dataset.article));
  });
});

/* ── Book scroll reveal ── */
const bookObs = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), idx * 100);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.book-wrap').forEach(b => bookObs.observe(b));
