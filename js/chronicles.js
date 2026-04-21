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
    label: 'Foundational · Article I',
    title: 'Understanding Horse Psychology: How Horses Think and Perceive Humans',
    tagline: 'Sixty million years of evolution. One question. Am I safe?',
    keywords: ['horse psychology','how horses think','horse behavior explained','prey animal behavior','equine mindset'],
    pages: [

      { type: 'title' },

      /* ── OPENING ESSAY ── */
      { type: 'text', section: 'Opening', html: `
        <p><span class="rd-dropcap">T</span>o feel what a horse feels is to first understand that you are noise. You arrive trailing the scent of purpose, your pockets full of plans, your mind full of what was and what will be. You walk with the heavy step of a predator, an animal that does not need to listen before it moves. To the horse, you are a storm on the horizon. They see the shape of you, but they feel the intention, the hurry, the jagged edges of a mind that never rests. And in your presence, they become what they have always been: a statue carved from a single question, Am I safe?</p>
        <p>To connect with them is to decide to become silent. Not just in your voice, but in your soul. You must let your agenda fall to the dust like a heavy coat. You stand at the edge of their space and learn to simply be. You begin to breathe. Not the shallow, forgotten breaths of a busy life, but deep, slow tides of air that tell every listening cell in their body: you are not a threat. You are just a creature, breathing.</p>
        <p>And that is when the world changes. You stop seeing with your eyes and start feeling with your skin. The wind on your cheek is the same wind in their mane. The earth under your feet is the same earth under theirs. You are no longer a man and a horse. You are two bodies in a field, sharing the same small slice of the world.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p>This is when the mirror appears. The horse begins to show you to yourself. If you carry tension a tight jaw, a knot of worry in your gut, they will hold their own body tight, their head high, their muscles coiled. They will not come near the storm inside you. If you carry a grief you have refused to face, they will grow still and soft, their dark eye becoming a pool of sorrow that reflects your own. They absorb your truth and show it back without a word of judgment.</p>
        <p>They have lived in fear. They understand the hum of hypervigilance the way a body becomes a prison of held-back energy. And when they see it in you, they do not run. They recognise it. It is a language they were born speaking.</p>
        <p>The moment of connection is not a grand event. It is a surrender. It is the slow exhale you have been holding. It is the quiet step they take toward you not because you asked, but because you finally became a place of peace. The soft muzzle that touches your arm is a question asked without sound. In that touch, a universe of trust is exchanged. You are safe, and so are they.</p>
        <p>To walk away from that is to feel the noise of the world rush back in, but you are different now. You carry the stillness of the field inside you. You have learned that the deepest communication requires no words at all only a shared and silent breath.</p>
      `},

      { type: 'text', section: 'Opening', html: `
        <p>Every decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is not simply to understand an animal. It is to understand a completely different kind of mind, one built for a world where a single mistake means death, and where reading the world fast is the only thing that matters.</p>
        <p>Horses think in pictures. They think in feelings. They think in the language of energy and intention, so precise, so honest, that it makes human communication look clumsy by comparison. When a horse looks at you, it is not seeing a person. It is reading a pattern of energy. Your tension, your breath, the quality of your stillness, the direction of your gaze. Before you have spoken a word, the horse has already decided what you are.</p>
        <p>This is not mysticism. This is biology. A prey animal that could not read the world fast and accurately did not live long enough to become an ancestor. Every horse alive today is the child of the most perceptive, the most sensitive, the most finely tuned readers that ever lived. To work with horses well, you must first accept this: they are not failing to understand you. You are failing to understand them. The horse is reading everything correctly. The question is whether you are giving it anything honest to read.</p>
      `},

      /* ── SECTION: HOW HORSES THINK ── */
      { type: 'section', heading: 'How Horses Think', sub: 'They do not think in words. They think in the truth of this moment.' },

      { type: 'text', section: 'How Horses Think', html: `
        <p><span class="rd-dropcap">H</span>orses do not think in sentences. They do not sort their experience into reasons or explanations. They think in pictures, in feelings, in what is happening right now. A horse scared once by a white plastic bag does not remember that plastic bags are scary. It remembers the exact feeling of that moment the sudden movement, the crinkle of sound, the rush of fear, the need to run. When it sees another plastic bag, it does not think. It simply feels the same feeling, and the body moves.</p>
        <p>This is not stupidity. This is intelligence so sharp, so finely made, that it has kept horses alive for millions of years. A prey animal that had to stop and think to figure out whether the sound in the bushes was dangerous or safe did not survive long enough to have young. The horses that remain are the children of those who felt danger and moved before the thinking mind could catch up.</p>
        <p>You cannot explain to a horse why something is safe. You cannot tell it the needle will help, that the trailer leads somewhere good. The horse reads the world through different eyes entirely. It reads energy. It reads tension. It reads the tiny signals in your body that you do not even know you are sending. Before you move, the horse has already felt your intention to move.</p>
        <p>Your thoughts are not private. Your fear, your anger, your rush, your doubt all of it shows in your body before you have even noticed it yourself. The horse that seems difficult is often simply giving back exactly what you are giving. The rider who learns to become truly calm not acting calm, but being calm finds that the horse changes in that same moment.</p>
      `},

      { type: 'quote', text: 'You cannot teach a horse with words. You can only speak to it with what you are.' },

      /* ── SECTION: HORSE BEHAVIOR EXPLAINED ── */
      { type: 'section', heading: 'Horse Behavior Explained', sub: 'Every behavior is a message. The question is whether you are listening.' },

      { type: 'text', section: 'Horse Behavior Explained', html: `
        <p><span class="rd-dropcap">H</span>orse behavior is never random. It is always meaningful. The hard part for humans is that the meaning is often seen through human eyes that have nothing to do with how horses truly experience the world.</p>
        <p>When a horse pins its ears, people say it is angry. When it pulls away, people say it is stubborn. When it spooks, people say it is overreacting. But anger, stubbornness, and overreaction are human ideas placed on an animal that does not carry them. A horse is not angry when it pins its ears. It is saying: I feel uncomfortable. I am drawing a line. I am under stress. A horse that pulls away is not stubborn. It is saying clearly: I do not feel safe doing what you are asking. A horse that spooks is not overreacting. It is doing exactly what sixty million years of nature built it to do.</p>
        <p>Most problem behaviors are not problems with the horse. They are problems with the relationship, the method, or the human's ability to hear what the horse is saying. A horse that bites was not born mean. It learned that biting is the only message strong enough to make a human stop doing something painful. A horse that will not load is being honest about its fear of tight spaces.</p>
        <p>Stop asking: how do I make this horse stop? Start asking: what is this horse trying to tell me? Because once you understand what it is saying, the behavior often resolves on its own. Horses are not machines. They grieve. They play. They love. The rider who sees the horse as it truly is finds that it offers far more than obedience. It offers real partnership. And that, when it is real, changes everything.</p>
      `},

      { type: 'quote', text: 'The horse that misbehaves is not the problem. It is the question. And the answer always begins with you.' },

      /* ── SECTION: PREY ANIMAL BEHAVIOR ── */
      { type: 'section', heading: 'Prey Animal Behavior', sub: 'To understand the horse, you must first understand what it means to be hunted.' },

      { type: 'text', section: 'Prey Animal Behavior', html: `
        <p><span class="rd-dropcap">T</span>o understand a horse, you must first understand what it means to be prey.</p>
        <p>A predator can take chances. It has time to watch, to think, to decide. A prey animal does not have this time. For a horse, waiting can mean death. A horse that pauses to figure out whether the movement in the grass is wind or a lion does not live long enough to make better choices. The horses whose bloodlines carry on today are the ones that ran first and asked questions later. They trusted their gut. They turned fear into fast movement. They treated every new thing as dangerous until proven safe.</p>
        <p>This history lives in every horse you will ever meet. It is written into their nervous system, coded in their DNA. The horse that spooks at a plastic bag is not being stupid. It is being a horse. The horse that will not walk past the dark corner is not stubborn. It is listening to a feeling that has kept its family alive for millions of years.</p>
        <p>The flight response is not a flaw. When a horse feels danger, its body moves in split seconds. Heart rate spikes. Fear floods the system. Muscles tighten. The brain drops everything else and asks one question: where is the exit? This is not a choice. It is a need built deep into the body. You cannot reason with a nervous system in survival mode. But you can become the thing the horse trusts more than it fears the unknown. You can be so steady, so calm, so consistent, that your presence becomes safety rather than stress. The horseman who works with the prey animal nature finds that fear is not a wall. It is simply information. And when that information is truly heard, the horse can finally let go.</p>
      `},

      { type: 'quote', text: 'Fear in a horse is not a fault. It is a memory older than language and it deserves your respect, not your frustration.' },

      /* ── SECTION: EQUINE MINDSET ── */
      { type: 'section', heading: 'Equine Mindset', sub: 'The horse lives where most humans only visit fully inside the present moment.' },

      { type: 'text', section: 'Equine Mindset', html: `
        <p><span class="rd-dropcap">A</span> horse lives in the present moment with a fullness that most humans will never know. It is not worrying about tomorrow. It is not replaying yesterday. It is here now fully alive in this breath, this step, this meeting. This is not wisdom. This is simply what it means to be a horse.</p>
        <p>The equine mindset is built on a few basic truths. Safety comes first. Connection to the herd matters deeply. Movement is life. Trust must be earned. And the quality of your presence matters far more than any word you speak.</p>
        <p>When you walk toward a horse, it is reading you before you are ten feet away. Are you calm or worried? Sure or unsure? Present or somewhere else entirely? The horse does not care what you say. It cares what you are. And if what you are is scattered, tight, or disconnected, the horse will show that back to you with perfect honesty. This is why horsemanship is as much about knowing yourself as it is about knowing horses. You cannot hide from a horse. You cannot fake being present. The horse knows. It always knows.</p>
        <p>Horses do not hold grudges. They do not replay past hurts. If you make a mistake, if you lose your temper, if you handle something badly  the horse will give you another chance. It will meet you fresh in the next moment, willing to try again, as long as you are willing to be honest. This is the gift horses offer. Their complete, uncompromising honesty. They show us who we are. They teach us that the quality of the connection depends entirely on the quality of what we bring. And in teaching us that, they teach us something far more valuable than horsemanship. They teach us how to be human.</p>
      `},

      { type: 'quote', text: 'The horse does not ask you to be perfect. It only asks you to be real. And in being real, you become, at last, someone worth trusting.' }

    ]
  },

  /* ─────────────────────────────────────────────
     ARTICLES 2–15  (paste your text in the html: '' sections)
  ───────────────────────────────────────────── */
  {
    label: 'Foundational · Article II',
    title: 'Prey Animal Instincts in Horses: Why Fear Shapes Everything',
    tagline: 'The flight response is not a flaw. It is sixty million years of wisdom.',
    keywords: ['prey animal instincts horse','why horses are fearful','horse survival behavior','flight response in horses','equine instincts'],
    pages: [
      
      { type: 'title' },

      /* ── OPENING ── */
      { type: 'text', section: 'Why Fear Shapes Everything', html: `
        <p><span class="rdrop">T</span>here is a sound that every horse alive knows before it is born. Not heard through the ears, but felt in the blood — a sound older than any language, older than the first human hand that ever reached toward a horse's neck. It is the sound of something moving in the grass when the grass should be still. It is the sound of threat. And the body of the horse — every muscle, every nerve, every breath — has been shaped by millions of years to answer that sound with one single, absolute response: run.</p>
        <p>This is not a choice the horse makes. It is not a decision that passes through reason or reflection. By the time the thinking part of the brain has processed what the eyes have seen, the body is already moving. The legs are already carrying the horse away from what frightened it. This is not a flaw in the horse's design. This is the design working exactly as it was built to work.</p>
        <p>And yet, every day, humans stand beside horses and feel frustration at this response. They pull harder on the rope. They raise their voice. They push the horse toward the thing it fears, convinced that repetition is the answer. They have mistaken the most sophisticated survival system ever built by nature for a problem to be corrected.</p>
        <p>It is not a problem. It is the horse. And until you understand it, you will never truly reach the animal standing in front of you.</p>
      `},

      /* ── SECTION: THE AMYGDALA ── */
      { type: 'section', heading: 'The Brain That Runs Before It Thinks', sub: 'The fear response fires in milliseconds. Reason arrives too late.' },

      { type: 'text', section: 'The Brain That Runs Before It Thinks', html: `
        <p><span class="rdrop">D</span>eep inside the horse's brain, buried beneath layers of more recent evolution, sits a small almond-shaped structure called the amygdala. It is the oldest part of the emotional brain. It does not think. It does not weigh consequences. It does not consider whether the white plastic bag by the arena fence has ever hurt a horse before. It simply receives information from the senses and, in the span of twelve milliseconds, fires a signal that floods the entire body with adrenaline and cortisol.</p>
        <p>Twelve milliseconds. That is faster than the blink of a human eye. That is faster than the conscious mind can process a single thought. By the time the horse's rational brain — the part that, with training, can learn that plastic bags are safe — has even begun to process the visual information, the body is already in a full physiological state of emergency.</p>
        <p>Heart rate doubles. Sometimes triples. Blood is diverted away from the digestive system and toward the large muscle groups of the legs. The pupils dilate. The nostrils flare. The entire body becomes, in an instant, a machine optimised for one single purpose: escape.</p>
        <p>This is called the fight-or-flight response, and in the horse it is almost exclusively flight. Unlike a predator, which may stand its ground and fight when cornered, the horse's first, second, and third instinct is always to put distance between itself and the threat. Speed is safety. Distance is survival. This is sixty million years of successful living encoded into every cell of the animal's body.</p>
        <p>When you understand this biology — truly understand it, not just intellectually but with genuine empathy — you stop asking why the horse is behaving this way. You start asking something far more useful: what can I offer this horse that its nervous system will accept as safe?</p>
      `},

      { type: 'quote', text: 'The horse does not spook to frustrate you. It spooks because every ancestor that did not spook is no longer alive to have descendants.' },

      /* ── SECTION: THE SENSES ── */
      { type: 'section', heading: 'Built to Detect Danger', sub: 'Every part of the horse is a precision instrument tuned for survival.' },

      { type: 'text', section: 'Built to Detect Danger', html: `
        <p><span class="rdrop">T</span>he horse's body is not simply an animal that runs fast. It is a living detection system of extraordinary precision, every part of it engineered over millions of years to gather information about the environment and assess it for threat.</p>
        <p>The eyes are set on the sides of the skull, giving the horse a visual field of approximately 350 degrees. It can see almost everything around it simultaneously, with only two small blind spots — directly in front of its nose and directly behind its tail. A predator approaches from behind. A horse that cannot see behind itself is a horse that will not survive. This is why horses startle so violently when touched suddenly in a blind spot. The nervous system registers the unexpected contact and responds before the conscious mind has any say in the matter.</p>
        <p>The ears rotate independently, each one capable of turning nearly 180 degrees to track a sound source without the horse moving its head. A horse listening to something behind it while watching something in front is not being distracted. It is doing exactly what its biology demands — gathering information from multiple directions simultaneously, building a complete picture of its environment. When both ears lock forward onto a single point, every experienced horseman learns to pay attention. The horse has found something that concerns it. The wise response is not to push forward. It is to pause and let the horse process.</p>
        <p>The nostrils can detect scents at concentrations far below what any human nose can register. Horses have been documented detecting the presence of a predator — not the sight or sound, but the scent alone — from distances of several hundred metres in the right wind conditions. When a horse lifts its head and flares its nostrils at something you cannot see or smell, it is not imagining things. It is reading information from the environment that you simply do not have access to.</p>
        <p>The whiskers around the muzzle are not decorative. They are sensory organs, capable of detecting changes in airflow and the proximity of objects in low light. Horses that have their whiskers clipped — a practice still common in competitive equestrian disciplines — lose a significant part of their environmental sensing ability. They become, in a very real sense, partially blind in the dark.</p>
      `},

      { type: 'quote', text: 'When the horse tells you something is wrong, believe it. It is reading a world you cannot fully see.' },

      /* ── SECTION: MEMORY OF FEAR ── */
      { type: 'section', heading: 'How Horses Remember Fear', sub: 'One bad moment can last a lifetime. One honest moment of safety can begin to undo it.' },

      { type: 'text', section: 'How Horses Remember Fear', html: `
        <p><span class="rdrop">F</span>ear memory in horses is not stored the way human memories are stored. Humans encode memories with context — they remember not just what happened, but where, when, with whom, and how they felt about it afterward. Time passes and the memory softens. Details blur. The emotional charge of a frightening event gradually diminishes as the brain files it away and moves forward.</p>
        <p>This is not how the horse's brain works. Fear memories in horses are stored with extraordinary precision in the amygdala — and they are stored for life. A horse that was badly frightened in a horse trailer at age three will remember that fear at age twenty. Not as a story it tells itself, but as a full-body sensory experience that is re-triggered the moment the right stimulus appears. The smell of diesel fumes. The sound of a metal ramp. The feeling of reduced light and enclosed space. Any one of these can unlock the entire original terror in an instant.</p>
        <p>This is why punishment is so damaging in horse training. When a human punishes a horse for displaying fear — hitting it, shouting at it, forcing it toward the thing that frightens it — they are not teaching the horse that the thing is safe. They are adding a second layer of threat to an already frightened nervous system. The horse now has two things to fear: the original stimulus and the human beside it. The fear becomes deeper, more complex, and far harder to resolve.</p>
        <p>But the same principle that makes fear memory so persistent can also be used to create safety memory. Every time a horse is allowed to approach something frightening at its own pace, in its own time, and is not punished for hesitating — every time it discovers for itself that the scary thing did not harm it — a new memory is laid down alongside the old one. Not replacing it, but offering an alternative. Over time, with patience and consistency, the safety memory can become stronger than the fear memory. The horse learns, not because it was told, but because it was given the space to discover.</p>
        <p>This process cannot be rushed. It cannot be forced. It can only be offered, again and again, until the horse chooses to trust what the evidence is showing it. That is desensitisation done honestly. Not flooding the horse with the frightening thing until it gives up resisting, but walking beside it, slowly, as it learns that the world is safer than its instincts have always told it.</p>
      `},

      { type: 'quote', text: 'You cannot argue a horse out of its fear. You can only give it enough safe experiences to outweigh the ones that were not.' },

      /* ── SECTION: THE HERD ── */
      { type: 'section', heading: 'Safety in Numbers', sub: 'The lone horse is the vulnerable horse. The herd is not a social preference — it is survival.' },

      { type: 'text', section: 'Safety in Numbers', html: `
        <p><span class="rdrop">I</span>n the wild, a horse alone is a horse in danger. Not because solitude itself is dangerous, but because every second a horse is without companions, it is bearing the full weight of vigilance alone. There are no other eyes watching the horizon. No other ears turning toward that sound in the distance. No other nose catching a scent on the wind. The solitary horse must be alert to everything, always, without rest.</p>
        <p>This is why isolation is one of the most psychologically damaging things that can be done to a horse. Stabled horses kept without visual or physical contact with other horses show measurable increases in stress hormones, stereotypic behaviors — weaving, crib-biting, box walking — and heightened reactivity. They are not being difficult. They are expressing the profound biological distress of an animal whose survival system is screaming that it is in danger.</p>
        <p>Within a herd, the vigilance is shared. Studies of feral horse groups have shown that while one horse grazes with its head down, others maintain watch. The pattern rotates naturally, without instruction, without hierarchy dictating who watches when. It is a distributed safety system, each horse contributing its senses to a collective awareness that no single animal could maintain alone.</p>
        <p>This herd instinct is the key to understanding why horses are so profoundly affected by the emotional state of the humans around them. In the absence of horse companions, many horses will transfer their herd bonding to humans, other species, or even objects. They are not being foolish or sentimental. They are doing what their biology requires — finding something to be part of, something to trust, something that makes standing still in the world feel survivable.</p>
        <p>When you earn the trust of a horse, you are not merely earning its affection. You are being accepted into its safety system. It is allowing you to be the one it turns to when something frightens it — the one whose stillness or calm it uses to calibrate its own response. That is not a small thing. For a prey animal, allowing another creature into its circle of trust is the most significant decision it can make. It is staking its survival on you.</p>
      `},

      { type: 'quote', text: 'When a horse turns to you in fear instead of running from you, you have become its herd. That is the whole of horsemanship.' },

      /* ── SECTION: WORKING WITH FEAR ── */
      { type: 'section', heading: 'Working With Fear, Not Against It', sub: 'The horseman who fights the prey animal will fight forever. The one who works with it will find a partner.' },

      { type: 'text', section: 'Working With Fear, Not Against It', html: `
        <p><span class="rdrop">T</span>he single most important shift a horseman can make is to stop experiencing the horse's fear as an obstacle and start experiencing it as information. Fear in a horse is not stubbornness. It is not disrespect. It is not a training problem to be solved with more pressure. It is the horse communicating, as clearly and honestly as it is capable of communicating, that something in its environment has registered as unsafe.</p>
        <p>Your job is not to convince the horse that its fear is wrong. Your job is to become so consistent, so calm, and so trustworthy, that the horse's nervous system begins to use your energy as a reference point. This is called social referencing — the same phenomenon that causes a young child to look at a parent's face to determine whether a new situation is safe or frightening. Horses do this constantly. When something startles them, the first thing many horses do is look at the human beside them. What they are asking is: are you afraid? If the human's body tightens, if the breath shortens, if the grip on the rope increases — the horse receives confirmation that danger is present. If the human breathes out, softens, and does not escalate — the horse receives a different message. Perhaps this is not as dangerous as it felt.</p>
        <p>This is why your own nervous system is the most important piece of equipment you bring to any session with a horse. Not the saddle, not the bridle, not the training method. Your breath rate. Your muscle tension. The quality of your stillness. These are the things the horse is reading, and these are the things that will determine whether the session goes toward trust or away from it.</p>
        <p>Learn to read the early signs of rising fear — the high head, the tightening of the muscles along the neck and back, the shortening of the stride, the eye that begins to show white at the edges, the tail that lifts and stiffens. These are not the explosion. These are the warning before the explosion. The horseman who responds to these early signals with patience, with space, with a calm exhale and a moment of stillness, will rarely meet the explosion. The horseman who pushes through them will meet it every time.</p>
        <p>Desensitisation is not about eliminating the horse's sensitivity. A sensitive horse is a gift — it is responsive, aware, and capable of extraordinary communication. The goal is not a dull horse that does not react. The goal is a horse whose trust in you is stronger than its fear of the unfamiliar. That horse will still feel fear. It will always feel fear. But it will look to you before it runs. And in that look is everything horsemanship is built on.</p>
      `},

      { type: 'quote', text: 'A horse that trusts you does not stop being afraid. It simply decides that being near you is worth the risk. Honour that decision with everything you have.' },  
  {
    label: 'Foundational · Article III',
    title: 'Trust vs Control in Horse Training: What Actually Works',
    tagline: 'Control gives you obedience. Trust gives you a horse that chooses you.',
    keywords: ['horse training trust vs control','how to build trust with a horse','natural horsemanship basics','trust based training','horse behavior training methods'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article III', html: `
        <p><span class="rd-dropcap">T</span>here is a question every horseman must eventually answer — not with words, but with choices made in the arena every single day. Do you want to control your horse, or do you want to be trusted by it? These are not the same goal. They do not produce the same horse. And they do not ask the same things of you as a person.</p>
        <p>Control gives you a horse that obeys when it cannot escape. Trust gives you a horse that chooses to be with you when all the exits are open. I have spent eleven years learning the difference. Only one of these is real horsemanship. The other looks like it from the outside, but has a hollow sound when you knock on it.</p>
        <p>The horse that is controlled knows where the boundary is. The horse that trusts you has no desire to find the boundary, because it has no desire to leave. One is managing its captivity. The other has chosen its companionship.</p>
        <!-- PASTE YOUR ARTICLE III TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Foundational · Article IV',
    title: "How to Read a Horse's Body Language (Beginner to Advanced)",
    tagline: 'Every flick of an ear is a sentence. Learn to read the language.',
    keywords: ['horse body language','how to read horses','horse signals meaning','horse ears meaning','horse tail signals','signs of stress in horses'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article IV', html: `
        <p><span class="rd-dropcap">H</span>orses speak in the language of the body — constantly, precisely, and honestly. They do not have the human ability to say one thing while meaning another. Every ear position, every muscle, every shift of weight, every flick of the tail is a sentence in a language that has no room for deception. Learning to read it is the single most important skill a horseman can develop.</p>
        <p>The ears are the most readable part of a horse. Forward means interest and focus. Pinned flat back means pain, deep irritation, or a clear warning. Soft and relaxed to the side means calm and comfortable. One forward, one back means the horse is splitting its attention between two things — a skill humans can only envy.</p>
        <p>Below the ears, read the eyes. A soft, rounded eye with relaxed muscles around it means calm. A hard, tight eye with white showing at the edges means fear or anger. The jaw, the mouth, the lips — all of it carries information that a horseman learns to read the way a musician reads notes.</p>
        <!-- PASTE YOUR ARTICLE IV TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Foundational · Article V',
    title: 'Common Human Mistakes with Horses (And Why Horses React)',
    tagline: 'Most horses do not have problems. Most horses have people.',
    keywords: ['mistakes in horse training','why horses misbehave','horse behavior problems','human errors with horses','training mistakes beginners'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article V', html: `
        <p><span class="rd-dropcap">M</span>ost horses do not have problems. Most horses have people — people with tension they are not aware of, with plans the horse can feel but not understand, with expectations that have nothing to do with the horse's reality in this moment. The horse is doing the most honest thing it can: showing you exactly what you are giving it.</p>
        <p>The most common mistake I see — from beginners and experienced riders alike — is bringing the wrong quality of presence to the encounter. They arrive carrying the weight of their day. The argument, the deadline, the anxiety about the session itself. They walk into the arena full of noise, and then they are confused when the horse does not settle.</p>
        <p>A horse does not separate you from your context. It reads the whole of you — the tightness in your jaw, the speed of your breath, the quality of your step. When you are scattered, the horse is scattered. When you are tense, the horse is tense. This is not the horse being difficult. This is the horse being honest.</p>
        <!-- PASTE YOUR ARTICLE V TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Practical · Article VI',
    title: 'How to Build Trust with a Horse (Step by Step Guide)',
    tagline: 'Trust is not a feeling. It is a thousand small promises kept.',
    keywords: ['how to build trust with a horse','bonding with a horse','gain horse trust'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article VI', html: `
        <p><span class="rd-dropcap">T</span>rust between a human and a horse is not a feeling. It is a behavior. And like all behavior, it is built through repetition — through a thousand small moments where you did what you said you would, where you did not punish what you could not understand, where you stayed when it would have been easier to leave.</p>
        <p>The first step is deceptively simple: stop trying to earn trust and start being trustworthy. Being trustworthy requires only one thing: consistency. The horse that sees the same person every single time, no matter how the session is going, learns that this person is safe. And safety is the foundation of everything.</p>
        <p>The second step is learning to hear the horse's communication and answer it honestly. When it shows discomfort, acknowledge it. When it tries — even imperfectly — reward it. When it needs space, give space. The horse that learns its voice is heard will trust more, try more, and give more.</p>
        <!-- PASTE YOUR ARTICLE VI TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Practical · Article VII',
    title: 'Why Your Horse Does Not Listen to You (Real Reasons Explained)',
    tagline: 'A horse that will not listen is not defying you. It is talking to you.',
    keywords: ['horse not listening','why horse ignores commands','horse training problems'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article VII', html: `
        <p><span class="rd-dropcap">W</span>hen a horse stops listening, the natural human response is to push harder, ask louder, repeat with more force. This is the most natural thing in the world to do. And it is almost always wrong.</p>
        <p>A horse that is not listening is not defying you. It is telling you something. It is saying: I do not understand. Or: I am not ready. Or: I am in pain. Or, most often: I do not trust that what happens next will be safe for me. These are not acts of stubbornness. They are honest messages from an animal that cannot use words.</p>
        <p>In eleven years with horses, I have found three real reasons why horses stop responding. The first is clarity — the horse does not understand what is being asked. The second is physical — there is pain or discomfort. The third is relational — there is not enough trust to try something uncertain. Solve the real problem, and the listening always returns.</p>
        <!-- PASTE YOUR ARTICLE VII TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Practical · Article VIII',
    title: 'How to Calm a Nervous or Anxious Horse',
    tagline: 'You cannot fight a nervous system. You can only offer it something steadier.',
    keywords: ['how to calm a horse','anxious horse behavior','nervous horse training'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article VIII', html: `
        <p><span class="rd-dropcap">Y</span>ou cannot calm a horse by fighting its nervous system. The moment you escalate — raising your voice, tightening your grip, moving faster — you confirm what the horse already feared. Something dangerous is happening. The proof is right there in the person standing beside it.</p>
        <p>To calm an anxious horse, you must first calm yourself. In practice, with a five hundred kilogram animal on the edge of panic, this is one of the hardest things a human being can do. But it is the only thing that works. Horses do not respond to reassuring words. They respond to calm bodies. Your breath rate, your muscle tension, the quality of your stillness — these are the real messages you are sending.</p>
        <p>The method is simple, even if the execution is hard: breathe out. Actively, deliberately, with full awareness. When you exhale, your muscles soften and your heart rate drops. The horse feels this through the rope, through your hand, through the simple quality of your presence. One genuine breath from a genuinely calm body communicates more than an hour of gentle talk.</p>
        <!-- PASTE YOUR ARTICLE VIII TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Practical · Article IX',
    title: 'First Time Handling a Horse: What You Must Know',
    tagline: 'There is no second first meeting. What you bring to that moment, the horse will remember.',
    keywords: ['how to handle a horse for beginners','first time horse tips','horse safety basics'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article IX', html: `
        <p><span class="rd-dropcap">T</span>he first impression you make on a horse is written in its memory with a permanence no later session can fully erase. There is no second first meeting. Everything you bring — your speed, your energy, the tension in your hands, the quality of your breath — the horse will carry forward into every interaction that follows.</p>
        <p>The most important thing to understand before you approach a horse for the first time is this: approach is everything. A horse's entire existence is built around detecting how a predator moves. A human who walks straight at a horse, making direct eye contact, moving fast, is sending a predator signal. The horse's body knows this before its mind has processed a single thought.</p>
        <p>Approach from the side, not the front. Move slowly. A relaxed body with no urgency is a body that is not hunting. Let the horse see you before you are close. Allow it to come the last part of the way toward you. These are not just safety rules. They are the beginning of a conversation.</p>
        <!-- PASTE YOUR ARTICLE IX TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Practical · Article X',
    title: 'Signs Your Horse Trusts You (And Signs It Does Not)',
    tagline: 'Trust in a horse is not invisible. It is a behavior. And behavior can be read.',
    keywords: ['signs a horse trusts you','horse bonding signs','horse trust behavior'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article X', html: `
        <p><span class="rd-dropcap">A</span> horse's trust is not invisible. It is not a feeling you guess at or evaluate in hindsight. Trust, in a horse, is a behavior. And behavior is visible, readable, and honest. When you know what to look for, you will never again wonder whether what you have with your horse is real connection or simply a working arrangement.</p>
        <p>The clearest sign of trust is voluntary approach. A horse that trusts you does not need to be caught. When you enter the field or the stable, it comes to you — not for food, but because your presence is comfortable and wanted. This is the horse saying clearly: I choose to be here with you when I could be anywhere else.</p>
        <p>The second sign is the quality of relaxation in your presence. A horse that trusts you will lower its head when you are near — a gesture of complete physical relaxation from an animal whose survival depends on keeping its head up. The lowered head is a deep exhale. It means: I am safe here. You are enough.</p>
        <!-- PASTE YOUR ARTICLE X TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Unique Edge · Article XI',
    title: 'What Horses Teach Us About Human Behavior',
    tagline: 'Spend enough time with horses and you will learn more about yourself than any mirror can show.',
    keywords: ['what horses teach humans','horse psychology and humans','lessons from horses'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article XI', html: `
        <p><span class="rd-dropcap">A</span> horse has no ego. It has no agenda beyond what is real right now. It cannot pretend. It cannot perform. It can only respond to what is genuinely present. Spend enough time with horses and you will learn more about your real self — not the one you show the world — than any other method of self-understanding can offer.</p>
        <p>What horses teach us above all is that our inner state is not private. We walk through the world believing we can perform competence while feeling inadequate, project calm while being anxious. Horses expose this belief as the comfortable fiction it has always been.</p>
        <p>The horse does not see the performance. It sees what is underneath. It reads the stress in your body, the tiny tensions in your muscles, the quality of your breath. Everything you have learned to hide from other humans, the horse has already read. And then it shows you — honestly, without cruelty — exactly who walked in.</p>
        <!-- PASTE YOUR ARTICLE XI TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Unique Edge · Article XII',
    title: 'To Feel What a Horse Feels: Understanding Presence and Intention',
    tagline: 'Horses live where most humans only visit — fully inside the present moment.',
    keywords: ['horse sensitivity to humans','horse energy and intention','connection with horses'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article XII', html: `
        <p><span class="rd-dropcap">P</span>resence is not a concept. It is not a state you can think your way into. It is a physical reality — the quality of being fully here, fully alive, fully available to what is happening in this exact moment. Horses live in presence permanently. It is not something they achieve. It is simply what they are.</p>
        <p>Most humans have lost the ability to do this. We are almost never fully here. We are partly in the meeting we just left, partly in the obligation ahead. We bring all of this into the arena. The horse feels every bit of it.</p>
        <p>To understand what a horse feels in your presence, try this: stand still beside it, close your eyes, and feel your own body. Feel your breath, your heartbeat, the tensions in your face, your jaw, your hands. Now ask yourself honestly — if your survival depended on reading energy accurately, what would you make of the creature standing beside you?</p>
        <!-- PASTE YOUR ARTICLE XII TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Unique Edge · Article XIII',
    title: 'Why Horses React to Your Mind and Not Just Your Actions',
    tagline: 'Before your hand moves, your mind has already moved. The horse felt it first.',
    keywords: ['do horses sense emotions','horse reaction to humans','horse awareness'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article XIII', html: `
        <p><span class="rd-dropcap">B</span>efore your hand moves, your mind has already moved. Before your leg gives the signal, your intention has already broadcast itself through every muscle, every small shift of weight in your body. A horse does not wait for the action. It reads the intention. By the time you have done something, the horse has already felt it coming.</p>
        <p>This is not telepathy. This is the horse's extraordinary ability to read the tiny signals of a human body with a precision our conscious mind cannot match. When you think about stopping, your body prepares to stop — slightly, invisibly. The horse registers it. When you think about turning, your gaze shifts, your weight shifts. The horse is already turning.</p>
        <p>This means that the quality of your thoughts — the clarity of your intentions, the absence of doubt and inner conflict — is not a philosophical nicety but a real and practical training tool. The horse that seems to read your mind is simply reading your body with more accuracy than you are reading it yourself.</p>
        <!-- PASTE YOUR ARTICLE XIII TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Unique Edge · Article XIV',
    title: 'Silence, Energy, and Movement: The Language Horses Understand',
    tagline: 'There is a language older than words. Horses speak it fluently. Most humans have forgotten it exists.',
    keywords: ['horse communication signals','how horses communicate','non verbal communication horses'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article XIV', html: `
        <p><span class="rd-dropcap">T</span>here is a language older than any human tongue — older than the first word our ancestors ever spoke into the dark. It came before writing, before the moment our species decided everything important must be named. Horses speak it fluently. Most humans have forgotten it exists. Those who work well with horses have simply remembered how to listen.</p>
        <p>This language is made of silence — the quality of stillness, the difference between an animal at rest and a predator waiting to strike. It is made of energy — the felt sense of aliveness in a body, the direction of attention. It is made of movement — not just direction and speed, but the weight and intention behind every step. The confidence or hesitation in a footfall.</p>
        <p>When I teach people to work with horses, I spend the first hour teaching them to be still. Not quiet — still. The quality of your stillness speaks more clearly to a horse than the quality of your voice. A still body with focused attention says: I am here. I am present. I am not going anywhere. This is one of the most reassuring things a human can offer a prey animal that spends its life scanning for threat.</p>
        <!-- PASTE YOUR ARTICLE XIV TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  },

  {
    label: 'Unique Edge · Article XV',
    title: 'The Philosophy of Working with Horses and Not Against Them',
    tagline: 'There are two ways to work with a horse. Only one of them is real.',
    keywords: ['natural horsemanship philosophy','working with horses not against','ethical horse training'],
    pages: [
      { type: 'title' },
      { type: 'text', section: 'Article XV', html: `
        <p><span class="rd-dropcap">T</span>here are two ways to work with a horse. They look similar from the outside — a horse and rider moving together with apparent ease and harmony. But from inside the horse, they feel completely different. And the horse always knows the difference, even when the audience does not.</p>
        <p>The first way is the way of control and management. It is not necessarily cruel. It can be technically correct, professionally delivered, and produce impressive results. But its foundation is the human's agenda, the human's timeline. The horse learns to manage its life within the edges of what is permitted. It may be content. But it is not free.</p>
        <p>The second way is the way of real partnership. It begins not with what you want the horse to do, but with understanding what the horse is. It asks for more curiosity than certainty, more listening than instruction. It produces a horse that is not performing for you — it is participating with you. Partnership requires two willing participants. Everything else, however graceful, is something less.</p>
        <!-- PASTE YOUR ARTICLE XV TEXT HERE AS MORE <p> PARAGRAPHS -->
      `}
    ]
  }

];

/* ══════════════════════════════════════════════════════════════
   READER ENGINE — SCROLL LAYOUT
   All pages stack vertically. Reader scrolls naturally.
   Drop caps use DOM insertion, not innerHTML injection.
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

/* ── Clean text: remove dashes used as dividers, em dashes stay ── */
function cleanText(html) {
  return html
    .replace(/\s*—\s*/g, ' — ')
    .replace(/^\s*[-–]\s*/gm, '')
    .replace(/<span class="rdrop">(.)<\/span>/g, (_, c) => `<span class="rd-dropcap">${c}</span>`);
}

/* ── Build complete scrollable article HTML ── */
function buildArticleHTML(art) {
  let html = '';

  /* TITLE PAGE */
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

  /* PAGES */
  art.pages.forEach((pg, idx) => {
    if (pg.type === 'title') return; /* already built above */

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

/* ── Scroll-based reveal ── */
function initScrollReveal(inner) {
  const scrollEl = inner.querySelector('.rd-scroll-area');
  const blocks = inner.querySelectorAll('.rd-txb-body');
  if (!blocks.length) return;

  /* Immediately reveal all blocks — safe fallback */
  function revealAll() {
    blocks.forEach(b => b.classList.add('rd-revealed'));
  }

  /* Try intersection observer first for smooth reveal */
  if ('IntersectionObserver' in window && scrollEl) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rd-revealed');
        }
      });
    }, { root: scrollEl, threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
    blocks.forEach(b => obs.observe(b));
    /* Still reveal all after short delay as safety net */
    setTimeout(revealAll, 800);
  } else {
    revealAll();
  }
}

/* ── Watermark ── */
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

/* ── Open article ── */
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

  /* scroll to top of panel smoothly */
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
