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

/* ══════════════════════════════════════════════════════════
   ARTICLE DATA — pages[] system
   page types: 'title' | 'section-title' | 'content' | 'closing-quote'
   ══════════════════════════════════════════════════════════ */
const articles = [

  {
    label: 'Foundational · Article I',
    title: 'Understanding Horse Psychology: How Horses Think and Perceive Humans',
    tagline: 'Sixty million years of evolution. One question. Am I safe?',
    keywords: ['horse psychology','how horses think','horse behavior explained','prey animal behavior','equine mindset'],
    pages: [
      { type: 'title' },
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>o feel what a horse feels is to first understand that you are noise. You arrive trailing the scent of purpose, your pockets full of plans, your mind full of what was and what will be. You walk with the heavy step of a predator — an animal that does not need to listen before it moves. To the horse, you are a storm on the horizon. They see the shape of you, but they feel the intention, the hurry, the jagged edges of a mind that never rests. And in your presence, they become what they have always been: a statue carved from a single question — Am I safe?</p>
        <p>To connect with them is to decide to become silent. Not just in your voice, but in your soul. You must let your agenda fall to the dust like a heavy coat. You stand at the edge of their space and learn to simply be. You begin to breathe. Not the shallow, forgotten breaths of a busy life, but deep, slow tides of air that tell every listening cell in their body: you are not a threat. You are just a creature, breathing.</p>
        <p>And that is when the world changes. You stop seeing with your eyes and start feeling with your skin. The wind on your cheek is the same wind in their mane. The earth under your feet is the same earth under theirs. You are no longer a man and a horse. You are two bodies in a field, sharing the same small slice of the world.</p>
      `},
      { type: 'content', html: `
        <p>This is when the mirror appears. The horse begins to show you to yourself. If you carry tension — a tight jaw, a knot of worry in your gut — they will hold their own body tight, their head high, their muscles coiled. They will not come near the storm inside you. If you carry a grief you have refused to face, they will grow still and soft, their dark eye becoming a pool of sorrow that reflects your own. They absorb your truth and show it back without a word of judgment.</p>
        <p>They have lived in fear. They understand the hum of hypervigilance, the way a body becomes a prison of held-back energy. And when they see it in you, they do not run. They recognise it. It is a language they were born speaking.</p>
        <p>The moment of connection is not a grand event. It is a surrender. It is the slow exhale you have been holding for years. It is the horse, feeling that release, letting out its own shuddering sigh in response. It is the quiet step they take toward you — not because you asked, but because you finally became a place of peace. The soft muzzle that touches your arm is a question asked without sound. In that touch, a universe of trust is exchanged. You are no longer a predator. You have been accepted. You are safe, and so are they.</p>
        <p>To walk away from that is to feel the noise of the world rush back in, but you are different now. You carry the stillness of the field inside you. You have learned that the deepest communication requires no words at all — only a shared and silent breath.</p>
      `},
      { type: 'content', html: `
        <p>Every decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is not simply to understand an animal. It is to understand a completely different kind of mind — one built for a world where a single mistake means death, and where reading the world fast is the only thing that matters.</p>
        <p>Horses think in pictures. They think in feelings. They think in the language of energy and intention — so precise, so honest, that it makes human communication look clumsy by comparison. When a horse looks at you, it is not seeing a person. It is reading a pattern of energy. Your tension, your breath, the quality of your stillness, the direction of your gaze. Before you have spoken a word, the horse has already decided what you are.</p>
        <p>This is not mysticism. This is biology. A prey animal that could not read the world fast and accurately did not live long enough to become an ancestor. Every horse alive today is the child of the most perceptive, the most sensitive, the most finely tuned readers that ever lived.</p>
        <p>To work with horses well, you must first accept this: they are not failing to understand you. You are failing to understand them. The horse is reading everything correctly. The question is whether you are giving it anything honest to read.</p>
      `},
      { type: 'section-title', heading: 'How Horses Think', subtext: 'They do not think in words. They think in the truth of this moment.' },
      { type: 'content', html: `
        <p><span class="bcp-drop">H</span>orses do not think in sentences. They do not sort their experience into reasons or explanations. They think in pictures, in feelings, in what is happening right now. A horse scared once by a white plastic bag does not remember that plastic bags are scary. It remembers the exact feeling of that moment — the sudden movement, the crinkle of sound, the rush of fear, the need to run. When it sees another plastic bag, it does not think. It simply feels the same feeling, and the body moves.</p>
        <p>This is not stupidity. This is intelligence so sharp, so finely made, that it has kept horses alive for millions of years. A prey animal that had to stop and think — to figure out whether the sound in the bushes was dangerous or safe — did not survive long enough to have young. The horses that remain are the children of those who felt danger and moved before the thinking mind could catch up.</p>
        <p>You cannot explain to a horse why something is safe. You cannot tell it the needle will help, that the trailer leads somewhere good. The horse reads the world through different eyes. It reads energy. It reads tension. It reads the tiny signals in your body that you do not even know you are sending. Before you move, the horse has already felt your intention to move.</p>
        <p>Your thoughts are not private. Your fear, your anger, your rush, your doubt — all of it shows in your body before you have even noticed it yourself. The horse that seems difficult is often simply giving back exactly what you are giving. The rider who learns to become truly calm — not acting calm, but being calm — finds that the horse changes in that same moment.</p>
      `},
      { type: 'closing-quote', text: 'You cannot teach a horse with words. You can only speak to it with what you are.' },
      { type: 'section-title', heading: 'Horse Behavior Explained', subtext: 'Every behavior is a message. The question is whether you are listening.' },
      { type: 'content', html: `
        <p><span class="bcp-drop">H</span>orse behavior is never random. It is always meaningful. The hard part for humans is that the meaning is often seen through human eyes that have nothing to do with how horses truly experience the world.</p>
        <p>When a horse pins its ears, people say it is angry. When it pulls away, people say it is stubborn. When it spooks, people say it is overreacting. But these are human ideas placed on an animal that does not carry them. A horse is not angry when it pins its ears. It is saying it feels uncomfortable, drawing a line, expressing stress. A horse that pulls away is not stubborn. It is saying clearly: I do not feel safe. A horse that spooks is not overreacting. It is doing exactly what sixty million years of nature built it to do.</p>
        <p>Most problem behaviors are not problems with the horse. They are problems with the relationship, the method, or the human's ability to hear what the horse is saying. A horse that bites was not born mean. It learned that biting is the only message strong enough to make a human stop doing something painful. A horse that will not load is being honest about its fear of tight spaces.</p>
        <p>Stop asking how do I make this horse stop. Start asking what is this horse trying to tell me. Because once you understand what it is saying, the behavior often resolves on its own. Horses are not machines. They grieve. They play. They love. The rider who sees the horse as it truly is finds that it offers far more than obedience. It offers real partnership. And that, when it is real, changes everything.</p>
      `},
      { type: 'closing-quote', text: 'The horse that misbehaves is not the problem. It is the question. And the answer always begins with you.' },
      { type: 'section-title', heading: 'Prey Animal Behavior', subtext: 'To understand the horse, you must first understand what it means to be hunted.' },
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>o understand a horse, you must first understand what it means to be prey.</p>
        <p>A predator can take chances. It has time to watch, to think, to decide. A prey animal does not have this time. For a horse, waiting can mean death. A horse that pauses to figure out whether the movement in the grass is wind or a lion does not live long enough to make better choices. The horses whose bloodlines carry on today are the ones that ran first and asked questions later. They trusted their gut. They turned fear into fast movement. They treated every new thing as dangerous until proven safe.</p>
        <p>This history lives in every horse you will ever meet. The horse that spooks at a plastic bag is not being stupid. It is being a horse. The horse that will not walk past the dark corner is not stubborn. It is listening to a feeling that has kept its family alive for millions of years.</p>
        <p>The flight response is not a flaw. When a horse feels danger, its body moves in split seconds. Heart rate spikes. Fear floods the system. Muscles tighten. The brain drops everything else and asks one question: where is the exit? You cannot reason with a nervous system in survival mode. But you can become the thing the horse trusts more than it fears the unknown. You can be so steady, so calm, so consistent, that your presence becomes safety rather than stress. The horseman who fights the prey animal nature will fight forever. The horseman who works with it finds that fear is not a wall. It is simply information. And when that information is truly heard, the horse can finally let go.</p>
      `},
      { type: 'closing-quote', text: 'Fear in a horse is not a fault. It is a memory older than language — and it deserves your respect, not your frustration.' },
      { type: 'section-title', heading: 'Equine Mindset', subtext: 'The horse lives where most humans only visit — fully inside the present moment.' },
      { type: 'content', html: `
        <p><span class="bcp-drop">A</span> horse lives in the present moment with a fullness that most humans will never know. It is not worrying about tomorrow. It is not replaying yesterday. It is here — now — fully alive in this breath, this step, this meeting. This is not wisdom. This is simply what it means to be a horse.</p>
        <p>The equine mindset is built on a few basic truths. Safety comes first. Connection to the herd matters deeply. Movement is life. Trust must be earned. And the quality of your presence matters far more than any word you speak.</p>
        <p>When you walk toward a horse, it is reading you before you are ten feet away. Are you calm or worried? Sure or unsure? Present or somewhere else entirely? The horse does not care what you say. It cares what you are. And if what you are is scattered, tight, or disconnected, the horse will show that back to you with perfect honesty. This is why horsemanship is as much about knowing yourself as it is about knowing horses. You cannot hide from a horse. You cannot fake being present. The horse knows. It always knows.</p>
        <p>Horses do not hold grudges. They do not replay past hurts. If you make a mistake, if you lose your temper, if you handle something badly — the horse will give you another chance. It will meet you fresh in the next moment, willing to try again, as long as you are willing to be honest. This is the gift horses offer. Their complete, uncompromising honesty. They show us who we are. They teach us that the quality of the connection depends entirely on the quality of what we bring. And in teaching us that, they teach us something far more valuable than horsemanship. They teach us how to be human.</p>
      `},
      { type: 'closing-quote', text: 'The horse does not ask you to be perfect. It only asks you to be real. And in being real, you become, at last, someone worth trusting.' }
    ]
  },

  {
    label: 'Foundational · Article II',
    title: 'Prey Animal Instincts in Horses: Why Fear Shapes Everything',
    tagline: 'The flight response is not a flaw. It is sixty million years of wisdom.',
    keywords: ['prey animal instincts horse','why horses are fearful','horse survival behavior','flight response in horses','equine instincts'],
    pages: [
      { type: 'title' },
      { type: 'content', html: `
        <p><span class="bcp-drop">F</span>ear is not a character flaw in a horse. It is the most finely built survival system ever created by sixty million years of nature. When a horse spooks at a plastic bag, it is not being stupid. It is being exactly what it was made to be — a creature whose life depends on treating the unfamiliar as dangerous until proven otherwise.</p>
        <p>The flight response is not a behavior problem. It is a nervous system working perfectly. The question for the horseman is never how to remove that response. You cannot, and you should not try. The question is how to become the thing the horse trusts more than it fears the unknown.</p>
        <p>When you understand the biology — how the fear center fires before the thinking brain has time to process, how stress chemicals flood the body in milliseconds, how the entire horse prepares for escape in the time it takes you to blink — you stop being frustrated by fear. You start having real compassion for what the horse is living through.</p>
        <div class="art-placeholder">Full article coming soon.</div>
      `}
    ]
  },

  {
    label: 'Foundational · Article III',
    title: 'Trust vs Control in Horse Training: What Actually Works',
    tagline: 'Control gives you obedience. Trust gives you a horse that chooses you.',
    keywords: ['horse training trust vs control','how to build trust with a horse','natural horsemanship basics','trust based training','horse behavior training methods'],
    pages: [
      { type: 'title' },
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>here is a question every horseman must eventually answer — not with words, but with choices made in the arena every single day. Do you want to control your horse, or do you want to be trusted by it? These are not the same goal. They do not produce the same horse. And they do not ask the same things of you as a person.</p>
        <p>Control gives you a horse that obeys when it cannot escape. Trust gives you a horse that chooses to be with you when all the exits are open. I have spent eleven years learning the difference. Only one of these is real horsemanship. The other looks like it from the outside, but has a hollow sound when you knock on it.</p>
        <p>The horse that is controlled knows where the boundary is. The horse that trusts you has no desire to find the boundary, because it has no desire to leave. One is managing its captivity. The other has chosen its companionship.</p>
        <div class="art-placeholder">Full article coming soon.</div>
      `}
    ]
  },

  {
    label: 'Foundational · Article IV',
    title: 'How to Read a Horse\'s Body Language (Beginner to Advanced)',
    tagline: 'Every flick of an ear is a sentence. Learn to read the language.',
    keywords: ['horse body language','how to read horses','horse signals meaning','horse ears meaning','horse tail signals','signs of stress in horses'],
    pages: [
      { type: 'title' },
      { type: 'content', html: `
        <p><span class="bcp-drop">H</span>orses speak in the language of the body — constantly, precisely, and honestly. They do not have the human ability to say one thing while meaning another. Every ear position, every muscle, every shift of weight, every flick of the tail is a sentence in a language that has no room for deception. Learning to read it is the single most important skill a horseman can develop.</p>
        <p>The ears are the most readable part of a horse. Forward means interest and focus. Pinned flat back means pain, deep irritation, or a clear warning. Soft and relaxed to the side means calm and comfortable. One forward, one back means the horse is splitting its attention between two things — a skill humans can only envy.</p>
        <p>Below the ears, read the eyes. A soft, rounded eye with relaxed muscles around it means calm. A hard, tight eye with white showing at the edges means fear or anger. The jaw, the mouth, the lips — all of it carries information that a horseman learns to read the way a musician reads notes.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">M</span>ost horses do not have problems. Most horses have people — people with tension they are not aware of, with plans the horse can feel but not understand, with expectations that have nothing to do with the horse's reality in this moment. The horse is doing the most honest thing it can: showing you exactly what you are giving it.</p>
        <p>The most common mistake I see — from beginners and experienced riders alike — is bringing the wrong quality of presence to the encounter. They arrive carrying the weight of their day. The argument, the deadline, the anxiety about the session itself. They walk into the arena full of noise, and then they are confused when the horse does not settle.</p>
        <p>A horse does not separate you from your context. It reads the whole of you — the tightness in your jaw, the speed of your breath, the quality of your step. When you are scattered, the horse is scattered. When you are tense, the horse is tense. This is not the horse being difficult. This is the horse being honest.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>rust between a human and a horse is not a feeling. It is a behavior. And like all behavior, it is built through repetition — through a thousand small moments where you did what you said you would, where you did not punish what you could not understand, where you stayed when it would have been easier to leave.</p>
        <p>The first step is deceptively simple: stop trying to earn trust and start being trustworthy. Trying to earn trust is a performance. Being trustworthy requires only one thing: consistency. The horse that sees the same person every single time, no matter how the session is going, learns that this person is safe. And safety is the foundation of everything.</p>
        <p>The second step is learning to hear the horse's communication and answer it honestly. When it shows discomfort, acknowledge it. When it tries — even imperfectly — reward it. When it needs space, give space. The horse that learns its voice is heard will trust more, try more, and give more.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">W</span>hen a horse stops listening, the natural human response is to push harder, ask louder, repeat with more force. This is the most natural thing in the world to do. And it is almost always wrong.</p>
        <p>A horse that is not listening is not defying you. It is telling you something. It is saying: I do not understand. Or: I am not ready. Or: I am in pain. Or, most often: I do not trust that what happens next will be safe for me. These are not acts of stubbornness. They are honest messages from an animal that cannot use words.</p>
        <p>In eleven years with horses, I have found three real reasons why horses stop responding. The first is clarity — the horse does not understand what is being asked. The second is physical — there is pain or discomfort. The third is relational — there is not enough trust to try something uncertain. Solve the real problem, and the listening always returns.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">Y</span>ou cannot calm a horse by fighting its nervous system. The moment you escalate — raising your voice, tightening your grip, moving faster — you confirm what the horse already feared. Something dangerous is happening. The proof is right there in the person standing beside it.</p>
        <p>To calm an anxious horse, you must first calm yourself. In practice, with a five hundred kilogram animal on the edge of panic, this is one of the hardest things a human being can do. But it is the only thing that works. Horses do not respond to reassuring words. They respond to calm bodies. Your breath rate, your muscle tension, the quality of your stillness — these are the real messages you are sending.</p>
        <p>The method is simple, even if the execution is hard: breathe out. Actively, deliberately, with full awareness. When you exhale, your muscles soften and your heart rate drops. The horse feels this through the rope, through your hand, through the simple quality of your presence. One genuine breath from a genuinely calm body communicates more than an hour of gentle talk.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>he first impression you make on a horse is written in its memory with a permanence no later session can fully erase. There is no second first meeting. Everything you bring — your speed, your energy, the tension in your hands, the quality of your breath — the horse will carry forward into every interaction that follows.</p>
        <p>The most important thing to understand before you approach a horse for the first time is this: approach is everything. A horse's entire existence is built around detecting how a predator moves. A human who walks straight at a horse, making direct eye contact, moving fast, is sending a predator signal. The horse's body knows this before its mind has processed a single thought.</p>
        <p>Approach from the side, not the front. Move slowly. A relaxed body with no urgency is a body that is not hunting. Let the horse see you before you are close. Allow it to come the last part of the way toward you. These are not just safety rules. They are the beginning of a conversation.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">A</span> horse's trust is not invisible. It is not a feeling you guess at or evaluate in hindsight. Trust, in a horse, is a behavior. And behavior is visible, readable, and honest. When you know what to look for, you will never again wonder whether what you have with your horse is real connection or simply a working arrangement.</p>
        <p>The clearest sign of trust is voluntary approach. A horse that trusts you does not need to be caught. When you enter the field or the stable, it comes to you — not for food, but because your presence is comfortable and wanted. This is the horse saying clearly: I choose to be here with you when I could be anywhere else.</p>
        <p>The second sign is the quality of relaxation in your presence. A horse that trusts you will lower its head when you are near — a gesture of complete physical relaxation from an animal whose survival depends on keeping its head up. The lowered head is a deep exhale. It means: I am safe here. You are enough.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">A</span> horse has no ego. It has no agenda beyond what is real right now. It cannot pretend. It cannot perform. It can only respond to what is genuinely present. Spend enough time with horses and you will learn more about your real self — not the one you show the world — than any other method of self-understanding can offer.</p>
        <p>What horses teach us above all is that our inner state is not private. We walk through the world believing we can perform competence while feeling inadequate, project calm while being anxious, show confidence while being afraid. Horses expose this belief as the comfortable fiction it has always been.</p>
        <p>The horse does not see the performance. It sees what is underneath. It reads the stress in your body, the tiny tensions in your muscles, the quality of your breath, the rhythm of your heartbeat. Everything you have learned to hide from other humans, the horse has already read. And then it shows you — honestly, without cruelty — exactly who walked in.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">P</span>resence is not a concept. It is not a state you can think your way into. It is a physical reality — the quality of being fully here, fully alive, fully available to what is happening in this exact moment. Horses live in presence permanently. It is not something they achieve. It is simply what they are.</p>
        <p>Most humans have lost the ability to do this. We are almost never fully here. We are partly in the meeting we just left, partly in the obligation ahead, partly in the story we tell ourselves about whether we are doing it right. We bring all of this into the arena. The horse feels every bit of it.</p>
        <p>To understand what a horse feels in your presence, try this: stand still beside it, close your eyes, and feel your own body. Feel your breath, your heartbeat, the tensions in your face, your jaw, your hands. Now ask yourself honestly — if your survival depended on reading energy accurately, what would you make of the creature standing beside you?</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">B</span>efore your hand moves, your mind has already moved. Before your leg gives the signal, your intention has already broadcast itself through every muscle, every small shift of weight in your body. A horse does not wait for the action. It reads the intention. By the time you have done something, the horse has already felt it coming.</p>
        <p>This is not telepathy. This is the horse's extraordinary ability to read the tiny signals of a human body with a precision our conscious mind cannot match. When you think about stopping, your body prepares to stop — slightly, invisibly. The horse registers it. When you think about turning, your gaze shifts, your weight shifts. The horse is already turning.</p>
        <p>This means that the quality of your thoughts — the clarity of your intentions, the absence of doubt and inner conflict — is not a philosophical nicety but a real and practical training tool. The horse that seems to read your mind is simply reading your body with more accuracy than you are reading it yourself.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>here is a language older than any human tongue — older than the first word our ancestors ever spoke into the dark. It came before writing, before the moment our species decided everything important must be named. Horses speak it fluently. Most humans have forgotten it exists. Those who work well with horses have simply remembered how to listen.</p>
        <p>This language is made of silence — the quality of stillness, the difference between an animal at rest and a predator waiting to strike. It is made of energy — the felt sense of aliveness in a body, the direction of attention. It is made of movement — not just direction and speed, but the weight and intention behind every step. The confidence or hesitation in a footfall. The giving or taking quality of an approach.</p>
        <p>When I teach people to work with horses, I spend the first hour teaching them to be still. Not quiet — still. The quality of your stillness speaks more clearly to a horse than the quality of your voice. A still body with focused attention says: I am here. I am present. I am not going anywhere. This is one of the most reassuring things a human can offer a prey animal that spends its life scanning for threat.</p>
        <div class="art-placeholder">Full article coming soon.</div>
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
      { type: 'content', html: `
        <p><span class="bcp-drop">T</span>here are two ways to work with a horse. They look similar from the outside — a horse and rider moving together with apparent ease and harmony. But from inside the horse, they feel completely different. And the horse always knows the difference, even when the audience does not.</p>
        <p>The first way is the way of control and management. It is not necessarily cruel. It can be technically correct, professionally delivered, and produce impressive results. But its foundation is the human's agenda, the human's timeline. The horse learns to manage its life within the edges of what is permitted. It may be content. But it is not free.</p>
        <p>The second way is the way of real partnership. It begins not with what you want the horse to do, but with understanding what the horse is. It asks for more curiosity than certainty, more listening than instruction. It produces a horse that is not performing for you — it is participating with you. Partnership requires two willing participants. Everything else, however graceful, is something less.</p>
        <div class="art-placeholder">Full article coming soon.</div>
      `}
    ]
  }

];


/* ══════════════════════════════════════════════════════════
   BOOK PAGE-TURN ENGINE
   ══════════════════════════════════════════════════════════ */
const panel = document.getElementById('articlePanel');
let openArticleIndex = -1;
let currentBookPage = 0;

/* ── Build horse SVG ── */
const HORSE_SVG = `<svg viewBox="0 0 300 340" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;">
  <g fill="none" stroke="#E8C84A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.15">
    <path d="M150 60 Q138 75 132 95 Q127 112 132 128 Q137 142 148 148 Q158 154 168 148 Q178 140 180 125 Q182 108 176 92 Q170 76 158 63 Q154 59 150 60Z"/>
    <path d="M132 95 Q120 88 108 82 Q96 77 88 82 Q82 88 86 98 Q92 106 104 108 Q116 110 128 105"/>
    <path d="M176 92 Q188 86 200 82 Q212 78 218 84 Q222 92 216 100 Q208 108 196 108 Q184 108 176 102"/>
    <path d="M148 148 Q140 165 136 185 Q133 200 135 215 Q137 228 142 232"/>
    <path d="M168 148 Q174 165 176 185 Q178 200 175 215 Q172 228 168 234"/>
    <path d="M142 232 Q138 248 136 265 Q134 280 138 288"/>
    <path d="M168 234 Q172 250 172 267 Q172 282 168 290"/>
    <path d="M136 265 Q132 282 130 298 Q128 312 132 320"/>
    <path d="M172 267 Q174 284 174 300 Q174 315 170 323"/>
    <path d="M88 82 Q76 72 65 62 Q56 53 54 42 Q53 32 60 28 Q68 25 76 30 Q84 36 88 46 Q92 58 88 72"/>
    <path d="M150 60 Q148 47 146 34 Q144 20 140 10"/>
    <path d="M155 58 Q160 48 166 38 Q172 28 176 22"/>
  </g>
</svg>`;

const CONSTELL_SVG = `<svg viewBox="0 0 500 600" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%;opacity:0.06;pointer-events:none;">
  <g stroke="#E8C84A" stroke-width="0.5" fill="none">
    <circle cx="80" cy="90" r="1.5" fill="#E8C84A"/><circle cx="160" cy="55" r="1.2" fill="#E8C84A"/>
    <circle cx="280" cy="75" r="1.8" fill="#E8C84A"/><circle cx="390" cy="45" r="1.2" fill="#E8C84A"/>
    <circle cx="420" cy="130" r="1.5" fill="#E8C84A"/><circle cx="45" cy="210" r="1" fill="#E8C84A"/>
    <circle cx="55" cy="480" r="1.2" fill="#E8C84A"/><circle cx="140" cy="530" r="1" fill="#E8C84A"/>
    <circle cx="360" cy="510" r="1.5" fill="#E8C84A"/><circle cx="440" cy="460" r="1.2" fill="#E8C84A"/>
    <circle cx="240" cy="555" r="1" fill="#E8C84A"/>
    <line x1="80" y1="90" x2="160" y2="55"/><line x1="160" y1="55" x2="280" y2="75"/>
    <line x1="280" y1="75" x2="390" y2="45"/><line x1="390" y1="45" x2="420" y2="130"/>
    <line x1="55" y1="480" x2="140" y2="530"/><line x1="140" y1="530" x2="240" y2="555"/>
    <line x1="360" y1="510" x2="440" y2="460"/><line x1="240" y1="555" x2="360" y2="510"/>
  </g>
</svg>`;

function buildTitlePageHTML(article) {
  return `<div class="br-page br-title-page" data-page="0">
    ${CONSTELL_SVG}
    ${HORSE_SVG}
    <div class="btp-border">
      <div class="btp-corner tl"></div><div class="btp-corner tr"></div>
      <div class="btp-corner bl"></div><div class="btp-corner br"></div>
    </div>
    <div class="btp-top">
      <div class="btp-eyebrow">${article.label}</div>
      <div class="btp-gem-row"><div class="btp-gline"></div><div class="btp-gem"></div><div class="btp-gline"></div></div>
      <div class="btp-title">${article.title}</div>
      <div class="btp-rule"></div>
      <div class="btp-tags">${article.keywords.map(k=>`<span class="btp-tag">${k}</span>`).join('')}</div>
    </div>
    <div class="btp-bottom">
      <div class="btp-tagline">${article.tagline}</div>
      <div class="btp-byline">The Horseman's Journal · Praveen Kumar</div>
    </div>
    <div class="btp-curl" data-goto="1">
      <div class="btp-curl-label">Begin Reading →</div>
      <svg class="btp-curl-svg" viewBox="0 0 40 40" fill="none"><path d="M40 40 Q22 40 20 20 Q18 2 0 0 L40 0 Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.5)" stroke-width="0.8"/><circle cx="24" cy="24" r="2" fill="rgba(212,175,55,0.8)"/></svg>
    </div>
  </div>`;
}

function buildSectionTitleHTML(page, idx) {
  return `<div class="br-page br-section-title-page" data-page="${idx}" style="display:none;">
    ${HORSE_SVG}
    <div class="btp-border">
      <div class="btp-corner tl"></div><div class="btp-corner tr"></div>
      <div class="btp-corner bl"></div><div class="btp-corner br"></div>
    </div>
    <div class="bstp-content">
      <div class="bstp-rule-top"></div>
      <div class="bstp-eyebrow">Section</div>
      <div class="btp-gem-row"><div class="btp-gline"></div><div class="btp-gem"></div><div class="btp-gline"></div></div>
      <div class="bstp-heading">${page.heading}</div>
      <div class="bstp-rule-bottom"></div>
      <div class="bstp-subtext">${page.subtext}</div>
    </div>
    <div class="btp-curl" data-goto="${idx+1}">
      <div class="btp-curl-label">Continue →</div>
      <svg class="btp-curl-svg" viewBox="0 0 40 40" fill="none"><path d="M40 40 Q22 40 20 20 Q18 2 0 0 L40 0 Z" fill="rgba(212,175,55,0.1)" stroke="rgba(212,175,55,0.5)" stroke-width="0.8"/><circle cx="24" cy="24" r="2" fill="rgba(212,175,55,0.8)"/></svg>
    </div>
  </div>`;
}

function buildContentPageHTML(page, idx, total) {
  const hasPrev = idx > 0;
  const hasNext = idx < total - 1;
  return `<div class="br-page br-content-page" data-page="${idx}" style="display:none;">
    <div class="bcp-lines"></div>
    <div class="bcp-wm">${String.fromCharCode(64 + idx)}</div>
    <div class="bcp-body">${page.html}</div>
    <div class="bcp-nav">
      ${hasPrev ? `<div class="bcp-btn bcp-prev" data-goto="${idx-1}">← Back</div>` : '<div></div>'}
      <div class="bcp-pnum">${idx + 1}</div>
      ${hasNext ? `<div class="bcp-btn bcp-next" data-goto="${idx+1}">Next →</div>` : '<div></div>'}
    </div>
  </div>`;
}

function buildClosingQuoteHTML(page, idx, total) {
  const hasNext = idx < total - 1;
  return `<div class="br-page br-quote-page" data-page="${idx}" style="display:none;">
    <div class="bcp-lines"></div>
    <div class="bqp-inner">
      <div class="bqp-top-rule"></div>
      <div class="btp-gem-row"><div class="btp-gline"></div><div class="btp-gem"></div><div class="btp-gline"></div></div>
      <div class="bqp-text">${page.text}</div>
      <div class="btp-gem-row"><div class="btp-gline"></div><div class="btp-gem"></div><div class="btp-gline"></div></div>
      <div class="bqp-bottom-rule"></div>
      <div class="bqp-byline">— Praveen Kumar · The Horseman's Journal</div>
    </div>
    <div class="bcp-nav">
      <div class="bcp-btn bcp-prev" data-goto="${idx-1}">← Back</div>
      <div class="bcp-pnum">${idx + 1}</div>
      ${hasNext ? `<div class="bcp-btn bcp-next" data-goto="${idx+1}">Next →</div>` : '<div></div>'}
    </div>
  </div>`;
}

function buildBookHTML(article) {
  const inner = panel.querySelector('.art-panel-inner');
  inner.style.userSelect = 'none';
  inner.style.webkitUserSelect = 'none';
  inner.style.msUserSelect = 'none';

  const total = article.pages.length;
  let pagesHTML = '';

  article.pages.forEach((page, idx) => {
    if (page.type === 'title') {
      pagesHTML += buildTitlePageHTML(article);
    } else if (page.type === 'section-title') {
      pagesHTML += buildSectionTitleHTML(page, idx);
    } else if (page.type === 'content') {
      pagesHTML += buildContentPageHTML(page, idx, total);
    } else if (page.type === 'closing-quote') {
      pagesHTML += buildClosingQuoteHTML(page, idx, total);
    }
  });

  inner.innerHTML = `
    <button class="art-close" id="artClose" aria-label="Close"></button>
    <canvas id="wmCanvas" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.032;border-radius:3px;"></canvas>
    <div class="book-reader" id="bookReader">${pagesHTML}</div>
    <div class="br-dots" id="brDots"></div>
  `;

  inner.querySelector('#artClose').addEventListener('click', closeArticle);

  /* click delegation for page turns */
  inner.querySelector('#bookReader').addEventListener('click', e => {
    const curl = e.target.closest('[data-goto]');
    if (curl) {
      const to = parseInt(curl.dataset.goto);
      if (!isNaN(to)) turnToPage(to);
    }
  });

  inner.querySelector('#brDots').addEventListener('click', e => {
    const dot = e.target.closest('.br-dot[data-goto]');
    if (dot) turnToPage(parseInt(dot.dataset.goto));
  });

  drawWatermark();
  new ResizeObserver(drawWatermark).observe(inner);
  updateDots(total);

  /* ink reveal on first content page if it is page 0 */
  const firstContent = inner.querySelector('.br-content-page[data-page="0"]');
  if (firstContent) initInkReveal(firstContent);
}

function turnToPage(to) {
  const reader = document.getElementById('bookReader');
  if (!reader) return;
  const pages = reader.querySelectorAll('.br-page');
  if (to < 0 || to >= pages.length) return;

  const currentEl = reader.querySelector(`.br-page[data-page="${currentBookPage}"]`);
  const nextEl = reader.querySelector(`.br-page[data-page="${to}"]`);
  if (!nextEl || currentEl === nextEl) return;

  const goingForward = to > currentBookPage;

  if (currentEl) {
    currentEl.classList.add(goingForward ? 'br-exit-left' : 'br-exit-right');
    setTimeout(() => {
      currentEl.style.display = 'none';
      currentEl.classList.remove('br-exit-left', 'br-exit-right');
    }, 420);
  }

  setTimeout(() => {
    nextEl.style.display = 'flex';
    nextEl.classList.add(goingForward ? 'br-enter-right' : 'br-enter-left');
    setTimeout(() => nextEl.classList.remove('br-enter-right', 'br-enter-left'), 480);
    currentBookPage = to;
    updateDots(reader.querySelectorAll('.br-page').length);
    if (nextEl.classList.contains('br-content-page') || nextEl.classList.contains('br-quote-page')) {
      initInkReveal(nextEl);
    }
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 180);
}

function updateDots(total) {
  const dotsEl = document.getElementById('brDots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'br-dot' + (i === currentBookPage ? ' active' : '');
    d.dataset.goto = i;
    dotsEl.appendChild(d);
  }
}

function drawWatermark() {
  const canvas = document.getElementById('wmCanvas');
  if (!canvas) return;
  const inner = panel.querySelector('.art-panel-inner');
  if (!inner) return;
  const W = inner.offsetWidth, H = inner.offsetHeight;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  ctx.font = '600 12px Cinzel, serif';
  ctx.fillStyle = '#c9a030';
  const texts = ["The Horseman's Journal", "Praveen Kumar"];
  for (let y = -200; y < H + 200; y += 88) {
    for (let x = -200; x < W + 200; x += 260) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-Math.PI / 6);
      ctx.fillText(texts[Math.floor((x + y) / 88) % 2], 0, 0);
      ctx.restore();
    }
  }
}

function initInkReveal(container) {
  if (!container) return;
  container.querySelectorAll('p').forEach(p => {
    if (p.dataset.inked) return;
    p.dataset.inked = '1';
    p.innerHTML = p.innerHTML.replace(/(\S+)/g, '<span class="ink-word">$1</span>');
  });
  setTimeout(() => {
    container.querySelectorAll('.ink-word:not(.ink-on)').forEach((w, i) => {
      setTimeout(() => w.classList.add('ink-on'), i * 7);
    });
  }, 60);
}

function openArticle(i) {
  const a = articles[i];
  openArticleIndex = i;
  currentBookPage = 0;

  const inner = panel.querySelector('.art-panel-inner');
  inner.innerHTML = '';
  panel.classList.add('open');

  buildBookHTML(a);

  panel.addEventListener('contextmenu', e => e.preventDefault(), { once: false });

  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
}

function closeArticle() {
  panel.classList.remove('open');
  openArticleIndex = -1;
  currentBookPage = 0;
}

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
    if (openArticleIndex === i) { closeArticle(); return; }
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
