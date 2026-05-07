// ═══════════════════════════════════════════════════════════════════════════
// ✦ THE HORSEMAN'S JOURNAL — COMPLETE ULTRA 4D SCRIPT ✦
// Includes: Original canvas engine + 4D enhancements (scroll time, mouse wind, golden trails, section moods)
// ═══════════════════════════════════════════════════════════════════════════

(function() {
  // ============================================
  // ORIGINAL CANVAS SETUP (Preserved)
  // ============================================
  
  const canvas = document.getElementById('worldCanvas');
  const ctx = canvas.getContext('2d');
  let W, H, mx = 0.5, my = 0.5, t = 0;

  function resize() { 
    W = canvas.width = canvas.offsetWidth; 
    H = canvas.height = canvas.offsetHeight; 
  }
  resize();
  window.addEventListener('resize', resize);
  
  // ============================================
  // 4D ENHANCEMENTS — New Variables
  // ============================================
  
  let scrollPercent = 0;
  let mouseSpeed = 0;
  let lastMouseX = 0.5, lastMouseY = 0.5;
  let breathPhase = 0;
  let activeSection = 0;
  let goldenTrails = [];
  let timeSpeed = 1;
  let lastTimestamp = 0;
  
  // Section moods for 4D effects
  const sectionMoods = [
    { name: 'Genesis', color: '#c8922a', rgb: [200, 146, 42], particleHue: 45, windIntensity: 0.6, timeScale: 1.0, textGlow: 0.3 },
    { name: 'Awakening', color: '#c97a8a', rgb: [201, 122, 138], particleHue: 340, windIntensity: 0.9, timeScale: 1.3, textGlow: 0.5 },
    { name: 'Chronicles', color: '#b8860b', rgb: [184, 134, 11], particleHue: 35, windIntensity: 0.7, timeScale: 1.1, textGlow: 0.4 },
    { name: 'Companions', color: '#8b7a3a', rgb: [139, 122, 58], particleHue: 70, windIntensity: 0.5, timeScale: 0.9, textGlow: 0.3 },
    { name: 'Verses', color: '#a080d0', rgb: [160, 128, 208], particleHue: 270, windIntensity: 0.8, timeScale: 1.2, textGlow: 0.6 },
    { name: 'Questions', color: '#c8963a', rgb: [200, 150, 58], particleHue: 30, windIntensity: 0.7, timeScale: 1.0, textGlow: 0.4 }
  ];
  
  // ============================================
  // MOUSE TRACKING WITH SPEED (4D)
  // ============================================
  
  document.addEventListener('mousemove', (e) => {
    const newX = e.clientX / W;
    const newY = e.clientY / H;
    const dx = newX - mx;
    const dy = newY - my;
    mouseSpeed = Math.min(0.3, Math.sqrt(dx*dx + dy*dy) * 2);
    mx = newX;
    my = newY;
    
    // Add golden trail on fast movement
    if (mouseSpeed > 0.05 && Math.random() < mouseSpeed * 0.5) {
      goldenTrails.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: mouseSpeed * 12 + 3
      });
    }
    
    lastMouseX = mx;
    lastMouseY = my;
  });
  
  // Limit trail count
  setInterval(() => {
    goldenTrails = goldenTrails.filter(t => t.age < 1);
  }, 100);
  
  // ============================================
  // SCROLL TRACKING (4D Time Travel)
  // ============================================
  
  function updateScrollPercent() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = Math.min(1, Math.max(0, scrollTop / maxScroll));
    
    // Determine active section based on scroll
    const greatHall = document.querySelector('.great-hall');
    const contactSection = document.querySelector('.contact');
    const hallCards = document.querySelectorAll('.hall-card');
    
    if (greatHall && contactSection) {
      const greatHallTop = greatHall.offsetTop || 0;
      const scrollPos = scrollTop + window.innerHeight / 2;
      
      if (scrollPos < greatHallTop - 200) activeSection = -1;
      else {
        let found = 0;
        hallCards.forEach((card, idx) => {
          const cardTop = card.offsetTop + greatHallTop;
          if (scrollPos >= cardTop - 200) found = idx;
        });
        activeSection = Math.min(5, Math.max(0, found));
      }
    }
  }
  
  window.addEventListener('scroll', updateScrollPercent);
  updateScrollPercent();
  
  // ============================================
  // ORIGINAL DATA (Stars, Grass, Flies, Herd, Sections)
  // ============================================
  
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
  
  // Original horse drawing function
  function horse(hx, hy, sc, coat, mane, pose, flip) {
    ctx.save(); 
    ctx.translate(hx, hy);
    if (flip) ctx.scale(-sc, sc); 
    else ctx.scale(sc, sc);
    
    const breath = Math.sin(breathPhase * 2) * 0.5;
    const scrollInfluence = scrollPercent * 30;
    const windInfluence = (mx - 0.5) * 15;
    
    if (pose === 'sentinel') {
      ctx.fillStyle = coat;
      [-15, -3, 7, 17].forEach((lx, i) => ctx.fillRect(lx, 14 + breath, 4, 24));
      ctx.beginPath(); 
      ctx.ellipse(0, 4 + breath * 0.5, 28, 13, 0, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(18, 0); 
      ctx.quadraticCurveTo(28 - windInfluence * 0.5, -28 + scrollInfluence * 0.2, 24, -40); 
      ctx.quadraticCurveTo(18, -28, 8, -2); 
      ctx.closePath(); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.ellipse(24, -42, 8, 5, -0.1, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(24, -46); 
      ctx.lineTo(22, -54); 
      ctx.lineTo(20, -46); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(26, -46); 
      ctx.lineTo(28, -54); 
      ctx.lineTo(26, -46); 
      ctx.fill();
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 2.2 + scrollPercent * 3;
      ctx.beginPath(); 
      ctx.moveTo(18, -4); 
      ctx.quadraticCurveTo(22 + windInfluence * 0.3, -18, 26, -32); 
      ctx.stroke();
      const ts = Math.sin(t * 0.025) * 2;
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 1.6;
      ctx.beginPath(); 
      ctx.moveTo(-26, 2); 
      ctx.quadraticCurveTo(-34, -5, -32 + ts, -14); 
      ctx.stroke();
    } else if (pose === 'foreground') {
      ctx.fillStyle = coat;
      [-18, -4, 8, 20].forEach((lx, i) => ctx.fillRect(lx, 12 + breath, 5, 28));
      ctx.beginPath(); 
      ctx.ellipse(0, 3 + breath * 0.3, 34, 16, 0, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(22, -1); 
      ctx.quadraticCurveTo(34 - windInfluence * 0.8, -32 + scrollInfluence * 0.3, 28, -46); 
      ctx.quadraticCurveTo(20, -32, 10, -4); 
      ctx.closePath(); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.ellipse(28, -48, 10, 6, -0.1, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(28, -53); 
      ctx.lineTo(25, -62); 
      ctx.lineTo(22, -53); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(30, -53); 
      ctx.lineTo(33, -62); 
      ctx.lineTo(30, -53); 
      ctx.fill();
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 3 + scrollPercent * 4;
      ctx.beginPath(); 
      ctx.moveTo(22, -5); 
      ctx.quadraticCurveTo(28 + windInfluence * 0.4, -22, 32, -38); 
      ctx.stroke();
      const ts = Math.sin(t * 0.022) * 2.5;
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 2;
      ctx.beginPath(); 
      ctx.moveTo(-32, 1); 
      ctx.quadraticCurveTo(-42, -6, -38 + ts, -16); 
      ctx.stroke();
    } else if (pose === 'nuzzle') {
      ctx.fillStyle = coat;
      [-14, -2, 8, 18].forEach((lx, i) => ctx.fillRect(lx, 16 + (i%2?breath:-breath), 4, 20));
      ctx.beginPath(); 
      ctx.ellipse(0, 5, 26, 12, 0, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(16, 1); 
      ctx.quadraticCurveTo(28 - windInfluence * 0.4, -14, 26, -24); 
      ctx.quadraticCurveTo(18, -18, 6, 3); 
      ctx.closePath(); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.ellipse(26, -26, 7, 5, -0.15, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(26, -30); 
      ctx.lineTo(25, -37); 
      ctx.lineTo(23, -30); 
      ctx.fill();
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 2;
      ctx.beginPath(); 
      ctx.moveTo(16, -2); 
      ctx.quadraticCurveTo(20 + windInfluence * 0.2, -10, 24, -20); 
      ctx.stroke();
      const ts = Math.sin(t * 0.02) * 2;
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 1.4;
      ctx.beginPath(); 
      ctx.moveTo(-24, 3); 
      ctx.quadraticCurveTo(-30, -4, -28 + ts, -12); 
      ctx.stroke();
    } else {
      ctx.fillStyle = coat;
      [-14, -2, 8, 18].forEach((lx, i) => ctx.fillRect(lx, 16 + (i%2?breath:-breath), 4, 20));
      ctx.beginPath(); 
      ctx.ellipse(0, 5, 28, 13, 0, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(18, 1); 
      ctx.quadraticCurveTo(32 + windInfluence * 0.5, 12, 26, 26); 
      ctx.quadraticCurveTo(18, 20, 7, 3); 
      ctx.closePath(); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.ellipse(28, 30, 8, 5, 0.25, 0, Math.PI * 2); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(30, 25); 
      ctx.lineTo(32, 19); 
      ctx.lineTo(27, 24); 
      ctx.fill();
      ctx.beginPath(); 
      ctx.moveTo(27, 26); 
      ctx.lineTo(25, 20); 
      ctx.lineTo(24, 26); 
      ctx.fill();
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 2.2;
      ctx.beginPath(); 
      ctx.moveTo(18, -3); 
      ctx.quadraticCurveTo(24 + windInfluence * 0.3, 6, 28, 18); 
      ctx.stroke();
      const ts = Math.sin(t * 0.025 + hx * 0.03) * 3;
      ctx.strokeStyle = mane; 
      ctx.lineWidth = 1.6;
      ctx.beginPath(); 
      ctx.moveTo(-26, 3); 
      ctx.quadraticCurveTo(-34, -3, -32 + ts, -12); 
      ctx.stroke();
    }
    ctx.restore();
  }
  
  const herd = [
    { x: 0.06, y: 0.83, s: 0.88, coat: '#0d0a0e', mane: '#1a1418', pose: 'sentinel', flip: false },
    { x: 0.18, y: 0.85, s: 0.70, coat: '#2a1a12', mane: '#3a2818', pose: 'graze', flip: false },
    { x: 0.30, y: 0.82, s: 0.78, coat: '#1a1618', mane: '#2a2428', pose: 'graze', flip: true },
    { x: 0.42, y: 0.84, s: 0.55, coat: '#3a2818', mane: '#4a3020', pose: 'graze', flip: false },
    { x: 0.50, y: 0.83, s: 0.72, coat: '#4a3222', mane: '#5a3e2a', pose: 'nuzzle', flip: false },
    { x: 0.56, y: 0.84, s: 0.68, coat: '#3a3035', mane: '#4a4045', pose: 'nuzzle', flip: true },
    { x: 0.68, y: 0.83, s: 0.85, coat: '#5a4828', mane: '#6a5530', pose: 'graze', flip: false },
    { x: 0.82, y: 0.85, s: 0.75, coat: '#141018', mane: '#221e26', pose: 'graze', flip: false },
    { x: 0.90, y: 0.78, s: 1.50, coat: '#080608', mane: '#141018', pose: 'foreground', flip: true },
    { x: 0.10, y: 0.79, s: 1.40, coat: '#1a0e08', mane: '#2a1a10', pose: 'foreground', flip: false },
  ];
  
  const sections = [
    { name:'Genesis', color:'#c8922a', lx:0.16, ly:0.44, depth:0.6 },
    { name:'Awakening', color:'#c97a8a', lx:0.34, ly:0.38, depth:0.7 },
    { name:'Chronicles', color:'#b8860b', lx:0.52, ly:0.34, depth:0.8 },
    { name:'Companions', color:'#8b7a3a', lx:0.68, ly:0.38, depth:0.65 },
    { name:'Verses', color:'#a080d0', lx:0.82, ly:0.42, depth:0.55 },
    { name:'Questions', color:'#c8963a', lx:0.90, ly:0.48, depth:0.5 },
  ];
  
  // ============================================
  // LANTERNS (Original)
  // ============================================
  
  const lanternsDiv = document.getElementById('lanterns');
  const lanternEls = [];
  const pageMap = ['genesis.html','awakening.html','chronicles.html','companions.html','essays.html','questions.html'];
  
  sections.forEach((s, i) => {
    const el = document.createElement('div');
    el.style.cssText = `position:absolute;z-index:8;pointer-events:auto;cursor:pointer;width:50px;height:70px;transform:translate(-50%,-50%);`;
    el.innerHTML = `<div class="lantern-glow" style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:20px;height:28px;border-radius:12px 12px 6px 6px;background:radial-gradient(circle at 50% 40%,rgba(255,240,200,0.5),${s.color} 70%,rgba(0,0,0,0.6) 100%);box-shadow:0 0 18px ${s.color},0 0 40px ${s.color}44;animation:lanternBob ${3+i*0.4}s ease-in-out infinite;transition:box-shadow .4s,filter .4s;"></div><div style="position:absolute;top:26px;left:50%;transform:translateX(-50%);width:2px;height:10px;background:rgba(200,180,150,0.4);"></div><div style="position:absolute;top:34px;left:50%;transform:translateX(-50%);width:1px;height:16px;background:rgba(200,180,150,0.2);"></div><div class="lantern-label" style="position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);text-align:center;opacity:0;transition:opacity .35s;white-space:nowrap;"><span style="font-family:'Cinzel',serif;font-size:.58rem;font-weight:600;letter-spacing:2px;color:#E8C84A;display:block;">${s.name}</span></div>`;
    const glowEl = el.querySelector('.lantern-glow');
    const labelEl = el.querySelector('.lantern-label');
    el.addEventListener('mouseenter', () => { 
      glowEl.style.boxShadow = `0 0 35px ${s.color},0 0 70px ${s.color},0 0 100px ${s.color}66`; 
      glowEl.style.filter = 'brightness(1.5)'; 
      labelEl.style.opacity = '1'; 
    });
    el.addEventListener('mouseleave', () => { 
      glowEl.style.boxShadow = `0 0 18px ${s.color},0 0 40px ${s.color}44`; 
      glowEl.style.filter = 'brightness(1)'; 
      labelEl.style.opacity = '0'; 
    });
    el.addEventListener('click', () => { location.href = pageMap[i]; });
    lanternsDiv.appendChild(el);
    lanternEls.push({ el, s });
  });
  
  // ============================================
  // GOLDEN TRAILS DRAWING (4D)
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
  // TEXT BREATHING (4D)
  // ============================================
  
  function applyTextBreathing() {
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    const breath = Math.sin(breathPhase) * 0.15 + 0.85;
    const glowIntensity = 0.3 + (scrollPercent * 0.5) + (mouseSpeed * 0.3);
    
    const titleOverlay = document.getElementById('titleOverlay');
    if (titleOverlay) {
      const mainTitle = titleOverlay.querySelector('.main-title');
      if (mainTitle) {
        mainTitle.style.transition = 'all 0.1s ease';
        mainTitle.style.textShadow = `0 0 ${30 + breath * 20}px rgba(212,175,55,${0.3 + breath * 0.2})`;
        mainTitle.style.letterSpacing = `${4 + breath * 2}px`;
      }
    }
  }
  
  // ============================================
  // ORIGINAL RENDER FUNCTIONS (Enhanced with 4D)
  // ============================================
  
  function render() {
    ctx.clearRect(0, 0, W, H);
    
    // Sky gradient
    const sg = ctx.createLinearGradient(0, 0, 0, H);
    sg.addColorStop(0, '#020108'); 
    sg.addColorStop(0.3, '#04031a'); 
    sg.addColorStop(0.55, '#070522'); 
    sg.addColorStop(0.72, '#0a0824'); 
    sg.addColorStop(1, '#0c0a1c');
    ctx.fillStyle = sg; 
    ctx.fillRect(0, 0, W, H);
    
    // Aurora bands (enhanced with scroll & section mood)
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    for (let b = 0; b < 5; b++) {
      const bandY = H * 0.2 + b * 35;
      const bandAlpha = (0.04 + scrollPercent * 0.05) - b * 0.006;
      const bandGrad = ctx.createLinearGradient(0, bandY, 0, bandY + 60);
      bandGrad.addColorStop(0, `rgba(${mood.rgb[0]}, ${mood.rgb[1] * 0.5}, ${mood.rgb[2] * 1.2}, ${bandAlpha * 0.5})`);
      bandGrad.addColorStop(0.5, `rgba(${mood.rgb[0] * 0.7}, ${mood.rgb[1]}, ${mood.rgb[2]}, ${bandAlpha})`);
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
    
    // Moon (enhanced)
    const moonX = W * 0.78, moonY = H * 0.16;
    const moonGrad = ctx.createRadialGradient(moonX, moonY, 20, moonX, moonY, 120 + scrollPercent * 80);
    moonGrad.addColorStop(0, `rgba(255,252,240,${0.6 + scrollPercent * 0.3})`);
    moonGrad.addColorStop(0.25, `rgba(255,252,240,${0.25 + scrollPercent * 0.15})`);
    moonGrad.addColorStop(0.5, `rgba(${mood.rgb[0]}, ${mood.rgb[1]}, ${mood.rgb[2]}, 0.1)`);
    moonGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = moonGrad;
    ctx.beginPath(); 
    ctx.arc(moonX, moonY, 120 + scrollPercent * 60, 0, Math.PI * 2); 
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255,252,240,0.85)'; 
    ctx.shadowColor = 'rgba(255,252,240,0.5)'; 
    ctx.shadowBlur = 40;
    ctx.beginPath(); 
    ctx.arc(moonX, moonY, 32, 0, Math.PI * 2); 
    ctx.fill(); 
    ctx.shadowBlur = 0;
    
    // Stars (enhanced with scroll speed)
    stars.forEach(s => { 
      const tw = Math.sin(t * s.sp * (1 + scrollPercent) + s.off) * 0.3 + 0.7; 
      ctx.fillStyle = 'rgba(255,255,255,' + (s.ba * tw * (0.5 + scrollPercent * 0.8)) + ')'; 
      ctx.shadowColor = 'rgba(255,255,255,' + (s.ba*tw*0.3) + ')'; 
      ctx.shadowBlur = s.r * (1 + scrollPercent); 
      ctx.beginPath(); 
      ctx.arc(s.x * W, s.y * H, s.r * tw * (1 + scrollPercent * 0.5), 0, Math.PI * 2); 
      ctx.fill(); 
      ctx.shadowBlur = 0; 
    });
    
    // Ground layers
    ctx.fillStyle = 'rgba(6,4,16,0.8)'; 
    ctx.beginPath(); 
    ctx.moveTo(0, H * 0.66);
    for (let i = 0; i <= 60; i++) { 
      const nx = i / 60; 
      ctx.lineTo(nx * W, H * 0.62 - Math.sin(nx * 3.5) * H * 0.018 - Math.sin(nx * 7.2) * H * 0.012); 
    }
    ctx.lineTo(W, H * 0.66); 
    ctx.closePath(); 
    ctx.fill();
    
    ['#0a0718','#0c0920','#0e0b22'].forEach((col, i) => { 
      ctx.fillStyle = col; 
      ctx.beginPath(); 
      ctx.moveTo(0, H); 
      for (let j = 0; j <= 80; j++) { 
        const nx = j / 80; 
        ctx.lineTo(nx * W, H * (0.72 + i * 0.06 - Math.sin(nx * (2 + i * 1.2) + i) * 0.04 - Math.sin(nx * (5 + i * 2)) * 0.02)); 
      } 
      ctx.lineTo(W, H); 
      ctx.closePath(); 
      ctx.fill(); 
    });
    
    // Lake reflection
    const lakeY = H * 0.74;
    const lakeGrad = ctx.createLinearGradient(0, lakeY, 0, lakeY + H * 0.04);
    lakeGrad.addColorStop(0, 'rgba(15,20,40,0.5)'); 
    lakeGrad.addColorStop(0.5, 'rgba(12,15,30,0.3)'); 
    lakeGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = lakeGrad; 
    ctx.fillRect(0, lakeY, W, H * 0.04);
    
    for (let i = 0; i < 50; i++) { 
      ctx.fillStyle = 'rgba(255,255,255,' + (0.06 * (0.5 + 0.5 * Math.sin(t * 0.025 + i))) + ')'; 
      ctx.beginPath(); 
      ctx.arc((Math.sin(i * 127.3) * 0.5 + 0.5) * W, lakeY + 2 + Math.random() * H * 0.02, 0.5, 0, Math.PI * 2); 
      ctx.fill(); 
    }
    
    // Mist
    const mistGrad = ctx.createLinearGradient(0, H * 0.76, 0, H);
    mistGrad.addColorStop(0, 'rgba(20,18,35,0)'); 
    mistGrad.addColorStop(0.5, `rgba(20,18,35,${0.15 + scrollPercent * 0.1})`); 
    mistGrad.addColorStop(1, `rgba(20,18,35,${0.35 + scrollPercent * 0.15})`);
    ctx.fillStyle = mistGrad; 
    ctx.fillRect(0, H * 0.76, W, H * 0.24);
    
    // Grass with wind
    const wind = (mx - 0.5) * 15;
    grass.forEach(g => { 
      const sw = Math.sin(t * g.sp * (1 + scrollPercent) + g.off) * (7 + wind); 
      ctx.strokeStyle = `rgba(30, 25, 20, ${0.3 + scrollPercent * 0.2})`; 
      ctx.lineWidth = 0.8; 
      ctx.beginPath(); 
      ctx.moveTo(g.x * W, g.by * H); 
      ctx.quadraticCurveTo(g.x * W + sw * 0.4, g.by * H - g.h * 0.5, g.x * W + sw, g.by * H - g.h); 
      ctx.stroke(); 
    });
    
    // Background herd
    herd.filter(h => h.pose !== 'foreground').forEach(h => { 
      horse(h.x * W + (mx - 0.5) * 35 * h.s, h.y * H + (my - 0.5) * 12 * h.s, h.s, h.coat, h.mane, h.pose, h.flip); 
    });
    
    // Fireflies
    flies.forEach(f => { 
      f.x += Math.sin(t * 0.02 + f.ph) * f.dx * (1 + scrollPercent); 
      f.y += Math.cos(t * 0.022 + f.ph) * f.dy * (1 + scrollPercent * 0.5); 
      f.x = ((f.x % 1) + 1) % 1; 
      f.y = Math.max(0.66, Math.min(0.98, f.y)); 
      const a = Math.abs(Math.sin(t * f.sp + f.ph)) * (0.3 + scrollPercent * 0.5); 
      ctx.fillStyle = `rgba(220, 200, 100, ${a})`; 
      ctx.shadowColor = 'rgba(180,255,120,' + (a * 0.5) + ')'; 
      ctx.shadowBlur = 5; 
      ctx.beginPath(); 
      ctx.arc(f.x * W, f.y * H, f.r * (1 + scrollPercent), 0, Math.PI * 2); 
      ctx.fill(); 
      ctx.shadowBlur = 0; 
    });
    
    // Section glows
    sections.forEach((s, idx) => {
      const sectionMood = sectionMoods[idx];
      const lx = s.lx * W + (mx - 0.5) * 20 * s.depth;
      const ly = s.ly * H + (my - 0.5) * 10 * s.depth;
      const intensity = activeSection === idx ? 1.5 : 0.5;
      const poolGrad = ctx.createRadialGradient(lx, ly + 30, 5, lx, ly + 30, 100 + scrollPercent * 50);
      poolGrad.addColorStop(0, `${sectionMood.color}${Math.floor(40 * intensity).toString(16)}`);
      poolGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = poolGrad;
      ctx.beginPath(); 
      ctx.arc(lx, ly + 30, 100 + scrollPercent * 40, 0, Math.PI * 2); 
      ctx.fill();
    });
    
    // Foreground horses
    herd.filter(h => h.pose === 'foreground').forEach(h => { 
      horse(h.x * W + (mx - 0.5) * 50, h.y * H + (my - 0.5) * 18, h.s, h.coat, h.mane, h.pose, h.flip); 
    });
    
    // Golden trails (4D)
    drawGoldenTrails();
  }
  
  // ============================================
  // LANTERN UPDATE
  // ============================================
  
  function updateLanterns() {
    lanternEls.forEach(({ el, s }) => { 
      const px = (mx - 0.5) * 25 * s.depth; 
      const py = (my - 0.5) * 14 * s.depth; 
      el.style.left = (s.lx * 100) + '%'; 
      el.style.top = (s.ly * 100) + '%'; 
      el.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`; 
    });
  }
  
  // ============================================
  // HALL PARTICLES
  // ============================================
  
  const hallParticles = document.getElementById('hallParticles');
  if (hallParticles) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'hall-bg-particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 10 + 8) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      hallParticles.appendChild(p);
    }
  }
  
  // ============================================
  // CARD HOVER EFFECTS (4D)
  // ============================================
  
  const hallCards = document.querySelectorAll('.hall-card');
  hallCards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      const mood = sectionMoods[idx];
      document.body.style.transition = 'box-shadow 0.3s ease';
      document.body.style.boxShadow = `inset 0 0 100px ${mood.color}22, inset 0 0 200px ${mood.color}11`;
    });
    card.addEventListener('mouseleave', () => {
      document.body.style.boxShadow = 'none';
    });
  });
  
  // ============================================
  // ANIMATION LOOP
  // ============================================
  
  const titleOverlay = document.getElementById('titleOverlay');
  const hintOverlay = document.getElementById('hintOverlay');
  let lastMove = 0;
  
  document.addEventListener('mousemove', () => { 
    lastMove = t; 
    if (hintOverlay) hintOverlay.style.opacity = '0.7';
  });
  
  function animate(now) {
    const delta = Math.min(0.033, (now - (lastTimestamp || now)) / 1000);
    lastTimestamp = now;
    
    // Time speed increases with scroll (4D time travel)
    const mood = activeSection >= 0 ? sectionMoods[activeSection] : sectionMoods[0];
    timeSpeed = 0.5 + scrollPercent * 1.5 + mouseSpeed * 1.5;
    timeSpeed *= mood.timeScale;
    
    t += delta * 30 * timeSpeed;
    breathPhase += delta * 3 * (0.8 + scrollPercent);
    
    render();
    updateLanterns();
    applyTextBreathing();
    
    // Idle detection
    const idle = t - lastMove > 200;
    if (titleOverlay) titleOverlay.style.opacity = idle ? '0.3' : '0.9';
    if (hintOverlay) hintOverlay.style.opacity = idle ? '0' : '0.7';
    
    requestAnimationFrame(animate);
  }
  
  // ============================================
  // ADD CSS FOR TRANSITIONS
  // ============================================
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes lanternBob {
      0%, 100% { transform: translateY(0px) translateX(-50%); }
      50% { transform: translateY(-3px) translateX(-50%); }
    }
    .hall-card { transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease !important; }
    .hall-heading, .hall-card-name, .main-title { transition: text-shadow 0.1s ease, letter-spacing 0.1s ease !important; }
    body { transition: box-shadow 0.3s ease; }
  `;
  document.head.appendChild(style);
  
  // Start animation
  updateScrollPercent();
  requestAnimationFrame(animate);
  setInterval(updateScrollPercent, 100);
  
  console.log('✦ The Horseman\'s Journal — Complete Ultra 4D Engine Active ✦');
})();
