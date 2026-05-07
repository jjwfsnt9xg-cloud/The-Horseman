// ═══════════════════════════════════════════════════════════════════════════
// ✦ THE HORSEMAN'S JOURNAL — ULTRA 4D SCRIPT ✦
// Epic. Reactive. Living. Unforgettable.
// ═══════════════════════════════════════════════════════════════════════════

(function() {
  // ============================================
  // 4D STATE — Time, Scroll, Mouse, Section Mood
  // ============================================
  
  let t = 0;                    // Global time
  let scrollPercent = 0;        // 0 to 1 (top to bottom)
  let mouseX = 0.5, mouseY = 0.5;
  let mouseSpeed = 0;
  let lastMouseX = 0.5, lastMouseY = 0.5;
  let breathPhase = 0;
  let activeSection = 0;        // 0-5 (Genesis to Questions)
  let goldenTrails = [];         // Array of {x, y, age}
  
  // Section moods — each section gets unique 4D behavior
  const sectionMoods = [
    { name: 'Genesis', color: '#c8922a', rgb: [200, 146, 42], particleHue: 45, windIntensity: 0.6, timeScale: 1.0, textGlow: 0.3 },
    { name: 'Awakening', color: '#c97a8a', rgb: [201, 122, 138], particleHue: 340, windIntensity: 0.9, timeScale: 1.3, textGlow: 0.5 },
    { name: 'Chronicles', color: '#b8860b', rgb: [184, 134, 11], particleHue: 35, windIntensity: 0.7, timeScale: 1.1, textGlow: 0.4 },
    { name: 'Companions', color: '#8b7a3a', rgb: [139, 122, 58], particleHue: 70, windIntensity: 0.5, timeScale: 0.9, textGlow: 0.3 },
    { name: 'Verses', color: '#a080d0', rgb: [160, 128, 208], particleHue: 270, windIntensity: 0.8, timeScale: 1.2, textGlow: 0.6 },
    { name: 'Questions', color: '#c8963a', rgb: [200, 150, 58], particleHue: 30, windIntensity: 0.7, timeScale: 1.0, textGlow: 0.4 }
  ];
  
  // ============================================
  // DOM Elements
  // ============================================
  
  const canvas = document.getElementById('worldCanvas');
  const ctx = canvas.getContext('2d');
  const titleOverlay = document.getElementById('titleOverlay');
  const hintOverlay = document.getElementById('hintOverlay');
  const lanternsDiv = document.getElementById('lanterns');
  const hallCards = document.querySelectorAll('.hall-card');
  const hallHeadings = document.querySelectorAll('.hall-heading, .hall-sub, .hall-card-name, .hall-card-desc');
  const contactSection = document.querySelector('.contact');
  const greatHall = document.querySelector('.great-hall');
  
  // ============================================
  // Canvas Setup
  // ============================================
  
  let W, H;
  
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  // ============================================
  // Mouse Tracking with Speed Detection
  // ============================================
  
  document.addEventListener('mousemove', (e) => {
    const newX = e.clientX / W;
    const newY = e.clientY / H;
    const dx = newX - mouseX;
    const dy = newY - mouseY;
    mouseSpeed = Math.min(0.3, Math.sqrt(dx*dx + dy*dy) * 2);
    mouseX = newX;
    mouseY = newY;
    
    // Add golden trail on fast movement
    if (mouseSpeed > 0.05 && Math.random() < mouseSpeed * 0.5) {
      goldenTrails.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: mouseSpeed * 12 + 3
      });
    }
    
    lastMouseX = newX;
    lastMouseY = newY;
  });
  
  // Limit trail count
  setInterval(() => {
    goldenTrails = goldenTrails.filter(t => t.age < 1);
  }, 100);
  
  // ============================================
  // Scroll Tracking — Time Travel
  // ============================================
  
  function updateScrollPercent() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = Math.min(1, Math.max(0, scrollTop / maxScroll));
    
    // Determine active section based on scroll
    const greatHallTop = greatHall?.offsetTop || 0;
    const contactTop = contactSection?.offsetTop || 0;
    const scrollPos = scrollTop + window.innerHeight / 2;
    
    if (scrollPos < greatHallTop - 200) activeSection = -1; // Sanctuary
    else if (scrollPos >= contactTop - 300) activeSection = 5; // Questions area
    else {
      // Find which card is in view
      let found = -1;
      hallCards.forEach((card, idx) => {
        const cardTop = card.offsetTop + greatHallTop;
        if (scrollPos >= cardTop - 200) found = idx;
      });
      activeSection = Math.min(5, Math.max(0, found));
    }
  }
  
  window.addEventListener('scroll', updateScrollPercent);
  updateScrollPercent();
  
  // ============================================
  // Typography Breathing Effect — Text Comes Alive
  // ============================================
  
  function applyTextBreathing() {
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    const breath = Math.sin(breathPhase) * 0.15 + 0.85;
    const glowIntensity = 0.3 + (scrollPercent * 0.5) + (mouseSpeed * 0.3) + mood.textGlow;
    
    // Main title breathing
    if (titleOverlay) {
      const mainTitle = titleOverlay.querySelector('.main-title');
      const mainSubtitle = titleOverlay.querySelector('.main-subtitle');
      const mainDesc = titleOverlay.querySelector('.main-desc');
      
      if (mainTitle) {
        mainTitle.style.transition = 'all 0.1s ease';
        mainTitle.style.textShadow = `0 0 ${30 + breath * 20}px rgba(212,175,55,${0.3 + breath * 0.2}), 0 0 ${60 + breath * 40}px rgba(212,175,55,0.15)`;
        mainTitle.style.letterSpacing = `${4 + breath * 2}px`;
      }
      if (mainSubtitle) {
        mainSubtitle.style.opacity = 0.4 + breath * 0.2;
      }
      if (mainDesc) {
        mainDesc.style.opacity = 0.3 + breath * 0.15;
      }
    }
    
    // Hall headings breathing
    hallHeadings.forEach(el => {
      if (el.classList.contains('hall-heading')) {
        el.style.textShadow = `0 0 ${20 + glowIntensity * 20}px ${mood.color}${Math.floor(40 + glowIntensity * 40).toString(16)}`;
        el.style.letterSpacing = `${3 + Math.sin(breathPhase * 1.5) * 1}px`;
      }
      if (el.classList.contains('hall-card-name')) {
        el.style.transition = 'all 0.2s ease';
        const intensity = 0.2 + mouseSpeed * 0.5;
        el.style.textShadow = `0 0 ${10 + intensity * 15}px ${mood.color}`;
      }
    });
  }
  
  // ============================================
  // Particle System — 4D Reactive Dust
  // ============================================
  
  const particles = [];
  const PARTICLE_COUNT = 400;
  
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: Math.random() * 0.001 + 0.0005,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() * 60 + 30  // Gold to amber range
    });
  }
  
  function updateParticles() {
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    const scrollSpeed = scrollPercent * 2;
    const windX = (mouseX - 0.5) * mood.windIntensity * 1.5;
    
    particles.forEach(p => {
      // Move with wind and scroll
      p.x += p.speedX + windX * 0.002 + scrollSpeed * 0.001;
      p.y += p.speedY * (1 + scrollPercent * 2);
      
      // Wrap around
      if (p.x > 1) p.x = 0;
      if (p.x < 0) p.x = 1;
      if (p.y > 1) {
        p.y = 0;
        p.x = Math.random();
      }
      
      // Morph hue based on active section
      p.hue = mood.particleHue + (Math.sin(Date.now() * 0.001 * scrollSpeed + p.phase) * 20);
    });
  }
  
  // ============================================
  // Golden Trail Drawing (4D Memory Effect)
  // ============================================
  
  function drawGoldenTrails() {
    goldenTrails.forEach(trail => {
      trail.age += 0.02;
      const alpha = Math.max(0, 1 - trail.age) * 0.6;
      const size = trail.size * (1 - trail.age * 0.8);
      
      ctx.beginPath();
      ctx.arc(trail.x, trail.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${alpha * 0.5})`;
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(trail.x, trail.y, size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 220, 100, ${alpha})`;
      ctx.fill();
    });
  }
  
  // ============================================
  // Enhanced Herd — Horses React to Mouse & Scroll
  // ============================================
  
  // Original herd data (preserved and enhanced)
  const herd = [
    { x: 0.06, y: 0.83, s: 0.88, coat: '#0d0a0e', mane: '#1a1418', pose: 'sentinel', flip: false, headTurn: 0 },
    { x: 0.18, y: 0.85, s: 0.70, coat: '#2a1a12', mane: '#3a2818', pose: 'graze', flip: false, headTurn: 0 },
    { x: 0.30, y: 0.82, s: 0.78, coat: '#1a1618', mane: '#2a2428', pose: 'graze', flip: true, headTurn: 0 },
    { x: 0.42, y: 0.84, s: 0.55, coat: '#3a2818', mane: '#4a3020', pose: 'graze', flip: false, headTurn: 0 },
    { x: 0.50, y: 0.83, s: 0.72, coat: '#4a3222', mane: '#5a3e2a', pose: 'nuzzle', flip: false, headTurn: 0 },
    { x: 0.56, y: 0.84, s: 0.68, coat: '#3a3035', mane: '#4a4045', pose: 'nuzzle', flip: true, headTurn: 0 },
    { x: 0.68, y: 0.83, s: 0.85, coat: '#5a4828', mane: '#6a5530', pose: 'graze', flip: false, headTurn: 0 },
    { x: 0.82, y: 0.85, s: 0.75, coat: '#141018', mane: '#221e26', pose: 'graze', flip: false, headTurn: 0 },
    { x: 0.90, y: 0.78, s: 1.50, coat: '#080608', mane: '#141018', pose: 'foreground', flip: true, headTurn: 0 },
    { x: 0.10, y: 0.79, s: 1.40, coat: '#1a0e08', mane: '#2a1a10', pose: 'foreground', flip: false, headTurn: 0 },
  ];
  
  // Enhanced horse drawing with head turning (mouse awareness)
  function drawHorseWithAwareness(x, y, scale, coat, mane, pose, flip, headTurn) {
    ctx.save();
    ctx.translate(x, y);
    if (flip) ctx.scale(-scale, scale);
    else ctx.scale(scale, scale);
    
    const breath = Math.sin(breathPhase * 2) * 0.5;
    const scrollInfluence = scrollPercent * 30;
    
    // Body
    ctx.fillStyle = coat;
    if (pose === 'sentinel') {
      ctx.fillRect(-15, 14 + breath, 4, 24);
      ctx.fillRect(-3, 14 + breath, 4, 24);
      ctx.fillRect(7, 14 + breath, 4, 24);
      ctx.fillRect(17, 14 + breath, 4, 24);
      ctx.beginPath();
      ctx.ellipse(0, 4 + breath * 0.5, 28, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      // Neck with head turn
      ctx.beginPath();
      ctx.moveTo(18 + headTurn * 2, 0);
      ctx.quadraticCurveTo(28 - headTurn * 3, -28 + scrollInfluence * 0.2, 24 - headTurn, -40);
      ctx.quadraticCurveTo(18 - headTurn, -28, 8, -2);
      ctx.closePath();
      ctx.fill();
      // Head
      ctx.beginPath();
      ctx.ellipse(24 - headTurn, -42, 8, 5, -0.1 + headTurn * 0.05, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Similar for other poses...
      ctx.fillRect(-14, 16 + breath, 4, 20);
      ctx.fillRect(-2, 16 + breath, 4, 20);
      ctx.fillRect(8, 16 + breath, 4, 20);
      ctx.fillRect(18, 16 + breath, 4, 20);
      ctx.beginPath();
      ctx.ellipse(0, 5 + breath * 0.3, 28, 13, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(18 + headTurn, 1);
      ctx.quadraticCurveTo(32 - headTurn * 2, 12 + scrollInfluence * 0.1, 26 - headTurn, 26);
      ctx.quadraticCurveTo(18 - headTurn, 20, 7, 3);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(28 - headTurn, 30, 8, 5, 0.25, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Mane flowing with scroll & mouse
    ctx.strokeStyle = mane;
    ctx.lineWidth = 2 + scrollPercent * 3;
    const flow = (mouseX - 0.5) * 20;
    ctx.beginPath();
    ctx.moveTo(18, -3);
    ctx.quadraticCurveTo(24 + flow * 0.3, 6 + scrollPercent * 20, 28, 18);
    ctx.stroke();
    
    ctx.restore();
  }
  
  // ============================================
  // Atmospheric Effects — Mist, Aurora, Moonbeams
  // ============================================
  
  function drawDynamicAtmosphere() {
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    const intensity = 0.3 + scrollPercent * 0.5 + mouseSpeed * 0.3;
    
    // Aurora bands with section color
    for (let b = 0; b < 5; b++) {
      const bandY = H * 0.2 + b * 35;
      const bandAlpha = (0.08 + intensity * 0.1) - b * 0.008;
      const bandGrad = ctx.createLinearGradient(0, bandY, 0, bandY + 60);
      bandGrad.addColorStop(0, `rgba(${mood.rgb[0]}, ${mood.rgb[1]}, ${mood.rgb[2]}, ${bandAlpha * 0.5})`);
      bandGrad.addColorStop(0.5, `rgba(${mood.rgb[0] * 0.7}, ${mood.rgb[1] * 0.5}, ${mood.rgb[2] * 1.2}, ${bandAlpha})`);
      bandGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bandGrad;
      ctx.beginPath();
      ctx.moveTo(0, bandY - 20);
      for (let i = 0; i <= 80; i++) {
        const nx = i / 80;
        ctx.lineTo(nx * W, bandY + Math.sin(nx * 4 + t * 0.008 * (1 + scrollPercent) + b * 1.5) * 25 + Math.sin(nx * 7 + t * 0.012) * 15);
      }
      ctx.lineTo(W, bandY + 60);
      ctx.lineTo(0, bandY + 60);
      ctx.closePath();
      ctx.fill();
    }
    
    // Moon glow with scroll intensity
    const moonX = W * 0.78, moonY = H * 0.16;
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 20, moonX, moonY, 120 + scrollPercent * 80);
    moonGlow.addColorStop(0, `rgba(255,252,240,${0.6 + scrollPercent * 0.3})`);
    moonGlow.addColorStop(0.25, `rgba(255,252,240,${0.25 + scrollPercent * 0.15})`);
    moonGlow.addColorStop(0.5, `rgba(${mood.rgb[0]}, ${mood.rgb[1]}, ${mood.rgb[2]}, 0.1)`);
    moonGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, 120 + scrollPercent * 60, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // ============================================
  // Section-Aware Lantern Pulse
  // ============================================
  
  function updateLanternsWithMood() {
    const lanterns = document.querySelectorAll('#lanterns > div');
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    
    lanterns.forEach((lantern, idx) => {
      const glowEl = lantern.querySelector('.lantern-glow');
      if (glowEl) {
        const isActive = idx === activeSection;
        const pulseIntensity = 0.5 + Math.sin(Date.now() * 0.005) * 0.3;
        if (isActive) {
          glowEl.style.boxShadow = `0 0 45px ${mood.color}, 0 0 90px ${mood.color}, 0 0 140px ${mood.color}66`;
          glowEl.style.filter = 'brightness(1.8)';
        } else {
          glowEl.style.boxShadow = `0 0 18px ${mood.color}, 0 0 40px ${mood.color}44`;
          glowEl.style.filter = `brightness(${0.7 + pulseIntensity * 0.3})`;
        }
      }
    });
  }
  
  // ============================================
  // Card Hover — Emits Light into Scene
  // ============================================
  
  hallCards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      const mood = sectionMoods[idx];
      document.body.style.transition = 'box-shadow 0.3s ease';
      document.body.style.boxShadow = `inset 0 0 100px ${mood.color}22, inset 0 0 200px ${mood.color}11`;
      card.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      document.body.style.boxShadow = 'none';
      card.style.transform = '';
    });
  });
  
  // ============================================
  // MAIN RENDER LOOP — Everything Comes Together
  // ============================================
  
  // Stars, grass, flies data (preserved)
  const stars = Array.from({length: 350}, () => ({
    x: Math.random(), y: Math.random() * 0.55,
    r: Math.random() * 1.6 + 0.2, sp: Math.random() * 0.018 + 0.004,
    off: Math.random() * Math.PI * 2, ba: Math.random() * 0.65 + 0.2
  }));
  
  const grass = Array.from({length: 600}, () => ({
    x: Math.random(), by: 0.68 + Math.random() * 0.32,
    h: Math.random() * 35 + 10, sp: Math.random() * 0.018 + 0.004,
    off: Math.random() * Math.PI * 2
  }));
  
  const flies = Array.from({length: 45}, () => ({
    x: Math.random(), y: 0.68 + Math.random() * 0.28,
    r: Math.random() * 1.4 + 0.4, sp: Math.random() * 0.25 + 0.08,
    ph: Math.random() * Math.PI * 2, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.25
  }));
  
  function drawStars() {
    stars.forEach(s => {
      const tw = Math.sin(t * s.sp * (1 + scrollPercent) + s.off) * 0.3 + 0.7;
      const brightness = s.ba * tw * (0.5 + scrollPercent * 0.8);
      ctx.fillStyle = `rgba(255,255,255,${brightness})`;
      ctx.shadowColor = `rgba(255,255,255,${brightness * 0.3})`;
      ctx.shadowBlur = s.r * (1 + scrollPercent);
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r * tw * (1 + scrollPercent * 0.5), 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }
  
  function drawGrass() {
    const wind = (mouseX - 0.5) * 15;
    grass.forEach(g => {
      const sw = Math.sin(t * g.sp * (1 + scrollPercent) + g.off) * (7 + wind);
      ctx.strokeStyle = `rgba(30, 25, 20, ${0.3 + scrollPercent * 0.2})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(g.x * W, g.by * H);
      ctx.quadraticCurveTo(g.x * W + sw * 0.4, g.by * H - g.h * 0.5, g.x * W + sw, g.by * H - g.h);
      ctx.stroke();
    });
  }
  
  function drawFlies() {
    flies.forEach(f => {
      f.x += Math.sin(t * 0.02 + f.ph) * f.dx * (1 + scrollPercent);
      f.y += Math.cos(t * 0.022 + f.ph) * f.dy * (1 + scrollPercent * 0.5);
      f.x = ((f.x % 1) + 1) % 1;
      f.y = Math.max(0.66, Math.min(0.98, f.y));
      const a = Math.abs(Math.sin(t * f.sp + f.ph)) * (0.3 + scrollPercent * 0.5);
      ctx.fillStyle = `rgba(220, 200, 100, ${a})`;
      ctx.beginPath();
      ctx.arc(f.x * W, f.y * H, f.r * (1 + scrollPercent), 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  function drawSectionGlows() {
    const sections = [
      { lx: 0.16, ly: 0.44, depth: 0.6 },
      { lx: 0.34, ly: 0.38, depth: 0.7 },
      { lx: 0.52, ly: 0.34, depth: 0.8 },
      { lx: 0.68, ly: 0.38, depth: 0.65 },
      { lx: 0.82, ly: 0.42, depth: 0.55 },
      { lx: 0.90, ly: 0.48, depth: 0.5 },
    ];
    
    sections.forEach((s, idx) => {
      const mood = sectionMoods[idx];
      const lx = s.lx * W + (mouseX - 0.5) * 20 * s.depth;
      const ly = s.ly * H + (mouseY - 0.5) * 10 * s.depth;
      const intensity = activeSection === idx ? 1.5 : 0.5;
      const poolGrad = ctx.createRadialGradient(lx, ly + 30, 5, lx, ly + 30, 100 + scrollPercent * 50);
      poolGrad.addColorStop(0, `${mood.color}${Math.floor(40 * intensity).toString(16)}`);
      poolGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = poolGrad;
      ctx.beginPath();
      ctx.arc(lx, ly + 30, 100 + scrollPercent * 40, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  function drawHerd() {
    herd.forEach(h => {
      const headTurn = (mouseX - 0.5) * 8;
      const xOffset = (mouseX - 0.5) * 35 * h.s;
      const yOffset = (mouseY - 0.5) * 12 * h.s;
      drawHorseWithAwareness(
        h.x * W + xOffset, 
        h.y * H + yOffset, 
        h.s, h.coat, h.mane, h.pose, h.flip, 
        headTurn * (h.pose === 'foreground' ? 0.5 : 0.3)
      );
    });
  }
  
  function drawParticles() {
    updateParticles();
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    particles.forEach(p => {
      const alpha = 0.3 + Math.sin(breathPhase * 2 + p.phase) * 0.2 + scrollPercent * 0.3;
      ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.size * (1 + scrollPercent * 0.5), 0, Math.PI * 2);
      ctx.fill();
    });
  }
  
  // ============================================
  // ANIMATION LOOP — 4D Time Breathing
  // ============================================
  
  let lastTimestamp = 0;
  let timeSpeed = 1;
  
  function animate(now) {
    const delta = Math.min(0.033, (now - lastTimestamp) / 1000);
    lastTimestamp = now;
    
    // Time speed increases with scroll (4D time travel)
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    timeSpeed = 0.5 + scrollPercent * 1.5 + mouseSpeed * 1.5;
    timeSpeed *= mood.timeScale;
    
    t += delta * 30 * timeSpeed;
    breathPhase += delta * 3 * (0.8 + scrollPercent);
    
    // Update golden trails age
    goldenTrails.forEach(trail => { trail.age += delta * 2; });
    goldenTrails = goldenTrails.filter(t => t.age < 1);
    
    // RENDER EVERYTHING
    ctx.clearRect(0, 0, W, H);
    
    // Sky gradient
    const sg = ctx.createLinearGradient(0, 0, 0, H);
    const darkIntensity = 0.2 + scrollPercent * 0.3;
    sg.addColorStop(0, '#020108');
    sg.addColorStop(0.3, `#04031a`);
    sg.addColorStop(0.55, `#070522`);
    sg.addColorStop(0.72, `#0a0824`);
    sg.addColorStop(1, `#0c0a1c`);
    ctx.fillStyle = sg;
    ctx.fillRect(0, 0, W, H);
    
    drawDynamicAtmosphere();
    drawStars();
    drawGrass();
    drawFlies();
    drawSectionGlows();
    drawHerd();
    drawParticles();
    drawGoldenTrails();
    
    // Final mist overlay
    ctx.fillStyle = `rgba(10, 8, 20, ${0.2 + scrollPercent * 0.15})`;
    ctx.fillRect(0, 0, W, H);
    
    // Apply text breathing
    applyTextBreathing();
    updateLanternsWithMood();
    
    requestAnimationFrame(animate);
  }
  
  // ============================================
  // SCROLL RESET AND INITIALIZATION
  // ============================================
  
  // Add CSS for transitions
  const style = document.createElement('style');
  style.textContent = `
    .hall-card { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease !important; }
    .hall-heading, .hall-card-name, .main-title { transition: text-shadow 0.1s ease, letter-spacing 0.1s ease !important; }
    #worldCanvas { filter: brightness(${0.9 + scrollPercent * 0.2}); }
    body { transition: box-shadow 0.3s ease; }
  `;
  document.head.appendChild(style);
  
  // Initialize particles
  updateParticles();
  
  // Start animation
  updateScrollPercent();
  requestAnimationFrame(animate);
  
  // Periodic scroll update
  setInterval(updateScrollPercent, 100);
  
  // Hint overlay fades
  let lastMove = 0;
  document.addEventListener('mousemove', () => {
    lastMove = Date.now();
    if (hintOverlay) hintOverlay.style.opacity = '0.7';
  });
  setInterval(() => {
    if (hintOverlay && Date.now() - lastMove > 3000) {
      hintOverlay.style.opacity = '0';
    }
  }, 500);
  
  console.log('✦ The Horseman\'s Journal — Ultra 4D Engine Active ✦');
})();
