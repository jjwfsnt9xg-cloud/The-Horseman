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

const articles = [

  /* ─────────────────────────────────────────────
     ARTICLE 1 — Understanding Horse Psychology
  ───────────────────────────────────────────── */
  {
    label: 'Foundational Article I',
    title: 'Understanding Horse Psychology: How Horses Think and Perceive Humans',
    tagline: 'Sixty million years of evolution. One question. Am I safe?',
    keywords: ['horse psychology','how horses think','horse behavior explained','prey animal behavior','equine mindset'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>o feel what a horse feels is to first understand that you are noise. You arrive trailing the scent of purpose, your pockets full of plans, your mind full of what was and what will be. You walk with the heavy step of a predator, an animal that does not need to listen before it moves. To the horse, you are a storm on the horizon. They see the shape of you, but they feel the intention — the hurry, the jagged edges of a mind that never rests. And in your presence, they become what they have always been: a statue carved from a single question. Am I safe?</p>
        <p>To connect with them is to decide to become silent. Not just in your voice, but in your soul. You must let your agenda fall to the dust like a heavy coat. You stand at the edge of their space and learn to simply be. You begin to breathe. Not the shallow, forgotten breaths of a busy life, but deep, slow tides of air that tell every listening cell in their body: you are not a threat. You are just a creature, breathing.</p>
        <p>And that is when the world changes. You stop seeing with your eyes and start feeling with your skin. The wind on your cheek is the same wind in their mane. The earth under your feet is the same earth under theirs. You are no longer a man and a horse. You are two bodies in a field, sharing the same small slice of the world.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>his is when the mirror appears. The horse begins to show you to yourself. If you carry tension — a tight jaw, a knot of worry in your gut — they will hold their own body tight, their head high, their muscles coiled. They will not come near the storm inside you. If you carry a grief you have refused to face, they will grow still and soft, their dark eye becoming a pool of sorrow that reflects your own. They absorb your truth and show it back without a word of judgment.</p>
        <p>They have lived in fear. They understand the hum of hypervigilance — the way a body becomes a prison of held-back energy. And when they see it in you, they do not run. They recognise it. It is a language they were born speaking.</p>
        <p>The moment of connection is not a grand event. It is a surrender. It is the slow exhale you have been holding. It is the quiet step they take toward you — not because you asked, but because you finally became a place of peace. The soft muzzle that touches your arm is a question asked without sound. In that touch, a universe of trust is exchanged. You are safe. And so are they.</p>
        <p>To walk away from that is to feel the noise of the world rush back in. But you are different now. You carry the stillness of the field inside you. You have learned that the deepest communication requires no words at all — only a shared and silent breath.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">E</span>very decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is not simply to understand an animal. It is to understand a completely different kind of mind — one built for a world where a single mistake means death, and where reading the world fast is the only thing that matters.</p>
        <p>Horses think in pictures. They think in feelings. They think in the language of energy and intention — so precise, so honest, that it makes human communication look clumsy by comparison. When a horse looks at you, it is not seeing a person. It is reading a pattern of energy. Your tension, your breath, the quality of your stillness, the direction of your gaze. Before you have spoken a word, the horse has already decided what you are.</p>
        <p>This is not mysticism. This is biology. A prey animal that could not read the world fast and accurately did not live long enough to become an ancestor. Every horse alive today is the child of the most perceptive, the most sensitive, the most finely tuned readers that ever lived. To work with horses well, you must first accept this: they are not failing to understand you. You are failing to understand them. The horse is reading everything correctly. The question is whether you are giving it anything honest to read.</p>
      `},

      { type: 'section', heading: 'How Horses Think', sub: 'They do not think in words. They think in the truth of this moment.' },

      { type: 'text', section: 'How Horses Think', html: `
        <p><span class="rd-dropcap">H</span>orses do not think in sentences. They do not sort their experience into reasons or explanations. They think in pictures, in feelings, in what is happening right now. A horse scared once by a white plastic bag does not remember that plastic bags are scary. It remembers the exact feeling of that moment — the sudden movement, the crinkle of sound, the rush of fear, the need to run. When it sees another plastic bag, it does not think. It simply feels the same feeling, and the body moves.</p>
        <p>This is not stupidity. This is intelligence so sharp, so finely made, that it has kept horses alive for millions of years. A prey animal that had to stop and think to figure out whether the sound in the bushes was dangerous or safe did not survive long enough to have young. The horses that remain are the children of those who felt danger and moved before the thinking mind could catch up.</p>
        <p>You cannot explain to a horse why something is safe. You cannot tell it the needle will help, that the trailer leads somewhere good. The horse reads the world through different eyes entirely. It reads energy. It reads tension. It reads the tiny signals in your body that you do not even know you are sending. Before you move, the horse has already felt your intention to move.</p>
        <p>Your thoughts are not private. Your fear, your anger, your rush, your doubt — all of it shows in your body before you have even noticed it yourself. The horse that seems difficult is often simply giving back exactly what you are giving. The rider who learns to become truly calm — not acting calm, but being calm — finds that the horse changes in that same moment.</p>
      `},

      { type: 'quote', text: 'You cannot teach a horse with words. You can only speak to it with what you are.' },

      { type: 'section', heading: 'Horse Behavior Explained', sub: 'Every behavior is a message. The question is whether you are listening.' },

      { type: 'text', section: 'Horse Behavior Explained', html: `
        <p><span class="rd-dropcap">H</span>orse behavior is never random. It is always meaningful. The hard part for humans is that the meaning is often seen through human eyes that have nothing to do with how horses truly experience the world.</p>
        <p>When a horse pins its ears, people say it is angry. When it pulls away, people say it is stubborn. When it spooks, people say it is overreacting. But anger, stubbornness, and overreaction are human ideas placed on an animal that does not carry them. A horse is not angry when it pins its ears. It is saying: I feel uncomfortable. I am drawing a line. I am under stress. A horse that pulls away is not stubborn. It is saying clearly: I do not feel safe doing what you are asking. A horse that spooks is not overreacting. It is doing exactly what sixty million years of nature built it to do.</p>
        <p>Most problem behaviors are not problems with the horse. They are problems with the relationship, the method, or the human's ability to hear what the horse is saying. A horse that bites was not born mean. It learned that biting is the only message strong enough to make a human stop doing something painful. A horse that will not load is being honest about its fear of tight spaces.</p>
        <p>Stop asking: how do I make this horse stop? Start asking: what is this horse trying to tell me? Because once you understand what it is saying, the behavior often resolves on its own. Horses are not machines. They grieve. They play. They love. The rider who sees the horse as it truly is finds that it offers far more than obedience. It offers real partnership. And that, when it is real, changes everything.</p>
      `},

      { type: 'quote', text: 'The horse that misbehaves is not the problem. It is the question. And the answer always begins with you.' },

      { type: 'section', heading: 'Prey Animal Behavior', sub: 'To understand the horse, you must first understand what it means to be hunted.' },

      { type: 'text', section: 'Prey Animal Behavior', html: `
        <p><span class="rd-dropcap">T</span>o understand a horse, you must first understand what it means to be prey.</p>
        <p>A predator can take chances. It has time to watch, to think, to decide. A prey animal does not have this time. For a horse, waiting can mean death. A horse that pauses to figure out whether the movement in the grass is wind or a lion does not live long enough to make better choices. The horses whose bloodlines carry on today are the ones that ran first and asked questions later. They trusted their gut. They turned fear into fast movement. They treated every new thing as dangerous until proven safe.</p>
        <p>This history lives in every horse you will ever meet. It is written into their nervous system, coded in their DNA. The horse that spooks at a plastic bag is not being stupid. It is being a horse. The horse that will not walk past the dark corner is not stubborn. It is listening to a feeling that has kept its family alive for millions of years.</p>
        <p>The flight response is not a flaw. When a horse feels danger, its body moves in split seconds. Heart rate spikes. Fear floods the system. Muscles tighten. The brain drops everything else and asks one question: where is the exit? This is not a choice. It is a need built deep into the body. You cannot reason with a nervous system in survival mode. But you can become the thing the horse trusts more than it fears the unknown. You can be so steady, so calm, so consistent, that your presence becomes safety rather than stress. The horseman who works with the prey animal nature finds that fear is not a wall. It is simply information. And when that information is truly heard, the horse can finally let go.</p>
      `},

      { type: 'quote', text: 'Fear in a horse is not a fault. It is a memory older than language. And it deserves your respect, not your frustration.' },

      { type: 'section', heading: 'Equine Mindset', sub: 'The horse lives where most humans only visit — fully inside the present moment.' },

      { type: 'text', section: 'Equine Mindset', html: `
        <p><span class="rd-dropcap">A</span> horse lives in the present moment with a fullness that most humans will never know. It is not worrying about tomorrow. It is not replaying yesterday. It is here — now — fully alive in this breath, this step, this meeting. This is not wisdom. This is simply what it means to be a horse.</p>
        <p>The equine mindset is built on a few basic truths. Safety comes first. Connection to the herd matters deeply. Movement is life. Trust must be earned. And the quality of your presence matters far more than any word you speak.</p>
        <p>When you walk toward a horse, it is reading you before you are ten feet away. Are you calm or worried? Sure or unsure? Present or somewhere else entirely? The horse does not care what you say. It cares what you are. And if what you are is scattered, tight, or disconnected, the horse will show that back to you with perfect honesty. This is why horsemanship is as much about knowing yourself as it is about knowing horses. You cannot hide from a horse. You cannot fake being present. The horse knows. It always knows.</p>
        <p>Horses do not hold grudges. They do not replay past hurts. If you make a mistake, if you lose your temper, if you handle something badly — the horse will give you another chance. It will meet you fresh in the next moment, willing to try again, as long as you are willing to be honest. This is the gift horses offer. Their complete, uncompromising honesty. They show us who we are. They teach us that the quality of the connection depends entirely on the quality of what we bring. And in teaching us that, they teach us something far more valuable than horsemanship. They teach us how to be human.</p>
      `},

      { type: 'quote', text: 'The horse does not ask you to be perfect. It only asks you to be real. And in being real, you become, at last, someone worth trusting.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 2 — The Flight Response
  ───────────────────────────────────────────── */
  {
    label: 'Foundational Article II',
    title: 'The Flight Response: Why Horses Fear and How to Work With It',
    tagline: 'Fear is not a character flaw. It is sixty million years of perfect engineering.',
    keywords: ['horse flight response','why horses spook','horse fear and trust','equine fear response','horse anxiety explained'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>here is a sound that every horse alive knows before it is born. Not heard through the ears, but felt in the blood — a sound older than any language, older than the first human hand that ever reached toward a horse's neck. It is the sound of something moving in the grass when the grass should be still. It is the sound of threat. And the body of the horse — every muscle, every nerve, every breath — has been shaped by millions of years to answer that sound with one single, absolute response: run.</p>
        <p>This is not a choice the horse makes. It is not a decision that passes through reason or reflection. By the time the thinking part of the brain has processed what the eyes have seen, the body is already moving. The legs are already carrying the horse away from what frightened it. This is not a flaw in the horse's design. This is the design working exactly as it was built to work.</p>
        <p>And yet, every day, humans stand beside horses and feel frustration at this response. They pull harder on the rope. They raise their voice. They push the horse toward the thing it fears, convinced that force is the answer. They have mistaken the most sophisticated survival system ever built by nature for a problem to be corrected. It is not a problem. It is the horse. And until you understand it, you will never truly reach the animal standing in front of you.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">F</span>ear is not a character flaw in a horse. It is the most finely built survival system ever created by sixty million years of nature. When a horse spooks at a plastic bag, it is not being stupid. It is being exactly what it was made to be — a creature whose life depends on treating the unfamiliar as dangerous until proven otherwise.</p>
        <p>The flight response is not a behavior problem. It is a nervous system working perfectly. The question for the horseman is never how to remove that response. You cannot, and you should not try. The question is how to become the thing the horse trusts more than it fears the unknown.</p>
        <p>When you understand the biology — how the fear centre fires before the thinking brain has time to process, how stress chemicals flood the body in milliseconds, how the entire horse prepares for escape in the time it takes you to blink — you stop being frustrated by fear. You start having real compassion for what the horse is living through. And compassion, not correction, is where genuine horsemanship begins.</p>
      `},

      { type: 'section', heading: 'The Brain That Runs Before It Thinks', sub: 'The fear response fires in milliseconds. Reason arrives too late.' },

      { type: 'text', section: 'The Brain That Runs Before It Thinks', html: `
        <p><span class="rd-dropcap">D</span>eep inside the horse's brain, buried beneath layers of more recent evolution, sits a small almond-shaped structure called the amygdala. It is the oldest part of the emotional brain. It does not think. It does not weigh consequences. It does not consider whether the white plastic bag by the arena fence has ever hurt a horse before. It simply receives information from the senses and, in the span of twelve milliseconds, fires a signal that floods the entire body with adrenaline and cortisol.</p>
        <p>Twelve milliseconds. That is faster than the blink of a human eye. That is faster than the conscious mind can process a single thought. By the time the horse's rational brain — the part that, with training, can learn that plastic bags are safe — has even begun to process the visual information, the body is already in a full physiological state of emergency.</p>
        <p>Heart rate doubles. Sometimes triples. Blood is diverted away from the digestive system and toward the large muscle groups of the legs. The pupils dilate. The nostrils flare. The entire body becomes, in an instant, a machine optimised for one single purpose: escape. This is called the fight-or-flight response, and in the horse it is almost exclusively flight. Unlike a predator, which may stand its ground when cornered, the horse's first, second, and third instinct is always to put distance between itself and the threat. Speed is safety. Distance is survival. This is sixty million years of successful living encoded into every cell of the animal's body.</p>
        <p>When you understand this biology — truly understand it, not just intellectually but with genuine empathy — you stop asking why the horse is behaving this way. You start asking something far more useful: what can I offer this horse that its nervous system will accept as safe?</p>
      `},

      { type: 'quote', text: 'The horse does not spook to frustrate you. It spooks because every ancestor that did not spook is no longer alive to have descendants.' },

      { type: 'section', heading: 'Built to Detect Danger', sub: 'Every part of the horse is a precision instrument tuned for survival.' },

      { type: 'text', section: 'Built to Detect Danger', html: `
        <p><span class="rd-dropcap">T</span>he horse's body is not simply an animal that runs fast. It is a living detection system of extraordinary precision — every part of it engineered over millions of years to gather information about the environment and assess it for threat.</p>
        <p>The eyes are set on the sides of the skull, giving the horse a visual field of approximately 350 degrees. It can see almost everything around it simultaneously, with only two small blind spots — directly in front of its nose and directly behind its tail. A predator approaches from behind. A horse that cannot see behind itself is a horse that will not survive. This is why horses startle so violently when touched suddenly in a blind spot. The nervous system registers the unexpected contact and responds before the conscious mind has any say in the matter.</p>
        <p>The ears rotate independently, each one capable of turning nearly 180 degrees to track a sound source without the horse moving its head. A horse listening to something behind it while watching something in front is not being distracted. It is doing exactly what its biology demands — gathering information from multiple directions simultaneously, building a complete picture of its environment. When both ears lock forward onto a single point, every experienced horseman learns to pay attention. The horse has found something that concerns it. The wise response is not to push forward. It is to pause and let the horse process.</p>
        <p>The nostrils can detect scents at concentrations far below what any human nose can register. Horses have been documented detecting the presence of a predator — not the sight or sound, but the scent alone — from distances of several hundred metres in the right wind conditions. When a horse lifts its head and flares its nostrils at something you cannot see or smell, it is not imagining things. It is reading information from the environment that you simply do not have access to.</p>
        <p>The whiskers around the muzzle are not decorative. They are sensory organs, capable of detecting changes in airflow and the proximity of objects in low light. A horse that has had its whiskers clipped loses a significant part of its environmental sensing ability. It becomes, in a very real sense, partially blind in the dark.</p>
      `},

      { type: 'quote', text: 'When the horse tells you something is wrong, believe it. It is reading a world you cannot fully see.' },

      { type: 'section', heading: 'How Horses Remember Fear', sub: 'One bad moment can last a lifetime. One honest moment of safety can begin to undo it.' },

      { type: 'text', section: 'How Horses Remember Fear', html: `
        <p><span class="rd-dropcap">F</span>ear memory in horses is not stored the way human memories are stored. Humans encode memories with context — they remember not just what happened, but where, when, with whom, and how they felt about it afterward. Time passes and the memory softens. Details blur. The emotional charge of a frightening event gradually diminishes as the brain files it away and moves forward.</p>
        <p>This is not how the horse's brain works. Fear memories in horses are stored with extraordinary precision in the amygdala — and they are stored for life. A horse that was badly frightened in a horse trailer at age three will remember that fear at age twenty. Not as a story it tells itself, but as a full-body sensory experience that is re-triggered the moment the right stimulus appears. The smell of diesel fumes. The sound of a metal ramp. The feeling of reduced light and enclosed space. Any one of these can unlock the entire original terror in an instant.</p>
        <p>This is why punishment is so damaging in horse training. When a human punishes a horse for displaying fear — hitting it, shouting at it, forcing it toward the thing that frightens it — they are not teaching the horse that the thing is safe. They are adding a second layer of threat to an already frightened nervous system. The horse now has two things to fear: the original stimulus and the human beside it. The fear becomes deeper, more complex, and far harder to resolve.</p>
        <p>But the same principle that makes fear memory so persistent can also be used to create safety memory. Every time a horse is allowed to approach something frightening at its own pace, in its own time, and is not punished for hesitating — every time it discovers for itself that the scary thing did not harm it — a new memory is laid down alongside the old one. Not replacing it, but offering an alternative. Over time, with patience and consistency, the safety memory can become stronger than the fear memory. The horse learns, not because it was told, but because it was given the space to discover.</p>
        <p>This process cannot be rushed. It cannot be forced. It can only be offered, again and again, until the horse chooses to trust what the evidence is showing it. That is desensitisation done honestly — not flooding the horse with the frightening thing until it gives up resisting, but walking beside it, slowly, as it learns that the world is safer than its instincts have always told it.</p>
      `},

      { type: 'quote', text: 'You cannot argue a horse out of its fear. You can only give it enough safe experiences to outweigh the ones that were not.' },

      { type: 'section', heading: 'Safety in Numbers', sub: 'The lone horse is the vulnerable horse. The herd is not a social preference — it is survival.' },

      { type: 'text', section: 'Safety in Numbers', html: `
        <p><span class="rd-dropcap">I</span>n the wild, a horse alone is a horse in danger. Not because solitude itself is dangerous, but because every second a horse is without companions, it is bearing the full weight of vigilance alone. There are no other eyes watching the horizon. No other ears turning toward that sound in the distance. No other nose catching a scent on the wind. The solitary horse must be alert to everything, always, without rest.</p>
        <p>This is why isolation is one of the most psychologically damaging things that can be done to a horse. Stabled horses kept without visual or physical contact with other horses show measurable increases in stress hormones, stereotypic behaviors — weaving, crib-biting, box walking — and heightened reactivity. They are not being difficult. They are expressing the profound biological distress of an animal whose survival system is telling it that it is in danger.</p>
        <p>Within a herd, the vigilance is shared. While one horse grazes with its head down, others maintain watch. The pattern rotates naturally, without instruction or command. It is a distributed safety system, each horse contributing its senses to a collective awareness that no single animal could maintain alone.</p>
        <p>This herd instinct is the key to understanding why horses are so profoundly affected by the emotional state of the humans around them. In the absence of horse companions, many horses will transfer their herd bonding to humans, other species, or even objects. They are not being foolish or sentimental. They are doing what their biology requires — finding something to be part of, something to trust, something that makes standing still in the world feel survivable.</p>
        <p>When you earn the trust of a horse, you are not merely earning its affection. You are being accepted into its safety system. It is allowing you to be the one it turns to when something frightens it — the one whose stillness or calm it uses to calibrate its own response. That is not a small thing. For a prey animal, allowing another creature into its circle of trust is the most significant decision it can make. It is staking its survival on you.</p>
      `},

      { type: 'quote', text: 'When a horse turns to you in fear instead of running from you, you have become its herd. That is the whole of horsemanship.' },

      { type: 'section', heading: 'Working With Fear, Not Against It', sub: 'The horseman who fights the prey animal will fight forever. The one who works with it will find a partner.' },

      { type: 'text', section: 'Working With Fear, Not Against It', html: `
        <p><span class="rd-dropcap">T</span>he single most important shift a horseman can make is to stop experiencing the horse's fear as an obstacle and start experiencing it as information. Fear in a horse is not stubbornness. It is not disrespect. It is not a training problem to be solved with more pressure. It is the horse communicating, as clearly and honestly as it is capable of communicating, that something in its environment has registered as unsafe.</p>
        <p>Your job is not to convince the horse that its fear is wrong. Your job is to become so consistent, so calm, and so trustworthy, that the horse's nervous system begins to use your energy as a reference point. This is called social referencing — the same phenomenon that causes a young child to look at a parent's face to determine whether a new situation is safe or frightening. Horses do this constantly. When something startles them, the first thing many horses do is look at the human beside them. What they are asking is: are you afraid? If the human's body tightens, if the breath shortens, if the grip on the rope increases — the horse receives confirmation that danger is present. If the human breathes out, softens, and does not escalate — the horse receives a different message. Perhaps this is not as dangerous as it felt.</p>
        <p>This is why your own nervous system is the most important piece of equipment you bring to any session with a horse. Not the saddle, not the bridle, not the training method. Your breath rate. Your muscle tension. The quality of your stillness. These are the things the horse is reading, and these are the things that will determine whether the session goes toward trust or away from it.</p>
        <p>Learn to read the early signs of rising fear — the high head, the tightening of the muscles along the neck and back, the shortening of the stride, the eye that begins to show white at the edges, the tail that lifts and stiffens. These are not the explosion. These are the warning before the explosion. The horseman who responds to these early signals with patience, with space, with a calm exhale and a moment of stillness, will rarely meet the explosion. The horseman who pushes through them will meet it every time.</p>
        <p>Desensitisation is not about eliminating the horse's sensitivity. A sensitive horse is a gift — it is responsive, aware, and capable of extraordinary communication. The goal is not a dull horse that does not react. The goal is a horse whose trust in you is stronger than its fear of the unfamiliar. That horse will still feel fear. It will always feel fear. But it will look to you before it runs. And in that look is everything horsemanship is built on.</p>
      `},

      { type: 'quote', text: 'A horse that trusts you does not stop being afraid. It simply decides that being near you is worth the risk. Honour that decision with everything you have.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 3 — Trust vs Control
  ───────────────────────────────────────────── */
  {
    label: 'Foundational Article III',
    title: 'Trust vs Control in Horse Training: What Actually Works',
    tagline: 'Control gives you obedience. Trust gives you a horse that chooses you.',
    keywords: ['horse training trust vs control','how to build trust with a horse','natural horsemanship basics','trust based training','horse behavior training methods'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>here is a question every horseman must eventually answer — not with words, but with choices made in the arena every single day. Do you want to control your horse, or do you want to be trusted by it? These are not the same goal. They do not produce the same horse. And they do not ask the same things of you as a person.</p>
        <p>Control gives you a horse that obeys when it cannot escape. Trust gives you a horse that chooses to be with you when all the exits are open. I have spent eleven years learning the difference. Only one of these is real horsemanship. The other looks like it from the outside, but has a hollow sound when you knock on it.</p>
        <p>The horse that is controlled knows where the boundary is. The horse that trusts you has no desire to find the boundary, because it has no desire to leave. One is managing its captivity. The other has chosen its companionship. And the gap between those two things is as wide as the sky.</p>
      `},

      { type: 'section', heading: 'What Control Actually Looks Like', sub: 'A horse under control is a horse waiting for its moment. A horse that trusts has no moment to wait for.' },

      { type: 'text', section: 'What Control Actually Looks Like', html: `
        <p><span class="rd-dropcap">C</span>ontrol in horse training is built on pressure. On the horse learning that certain behaviors lead to discomfort, and other behaviors make the discomfort stop. Done carefully, this is not cruel. It is the foundation of most traditional training methods, and it produces horses that perform reliably within the parameters they have been trained to understand.</p>
        <p>But here is what control cannot do: it cannot make a horse want to be with you. It can make a horse stand still. It cannot make a horse stand still because it finds your presence comforting. It can make a horse load into a trailer. It cannot make a horse walk into that trailer with a low head and a soft eye because it trusts that you would not lead it somewhere harmful. These are different things. And a horseman who has only ever experienced control may not know that the second version even exists.</p>
        <p>The controlled horse is always calculating. Always aware of the pressure behind it and the release ahead. It is a horse that has learned to manage a system. It is not a horse that has offered itself freely. You can feel the difference in the rope. You can feel it in the way the horse turns its head when you approach. The controlled horse turns toward you because it has learned to. The trusting horse turns toward you because it wants to. That small difference changes everything about what the relationship is and what it can become.</p>
        <p>I am not saying control is wrong. I am saying it is incomplete. Used alone, without the foundation of genuine trust, it produces a horse that is compliant but closed — a horse that has learned to cope with humans, not a horse that has genuinely chosen them.</p>
      `},

      { type: 'quote', text: 'You can own a horse without it ever belonging to you. The difference is trust. And trust cannot be taken. It can only be given.' },

      { type: 'section', heading: 'What Trust Actually Requires', sub: 'Trust is not something you perform. It is something you become.' },

      { type: 'text', section: 'What Trust Actually Requires', html: `
        <p><span class="rd-dropcap">T</span>rust is not earned in a single dramatic moment. It is built in the accumulation of ten thousand small moments — every time you do not punish what you did not explain, every time you notice the horse's discomfort and adjust before it becomes fear, every time you end the session on softness rather than on your own agenda.</p>
        <p>It requires consistency above all things. The horse that sees the same person every time — the same quality of energy, the same patience, the same predictable response to its communication — learns that this person is safe. Safety is the foundation on which all trust rests. A horse cannot trust someone it cannot predict. And a person who is calm one day and sharp the next, patient in one situation and demanding in another, is a person the horse can never fully read. Unreadable equals unsafe. And unsafe is the one thing a prey animal cannot afford.</p>
        <p>Trust also requires honesty. Horses are not deceivable. They do not respond to what you say about yourself — they respond to what you actually are. If you are genuinely calm, they will feel it. If you are performing calm while carrying tension, they will feel that too. The performance fools no one. The only thing that works with a horse is the real thing. This is why working with horses forces a kind of self-knowledge that few other pursuits demand. You cannot be two people. You must become, consistently and honestly, the person the horse can trust. That is a tall order. It is also one of the most worthwhile things you will ever work toward.</p>
      `},

      { type: 'quote', text: 'The horse does not ask for perfection. It asks for honesty. And honesty, sustained long enough, becomes the most powerful training tool that exists.' },

      { type: 'section', heading: 'The Partnership That Changes Everything', sub: 'When the horse offers freely, you receive something no amount of control can manufacture.' },

      { type: 'text', section: 'The Partnership That Changes Everything', html: `
        <p><span class="rd-dropcap">I</span> remember the first time a horse walked across an empty field to meet me not because it was feeding time, not because it had been trained to, but simply because I had been sitting quietly at the fence long enough that my presence had become something worth coming toward. It walked across that field slowly, head low, and stood beside me without any contact, without any request. It simply stood there. And in that standing, I understood for the first time what all of this is actually for.</p>
        <p>Partnership is the word people use, but it is often misunderstood. Partnership does not mean the horse always does what you want. It means the horse participates with you — genuinely, willingly, with something behind its eyes that is more than compliance. You feel it in the rhythm of movement when it gives you its back without resistance. You feel it when it seeks you out in the field. You feel it in the rare, perfect moments when you ask for something and the horse gives it before the ask is finished — not because it anticipated the signal, but because it was already thinking the same thought.</p>
        <p>Getting there takes time. More time than control does. A horse trained through pressure alone can be rideable in weeks. A horse that genuinely trusts a human takes months, sometimes years, depending on what the horse has lived through. But the result is not comparable. The controlled horse performs. The trusting horse participates. And in the difference between those two things is the whole reason why some people spend their entire lives in pursuit of what horses can offer, and never want to stop.</p>
      `},

      { type: 'quote', text: 'The day the horse chooses you over the open field — that is the day you stop being a trainer. That is the day you become a horseman.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 4 — Reading Body Language
  ───────────────────────────────────────────── */
  {
    label: 'Foundational Article IV',
    title: "How to Read a Horse's Body Language (Beginner to Advanced)",
    tagline: 'Every flick of an ear is a sentence. Learn to read the language.',
    keywords: ['horse body language','how to read horses','horse signals meaning','horse ears meaning','horse tail signals','signs of stress in horses'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">H</span>orses speak in the language of the body — constantly, precisely, and honestly. They do not have the human ability to say one thing while meaning another. Every ear position, every shift of muscle, every change of weight, every flick of the tail is a sentence in a language that has no room for deception. Learning to read it is the single most important skill a horseman can develop. Everything else — every technique, every method, every tool — is secondary to this.</p>
        <p>I spent my first year with horses watching their behavior and seeing nothing meaningful. I thought a horse pinning its ears meant it was bad-tempered. I thought a horse turning away meant it was disinterested. I was reading the words but not understanding the language. It was only when I began to slow down — truly slow down, and watch without an agenda — that the sentences began to make sense. Once they did, everything changed. The horse stopped being an animal I managed. It became a conversation I was part of.</p>
        <p>This is what I want to give you. Not a checklist. Not a diagram. But a way of seeing that, once learned, cannot be unlearned. The horse is always talking. The only question is whether you are listening.</p>
      `},

      { type: 'section', heading: 'The Ears', sub: 'The most readable part of a horse. Every position is a sentence.' },

      { type: 'text', section: 'The Ears', html: `
        <p><span class="rd-dropcap">T</span>he ears are the horse's most expressive feature, and the first place a horseman looks when trying to understand what is happening inside the horse's mind. They rotate independently, they respond instantly to both external stimuli and internal emotional state, and they are almost impossible for the horse to consciously control — which makes them one of the most honest sources of information the horse has.</p>
        <p>Ears forward means the horse is interested in something. Focused. Alert. Both ears locked forward onto a single point means the horse has found something that concerns it — it is gathering information and deciding what to do next. This is the position that precedes a spook. Do not push forward here. Give the horse a moment to process.</p>
        <p>Ears soft and relaxed to the side — sometimes called "lop-eared" — means a deeply calm horse. This is the position of true rest, of a horse that has let its guard down completely. If a horse you are working with drops into this position, stop what you are doing and let it stand. You have reached a place of real relaxation. Preserve it.</p>
        <p>One ear forward, one ear back means the horse is splitting its attention between two things — the human in front of it and something behind it, or the task it is doing and something happening to its side. This is not distraction in the negative sense. It is the horse doing what its biology demands: staying aware of its entire environment simultaneously.</p>
        <p>Ears pinned flat back is the signal that requires the most respect. This is not simply irritation. Pinned ears say: I am at the end of my tolerance. I have been communicating discomfort for some time and the message has not been received. This is a warning that the next communication may be physical — a bite, a kick, a sharp movement. A horse that pins its ears is not being aggressive without reason. It is being honest about where it is. The horseman who responds to pinned ears by pushing harder is the horseman who eventually gets hurt.</p>
      `},

      { type: 'quote', text: 'When both ears lock forward, the horse is not ignoring you. It is doing the most important job it has: deciding whether the world is safe.' },

      { type: 'section', heading: 'The Eyes and Face', sub: 'The eyes never lie. Soft means safe. Hard means scared or in pain.' },

      { type: 'text', section: 'The Eyes and Face', html: `
        <p><span class="rd-dropcap">T</span>he eyes of a horse are among the largest of any land mammal — deep, dark, and capable of an expressiveness that can stop you where you stand if you know how to look. They are set wide on the skull, placed for maximum field of vision, and they shift from reading wide-angle panorama to sharp focus in ways our own eyes cannot. A horse that fixes both eyes on a single object has made a decision — it is taking the rare step of using both eyes together to get a full picture of something it wants to understand. That is a horse on the edge of a big reaction, or a horse in the process of genuinely investigating something.</p>
        <p>The soft eye is what you are looking for. Rounded, full, with relaxed muscles in the skin around it. No wrinkles above the eye, no tension in the brow. A soft eye means a horse that is calm, present, and not in survival mode. This is the eye of a horse you can work with, a horse that has enough mental space to learn and to try.</p>
        <p>The hard eye is the opposite. It is flat, tight, with the skin around it tense. The whites may be visible at the corners — a sign the eye is wide open in the physiological state of fear, taking in as much visual information as possible. A horse showing white at the eye is a horse whose nervous system has shifted into emergency. It is not a horse that can hear instructions. It is a horse that needs space, stillness, and time.</p>
        <p>The muscles of the face carry their own language. A tight jaw means held tension — the horse is bracing against something, physically or mentally. Relaxed lips and a soft lower jaw mean the horse has released. Licking and chewing — the rhythmic movement of the mouth and tongue that many people notice after a horse has worked through something — is a physical sign of the parasympathetic nervous system returning to dominance after a period of stress. It is not the horse processing the lesson in a cognitive sense. It is the horse's body returning to a state of rest. It is one of the most reassuring things you can see in a training session.</p>
      `},

      { type: 'quote', text: "The licking and chewing is not the horse agreeing with you. It is the horse's body unclenching. And an unclenched horse is a horse you can reach." },

      { type: 'section', heading: 'The Body and Posture', sub: 'How the horse carries itself tells you everything about what it is carrying inside.' },

      { type: 'text', section: 'The Body and Posture', html: `
        <p><span class="rd-dropcap">T</span>he horse's entire body is a map of its internal state. Learn to read the posture and you will know what the horse is feeling before it has expressed that feeling in any obvious behavior.</p>
        <p>The head height is one of the clearest indicators. A low head — anywhere from level with the withers to below — means a calm, relaxed horse. The lower the head, the deeper the state of relaxation. A horse that drops its head while you are working it has given you the most clear signal available: I am with you. I am safe. A high head, on the other hand, means arousal — alertness, anxiety, or fear. The higher the head, the more activated the nervous system. A horse with its head near the sky is a horse that has already made the decision to be ready to run. You will not accomplish much training in that state.</p>
        <p>The back tells a story too. A horse whose back swings freely, whose topline is soft and supple, is a horse moving without tension. A horse whose back is tight, whose steps are short and choppy, who does not swing through the hindquarters, is a horse carrying tension in its body — often fear or pain, sometimes both. You can feel this under the saddle long before you can see it on the ground.</p>
        <p>The tail is often overlooked, but it speaks constantly. A tail that swings freely with movement means a relaxed back and a horse moving through its body. A clamped tail — held tightly against the hindquarters — means tension, often pain. A tail that swishes sharply from side to side, especially when there are no flies present, means irritation. The horse is saying: something is bothering me. The tail that lifts and stiffens during movement is often a sign of increasing excitement or anxiety. Watch the tail. It tells the truth when everything else looks fine.</p>
      `},

      { type: 'quote', text: 'A horse with a low head is a horse that has decided you are not a threat. There is no higher compliment it can pay you.' },

      { type: 'section', heading: 'Reading the Whole Horse', sub: 'No single signal exists alone. Read the conversation, not just the words.' },

      { type: 'text', section: 'Reading the Whole Horse', html: `
        <p><span class="rd-dropcap">T</span>he trap that beginners fall into — and sometimes experienced riders too — is reading individual signals in isolation. A single pinned ear might mean the horse is listening to something behind it. A single swish of the tail might be a fly. A moment of high head might be curiosity. It is only when you read the whole horse — all the signals together, in context, over time — that you begin to understand what is actually being communicated.</p>
        <p>The horse that has both ears pinned, a hard eye, a tight jaw, a high head, and a clamped tail is a horse that is telling you something very clearly and has been telling you for some time. The horse that has one ear back, a soft eye, a relaxed jaw, a low head, and a swinging tail is a horse that is largely comfortable but has a part of its attention on something you may not be aware of. Context matters. History matters. The relationship you have built over time matters.</p>
        <p>The goal is not to memorize a list of signals. The goal is to develop a way of seeing — a habit of reading the whole horse in every moment, not just when something goes wrong. The horseman who reads calmly also reads escalation before it becomes a problem. They catch the early whisper of discomfort before it becomes a shout. They adjust before adjustment is urgent. This is what makes a horseman safe. Not strength. Not dominance. Not years of forcing horses through their resistances. Simply the ability to read, and the willingness to listen to what is being said.</p>
      `},

      { type: 'quote', text: 'The horse has been telling you the same thing for the last ten minutes. The only question is whether you have been listening.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 5 — Common Human Mistakes
  ───────────────────────────────────────────── */
  {
    label: 'Foundational Article V',
    title: 'Common Human Mistakes with Horses (And Why Horses React)',
    tagline: 'Most horses do not have problems. Most horses have people.',
    keywords: ['mistakes in horse training','why horses misbehave','horse behavior problems','human errors with horses','training mistakes beginners'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">M</span>ost horses do not have problems. Most horses have people — people with tension they are not aware of, with plans the horse can feel but not understand, with expectations that have nothing to do with the horse's reality in this moment. The horse is doing the most honest thing it can: showing you exactly what you are giving it.</p>
        <p>I say this not to criticise but to offer the most useful thing I know: if the horse is struggling, start with yourself. Not because it is always your fault — sometimes horses carry histories you did not create. But because you are the only variable in the equation you have any power to change. The horse cannot adjust itself to make the relationship easier. Only you can do that.</p>
        <p>The mistakes I see repeated most often are not dramatic. They are quiet. They are the things people do without knowing they are doing them. And once you see them clearly — once you feel them in your own body — you begin to understand why the horse is reacting the way it is. The frustration does not disappear, but it transforms into something more useful: curiosity.</p>
      `},

      { type: 'section', heading: 'Arriving Without Arriving', sub: 'The most common mistake is not being present. The horse always knows.' },

      { type: 'text', section: 'Arriving Without Arriving', html: `
        <p><span class="rd-dropcap">T</span>he most common mistake I see is people walking into the arena still living somewhere else. The argument from this morning. The meeting that went badly. The worry about money, about time, about whether they are doing any of this right. They arrive at the horse with their body but not with themselves. And the horse, reading energy with the precision of a scientific instrument, feels the absence immediately.</p>
        <p>Horses are not just reading your actions. They are reading the quality of your presence. A scattered mind produces a scattered body — tight in ways you do not notice, breathing in short pulls rather than deep draws, moving with the jerkiness of a person whose attention is elsewhere. To the horse, this is the energy of an unreliable creature. It cannot rest in your presence because your presence is not stable enough to rest in.</p>
        <p>The fix is simple to describe and difficult to do: arrive before you arrive. Spend five minutes outside the arena before you go in. Breathe deliberately. Feel your feet on the ground. Let the day fall away. You do not need to be in a perfect state of peace. You need only to be genuinely here — in this field, with this horse, in this moment. The difference this makes is startling. Horses that seemed anxious become calm. Horses that were difficult become willing. Nothing changed in the horse. Everything changed in what you brought to the encounter.</p>
      `},

      { type: 'quote', text: 'You cannot bring the noise of your day into the arena and then wonder why the horse is unsettled. The horse is reading you. Read yourself first.' },

      { type: 'section', heading: 'Skipping the Greeting', sub: 'Every session begins before you pick up the rope. The horse has already started reading.' },

      { type: 'text', section: 'Skipping the Greeting', html: `
        <p><span class="rd-dropcap">T</span>he second mistake is arriving at the horse and going immediately to work — haltering, leading, saddling, riding — without taking the time to greet the horse as if the greeting matters. It does. The horse noticed how you walked across the yard. It noticed whether you looked at it or through it. It noticed whether your hands went to the halter before you had even made eye contact.</p>
        <p>Horses in the wild do not begin interactions with task demands. They greet each other. They establish connection before they move together. When a human bypasses this completely — when the horse is simply the vehicle for the next hour of training — the horse loses something important. The signal that this person sees me as a partner is not sent. The session begins in a relational deficit that colors everything that follows.</p>
        <p>Learn to greet your horse as if it is a friend you have not seen. Let your approach be slow and intentional. Let the first contact be a moment of genuine acknowledgment — a pause, a breath, a hand offered rather than placed. Watch what the horse does in those first thirty seconds. It will tell you everything you need to know about what state it is in, what it needs today, and whether the plan you arrived with is the right plan for this particular horse on this particular day.</p>
      `},

      { type: 'quote', text: 'Every session begins the moment the horse sees you coming. What you do in those first thirty seconds sets the tone for everything that follows.' },

      { type: 'section', heading: 'Escalating Into the Problem', sub: 'More pressure is almost never the answer. It is usually what made the problem worse.' },

      { type: 'text', section: 'Escalating Into the Problem', html: `
        <p><span class="rd-dropcap">T</span>he third mistake is the one that does the most lasting damage: escalating when the horse resists. The logic seems obvious — the horse is not doing what you are asking, so you ask harder, louder, with more pressure. And sometimes the horse does comply. But what has it learned? It has learned that the human beside it becomes more threatening when it hesitates. It has learned that uncertainty leads to increased pressure. It has learned to manage its fear of the human, not to trust the human.</p>
        <p>When a horse resists, the first question should never be how do I make this clearer with more pressure. The first question should be: why is the horse not ready to do this? Is it unclear? Is it frightened? Is it in pain? Is the ask too big for where the horse is today? Most resistance dissolves completely when the cause is addressed. Most resistance that is met with escalating pressure becomes stronger resistance — or a horse that shuts down and complies from survival instinct rather than from genuine willingness.</p>
        <p>The skill of breaking things into small enough steps — asking for ten percent rather than a hundred, rewarding the try rather than insisting on the finish — changes everything about how horses respond. A horse that never feels overwhelmed by the size of the ask rarely needs to resist. It is given enough space to try, enough reward to want to continue, and enough consistency to trust that the ask will not grow unreasonably before it has managed the current one.</p>
      `},

      { type: 'quote', text: 'When the horse says no, the answer is rarely to ask louder. Most often, the answer is to ask smaller.' },

      { type: 'section', heading: 'Punishing the Try', sub: 'The horse that stops trying has learned one thing: trying is dangerous.' },

      { type: 'text', section: 'Punishing the Try', html: `
        <p><span class="rd-dropcap">T</span>he fourth and perhaps most heartbreaking mistake is failing to reward the try — the moment when the horse has understood something, made an effort, moved in the right direction — and instead continuing to push for more, immediately, without acknowledging what was just offered.</p>
        <p>A horse that tries and is ignored, or tries and is immediately asked for more without a moment of recognition, learns that trying does not change anything. The pressure does not release with effort. It only releases when the perfect answer is delivered. For a horse, this is profoundly discouraging. The willingness to try — which is the most precious thing a horse can offer — begins to diminish. The horse becomes dull, mechanical, doing just enough to make the pressure stop. The joy goes out of it.</p>
        <p>The try does not need to be the finished thing. It needs to be seen and valued. A slight softening in the jaw, a single step in the right direction, a moment of leaning toward the answer rather than away — all of these deserve acknowledgment. Release the pressure. Pause. Let the horse process. Then ask again. Build the try into the finish over many repetitions, over many sessions, with patience that communicates to the horse: I see you. I see your effort. That matters here. A horse that believes its try matters will keep trying. And a horse that keeps trying will eventually give you everything.</p>
      `},

      { type: 'quote', text: 'Reward the try before it is perfect. A horse that believes its effort is seen will offer more effort. That is the only formula that works.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 6 — How to Build Trust
  ───────────────────────────────────────────── */
  {
    label: 'Practical Article VI',
    title: 'How to Build Trust with a Horse (Step by Step Guide)',
    tagline: 'Trust is not a feeling. It is a thousand small promises kept.',
    keywords: ['how to build trust with a horse','bonding with a horse','gain horse trust'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>rust between a human and a horse is not a feeling. It is a behavior. And like all behavior, it is built through repetition — through a thousand small moments where you did what you said you would, where you did not punish what you could not understand, where you stayed when it would have been easier to leave.</p>
        <p>The first step is deceptively simple: stop trying to earn trust and start being trustworthy. Those are not the same thing. Trying to earn trust often looks like pressure — pushing the horse to respond, to come closer, to accept what it is not yet ready to accept, because you want to see the evidence of the relationship today. Being trustworthy requires only one thing: consistency. The horse that sees the same person every single time, no matter how the session is going, learns that this person is safe. And safety is the only foundation on which anything else can be built.</p>
        <p>Trust is built in layers. The first layer is physical safety — the horse learning that you will not hurt it. The second is emotional safety — the horse learning that you will not overwhelm it. The third is relational safety — the horse learning that what happens between you is fair, and that its communication will be heard. Each layer takes time. Each layer must be genuinely established before the next one is possible. You cannot rush this. The horse knows when you are trying to shortcut it. And every shortcut costs more time than it saves.</p>
      `},

      { type: 'section', heading: 'Step One: Be Worth Approaching', sub: 'Before the horse will come to you, you must become a place worth coming to.' },

      { type: 'text', section: 'Step One: Be Worth Approaching', html: `
        <p><span class="rd-dropcap">T</span>he first concrete step is learning to stand in a way that is genuinely inviting rather than merely nonthreatening. These are different. A human standing perfectly still can still radiate intensity, urgency, or desire — all of which a horse reads as pressure. The horse you are trying to connect with feels your wanting it as a form of demand. It is not wrong to feel that. It simply is not helping.</p>
        <p>Stand sideways rather than facing the horse directly. Drop your eyes slightly — not all the way to the ground, but breaking the forward-focused gaze that predators use. Breathe slowly. Deliberately. Let your weight settle into your feet. Exhale, and let your shoulders drop with the exhale. You are not performing relaxation. You are practising it, genuinely, in your own body first.</p>
        <p>Do nothing. Ask for nothing. Want nothing for this moment. Simply be a quiet presence in the horse's space. Wait. The horse will eventually turn to look at you properly, will consider you, will — if you have been consistent enough over enough sessions — decide to walk toward you. When it does, let it come. Do not lean forward to meet it. Let it close the last distance itself. The horse that walks across the field to you has made a choice. That choice is the first real brick in the wall of trust.</p>
      `},

      { type: 'quote', text: 'The horse that comes to you because you stopped demanding that it should — that first step is worth a hundred training sessions.' },

      { type: 'section', heading: 'Step Two: Make Every Interaction Honest', sub: 'Horses cannot be deceived. The only thing that works is the real thing.' },

      { type: 'text', section: 'Step Two: Make Every Interaction Honest', html: `
        <p><span class="rd-dropcap">O</span>nce the horse is approaching willingly, the work becomes about the quality of what happens when it is near you. Every interaction either adds to the trust account or withdraws from it. The goal is to make the vast majority of interactions deposits — moments where the horse discovers that being with you leads to comfort, to release, to genuine ease.</p>
        <p>When you handle the horse, be clear in what you are doing. Do not fumble with equipment in ways that create sudden unpredictable movements. Do not grab. Move slowly through sensitive areas — ears, legs, belly — and watch for the horse's response. If it braces, pause. Wait for it to release before continuing. You are teaching it that it does not need to brace against you, because you will always wait for the release. This takes longer than just pushing through. It also teaches the horse something that no amount of forcing will ever teach: that its communication changes what happens.</p>
        <p>End every session well. Not every session will go perfectly — some days the horse is unsettled, some days you are not at your best. But make the effort to end on a note of softness. A moment of stillness. A breath together. The last thing that happens in a session is what the horse carries into the next one. If the last thing is pressure and frustration, that is what greets you at the gate the next morning. If the last thing is release and quiet, that is what the horse remembers you by.</p>
      `},

      { type: 'quote', text: 'The horse does not remember what you trained today. It remembers how it felt when you left. Make that worth remembering.' },

      { type: 'section', heading: 'Step Three: Be the Same Person Every Time', sub: 'Predictability is not boring to a horse. It is the most reassuring thing in the world.' },

      { type: 'text', section: 'Step Three: Be the Same Person Every Time', html: `
        <p><span class="rd-dropcap">T</span>he deepest trust is built not through any single technique but through the accumulated experience of being the same — reliably, consistently, without exception. The horse that knows who it is dealing with every time you approach can relax into the relationship. The horse that never quite knows which version of you is coming cannot relax, no matter how kind you generally are. Unpredictability is, to a prey animal, one of the most threatening qualities a creature can have.</p>
        <p>This does not mean being mechanical or without feeling. It means that your fundamental quality — your patience, your honesty, your willingness to listen — is stable regardless of the circumstances. You can have bad days. The horse understands that your energy changes. What it needs to know is that your core intent toward it never wavers. You are always safe. You are always fair. You will always listen. That stability, sustained over time, is what transforms a working relationship into genuine partnership.</p>
        <p>Trust, once built this way, is extraordinarily durable. A horse that has been given real trust over real time will carry it through hard days, through mistakes, through the inevitable moments when you ask for too much too soon and have to go back. It will give you benefit of the doubt because you have earned it in the thousands of moments when you gave it benefit of the doubt. This is the compound interest of patience. It accrues slowly, invisibly. And then one day you realise that the horse is with you — really with you — in a way that no shortcut could ever have produced.</p>
      `},

      { type: 'quote', text: 'Be the same person every time. In the end, that is the whole of it. Consistent, honest, patient. The horse will do the rest.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 7 — Why Your Horse Does Not Listen
  ───────────────────────────────────────────── */
  {
    label: 'Practical Article VII',
    title: 'Why Your Horse Does Not Listen to You (Real Reasons Explained)',
    tagline: 'A horse that will not listen is not defying you. It is talking to you.',
    keywords: ['horse not listening','why horse ignores commands','horse training problems'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">W</span>hen a horse stops listening, the natural human response is to push harder, ask louder, repeat with more force. This is the most natural thing in the world to do. And it is almost always wrong.</p>
        <p>A horse that is not listening is not defying you. It is telling you something. It is saying: I do not understand. Or: I am not ready. Or: I am in pain. Or, most often: I do not trust that what happens next will be safe for me. These are not acts of stubbornness. They are honest messages from an animal that cannot use words.</p>
        <p>In eleven years with horses, I have found three real reasons why horses stop responding. The first is clarity — the horse does not understand what is being asked. The second is physical — there is pain or discomfort. The third is relational — there is not enough trust to try something uncertain. When you stop asking how do I make the horse listen, and start asking which of these three things is happening right now, you stop fighting and start solving. And when you solve the real problem, the listening always returns.</p>
      `},

      { type: 'section', heading: 'The Clarity Problem', sub: 'You cannot hear words in a language you do not speak. Make sure you are actually communicating.' },

      { type: 'text', section: 'The Clarity Problem', html: `
        <p><span class="rd-dropcap">T</span>he most common reason a horse does not respond is simply that it does not understand what is being asked. This seems obvious. Yet most people, when their horse does not respond to a signal, repeat the exact same signal with more force. They have not asked themselves the honest question: have I actually taught this clearly?</p>
        <p>Horses learn through the release of pressure, not through the application of it. When you apply a signal and the horse offers any movement — any step, any shift, any softening — toward the answer you want, releasing the pressure in that moment teaches the horse that the movement was correct. If you continue the pressure through the movement, the horse learns nothing except that pressure is continuous. It does not understand what made the pressure stop because the pressure did not stop at the right moment.</p>
        <p>Before deciding a horse is being unresponsive, ask yourself: have I broken this request down into small enough steps? Have I released clearly at exactly the right moment? Have I repeated this enough times, with enough consistency, for the horse to have learned the pattern? Often the answer to at least one of these questions is no. Go back to the beginning. Ask smaller. Release clearer. Be more consistent. The horse that seemed to be ignoring you will often surprise you with its attention and effort when the ask becomes genuinely understandable.</p>
      `},

      { type: 'quote', text: 'If the horse is not responding, the first suspect is never the horse. It is the clarity of what you are asking.' },

      { type: 'section', heading: 'The Pain Problem', sub: 'A horse in pain that cannot comply is not being difficult. It is being honest.' },

      { type: 'text', section: 'The Pain Problem', html: `
        <p><span class="rd-dropcap">P</span>ain is a far more common reason for unresponsiveness in horses than most riders want to accept. Because horses are stoic animals — prey animals that have evolved to conceal weakness — they often carry significant discomfort before it becomes visible in the obvious ways. By the time a horse is displaying behavioral resistance, it may have been communicating pain in subtler ways for weeks or months that went unnoticed.</p>
        <p>The horse that was previously responsive and suddenly becomes resistant, the horse that flinches when girthed, the horse that is stiff on one rein but not the other, the horse whose work becomes tight and labored rather than free and swinging — these are horses that may be telling you about a physical problem rather than a training problem. Before escalating training pressure, before labeling a horse as difficult or lazy, it is worth asking: has something changed physically? When was this horse last properly assessed for pain?</p>
        <p>The back, the hocks, the teeth, the feet, the saddle fit — all of these are common sources of discomfort that translate directly into apparent training problems. A horse that will not accept contact was often a horse in jaw or neck pain. A horse that rushes downhill was often a horse with uncomfortable hocks. A horse that bucks under saddle is almost always a horse telling you something hurts. The behavior is not the problem. It is the message. And the message, if you are willing to hear it, will point you directly to what needs to be addressed.</p>
      `},

      { type: 'quote', text: 'Before you train the resistance out, make sure the resistance is not the horse asking for help.' },

      { type: 'section', heading: 'The Trust Problem', sub: 'A horse that does not have enough trust to try is a horse that has learned caution from experience.' },

      { type: 'text', section: 'The Trust Problem', html: `
        <p><span class="rd-dropcap">T</span>he third reason horses stop listening is the one that requires the most honest self-reflection: there is not enough trust in the relationship for the horse to try something uncertain. This horse knows what happens when it tries and gets it wrong. It has learned, through experience, that mistakes bring pressure, confusion, or punishment. It is not being stubborn. It is being careful with the only body it has.</p>
        <p>This horse needs less training and more relationship. It needs sessions that are not about asking for new things, but about confirming old ones — things it already knows how to do well, asked in a way that produces ease and reward rather than pressure and correction. It needs to rebuild its confidence in the act of trying, to rediscover that effort is safe, that mistakes do not cost much, that the human beside it is genuinely on its side.</p>
        <p>This takes time, and it takes a willingness to set aside the training agenda for as long as the relationship needs. Some horses need weeks. Some need months. But the investment is always returned. The horse that rebuilds its trust in you does not just begin listening again — it begins listening in a way it never has before. With genuine willingness. With something in its eye that was not there before. That is not just a better-trained horse. That is a different kind of partnership entirely.</p>
      `},

      { type: 'quote', text: 'A horse that stops trusting enough to try is not a problem to be fixed. It is an invitation to become a person worthy of being trusted.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 8 — How to Calm a Nervous Horse
  ───────────────────────────────────────────── */
  {
    label: 'Practical Article VIII',
    title: 'How to Calm a Nervous or Anxious Horse',
    tagline: 'You cannot fight a nervous system. You can only offer it something steadier.',
    keywords: ['how to calm a horse','anxious horse behavior','nervous horse training'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">Y</span>ou cannot calm a horse by fighting its nervous system. The moment you escalate — raising your voice, tightening your grip, moving faster — you confirm what the horse already feared. Something dangerous is happening. The proof is right there in the person standing beside it.</p>
        <p>To calm an anxious horse, you must first calm yourself. In practice, with a five hundred kilogram animal on the edge of panic, this is one of the hardest things a human being can do. But it is the only thing that works. Horses do not respond to reassuring words. They respond to calm bodies. Your breath rate, your muscle tension, the quality of your stillness — these are the real messages you are sending. The words are just noise.</p>
        <p>I have stood beside horses on the verge of complete panic. I have felt the electric charge of a nervous system at its limit. In those moments, there is only one thing I know to do: breathe out. Actively, deliberately, with full awareness. When you exhale, your muscles soften, your heart rate drops, your body chemistry changes. The horse feels this. Not through a conscious decision on its part, but through the same co-regulation that allowed prey animals to calibrate their fear responses using the calm of the herd. One genuine breath from a genuinely calm body communicates more than an hour of gentle talk.</p>
      `},

      { type: 'section', heading: 'Understanding Anxiety in Horses', sub: 'Anxiety is not a behavior. It is a state. And states must be addressed before behavior can change.' },

      { type: 'text', section: 'Understanding Anxiety in Horses', html: `
        <p><span class="rd-dropcap">H</span>orse anxiety comes in two forms, and they require different responses. The first is situational anxiety — triggered by something specific in the environment. A new place. An unusual object. A change in routine. The second is chronic anxiety — a baseline state of tension that the horse carries into every situation, a nervous system that has been living in a state of low-level alert for so long that it has become the default setting.</p>
        <p>Situational anxiety is easier to address. The horse has a clear trigger, and if you can work with the horse and that trigger patiently and consistently — allowing the horse to approach and retreat, never forcing, always acknowledging the fear — you can help the horse build a new memory around that thing. A new association. Over time, with enough repetitions, the horse learns that the thing is safe. The anxiety diminishes. It may never completely disappear — a very strong fear memory can always be retriggered — but it becomes manageable.</p>
        <p>Chronic anxiety is the harder conversation. It usually has roots in the horse's history — in isolation, in training methods that used too much pressure and too little acknowledgment, in environments that never allowed genuine rest. The horse that carries chronic anxiety needs long, slow, patient work that has nothing to do with training in the conventional sense. It needs consistent routine. It needs a living situation that meets its social and behavioral needs. It needs sessions that are entirely about building a sense of safety rather than acquiring new skills. These horses often have the most profound transformations when given the right conditions. They were not born nervous. They learned it. And a horse that learned anxiety can, with the right support, unlearn it.</p>
      `},

      { type: 'quote', text: 'Chronic anxiety in a horse is not a personality trait. It is a history. Change the history, and you begin to change the horse.' },

      { type: 'section', heading: 'The Practical Techniques', sub: 'Simple tools that work — not to suppress fear, but to give the nervous system something steady to attach to.' },

      { type: 'text', section: 'The Practical Techniques', html: `
        <p><span class="rd-dropcap">T</span>he most powerful tool available to calm an anxious horse is also the most underused: stillness. Not a frozen, tense stillness, but genuine, warm, grounded stillness. The kind that says: I am not going anywhere. Nothing is required right now. This is simply a moment of being.</p>
        <p>When a horse is escalating, move less, not more. Reduce the stimulation in the environment if possible. Soften your body from the inside out — deliberately releasing tension in your jaw, your shoulders, your hands. Breathe in a rhythm that is slower than the horse's current rhythm. Do not demand anything. Simply occupy the space beside the horse with a quality of presence that is genuinely relaxed. Over time — sometimes very quickly, sometimes after many minutes — the horse's nervous system will begin to match yours. This is not training. It is co-regulation. It is the same mechanism that allows a frightened foal to calm when it presses against its mother's side.</p>
        <p>Movement can also calm an anxious horse if used correctly. Not the frantic movement of a horse forced through its anxiety, but deliberate, rhythmic, low-demand movement — walking on a loose lead, being given the chance to move its feet and release some of the accumulated nervous energy without being pushed toward the thing it fears. A horse that can move is a horse that does not need to explode. Movement is the nervous system doing what it was built to do: responding to perceived threat by running. Give it a safe, directed outlet and it often resolves naturally.</p>
        <p>Learn the points where touch calms this particular horse. For many horses, slow, firm strokes along the neck — particularly at the crest — activate the parasympathetic nervous system. For others, touch in anxiety escalates. Know your horse. Know what it finds grounding and what it finds stimulating. Respond to what is true for this horse today, not to a general rule about what should work.</p>
      `},

      { type: 'quote', text: 'Give the anxious horse something steadier than its own fear to attach to. That is all it is looking for. Become that thing.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 9 — First Time Handling a Horse
  ───────────────────────────────────────────── */
  {
    label: 'Practical Article IX',
    title: 'First Time Handling a Horse: What You Must Know',
    tagline: 'There is no second first meeting. What you bring to that moment, the horse will remember.',
    keywords: ['how to handle a horse for beginners','first time horse tips','horse safety basics'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>he first impression you make on a horse is written in its memory with a permanence no later session can fully erase. There is no second first meeting. Everything you bring — your speed, your energy, the tension in your hands, the quality of your breath — the horse will carry forward into every interaction that follows.</p>
        <p>This is not meant to frighten you. It is meant to give you the most useful gift I know: the understanding that the quality of the first meeting matters enormously, and that getting it right is not about having skill or experience. It is about slowing down, being genuinely present, and bringing a quality of respect to the encounter that the horse can feel.</p>
        <p>I have watched people with thirty years of experience make terrible first introductions, and I have watched complete beginners, properly prepared and genuinely quiet in themselves, have extraordinary first meetings with horses. The difference was never about experience. It was always about presence. About the person leaving their hurry and their plans outside the gate, and walking in as simply a human being, curious and calm, with nothing to prove.</p>
      `},

      { type: 'section', heading: 'How to Approach', sub: 'The approach is everything. A horse decides what you are before you are ten feet away.' },

      { type: 'text', section: 'How to Approach', html: `
        <p><span class="rd-dropcap">A</span>pproach is the single most important skill in working with horses, and it is the one most beginners are never taught. The way you walk toward a horse communicates your intent, your emotional state, and your understanding of what the horse is — long before your hands ever reach it.</p>
        <p>Never walk straight at a horse from the front with direct eye contact. This is predator behavior. It is the movement pattern of something that is hunting — direct, purposeful, focused. Every cell in the horse's body reads this signal. Walk at an angle. Let your approach be curved, not straight. Soften your gaze — not to the ground, but without the intensity of a locked focus. Move at a pace that is slower than your habitual pace. Not creeping slowly, which creates its own tension. Simply — slower. Deliberate. As if you have nowhere more important to be than exactly where you are right now.</p>
        <p>Give the horse time to see you coming. Horses have poor depth perception directly in front of them — approach from the side, toward the shoulder, which allows the horse to see you with one eye and assess you properly. Speak softly as you approach. Not necessarily words of any kind, but the quality of a voice that is unhurried. Let the horse turn toward you and acknowledge you before you close the final distance. And when you are close enough, pause. Let the horse come the last step — even if it is just a nose-stretch in your direction. That small offering of choice matters.</p>
      `},

      { type: 'quote', text: 'Walk toward a horse the way you would approach a sleeping child — with the understanding that how you arrive is already a conversation.' },

      { type: 'section', heading: 'Safety Fundamentals', sub: 'Safety around horses is not about rules. It is about understanding how horses think and move.' },

      { type: 'text', section: 'Safety Fundamentals', html: `
        <p><span class="rd-dropcap">S</span>afety around horses is not a list of rules to memorize. It is a way of moving and thinking that comes from understanding the horse's nature. When you understand why horses react the way they do, the "rules" become intuitive rather than imposed.</p>
        <p>Stay out of the blind spots. Directly in front of the nose and directly behind the hindquarters are areas the horse cannot see. A touch arriving from a blind spot is, to the horse's nervous system, a touch arriving from nowhere — and the body responds with the violence of a startled prey animal before the mind has any say in the matter. Always let the horse know where you are. Touch starts on the neck or shoulder, where the horse can see you, and moves from there. If you must move behind the horse, stay very close to the body — within arm's reach of the hindquarters — so that any kick loses most of its force before it reaches you. Or stay far enough back that you are out of range entirely.</p>
        <p>Move predictably. Do not make sudden movements. Do not raise your arms quickly. Do not drop things near the horse without warning. The horse's fear response fires faster than thought — give it no reason to fire. When you need to do something that might startle, narrate it first with your energy — slow down even more, breathe deliberately, let your body tell the horse before your hands do that something is about to happen.</p>
        <p>Never wrap a lead rope around your hand or wrist. If the horse spooks and moves sharply, a rope around your hand can break bones or drag you off your feet. Hold the rope in loose coils. Learn to let go before the horse pulls you. The horse will not go far. Your hand and your relationship are more important than a brief chase around the yard.</p>
      `},

      { type: 'quote', text: 'Safety with horses is not a set of rules imposed from outside. It is the natural result of understanding the animal you are with.' },

      { type: 'section', heading: 'The First Touch', sub: 'Your hands are the first language you speak with a horse. Make sure they say something worth hearing.' },

      { type: 'text', section: 'The First Touch', html: `
        <p><span class="rd-dropcap">T</span>he first time your hand touches a horse, it is a statement about everything that will follow. A hand that is tense communicates tension. A hand that grabs communicates urgency. A hand that is heavy and unresponsive communicates that it is not listening. A hand that is soft, warm, and genuinely alive — that is curious and present and responsive to what it finds — communicates something the horse has not felt from every human. It communicates that this person is paying attention.</p>
        <p>Touch the neck first. The neck and shoulder are the areas where horses make physical contact with each other — mutual grooming, comfort, connection. They are the areas most associated with safety in the horse's experience. Begin there. A slow, confident stroke along the neck — not patting, which horses find less comfortable than humans imagine. A long, slow stroke, following the direction of the hair, with a pressure that is firm enough to be clear but not heavy enough to be a demand.</p>
        <p>Watch the response. Does the horse soften toward the touch? Does the head lower slightly? Does a sigh escape? These are invitations to continue. Does the horse brace, move away, or tighten? These are communications that the touch is in the wrong place, at the wrong time, with the wrong quality. Listen to the response and adjust. The hand that listens to the horse's response is the hand the horse will learn to trust. And a horse that trusts your hands will eventually trust your direction. That is not a small thing. That is everything.</p>
      `},

      { type: 'quote', text: 'The first touch you give a horse is not about training. It is about introduction. And a good introduction, in any language, is offered rather than imposed.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 10 — Signs of Trust
  ───────────────────────────────────────────── */
  {
    label: 'Practical Article X',
    title: 'Signs Your Horse Trusts You (And Signs It Does Not)',
    tagline: 'Trust in a horse is not invisible. It is a behavior. And behavior can be read.',
    keywords: ['signs a horse trusts you','horse bonding signs','horse trust behavior'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">A</span> horse's trust is not invisible. It is not a feeling you guess at or evaluate in hindsight. Trust, in a horse, is a behavior. And behavior is visible, readable, and honest. When you know what to look for, you will never again wonder whether what you have with your horse is real connection or simply a working arrangement that is holding together for now.</p>
        <p>I want to be precise about this, because the equestrian world is full of people who believe they have their horse's trust when what they actually have is their horse's compliance. These are not the same thing. A horse that complies is a horse that has learned the cost of not complying. A horse that trusts is a horse that has chosen the relationship because it finds genuine safety, ease, and something like pleasure in it. The difference is visible in every session, if you know where to look.</p>
        <p>The signs of real trust are both subtle and unmistakable. Once you have seen them — truly seen them, in a horse that genuinely trusts the person with it — you will recognize their absence everywhere else. And you will not be able to mistake the absence for presence ever again.</p>
      `},

      { type: 'section', heading: 'The Clearest Signs of Real Trust', sub: 'These behaviors are not performed. They cannot be. They arise only from genuine safety.' },

      { type: 'text', section: 'The Clearest Signs of Real Trust', html: `
        <p><span class="rd-dropcap">T</span>he clearest sign of trust is voluntary approach. A horse that trusts you does not need to be caught. When you enter the field or the stable, it comes to you — not for food, but because your presence is comfortable and wanted. This is the horse saying clearly: I choose to be here with you when I could be anywhere else. Nothing I know of in the human-horse relationship is more unambiguous than this. It is the horse voting with its feet.</p>
        <p>The second sign is the quality of relaxation in your presence. A horse that trusts you will lower its head when you are near — a gesture of complete physical relaxation from an animal whose survival depends on keeping its head up. The lowered head is a deep exhale. It means: I am safe here. You are enough. A horse that keeps its head high in your presence is not comfortable in your presence, no matter how technically correct your handling may be.</p>
        <p>The third sign is the quality of the breathing. A horse that feels safe breathes slowly and deeply, sometimes with long, audible sighs. A horse under stress breathes quickly and shallowly. The breathing is not something the horse consciously controls. It is a direct readout of the state of the nervous system. Sit quietly beside a horse that trusts you and listen to its breath settle. It is one of the most peaceful sounds in the world.</p>
        <p>The fourth sign is physical softness. A horse that trusts you will lean into your touch rather than away from it. It will stand quietly without fidgeting when you work around it. It will allow you to handle its feet, its ears, its face without brace or resistance. This softness is not the stillness of a horse that has given up fighting. It is the softness of a horse that genuinely does not feel the need to protect itself from you.</p>
      `},

      { type: 'quote', text: 'The horse that lowers its head as you approach is not being polite. It is making itself vulnerable to you. Understand what that costs a prey animal, and you will understand what trust means.' },

      { type: 'section', heading: 'Signs That Trust Is Missing', sub: 'These are not bad horses. They are horses that have not yet been given enough reason to trust.' },

      { type: 'text', section: 'Signs That Trust Is Missing', html: `
        <p><span class="rd-dropcap">T</span>he absence of trust shows just as clearly as its presence. The horse that moves away when you enter the field — consistently, not just today when something spooked it — is a horse that has not found your approach to be something worth staying for. The horse that is difficult to catch is often described as naughty or cunning. It is neither. It is a horse that has learned that being caught leads to experiences it would rather avoid.</p>
        <p>The horse that is tense throughout a session — not because the work is difficult, but as a baseline state whenever you are present — is a horse whose nervous system has not found yours to be a source of regulation. It is still doing all the work of managing its own anxiety alone, without being able to use your calm as a reference point. This horse is not bad. It is isolated inside its own vigilance, doing its best to stay safe in a situation it does not feel genuinely safe in.</p>
        <p>The horse that is compliant but disconnected deserves particular attention. It does what is asked. It does not resist. But there is nothing in its eye — it is somewhere else entirely, going through the motions. This horse has learned that cooperation is the path of least resistance. It has not learned that cooperation leads to genuine ease and reward. This is not a trustworthy partnership. It is a managed arrangement. And while it may look successful from the outside, it is not what horses are capable of offering when they are truly safe.</p>
        <p>None of these signs are verdicts. They are information. They tell you where the relationship currently is, not where it has to stay. Every horse that shows these signs of missing trust has the capacity for real trust — it has simply not yet been given enough of the right experiences to build it. That is fixable. It requires patience, consistency, and honesty. But it is always fixable.</p>
      `},

      { type: 'quote', text: 'A horse that does not trust you yet is not a failure. It is a horse waiting for enough evidence to decide that you are worth trusting. Give it that evidence.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 11 — What Horses Teach Us
  ───────────────────────────────────────────── */
  {
    label: 'Unique Edge Article XI',
    title: 'What Horses Teach Us About Human Behavior',
    tagline: 'Spend enough time with horses and you will learn more about yourself than any mirror can show.',
    keywords: ['what horses teach humans','horse psychology and humans','lessons from horses'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">A</span> horse has no ego. It has no agenda beyond what is real right now. It cannot pretend. It cannot perform. It can only respond to what is genuinely present. Spend enough time with horses and you will learn more about your real self — not the one you show the world — than any other method of self-understanding can offer.</p>
        <p>What horses teach us above all is that our inner state is not private. We walk through the world believing we can perform competence while feeling inadequate, project calm while being anxious, present patience while carrying resentment. Horses expose this belief as the comfortable fiction it has always been.</p>
        <p>The horse does not see the performance. It sees what is underneath. It reads the stress in your body, the tiny tensions in your muscles, the quality of your breath. Everything you have learned to hide from other humans, the horse has already read. And then it shows you — honestly, without cruelty, without judgment — exactly who walked in. This is a service of extraordinary value, if you have the courage to receive it.</p>
      `},

      { type: 'section', heading: 'The Mirror You Cannot Lie To', sub: 'The horse reflects back not who you think you are, but who you actually are in this moment.' },

      { type: 'text', section: 'The Mirror You Cannot Lie To', html: `
        <p><span class="rd-dropcap">I</span> have watched people have revelations beside horses that they had been avoiding for years in other contexts. The person who insists they are patient until the horse reveals, without any accusation, that they are not. The person who believes they are calm until the horse shows them exactly how much they are holding. The person who thinks they are present until the horse demonstrates, by its inability to settle, that they are anywhere but here.</p>
        <p>These revelations are not comfortable. They are not meant to be. But they are profoundly useful. The horse cannot be convinced to see what is not there. It cannot be charmed or reasoned with or persuaded to overlook what it is reading. It simply responds to what is actually present. And this makes it the most honest feedback mechanism most of us will ever encounter.</p>
        <p>The people who grow most from their time with horses are the ones who learn to ask: what is the horse showing me about myself right now? Not what is wrong with the horse. What is the horse revealing about what I am bringing. This shift — from judgment of the horse to curiosity about oneself — is the moment horsemanship becomes something larger than a skill. It becomes a genuine practice of self-knowledge.</p>
      `},

      { type: 'quote', text: 'The horse is the most honest teacher you will ever have. It cannot be lied to, bribed, or manipulated. It only responds to what is true.' },

      { type: 'section', heading: 'What Horses Teach About Presence', sub: 'The horse lives where most humans only visit. Fully inside the moment.' },

      { type: 'text', section: 'What Horses Teach About Presence', html: `
        <p><span class="rd-dropcap">H</span>orses exist in a quality of presence that most humans have lost contact with. Not the presence achieved through meditation or practice or effort, but the effortless, complete presence of an animal that has no capacity for being anywhere but here. The horse is not thinking about what happened yesterday. It is not planning tomorrow. It is this breath, this movement, this moment of connection. Fully and completely, without remainder.</p>
        <p>Working with horses requires a degree of presence that most people find genuinely difficult at first. The horse will not meet you in your thoughts. It cannot find you there. It can only find you in your body, in your breath, in the quality of your physical being in this moment. To reach a horse, you must come all the way into the present. And for most people, this is an extraordinary demand — to leave behind the constant background noise of memory and planning and worry and simply be, without agenda, in a field with an animal that is doing the same thing effortlessly.</p>
        <p>What horses give back, when you manage to arrive fully, is a quality of aliveness that is difficult to find anywhere else. The present moment, shared with a creature that is genuinely in it, becomes vivid in a way that the distracted life rarely is. Colors are brighter. Sound is clearer. Time moves differently. This is not sentimentality. This is what it feels like to be genuinely awake. Horses are simply very good at requiring it of you.</p>
      `},

      { type: 'quote', text: 'The horse does not ask you to be wise. It asks you to be here. And here, when you finally arrive, turns out to be enough.' },

      { type: 'section', heading: 'What Horses Teach About Relationship', sub: 'Every horse relationship is a practice in giving without demanding a return.' },

      { type: 'text', section: 'What Horses Teach About Relationship', html: `
        <p><span class="rd-dropcap">T</span>he deepest thing horses teach us is something about the nature of relationship itself. A relationship that is worth anything is not built on what one party can extract from the other. It is built on genuine attention, genuine care, and a willingness to be affected by the other's experience. Horses demand this not through words but through the simple fact of what they are: creatures of extraordinary sensitivity who respond with complete honesty to what they are given.</p>
        <p>If you approach a horse with the goal of getting something from it — a perfect session, an obedient horse, a result that proves your skill — the horse feels the agenda. It may comply. But it will not open. It will not offer the additional quality that genuine trust makes possible. The best horsemanship, in my experience, comes from people who have learned to enter the relationship without an agenda — to be curious about the horse, genuinely interested in its inner life, willing to be surprised and delighted and sometimes humbled by what they find.</p>
        <p>This is not a skill you can practise only with horses. It is a way of being in relationships. A quality of attention and generosity and genuine curiosity about the other's experience. Horses teach it to us because they make it impossible to fake. But what they are teaching is not horsemanship. It is something larger. It is how to be genuinely present with another living being. And that, practised with a horse for long enough, tends to change the way you are present with every living being in your life.</p>
      `},

      { type: 'quote', text: 'Spend enough time listening to horses and you will find yourself listening differently to everything else. They teach you to pay attention. And attention, given freely, is the most generous thing one being can offer another.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 12 — Presence and Intention
  ───────────────────────────────────────────── */
  {
    label: 'Unique Edge Article XII',
    title: 'To Feel What a Horse Feels: Understanding Presence and Intention',
    tagline: 'Horses live where most humans only visit — fully inside the present moment.',
    keywords: ['horse sensitivity to humans','horse energy and intention','connection with horses'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">P</span>resence is not a concept. It is not a state you can think your way into. It is a physical reality — the quality of being fully here, fully alive, fully available to what is happening in this exact moment. Horses live in presence permanently. It is not something they achieve. It is simply what they are.</p>
        <p>Most humans have lost the ability to do this. We are almost never fully here. We are partly in the meeting we just left, partly in the obligation ahead, partly in a conversation replaying itself on the inside of our skull. We bring all of this into the arena. The horse feels every bit of it. Not as metaphor. As real, physical, readable information.</p>
        <p>To understand what a horse feels in your presence, try this: stand still beside it, close your eyes, and feel your own body. Feel your breath, your heartbeat, the tensions in your face, your jaw, your hands. Feel where you are holding. Now ask yourself honestly — if your survival depended on reading energy accurately, what would you make of the creature standing beside you?</p>
      `},

      { type: 'section', heading: 'Intention as a Physical Force', sub: 'Your intention broadcasts before your action. The horse has already received the message.' },

      { type: 'text', section: 'Intention as a Physical Force', html: `
        <p><span class="rd-dropcap">I</span>ntention is not private. Every time you form a plan to move, to stop, to turn, to ask for something, your body begins preparing itself before the conscious action occurs. Muscles engage subtly. Weight shifts infinitesimally. Breath changes pattern. The gaze adjusts. To a creature of the horse's sensitivity, these micro-signals are as readable as speech.</p>
        <p>This is why skilled horsemen often appear to their horses to be almost telepathic — the horse responds before the visible signal has been given. What is actually happening is much simpler and much more profound: the horse is reading the intention in the body before the body has completed the action. The physical preparation is the signal. The rein, the leg, the weight — these are confirmations, not initiations.</p>
        <p>Once you understand this, the implications for how you train and how you handle horses become significant. Clarity of intention — knowing clearly in your own body what you want to happen next, without hesitation or doubt — communicates to the horse before any technical aid does. Confusion in your intention communicates confusion. Conflict between what you want and what you fear produces a horse that feels the conflict and does not know which message to answer.</p>
        <p>The experienced rider who achieves effortless connection with a horse is often someone who has, over years, developed extraordinary clarity of intention. Their inner picture of what they want to happen is so clear, so fully inhabited by the body, that the horse finds the signal before the signal has been consciously sent. This is not magic. It is the logical result of presence — of being so fully in the moment with the horse that the two bodies begin to speak the same language without translation.</p>
      `},

      { type: 'quote', text: 'Before your hand moves, your mind has already moved. The horse felt it first. Your job is to make sure that what it felt was worth feeling.' },

      { type: 'section', heading: 'Becoming a Place of Rest', sub: 'The greatest skill is not asking well. It is becoming someone the horse chooses to rest beside.' },

      { type: 'text', section: 'Becoming a Place of Rest', html: `
        <p><span class="rd-dropcap">T</span>here is a quality of presence that the very best horsemen and horsewomen develop over years that I can only describe as becoming a place of rest. The horse, in their presence, does not merely tolerate proximity. It actively seeks it. It turns toward them when something is frightening. It lowers its head and slows its breath simply because they have walked into the yard. This is presence used as a tool — not as manipulation, but as genuine offering.</p>
        <p>Becoming a place of rest is not about being passive or without direction. It is about having a quality of inner stillness that remains stable regardless of what the horse is doing. When the horse escalates, you do not escalate. When the horse fears, you do not fear. When the horse is confused, you do not become urgent. You remain — steadily, warmly, without demand — the most stable thing in the horse's environment. And over time, the horse learns to borrow your stability. To use your calm as evidence that the world is manageable.</p>
        <p>This quality cannot be performed. It must be real. You either have genuine stillness available to you in that moment or you do not. And if you do not, no technique will compensate. This is why so much of good horsemanship is actually inner work — the slow, difficult, deeply worthwhile work of learning to regulate your own nervous system. Not for abstract reasons. For the very practical reason that the horse will respond to your state before it responds to anything else, and everything you want to accomplish depends on that foundation being solid.</p>
      `},

      { type: 'quote', text: 'The horse does not ask you to be perfect. It asks you to be present. And presence, offered genuinely and consistently, is everything.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 13 — Horses React to Your Mind
  ───────────────────────────────────────────── */
  {
    label: 'Unique Edge Article XIII',
    title: 'Why Horses React to Your Mind and Not Just Your Actions',
    tagline: 'Before your hand moves, your mind has already moved. The horse felt it first.',
    keywords: ['do horses sense emotions','horse reaction to humans','horse awareness'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">B</span>efore your hand moves, your mind has already moved. Before your leg gives the signal, your intention has already broadcast itself through every muscle, every small shift of weight in your body. A horse does not wait for the action. It reads the intention. By the time you have done something, the horse has already felt it coming.</p>
        <p>This is not telepathy. This is the horse's extraordinary ability to read the tiny signals of a human body with a precision our conscious mind cannot match. When you think about stopping, your body prepares to stop — slightly, invisibly. The horse registers it. When you think about turning, your gaze shifts, your weight shifts. The horse is already turning.</p>
        <p>This means that the quality of your thoughts — the clarity of your intentions, the absence of doubt and inner conflict — is not a philosophical nicety but a real and practical factor in every session you have with a horse. The horse that seems to read your mind is simply reading your body with more accuracy than you are reading it yourself. And once you understand that, the question of how to work better with horses becomes a question of how to think and feel more clearly inside your own body.</p>
      `},

      { type: 'section', heading: 'The Science of Subtle Signals', sub: 'The horse reads what the body says before the body knows it is saying it.' },

      { type: 'text', section: 'The Science of Subtle Signals', html: `
        <p><span class="rd-dropcap">T</span>he phenomenon of horses responding to human intention has a long history in both horsemanship practice and scientific research. The most famous historical example is Clever Hans — a horse in early twentieth century Germany that appeared to perform complex arithmetic, tapping out answers with its hoof. Careful investigation revealed something more interesting than a calculating horse: Hans was reading infinitesimal postural signals from the people around him, responding to the almost imperceptible release of tension in their bodies when he reached the correct answer.</p>
        <p>What seemed like a trick was actually a profound demonstration of the horse's sensitivity to human body language at a level the humans themselves were completely unaware of. They did not know they were signalling. Hans did not know they were signalling. But the signal was there, real and readable, and the horse read it with extraordinary consistency. This is not a party trick. It is a description of how horses navigate their relationship with humans in every moment of every day.</p>
        <p>Your body does not keep secrets from a horse. The physiological changes that accompany mental states — muscle tension, breath pattern, heart rate, the direction of gaze and attention — are all changes the horse reads in real time. Fear in a human produces a tighter grip, shorter breath, harder eyes. Confidence produces softness, deep breathing, a quality of forward focus without urgency. The horse categorises you continuously. And the category it places you in determines how it responds to you, regardless of what you are trying to do technically.</p>
      `},

      { type: 'quote', text: 'The horse does not hear your doubts. It feels them. And it responds to what it feels, not to what you intended.' },

      { type: 'section', heading: 'Training Your Inner Life for Better Horsemanship', sub: 'The most important work happens before you pick up the rope.' },

      { type: 'text', section: 'Training Your Inner Life for Better Horsemanship', html: `
        <p><span class="rd-dropcap">I</span>f the horse responds to your inner state before it responds to your actions, then improving your inner state is improving your horsemanship. This is not a soft or vague idea. It is deeply practical. And it is where most formal equestrian training does not go, which is why many technically proficient riders never achieve the depth of connection they are looking for.</p>
        <p>The first practice is learning to feel yourself. Most people move through the day with almost no conscious awareness of the state of their own body. They do not notice that their jaw is clenched, that their shoulders are up around their ears, that they have been holding their breath since the car journey. They arrive at the horse carrying all of this, entirely unconscious of it, and then are mystified when the horse is tight and unresponsive. Before you can manage what you broadcast to the horse, you must be able to feel what you are broadcasting.</p>
        <p>The second practice is developing the ability to change your inner state deliberately. Not to pretend calm, but to generate it. Slow breathing. Deliberate release of held muscle tension. The conscious decision to drop the agenda and simply be present. These are not spiritual practices — though they may feel that way. They are practical tools that produce measurable changes in your body chemistry, changes that the horse reads and responds to with the same reliability as it reads any other signal.</p>
        <p>The third practice is developing clarity of intention. Before you ask the horse for anything, have a clear, fully embodied picture of what you are asking for. Not a vague wish. A clear, felt sense of the movement, the softness, the response you want. When that picture is clear in your body, you will find the horse responds to it before your aids are complete. When it is unclear — when you are half-asking and half-doubting — the horse will reflect that confusion back with the same precision it reflects everything else.</p>
      `},

      { type: 'quote', text: 'The horse you ride is a portrait of your inner life on that day. If you want a different portrait, change the painter.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 14 — Silence, Energy, Movement
  ───────────────────────────────────────────── */
  {
    label: 'Unique Edge Article XIV',
    title: 'Silence, Energy, and Movement: The Language Horses Understand',
    tagline: 'There is a language older than words. Horses speak it fluently. Most humans have forgotten it exists.',
    keywords: ['horse communication signals','how horses communicate','non verbal communication horses'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>here is a language older than any human tongue — older than the first word our ancestors ever spoke into the dark. It came before writing, before the moment our species decided everything important must be named. Horses speak it fluently. Most humans have forgotten it exists. Those who work well with horses have simply remembered how to listen.</p>
        <p>This language is made of silence — the quality of stillness, the difference between an animal at rest and a predator waiting to strike. It is made of energy — the felt sense of aliveness in a body, the direction of attention. It is made of movement — not just direction and speed, but the weight and intention behind every step. The confidence or hesitation in a footfall. The difference between movement that is going somewhere and movement that is merely happening.</p>
        <p>When I teach people to work with horses, I spend the first hour teaching them to be still. Not quiet — still. The quality of your stillness speaks more clearly to a horse than the quality of your voice. A still body with focused attention says: I am here. I am present. I am not going anywhere. This is one of the most reassuring things a human can offer a prey animal that spends its life scanning for threat.</p>
      `},

      { type: 'section', heading: 'The Language of Silence', sub: 'What you do not do speaks as loudly as what you do. Sometimes louder.' },

      { type: 'text', section: 'The Language of Silence', html: `
        <p><span class="rd-dropcap">S</span>ilence with horses is active. It is not the absence of communication — it is one of the most powerful forms of it. When you stand beside a horse and do nothing, you are saying: I have no demands right now. There is no pressure. This moment belongs to you. For an animal that lives under the constant weight of vigilance, this offering of unconditional stillness is profoundly meaningful.</p>
        <p>The silence that precedes a request is just as important as the request itself. When you rush directly from one ask to the next, the horse never gets to process what just happened. It never gets to feel the release, to integrate the experience, to understand that the answer it gave was correct. The pause — the deliberate, generous pause after a horse gives you something — is where the learning actually occurs. It is where the horse's nervous system returns to baseline and the new memory is consolidated. Take it away and you are training in a fog.</p>
        <p>Silence after a mistake is also valuable. When a horse gets something wrong — when it moves in the wrong direction, misreads your signal, becomes confused — the instinct is to immediately correct, to re-ask, to fix. Sometimes the most useful response is none at all. A pause. A breath. A moment of not asking, giving the horse's nervous system a chance to reset. Then begin again from somewhere simpler. The silence says: that did not cost anything. We are fine. Let us start again. This is a very different message from the continuous pressure of someone who corrects without pausing, who asks again immediately after a mistake, whose energy communicates that errors are expensive.</p>
      `},

      { type: 'quote', text: 'In the pause between asking and asking again is where the horse finds what it needs to try differently. Do not fill every silence. Some silences are doing the most important work.' },

      { type: 'section', heading: 'The Language of Energy', sub: 'Energy is felt before it is seen. The horse is reading you before you open the gate.' },

      { type: 'text', section: 'The Language of Energy', html: `
        <p><span class="rd-dropcap">E</span>nergy, in the context of horsemanship, is simply the quality of aliveness in a body. It is the difference between a body that is switched on — present, attentive, directed — and a body that is passive, unfocused, elsewhere. Both states communicate clearly to the horse. High, directed energy says: something is about to happen. Pay attention. Low, soft energy says: rest. Nothing is required. These are the two most basic messages in the horse's language, and every communication between horse and human is built from some combination of them.</p>
        <p>Learning to use your energy deliberately is one of the most transformative skills in horsemanship. The horseman who can raise their energy — not by moving faster, but by becoming more internally directed, more alive, more focused — and feel the horse respond to that inner shift before any external aid has been given, has understood something essential. And the horseman who can lower their energy, genuinely and completely, and use it to bring a tense horse down rather than continuing to escalate, has understood something even more essential.</p>
        <p>Energy is also the first thing horses read about your emotional state. Anxiety produces a particular quality of energy — scattered, high-frequency, alert. Calm produces a different quality — slow, deep, continuous. Horses categorise these patterns instantly, and they respond to them as information about whether the environment is safe. You cannot fake the energy of genuine calm. But you can practise it. And the more you practise it in the company of horses — who give you immediate, honest feedback — the more available it becomes in other areas of your life as well.</p>
      `},

      { type: 'quote', text: 'You cannot fake calm energy to a horse. But you can practise genuine calm until it becomes the default. The horse will notice the moment it does.' },

      { type: 'section', heading: 'The Language of Movement', sub: 'The way you move tells the horse what you are before you have spoken a word.' },

      { type: 'text', section: 'The Language of Movement', html: `
        <p><span class="rd-dropcap">H</span>orses read movement with a precision that makes their entire system of communication visible to anyone who knows how to watch. Every movement carries information: speed, direction, weight, intention. The quality of a footfall. Whether a step is placed or dropped. Whether the body is moving through space with purpose or simply occupying it randomly.</p>
        <p>In natural horsemanship and in horse-to-horse communication, movement is the primary tool. Horses use movement and the threat of movement to communicate hierarchy, to invite connection, to set boundaries. A horse that moves another horse's feet has, in the language of horses, established a degree of authority over it. A horse that follows another horse's movement is expressing trust and willingness to be led. These patterns translate directly into human-horse work: the human who can move the horse's feet confidently and then give them back — move them, then release, then allow stillness — is speaking the horse's social language fluently.</p>
        <p>Your own movement through space communicates constantly. The walk that arrives with clear direction and grounded weight says: I know where I am going and I am confident in it. The walk that is fast, light, and distracted says: I am not entirely sure what I am doing or where I am headed. The horse reads both. And the horse follows the first kind of movement more readily than the second — not because it has been trained to, but because clear, grounded, directed movement is the movement of a creature that knows what is happening. And a creature that knows what is happening is safer to be near than one that does not.</p>
      `},

      { type: 'quote', text: 'Move as if you know where you are going. Not fast. Not urgently. Simply with weight and direction and the quiet certainty of someone who has arrived. The horse will follow that.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLE 15 — Philosophy of Working With Horses
  ───────────────────────────────────────────── */
  {
    label: 'Unique Edge Article XV',
    title: 'The Philosophy of Working with Horses and Not Against Them',
    tagline: 'There are two ways to work with a horse. Only one of them is real.',
    keywords: ['natural horsemanship philosophy','working with horses not against','ethical horse training'],
    pages: [

      { type: 'title' },

      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>here are two ways to work with a horse. They look similar from the outside — a horse and rider moving together with apparent ease and harmony. But from inside the horse, they feel completely different. And the horse always knows the difference, even when the audience does not.</p>
        <p>The first way is the way of control and management. It is not necessarily cruel. It can be technically correct, professionally delivered, and produce impressive results. But its foundation is the human's agenda, the human's timeline. The horse learns to manage its life within the edges of what is permitted. It may be content. But it is not free.</p>
        <p>The second way is the way of real partnership. It begins not with what you want the horse to do, but with understanding what the horse is. It asks for more curiosity than certainty, more listening than instruction. It produces a horse that is not performing for you — it is participating with you. Partnership requires two willing participants. Everything else, however graceful, is something less.</p>
      `},

      { type: 'section', heading: 'The Question Behind the Question', sub: 'Every decision in the arena is an expression of a deeper belief about what horses are and what we owe them.' },

      { type: 'text', section: 'The Question Behind the Question', html: `
        <p><span class="rd-dropcap">U</span>nderneath every training decision — every choice about how to respond to resistance, how much pressure to use, when to push and when to release — there is a deeper belief about the nature of the horse and its relationship to humans. Most people never examine this belief. They simply inherited a set of practices from the people who taught them, who inherited from the people who taught them, and they use those practices without questioning the assumptions beneath them.</p>
        <p>The assumption of much traditional horsemanship is that horses are animals to be managed — capable creatures with their own instincts and reactions, but fundamentally in need of human direction and control. In this view, the horse's resistance is a problem to be solved. Its fear is an obstacle. Its instincts are something to be trained over, reprogrammed, made compliant.</p>
        <p>A different assumption is possible. The horse is a creature of extraordinary intelligence, sensitivity, and social sophistication — a creature that has been shaped by millions of years to live in relationship, to read and respond to the inner states of those around it, to participate in a collaborative existence with its herd. In this view, the horse's resistance is information. Its fear is communication. Its instincts are not obstacles but raw material — the very stuff from which real partnership, built with patience and honesty and respect, becomes possible.</p>
        <p>The choice between these two assumptions is not merely philosophical. It produces different horses, different relationships, and different experiences of what it means to be with a horse at all. It is worth examining which one you hold — and whether it is one you have chosen deliberately or simply never thought to question.</p>
      `},

      { type: 'quote', text: 'The horse you have is not a reflection of your technique. It is a reflection of your philosophy. Change the philosophy, and the horse begins to change too.' },

      { type: 'section', heading: 'Working With Nature, Not Over It', sub: 'The horse was designed by millions of years of evolution. Horsemanship is the art of working with that design.' },

      { type: 'text', section: 'Working With Nature, Not Over It', html: `
        <p><span class="rd-dropcap">E</span>very successful horseman I have ever met or read or had the privilege of watching has one thing in common: they work with the horse's nature rather than against it. They do not try to suppress the prey animal's fear response — they use it as information and work to become the thing the horse trusts more than it fears. They do not try to eliminate the horse's sensitivity — they value it as the source of the horse's capacity for communication and refinement.</p>
        <p>Working with the horse's nature means accepting certain truths without resistance. Horses learn best when the pressure is clear, the release is immediate, and the sessions are short enough that the nervous system can integrate what has been offered. They learn through repetition, through consistency, through the building of new associations that over time become stronger than old fears. They do not learn through punishment, through force, through the removal of all choice until the only option is compliance.</p>
        <p>It also means accepting that there are days when the horse is not available for what you had planned — when it is too anxious, too sore, too distracted by something in its environment that you cannot change. On those days, the horse that is worked with rather than against will be met where it is, given something achievable, and left with its dignity and its trust intact. The horse that is worked against will be pushed through its resistance until something gives — either the resistance or the relationship. Usually, over time, it is the relationship.</p>
      `},

      { type: 'quote', text: 'Nature built the horse over sixty million years. Your job is not to overcome that design. Your job is to understand it well enough to work within it. That is where the art begins.' },

      { type: 'section', heading: 'The Life That Horses Offer', sub: 'This is not just about better horsemanship. It is about a better way of being in the world.' },

      { type: 'text', section: 'The Life That Horses Offer', html: `
        <p><span class="rd-dropcap">I</span> did not come to horses because I wanted to ride. I came to them because I was, at a point in my life, looking for something more honest than most of what the human world offered. I found it. Not in a dramatic way. Not in a single moment of revelation. I found it in ten thousand mornings in a field, with an animal that showed me, patiently and without judgment, exactly who I was that day and exactly how much distance there was between who I was and who I wanted to become.</p>
        <p>Horses have given me things that no other practice, no teacher, no book has given me. They have taught me to be still. They have taught me that my inner state is not private, and that learning to manage it is not weakness but one of the most important skills a person can develop. They have taught me that real communication requires real listening — not the polite performance of listening while you wait to speak, but genuine, open, willing attention to what another being is actually expressing. They have taught me that trust is built slowly, in the dark, through a thousand small acts of consistency, and that it is worth far more than anything that can be obtained quickly.</p>
        <p>Most of all, they have taught me that the quality of a relationship — any relationship — depends entirely on the quality of what each party brings to it. You cannot take more than you give and call it a partnership. You cannot demand without offering. You cannot manage from a distance and expect genuine connection. These are lessons from the arena. They are also, I have come to believe, lessons for everything. And that, in the end, is why horses are not just animals I work with. They are some of the best teachers I have ever had.</p>
      `},

      { type: 'quote', text: 'The horse does not know it is teaching you. It is simply being honest. But if you are paying attention, that honesty will change you. And a person changed by a horse is changed for the better, in ways that go far beyond the field.' }

    ]
  }

];

/* ══════════════════════════════════════════════════════════════
   READER ENGINE — SCROLL LAYOUT
   ══════════════════════════════════════════════════════════════ */

const panel = document.getElementById('articlePanel');
let openIdx = -1;

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

function cleanText(html) {
  return html
    .replace(/\s*—\s*/g, ' — ')
    .replace(/^\s*[-–]\s*/gm, '')
    .replace(/<span class="rdrop">(.)<\/span>/g, (_, c) => `<span class="rd-dropcap">${c}</span>`);
}

function buildArticleHTML(art) {
  let html = '';

  html += `<div class="rd-title-block">
    <div class="rd-tb-corners">
      <div class="rd-corner tl"></div><div class="rd-corner tr"></div>
      <div class="rd-corner bl"></div><div class="rd-corner br"></div>
    </div>
    <div class="rd-tb-inner">
      <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
      <div class="rd-tb-label">${art.label}</div>
      <div class="rd-tb-title">${art.title}</div>
      <div class="rd-tb-div"><div class="rd-dl"></div><span class="rd-ds">✦</span><div class="rd-dl"></div></div>
      <div class="rd-tb-horse">${HORSE_SVG}</div>
      <div class="rd-tb-tagline">${art.tagline}</div>
      <div class="rd-tb-tags">${art.keywords.map(k => `<span class="rd-tag">${k}</span>`).join('')}</div>
      <div class="rd-tb-byline">The Horseman's Journal · Praveen Kumar</div>
      <div class="rd-tb-scrollhint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        Scroll to read
      </div>
    </div>
  </div>`;

  art.pages.forEach((pg) => {
    if (pg.type === 'title') return;

    if (pg.type === 'section') {
      html += `<div class="rd-section-block">
        <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
        <div class="rd-sb-pre">Section</div>
        <div class="rd-sb-heading">${pg.heading}</div>
        <div class="rd-sb-rule"></div>
        <div class="rd-sb-sub">${pg.sub}</div>
      </div>`;
    }

    if (pg.type === 'text') {
      html += `<div class="rd-text-block">
        <div class="rd-txb-header">
          <span class="rd-txb-sec">${pg.section}</span>
          <div class="rd-txb-line"></div>
        </div>
        <div class="rd-txb-body rd-reveal">${cleanText(pg.html)}</div>
      </div>`;
    }

    if (pg.type === 'quote') {
      html += `<div class="rd-quote-block">
        <div class="rd-qb-rule"></div>
        <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
        <div class="rd-qb-text">${pg.text}</div>
        <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
        <div class="rd-qb-rule"></div>
        <div class="rd-qb-byline">Praveen Kumar · The Horseman's Journal</div>
      </div>`;
    }
  });

  return html;
}

function initScrollReveal(inner) {
  const scrollEl = inner.querySelector('.rd-scroll-area');
  const blocks = inner.querySelectorAll('.rd-txb-body');
  if (!blocks.length) return;

  function revealAll() {
    blocks.forEach(b => b.classList.add('rd-revealed'));
  }

  if ('IntersectionObserver' in window && scrollEl) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rd-revealed');
        }
      });
    }, { root: scrollEl, threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
    blocks.forEach(b => obs.observe(b));
    setTimeout(revealAll, 800);
  } else {
    revealAll();
  }
}

function drawWatermark(inner) {
  const cv = inner.querySelector('.rd-wm-canvas');
  if (!cv) return;
  setTimeout(() => {
    const W = inner.offsetWidth || 800;
    const H = Math.max(inner.scrollHeight, inner.offsetHeight, 600);
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    ctx.font = '500 11px Cinzel, serif';
    ctx.fillStyle = '#c9a030';
    const texts = ["The Horseman's Journal", "Praveen Kumar"];
    for (let y = -160; y < H + 160; y += 82) {
      for (let x = -160; x < W + 160; x += 240) {
        ctx.save(); ctx.translate(x, y); ctx.rotate(-Math.PI / 6);
        ctx.fillText(texts[Math.floor((x + y) / 82) % 2], 0, 0);
        ctx.restore();
      }
    }
  }, 200);
}

function openArticle(i) {
  const art = articles[i];
  openIdx = i;

  const inner = panel.querySelector('.art-panel-inner');
  inner.style.cssText = 'user-select:none;-webkit-user-select:none;-moz-user-select:none;position:relative;overflow:hidden;padding:0;';

  inner.innerHTML = `
    <canvas class="rd-wm-canvas" style="position:absolute;top:0;left:0;width:100%;pointer-events:none;z-index:0;opacity:0.03;"></canvas>
    <div class="rd-grain"></div>
    <div class="rd-vignette"></div>
    <div class="rd-scroll-area" id="rdScroll">
      <div class="rd-content" id="rdContent">
        ${buildArticleHTML(art)}
        <div class="rd-end-ornament">
          <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
          <div class="rd-end-label">End of Article</div>
          <button class="rd-close-btn" id="rdClose">Close Article</button>
        </div>
      </div>
    </div>
    <div class="rd-top-bar">
      <div class="rd-top-label">${art.label}</div>
      <button class="rd-top-close" id="rdTopClose">✕</button>
    </div>
  `;

  inner.querySelector('#rdClose').addEventListener('click', closeArticle);
  inner.querySelector('#rdTopClose').addEventListener('click', closeArticle);
  panel.addEventListener('contextmenu', e => e.preventDefault());

  panel.classList.add('open');
  drawWatermark(inner);
  initScrollReveal(inner);

  setTimeout(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

function closeArticle() {
  panel.classList.remove('open');
  openIdx = -1;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('open')) closeArticle();
});

/* ── Filter buttons ── */
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

/* ── Book card clicks ── */
document.querySelectorAll('.book-wrap').forEach(bk => {
  bk.addEventListener('click', () => {
    const i = parseInt(bk.dataset.article);
    if (openIdx === i) { closeArticle(); return; }
    openArticle(i);
  });
});

/* ── Scroll reveal for book cards ── */
const bookObs = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), idx * 100);
  });
}, { threshold: 0.08 });
document.querySelectorAll('.book-wrap').forEach(b => bookObs.observe(b));
