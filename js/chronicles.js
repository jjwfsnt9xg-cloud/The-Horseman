// Chronicles - The Horseman's Journal
// 15 Complete Articles - No dashes, full content

const articlesData = [
  // ARTICLE 1 - Book 1: Horse Psychology
  {
    label: "Foundational",
    title: "Understanding Horse Psychology: How Horses Think and Perceive Humans",
    keywords: ["horse psychology", "how horses think", "equine mindset"],
    content: `<p class="dropcap">Every decision a horse makes is filtered through sixty million years of prey animal evolution. To understand a horse is to understand a mind that never stops watching, never stops reading, and never stops preparing for the moment everything changes.</p>
    
    <p>The horse brain is wired differently than the human brain. While humans are predators who look for patterns and opportunities, horses are prey animals designed to detect threats before they become dangerous. This fundamental difference shapes every interaction you will ever have with a horse.</p>
    
    <div class="blockquote">A horse does not ask what you want. It asks what you are. And it asks this question with every fiber of its being, every second you are near it.</div>
    
    <p>Horses perceive humans through a lens of constant risk assessment. They notice your breathing, your heart rate, the tension in your shoulders, the direction of your gaze. Before you have taken three steps toward a horse, it has already decided whether you are safe or dangerous.</p>
    
    <p>Understanding this changes everything. When you realize that a horse is not being stubborn or difficult, but is simply trying to survive, your entire approach transforms. You stop asking why the horse resists and start asking what the horse perceives as a threat.</p>
    
    <p>The most important truth about horse psychology is this: horses do not generalize well. What they learn in one context does not automatically transfer to another context. A horse that loads calmly into a trailer at home may refuse completely at a competition. This is not disobedience. This is a prey animal's survival instinct responding to a new environment.</p>
    
    <p>Working with horse psychology means accepting that you must teach the same lesson in many different places, under many different conditions, until the horse truly understands. This takes time. But the result is a horse that thinks, not just a horse that reacts.</p>`
  },
  
  // ARTICLE 2 - Book 2: Prey Animal Instincts
  {
    label: "Foundational",
    title: "Prey Animal Instincts in Horses: Why Fear Shapes Everything",
    keywords: ["prey animal instincts", "flight response", "horse fear triggers"],
    content: `<p class="dropcap">Fear is not a character flaw in a horse. It is the most sophisticated survival system ever built by nature. A horse that never felt fear would not survive a week in the wild. When you understand why a horse is afraid, you stop fighting fear and start working with it.</p>
    
    <p>The flight response is the horse's primary defense mechanism. Unlike predators who fight or freeze, horses run. Their bodies are built for speed and endurance. Their minds are built for rapid threat detection and immediate escape planning.</p>
    
    <div class="blockquote">A horse can go from calm to full flight in less than a second. This is not a problem to be fixed. This is survival hardware that has worked for sixty million years.</div>
    
    <p>What triggers fear in horses? Sudden movements. Unexpected sounds. Unfamiliar objects. Changes in pressure. Conflicting signals from a handler. A horse that feels trapped will escalate its fear response. A horse that sees an escape route will generally choose it over confrontation.</p>
    
    <p>Understanding fear triggers allows you to prevent fear responses before they happen. This is the foundation of low stress training. Instead of waiting for the horse to become afraid and then calming it down, you arrange the environment and your approach so the horse never needs to become afraid in the first place.</p>
    
    <p>When fear does occur, the worst thing you can do is increase pressure. The horse's brain literally cannot process learning when it is in a fear state. The best thing you can do is reduce pressure, create space, and allow the horse to return to a thinking state. Only then can learning resume.</p>
    
    <p>This does not mean you never challenge a horse. It means you challenge at the right level, at the right time, and always with an escape route available. A horse that knows it can leave is a horse that will stay by choice.</p>`
  },
  
  // ARTICLE 3 - Book 3: Trust vs Control
  {
    label: "Foundational",
    title: "Trust Versus Control in Horse Training: What Actually Works",
    keywords: ["trust vs control", "natural horsemanship", "horse training philosophy"],
    content: `<p class="dropcap">Control gives you a horse that obeys when it cannot escape. Trust gives you a horse that chooses to be with you when all exits are open. Only one of these is real horsemanship. The other is simply managing a captive animal.</p>
    
    <p>Most traditional training methods rely on control. They use pressure, repetition, and the limitation of options to produce a desired behavior. These methods work in the sense that they produce results. But they produce compliance, not partnership.</p>
    
    <div class="blockquote">The horse that obeys because it has no choice is not truly trained. It is simply waiting for an opportunity to choose differently.</div>
    
    <p>Trust based training is slower in the beginning. You spend time building relationship before building skills. You allow the horse to make mistakes and learn from them. You reward willingness even when the execution is imperfect.</p>
    
    <p>The result of trust based training is a horse that offers effort. A horse that tries. A horse that looks to you for guidance rather than looking for an escape route. This horse is not just trained. This horse is educated.</p>
    
    <p>The shift from control to trust requires something difficult from the human. It requires letting go of the need to be right. It requires accepting that the horse's perspective matters. It requires admitting that you do not always know best.</p>
    
    <p>When you make this shift, everything changes. The horse stops watching for your next correction and starts watching for your next request. The relationship becomes a conversation instead of a command structure. And in that conversation, real learning happens on both sides of the lead rope.</p>`
  },
  
  // ARTICLE 4 - Book 4: Body Language
  {
    label: "Foundational",
    title: "How to Read a Horse's Body Language from Beginner to Advanced",
    keywords: ["horse body language", "horse ears meaning", "signs of stress horses"],
    content: `<p class="dropcap">Horses speak in the language of the body, constantly, precisely, and honestly. Every ear position, every muscle twitch, every shift of weight is a sentence. Learning to read this language is the first step toward genuine communication with horses.</p>
    
    <p>The ears are your primary indicator of where the horse's attention is focused. Ears forward means the horse is interested in something ahead. Ears back can mean concentration, irritation, or threat depending on the context and accompanying signals. Ears to the side means the horse is relaxed or sleeping. One ear forward and one ear back means the horse is listening in two directions at once.</p>
    
    <div class="blockquote">A horse that is truly relaxed will have a soft eye, a lowered head, and a slight cocking of one hind leg. This is the horse's neutral state. Learn to recognize it. It is your baseline for everything else.</div>
    
    <p>The tail tells you about the horse's emotional state. A tail that is clamped down tight indicates fear or tension. A tail that is swishing vigorously indicates irritation or frustration. A tail that is held slightly away from the body with gentle movement indicates a relaxed but aware horse.</p>
    
    <p>Facial expressions matter more than most people realize. A horse that is worried will show tension around the eyes and muzzle. The nostrils may become flared. The muzzle may become tight. A relaxed horse has a soft eye, a relaxed muzzle, and may even close its eyes partially when at ease.</p>
    
    <p>Body posture tells you everything about the horse's intention. A horse that is about to flee will coil its muscles, raise its head, and point its ears toward the perceived threat. A horse that is about to fight will lower its head, pin its ears flat, and possibly show its teeth. A horse that is curious will stretch its neck forward with ears pricked and nostrils wide.</p>
    
    <p>Reading body language is a skill that takes years to develop. Start with the obvious signals and gradually work toward subtlety. The more you watch, the more you will see. And what you see will prevent problems before they ever begin.</p>`
  },
  
  // ARTICLE 5 - Book 5: Common Human Mistakes
  {
    label: "Foundational",
    title: "Common Human Mistakes with Horses and Why Horses React",
    keywords: ["mistakes in horse training", "why horses misbehave", "training mistakes beginners"],
    content: `<p class="dropcap">Most horses do not have problems. Most horses have people with problems that the horse is simply reflecting back. Understanding what we do wrong is the most useful education a horseman can receive.</p>
    
    <p>The first common mistake is inconsistency. One day you allow the horse to graze while leading. The next day you correct it. The horse cannot read your mind. It only knows that the rules keep changing, and this creates confusion, which creates anxiety, which creates unwanted behaviour.</p>
    
    <div class="blockquote">A horse does not misbehave to spite you. It misbehaves because your signals are unclear, because it is afraid, or because it has learned that misbehaving works.</div>
    
    <p>The second mistake is escalating pressure too quickly. Many handlers go from a light cue to a strong correction without giving the horse time to process. The horse learns that the light cue is meaningless and waits for the strong correction. This creates a horse that is dull to gentle aids and reactive to strong ones.</p>
    
    <p>The third mistake is releasing pressure at the wrong moment. Pressure release is how horses learn. If you release pressure when the horse is resisting, you have taught the horse to resist. If you release pressure the instant the horse tries, even if the attempt is imperfect, you have taught the horse to try.</p>
    
    <p>The fourth mistake is ignoring the horse's emotional state. A horse that is too afraid cannot learn. A horse that is too tired cannot learn. A horse that is too frustrated cannot learn. Recognizing when to stop is as important as knowing when to push.</p>
    
    <p>The fifth mistake is assuming the horse understands when it does not. Horses do not generalize well. They need to learn the same lesson in multiple environments, from multiple angles, at multiple speeds, before they truly understand. Be patient. Teach the same thing many times in many ways. This is not repetition. This is thoroughness.</p>`
  },
  
  // ARTICLE 6 - Book 6: Build Trust
  {
    label: "Practical",
    title: "How to Build Trust with a Horse: A Complete Step by Step Guide",
    keywords: ["how to build trust", "bonding with a horse", "gain horse trust"],
    content: `<p class="dropcap">Trust is not built in a single day or a single session. It is built in a thousand small honest moments, each one a brick, each one a promise kept. This is the guide to laying those bricks correctly.</p>
    
    <p>Step one: Show up consistently. Horses learn who you are by how often you appear. A horse that sees you irregularly will never fully trust you. Show up every day, even if only for a few minutes. Consistency is the foundation of trust.</p>
    
    <div class="blockquote">Trust is not a feeling. It is a prediction. The horse predicts that you will be safe because you have always been safe before. Every interaction either strengthens or weakens this prediction.</div>
    
    <p>Step two: Be predictable. Horses feel safe when they can predict what will happen next. Use the same routines. Approach from the same angle. Speak in the same tone. The horse may find this boring. Boring is safe. Safe is the foundation of trust.</p>
    
    <p>Step three: Listen to the horse. If the horse says no, hear it. Do not push through refusal without understanding it. Ask yourself why the horse is refusing. Is it fear? Confusion? Pain? Physical discomfort? Address the cause, not the behaviour.</p>
    
    <p>Step four: Reward the smallest try. A flicker of an ear toward you. A slight shift of weight in your direction. A single step forward. These are victories. Reward them as if the horse just completed a grand prix test. The horse will learn that trying pays.</p>
    
    <p>Step five: Never lie to the horse. Do not ask for something you cannot enforce. Do not reward a behaviour one day and correct it the next. Do not promise safety and then create fear. Horses have long memories for betrayal. One lie can undo months of trust building.</p>
    
    <p>Building trust takes time. There is no shortcut. But the trust you build will outlast any technique, any method, any tool. A horse that trusts you will follow you anywhere. That is the goal worth working toward.</p>`
  },
  
  // ARTICLE 7 - Book 7: Horse Not Listening
  {
    label: "Practical",
    title: "Why Your Horse Does Not Listen to You: The Real Reasons Explained",
    keywords: ["horse not listening", "horse training problems", "why horse ignores commands"],
    content: `<p class="dropcap">When a horse stops listening, most people think the horse has a problem. In eleven years, I have almost never found the problem to be in the horse. The answer always begins somewhere closer to home.</p>
    
    <p>Reason one: Your signals are unclear. The horse cannot read your mind. If you ask for a turn with your leg one way today and a different way tomorrow, the horse will become confused. Confusion looks like resistance. Clarify your aids before you blame the horse.</p>
    
    <div class="blockquote">Every time you think the horse is being difficult, ask yourself this question: Have I taught this clearly enough? The answer is almost always no.</div>
    
    <p>Reason two: The horse is in pain. Physical discomfort is the most common cause of sudden behaviour changes. Check saddle fit. Check teeth. Check feet. Check for muscle soreness. A horse that hurts cannot focus on learning. Address the pain before you address the training.</p>
    
    <p>Reason three: The horse is afraid. Fear shuts down the thinking brain. A horse that is afraid cannot process new information. If your horse seems to have forgotten everything it once knew, ask what is scaring it. Remove the fear, and the learning will return.</p>
    
    <p>Reason four: You have taught the horse to ignore you. Every time you give a cue and do not follow through, you teach the horse that your cue means nothing. If you ask for a stop and let the horse walk ten more steps, you have taught the horse that stop does not mean stop. Be precise. Be consistent.</p>
    
    <p>Reason five: The horse is exhausted. Mental fatigue is real. A horse that has been asked to concentrate for too long will eventually check out. Watch for signs of mental fatigue, the dull eye, the heavy head, the slow response. When you see them, stop. Rest. Try again tomorrow.</p>
    
    <p>The solution to a horse that does not listen is never more pressure. It is always more clarity. Make your signals clearer. Remove obstacles to understanding. And watch as the horse that would not listen becomes the horse that tries its hardest for you.</p>`
  },
  
  // ARTICLE 8 - Book 8: Calm Anxious Horse
  {
    label: "Practical",
    title: "How to Calm a Nervous or Anxious Horse",
    keywords: ["how to calm a horse", "anxious horse behavior", "nervous horse training"],
    content: `<p class="dropcap">You cannot calm a horse by fighting its nervous system. You can only offer it something steady enough to anchor to. This is the art of becoming that anchor, and it begins long before you ever touch the rope.</p>
    
    <p>The first step to calming an anxious horse is calming yourself. Horses read human emotion with extraordinary precision. If you are tense, the horse will be tense. If you are breathing shallowly, the horse will hold its breath. Before you can calm the horse, you must calm yourself.</p>
    
    <div class="blockquote">Your breathing is the most powerful tool you have. Breathe slowly. Breathe deeply. Breathe audibly enough that the horse can hear you. Your breath becomes the rhythm the horse can follow out of panic.</div>
    
    <p>The second step is to give the horse space to process its fear. Do not crowd an anxious horse. Do not push it toward what scares it. Allow it to move its feet. Allow it to look at the scary thing from a distance. Allow it to approach when it is ready. Respect the horse's need for safety.</p>
    
    <p>The third step is to become the most boring thing in the environment. An anxious horse is hyper alert to everything. If you stand still, breathe slowly, and do nothing, you become the safe place. The horse will eventually orient toward you because you are the only thing not demanding anything from it.</p>
    
    <p>The fourth step is to use familiar routines. Anxious horses find comfort in what they know. Go back to basics. Ask for simple things the horse knows well. The success of familiar tasks builds confidence that carries over into unfamiliar situations.</p>
    
    <p>The fifth step is to never punish fear. A horse that is punished for being afraid learns to be afraid of punishment, not less afraid of the original trigger. Instead, wait out the fear. Reward moments of calm. Over time, the horse will learn that nothing bad happens when it trusts you.</p>
    
    <p>Some horses are more anxious than others. Some have trauma in their past. Be patient. Be consistent. Be the steady presence that the horse can count on. In time, the anxious horse can become a confident partner. But trust must be earned one calm moment at a time.</p>`
  },
  
  // ARTICLE 9 - Book 9: First Time Handling
  {
    label: "Practical",
    title: "First Time Handling a Horse: What You Must Know",
    keywords: ["first time horse tips", "horse safety basics", "beginner horse handling"],
    content: `<p class="dropcap">The first impression you make on a horse is written in its memory with indelible ink. There is no second first meeting. Everything you bring into that initial encounter, your speed, your tension, your breath, the horse will remember.</p>
    
    <p>Before you approach, check yourself. Are you calm? Are you breathing? Are you present? If you are nervous, the horse will know. Take a moment to center yourself. Your emotional state is the first thing the horse reads.</p>
    
    <div class="blockquote">Approach the horse from the shoulder, not from directly in front or directly behind. The shoulder is the horse's blind spot. Approach at an angle so the horse can see you coming without feeling threatened.</div>
    
    <p>When you reach the horse, do not rush to touch it. Stand quietly near the shoulder. Let the horse look at you. Let the horse decide to engage. If the horse moves away, do not chase it. Wait. Let the horse come back to you. This first interaction sets the tone for everything that follows.</p>
    
    <p>When you do touch the horse, start on the shoulder or neck. These are safe zones. Do not go straight for the face or the hindquarters. Use long, slow strokes. Do not pat. Horses generally do not like being patted. They prefer long, rhythmic strokes that mimic mutual grooming.</p>
    
    <p>The lead rope is not a weapon or a restraint. It is a communication device. Never wrap the rope around your hand. If the horse pulls away, you need to be able to release the rope instantly. Hold the rope in a way that allows quick release but maintains gentle contact.</p>
    
    <p>Safety rules for first time handling: Never stand directly behind a horse. Never walk under the tie rope. Never let the lead rope drag on the ground where you could step through it. Never wrap the rope around your body. These rules exist because people who broke them got hurt.</p>
    
    <p>The goal of first time handling is not to accomplish anything. The goal is to create a positive experience that makes future handling easier. Go slow. Be gentle. Leave the horse wanting more. A good first meeting is the foundation of a good relationship.</p>`
  },
  
  // ARTICLE 10 - Book 10: Signs of Trust
  {
    label: "Practical",
    title: "Signs Your Horse Trusts You and Signs It Does Not",
    keywords: ["signs a horse trusts you", "horse bonding signs", "horse trust behavior"],
    content: `<p class="dropcap">A horse's trust is not a feeling. It is a behaviour. And like all behaviour, it is visible, measurable, and honest. Here is what genuine trust looks like, and what its absence reveals about the work still to be done.</p>
    
    <p>Sign one of trust: The horse approaches you in the pasture. When you enter the field, a trusting horse will come to you. It may not come running, but it will orient toward you and eventually close the distance. A horse that walks away when you approach has reasons not to trust you.</p>
    
    <div class="blockquote">The horse that rests a hind leg while you groom it is showing you trust. This is the horse's relaxed posture. If it will rest one leg while you are present, it feels safe enough to let its guard down.</div>
    
    <p>Sign two of trust: The horse lowers its head when you approach. A lowered head is a sign of submission and relaxation. A horse that raises its head as you approach is assessing threat. A horse that lowers its head is acknowledging you as safe.</p>
    
    <p>Sign three of trust: The horse licks and chews during training. This behaviour signals that the horse is processing information and returning to a relaxed state. It is a sign that the horse is thinking, not just reacting. Encourage this behaviour by pausing when you see it.</p>
    
    <p>Sign four of trust: The horse stands quietly when you mount or work around its feet. These are vulnerable positions for a horse. If the horse tolerates them calmly, it trusts that you will not endanger it.</p>
    
    <p>Signs that trust is lacking: The horse turns its hindquarters toward you. The horse pins its ears when you approach. The horse walks away when you enter the pasture. The horse is constantly scanning for escape routes. These signs mean you have work to do on the relationship before you can work on training.</p>
    
    <p>Building trust takes time. There are no shortcuts. But when you see these signs of genuine trust, you will know that your work is paying off. And you will understand why trust is worth the investment.</p>`
  },
  
  // ARTICLE 11 - Book 11: What Horses Teach
  {
    label: "Unique Edge",
    title: "What Horses Teach Us About Human Behavior",
    keywords: ["what horses teach humans", "lessons from horses", "horse psychology humans"],
    content: `<p class="dropcap">A horse has no ego, no agenda, no ability to lie. It can only respond to what is real. Spend enough time with horses and you will learn more about yourself than any therapist, any book, or any amount of quiet reflection could ever show you.</p>
    
    <p>The first lesson horses teach is that presence matters more than technique. You can perform all the right actions, use all the correct aids, and the horse will still resist if your internal state is conflicted. Horses taught me that who I am matters more than what I do.</p>
    
    <div class="blockquote">You cannot pretend with a horse. It will see through every mask you wear. The horse does not care about your reputation, your credentials, or your good intentions. It only cares about what you are in this exact moment.</div>
    
    <p>The second lesson is that patience is not passive. Waiting for the horse to process, allowing the horse to choose, giving the horse time to think, this is not doing nothing. This is active patience. It is the hardest skill to learn and the most valuable one to acquire.</p>
    
    <p>The third lesson is that fear is not weakness. Fear is information. When a horse is afraid, it is telling you that something in its environment feels threatening. When I am afraid, it is telling me the same thing. Fear, properly understood, is a guide, not an enemy.</p>
    
    <p>The fourth lesson is that relationships are built in small moments. The big breakthroughs get the attention. But the relationship is built in the quiet moments, the grooming sessions, the walks to pasture, the times you stand together doing nothing at all.</p>
    
    <p>The fifth lesson is that trust cannot be demanded. It can only be earned. And it is earned the same way every time, by showing up consistently, by being honest, by keeping promises, by being worthy of trust.</p>
    
    <p>These lessons apply to horses. They also apply to people. To partners, to children, to colleagues, to friends. The horse has been my teacher, and I am still learning. I suspect I will be learning for the rest of my life.</p>`
  },
  
  // ARTICLE 12 - Book 12: Presence and Intention
  {
    label: "Unique Edge",
    title: "To Feel What a Horse Feels: Understanding Presence and Intention",
    keywords: ["horse sensitivity to humans", "connection with horses", "horse energy intention"],
    content: `<p class="dropcap">Presence is not a concept. It is a physical state, the quality of being fully here, fully alive, fully available to what is happening in this exact second. Horses live there permanently. Most humans have forgotten the address.</p>
    
    <p>When you are truly present with a horse, you feel the shift. The horse stops watching the horizon and starts focusing on you. The tension in its body releases. Its breathing slows to match yours. This is not magic. This is the horse reading your nervous system and finding it safe.</p>
    
    <div class="blockquote">Intention precedes action. Before your hand moves, your mind has already moved. Before you ask the horse to turn, you have already turned in your mind. The horse reads this intention. It responds to what you are about to do, not just what you are doing.</div>
    
    <p>To develop presence, practice stillness. Stand with a horse and do nothing. Do not ask for anything. Do not try to train. Just be present. At first, you will feel restless. You will want to do something. Resist this urge. Learn to be still. The horse will teach you how.</p>
    
    <p>To develop clear intention, practice visualization. Before you ask the horse for anything, see it in your mind. See the turn. See the halt. See the transition. Your body will begin to organize itself around this mental image before you give a single aid. The horse will feel this organization and respond more clearly.</p>
    
    <p>The connection between presence and intention is this: When you are fully present, your intentions become clearer. When your intentions are clear, the horse can read them easily. When the horse reads you easily, it can respond without confusion. Confusion is the enemy of partnership. Clarity is its foundation.</p>
    
    <p>Developing presence and clear intention takes practice. It takes years. But once you feel the difference, once you have experienced a horse responding to your thought before your body moves, you will never go back to mechanical training. You will have discovered something deeper.</p>`
  },
  
  // ARTICLE 13 - Book 13: Horses React to Mind
  {
    label: "Unique Edge",
    title: "Why Horses React to Your Mind and Not Just Your Actions",
    keywords: ["do horses sense emotions", "horse awareness", "horse reaction to humans"],
    content: `<p class="dropcap">Before your hand moves, your mind has already moved. Before your leg gives the aid, your intention has already broadcast itself through every muscle in your body. A horse does not read your actions. It reads the thought behind them.</p>
    
    <p>This is not mysticism. This is biology. Horses are hyper vigilant prey animals. They have evolved to read the subtlest signals of intention in the animals around them. A flicker of muscle tension, a shift in breathing, a change in eye focus, these happen before the action. The horse sees them all.</p>
    
    <div class="blockquote">If you think stop, your body begins to prepare for a stop before you pick up the reins. Your seat deepens. Your core tightens. You breathe out. The horse feels these micro movements and stops before your hands ever move. This is horsemanship at its highest level.</div>
    
    <p>The implication of this is profound. You cannot fake it with a horse. You cannot think one thing and do another and expect the horse to follow your hands instead of your mind. The horse will always respond to what you truly intend, not what you pretend to intend.</p>
    
    <p>This is why anxious people have anxious horses. The horse feels the anxiety in the rider's body before the rider even knows they are anxious. The horse reacts to this feeling, and the rider thinks the horse is the problem. The problem was never the horse.</p>
    
    <p>This is also why confident, quiet riders have calm horses. Their internal state broadcasts safety. The horse reads this safety and relaxes. The relaxed horse performs better. The rider thinks they have good aids. They do. But what they really have is a calm mind that the horse can trust.</p>
    
    <p>Training the mind is as important as training the body. If you want your horse to be calm, learn to be calm. If you want your horse to be confident, learn to be confident. If you want your horse to try, learn to try. The horse is your mirror. It reflects who you are. Pay attention to what it shows you.</p>`
  },
  
  // ARTICLE 14 - Book 14: Silence, Energy, Movement
  {
    label: "Unique Edge",
    title: "Silence, Energy, and Movement: The Language Horses Understand",
    keywords: ["horse communication", "non verbal horses", "how horses communicate"],
    content: `<p class="dropcap">There is a language older than words, older than sound, older than the first human who tried to name things. Horses speak it fluently. It is made of silence, of the quality of stillness, and of the precise intention inside every movement. This article is an attempt to translate it.</p>
    
    <p>Silence is not empty. Silence is full of information. When you are silent, you can hear the horse's breathing, feel its heartbeat through the lead rope, notice the tiny shifts in its weight that tell you what it is thinking. Fill your silence with presence, and the horse will hear you more clearly than any words could convey.</p>
    
    <div class="blockquote">Energy is not a new age concept. It is the sum total of your muscle tone, your breathing rate, your focus, your intention. A horse feels your energy the moment you enter the barn. Adjust your energy before you approach the horse, and the horse will meet you differently.</div>
    
    <p>Movement is the sentence structure of horse language. Every movement means something. A step forward can mean curiosity or aggression depending on the speed and the ear position and the tail carriage. A step back can mean respect or fear depending on the context. Learn to read the whole sentence, not just individual words.</p>
    
    <p>To speak this language, start with silence. Stop talking. Horses do not understand English. They understand tone and volume, but the words themselves mean nothing. Replace words with pauses. Replace commands with requests. Let your hands and your seat and your breath do the talking.</p>
    
    <p>Next, learn to manage your energy. Before you approach a horse, check your own state. Are you rushed? Are you tense? Are you distracted? Adjust. Breathe. Slow down. Center yourself. The horse will feel the difference.</p>
    
    <p>Finally, learn to move with intention. Every step you take around a horse means something. Every shift of your weight, every turn of your shoulder, every glance of your eye. Make your movements mean what you want them to mean. The horse is watching. Make sure it sees what you intend.</p>
    
    <p>This language takes time to learn. But once you speak it, once you and the horse can communicate in silence, you will have found something that most horsemen never experience. You will have found true partnership.</p>`
  },
  
  // ARTICLE 15 - Book 15: Philosophy
  {
    label: "Unique Edge",
    title: "The Philosophy of Working with Horses and Not Against Them",
    keywords: ["natural horsemanship", "ethical horse training", "working with horses"],
    content: `<p class="dropcap">There are two ways to work with a horse. One way produces obedience. The other way produces partnership. They look similar from the outside. From the inside, from inside the horse, they feel completely different. Only one of them is real.</p>
    
    <p>The obedience model sees the horse as something to be controlled. It uses pressure, repetition, and the limitation of choices. It produces results quickly, but those results are fragile. Remove the pressure, and the obedience disappears. This is training. But it is not horsemanship.</p>
    
    <div class="blockquote">The partnership model sees the horse as a sentient being with its own perspective, its own fears, its own desires. It uses consent, clarity, and mutual respect. It produces results slowly, but those results are resilient. The horse chooses to participate because participation feels good. This is horsemanship.</div>
    
    <p>The shift from obedience to partnership requires a fundamental change in how you see horses. They are not machines to be programmed. They are not vehicles to be steered. They are not problems to be solved. They are individuals with whom you can build a relationship, if you are willing to do the work.</p>
    
    <p>Working with a horse, not against it, means accepting that the horse gets a vote. Sometimes the horse says no. When the horse says no, you need to ask why. Is the request unclear? Is the horse in pain? Is the horse afraid? Has the horse been pushed too far? Listen to the no. It is information, not disobedience.</p>
    
    <p>Working with a horse means giving the horse choices whenever possible. Do you want to go left or right? Do you want to trot or walk? Do you want to stop here or there? The more choices you give the horse, the more the horse will choose you.</p>
    
    <p>Working with a horse means respecting the horse's limits. Some days the horse can do more. Some days the horse can do less. Some horses have physical limitations. Some have emotional limitations. Respect these limits. Push gently. But always listen when the horse says enough.</p>
    
    <p>This philosophy is not the easy path. It is slower. It requires more patience, more self awareness, more emotional regulation. But it produces a horse that tries, that offers, that wants to be with you. And that horse is worth the wait. That horse is the reason I do this work. That horse is the reason I wrote these chronicles.</p>`
  }
];

// DOM Elements
let currentArticleIndex = 0;
const articlePanel = document.getElementById('articlePanel');
const artLabel = document.getElementById('artLabel');
const artTitle = document.getElementById('artTitle');
const artKeywords = document.getElementById('artKeywords');
const artBody = document.getElementById('artBody');
const artClose = document.getElementById('artClose');
const artWatermark = document.getElementById('artWatermark');

// Filter functionality
const filterBtns = document.querySelectorAll('.chr-filter-btn');
const bookWraps = document.querySelectorAll('.book-wrap');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    bookWraps.forEach(book => {
      if (filter === 'all' || book.getAttribute('data-category') === filter) {
        book.classList.remove('hidden');
      } else {
        book.classList.add('hidden');
      }
    });
  });
});

// Open article when book is clicked
bookWraps.forEach((book, index) => {
  book.addEventListener('click', () => {
    const articleIndex = parseInt(book.getAttribute('data-article'));
    currentArticleIndex = articleIndex;
    openArticle(articleIndex);
  });
});

function openArticle(index) {
  const article = articlesData[index];
  if (!article) return;
  
  artLabel.textContent = article.label;
  artTitle.textContent = article.title;
  
  // Build keywords HTML
  artKeywords.innerHTML = article.keywords.map(kw => `<span class="art-kw">${kw}</span>`).join('');
  
  // Set watermark based on category
  if (article.label === 'Foundational') artWatermark.textContent = '📘';
  else if (article.label === 'Practical') artWatermark.textContent = '📗';
  else artWatermark.textContent = '📜';
  
  artBody.innerHTML = article.content;
  
  articlePanel.classList.add('open');
  document.body.style.overflow = 'hidden';
  
  // Scroll to top of panel
  const scrollArea = document.querySelector('.rd-scroll-area');
  if (scrollArea) scrollArea.scrollTop = 0;
}

function closeArticle() {
  articlePanel.classList.remove('open');
  document.body.style.overflow = '';
}

// Close button
if (artClose) {
  artClose.addEventListener('click', closeArticle);
}

// Close on backdrop click
const panelInner = document.querySelector('.art-panel-inner');
if (articlePanel && panelInner) {
  articlePanel.addEventListener('click', (e) => {
    if (e.target === articlePanel) closeArticle();
  });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!articlePanel.classList.contains('open')) return;
  
  if (e.key === 'Escape') {
    closeArticle();
  } else if (e.key === 'ArrowRight') {
    const nextIndex = (currentArticleIndex + 1) % articlesData.length;
    openArticle(nextIndex);
  } else if (e.key === 'ArrowLeft') {
    const prevIndex = (currentArticleIndex - 1 + articlesData.length) % articlesData.length;
    openArticle(prevIndex);
  }
});

// Intersection Observer for book animations
const bookObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 100);
      bookObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

bookWraps.forEach(book => {
  bookObserver.observe(book);
});

// Particle effect for hero
const heroParticles = document.getElementById('chrParticles');
if (heroParticles) {
  for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.className = 'chr-p';
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '0px';
    particle.style.animationDuration = Math.random() * 8 + 5 + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.setProperty('--d', (Math.random() - 0.5) * 100 + 'px');
    heroParticles.appendChild(particle);
  }
}

console.log('Chronicles loaded with 15 complete articles');
