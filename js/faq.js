// FAQ Data
const faqData = [
    {   // 1
        category: "behavior",
        question: "My horse won't stand still at the mounting block. What am I doing wrong?",
        answer: "Your horse is not being disrespectful. Most often, it is anticipating pain or discomfort when you mount, or it has learned that standing still leads to more waiting. First, check your saddle fit and your horse's back for soreness. Second, practice standing at the block without mounting. Reward even a second of stillness. Then, mount and dismount immediately. Do not ride off every time. Teach the horse that standing still is the end of the session, not the beginning of work."
    },
    {   // 2
        category: "fear",
        question: "My horse spooks at everything. How do I make it stop?",
        answer: "You don't. You manage it. A horse's fear response is survival. Start by desensitizing in a safe, enclosed area. Introduce a scary object (like a tarp) at a distance. Let the horse look. Reward any sign of curiosity or relaxation. NEVER punish a spook. Do not chase the horse toward the object. Practice 'approach and retreat' pattern. Over time, your horse's trust in you will outweigh the fear of the unknown."
    },
    {   // 3
        category: "relationship",
        question: "How do I bond with my horse?",
        answer: "Bonding does not happen in a lesson. It happens in the quiet moments. Go to the pasture without a halter. Sit down nearby. Read a book, or just breathe. Do not ask for anything. Let the horse choose to approach you. Groom without purpose. Scratch withers. Walk together with a loose rope. Build thousands of small, pressure-free moments where your presence is simply comfortable, not a command."
    },
    {   // 4
        category: "training",
        question: "Why does my horse ignore my leg aids?",
        answer: "The most common reason is that your body has become 'noise'. Your leg is on all the time, so the horse tunes it out. Try this: lift your leg away from the horse's side completely. Then, apply a single, clear, sharp bump. Release all pressure the moment you feel any try — even a twitch of an ear back. Reward the try. Your horse has learned to wait for the strongest cue. Re-teach it that the lightest whisper of an aid means immediate release."
    },
    {   // 5
        category: "safety",
        question: "My horse bites when I do up the girth. What should I do?",
        answer: "This is almost always a pain response, not aggression. Horses can have undiagnosed back soreness, ulcers, or girth galls. Have a vet and saddle fitter assess him immediately. While addressing pain, desensitize the area. Use a very soft, fluffy girth. Tighten one hole per minute, giving a carrot after each hole. Do not rush. Teach your horse that girthing predicts treats and safety, not pain."
    },
    {   // 6
        category: "behavior",
        question: "How do I stop my horse from cribbing or weaving?",
        answer: "These are stereotypies, usually caused by stress, isolation, or lack of forage. You cannot 'break' the habit by force. It is a coping mechanism. The solution is environmental: 24/7 access to hay (slow feeder), more turnout with friends, and a predictable routine. Anti-cribbing collars manage the symptom but do not solve the problem. Treat the cause: change the horse's lifestyle."
    },
    {   // 7
        category: "fear",
        question: "My horse refuses to load into the trailer. I have tried everything.",
        answer: "Stop fighting. Do not chase him in. Do not use whips or ropes. This is now a 'trust repair' project. Park the trailer safely. Feed him his dinner inside the trailer (door open) every night for a month — without driving anywhere. Reward a single hoof on the ramp. Be patient. You are trying to reverse a trauma memory. You can only do this by making the trailer the safest, most rewarding place in his life, not a place of pressure."
    },
    {   // 8
        category: "relationship",
        question: "Does my horse miss me when I am gone?",
        answer: "It depends on your relationship. Horses do not miss humans in the way humans miss each other. However, they form strong attachments. If you are a consistent source of safety and comfort (and food), the horse will show signs of excitement when you arrive because you are a positive part of its environment. They live in the present, but they do remember patterns of safety."
    },
    {   // 9
        category: "training",
        question: "My horse is barn sour. He rushes home and ignores me. How to fix?",
        answer: "You have taught him that home is safety. You must teach him that being with you is also safety. Do not fight him going home. Instead, turn around 100 meters before the barn. Walk away. Then go back. Repeat until the rush stops. The key is to stop being a 'taxi'. Reward him for standing still facing away from home. Eventually, home becomes less magnetic because you are no longer predictable."
    },
    {   // 10
        category: "behavior",
        question: "Why does my horse pin its ears at me when I enter the stall?",
        answer: "He is protecting his space. For a horse, a small stall is a trap. He cannot run. He is telling you clearly: 'Please respect my bubble.' Do not enter aggressively. Knock on the door first. Talk softly. Wait for him to turn toward you or relax his posture. Do not corner him. If he pins ears, step back, wait 10 seconds, then enter softly. Teach him that you will respect his warning, which will reduce the need to escalate to a bite."
    },
    {   // 11
        category: "safety",
        question: "How do I safely introduce a new horse to my herd?",
        answer: "Do NOT just throw them together. Let them meet over a very solid, high fence for a week so they can see and smell each other but cannot reach over to kick. Then, turn them out together in a large, bland paddock (no hay piles to fight over) at turn-in time (when they are tired). Expect squealing, chasing, and kicking out. Do not intervene unless there is dangerous, relentless bullying. Separate if blood is drawn. Normal hierarchy establishment is loud but usually harmless."
    },
    {   // 12
        category: "training",
        question: "My horse won't pick up his back feet for cleaning. He holds them up then stamps.",
        answer: "He is probably stiff or painful. Check for thrush, seedy toe, or arthritis in the hocks. Desensitization: run your hand down the leg, say 'lift', and apply pressure. Release the absolute SECOND he shifts his weight, even if he doesn't lift. Break it into steps: shift weight, then lift an inch, then hold for 1 second. Do not hold the foot for more than 5 seconds when starting out. A strong horse leaning on you is a balance issue. He is not being mean; he is struggling."
    },
    {   // 13
        category: "fear",
        question: "My horse is afraid of water (puddles/washes). How to fix?",
        answer: "Do not force him. Walk him calmly *next* to the water. If he stops, just stand there. Let him look. Let him sniff the air. Do not look at the water yourself; look forward. Your focus is his anchor. After a minute, ask for a single step toward the other side, even if it avoids the water. Reward the try. Eventually, he will put one toe in. Do not praise until he steps. Patience wins here, not courage."
    },
    {   // 14
        category: "relationship",
        question: "How do I know if my horse is happy?",
        answer: "Look for these signs: A soft, relaxed eye (half closed). A lowered head and neck while standing still. Licking and chewing without food present. Coming toward you in the pasture (not just for feed). Mutual grooming behavior (nibbling at your clothes or hair). A relaxed tail swinging with movement. A horse that is 'happy' is soft in the body and curious about you. If he stands with his back to you in the corner, he is not happy or sad; he is disengaged."
    },
    {   // 15
        category: "behavior",
        question: "Why does my horse yawn when I tack up?",
        answer: "It could be two things. Most likely: He is releasing jaw tension and stress (a good sign, it means he is relaxing). However, excessive yawning or yawning while showing teeth (like a sneer) can indicate pain from the bit, dental issues, or ulcers. Check his teeth for sharp edges. Check the bit fit. Watch for other signs of discomfort like tail swishing or ear pinning. Often, it is just a sign of 'letting go', but if it is new, investigate."
    },
    {   // 16
        category: "training",
        question: "My horse doesn't move forward when I click/tap with my leg. Just stands there.",
        answer: "You have a 'frozen' horse, not a stubborn one. He is confused or waiting for you to stop nagging. Stop tapping. Sit still. Ask 'Loudly' once with a solid kick (not hard, just firm and clean). The moment he moves a single step, stop ALL leg pressure. Do not kick or tap again. Let him walk 3-4 strides with no leg aids. The release *is* the reward. He has learned that ignoring you leads to more tapping. Teach him that one clear ask = one clear release."
    }
];

// DOM Elements
const faqList = document.getElementById('faqList');
const searchInput = document.getElementById('faqSearch');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let currentSearch = '';

// Render FAQ items
function renderFAQs() {
    if (!faqList) return;
    
    const filtered = faqData.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
        const matchesSearch = item.question.toLowerCase().includes(currentSearch.toLowerCase()) || 
                              item.answer.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        faqList.innerHTML = '<div class="no-results">No answers found. Try a different search or filter.</div>';
        return;
    }

    faqList.innerHTML = filtered.map((item, idx) => `
        <div class="faq-item" data-category="${item.category}">
            <div class="faq-question">
                <span class="category-tag">${item.category}</span>
                <h3>${escapeHtml(item.question)}</h3>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                <p>${escapeHtml(item.answer).replace(/\n/g, '<br>')}</p>
            </div>
        </div>
    `).join('');

    // Reattach event listeners to new items
    document.querySelectorAll('.faq-question').forEach(question => {
        question.removeEventListener('click', toggleAnswer);
        question.addEventListener('click', toggleAnswer);
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

function toggleAnswer(e) {
    const target = e.currentTarget;
    const item = target.closest('.faq-item');
    if (!item) return;
    
    // Close others (optional, set to true to allow multiple open, false to close others)
    document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
        }
    });
    
    item.classList.toggle('active');
}

// Search handler
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderFAQs();
    });
}

// Filter handlers
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderFAQs();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFAQs();
    
    // Optional: Open first item by default to show it's working
    // setTimeout(() => {
    //     const firstItem = document.querySelector('.faq-question');
    //     if (firstItem) firstItem.click();
    // }, 100);
});
