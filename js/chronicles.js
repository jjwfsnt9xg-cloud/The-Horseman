/* ═══════════════════════════════════════════════════════════════════════════
   THE HORSEMAN'S JOURNAL — CHRONICLES 4D EDITION
   Crystal Horse | 15 Orbiting Orbs | Golden Trails | Living Library
   ═══════════════════════════════════════════════════════════════════════════ */

(function() {
  // ============================================
  // 4D STATE & DOM ELEMENTS
  // ============================================
  
  let scrollPercent = 0;
  let mouseX = 0.5, mouseY = 0.5;
  let mouseSpeed = 0;
  let lastMouseX = 0.5, lastMouseY = 0.5;
  let breathPhase = 0;
  let time = 0;
  let goldenTrails = [];
  let activeFilter = 'all';
  
  // Category colors
  const categoryColors = {
    foundational: { main: '#c8922a', light: '#e8b84a', dark: '#a07020', rgb: [200, 146, 42] },
    practical: { main: '#d4854a', light: '#e8a060', dark: '#b06030', rgb: [212, 133, 74] },
    edge: { main: '#b890c0', light: '#d0a8e0', dark: '#9870a0', rgb: [184, 144, 192] }
  };
  
  let currentCategory = 'foundational';
  
  // ============================================
  // THREE.JS SETUP — Crystal Horse & Orbs
  // ============================================
  
  let scene, camera, renderer, crystalHorse, orbs = [];
  let horseParts = {};
  let orbPositions = [];
  
  function initThreeJS() {
    const container = document.getElementById('chronicles');
    if (!container) return;
    
    // Create canvas if it doesn't exist
    let canvas = document.getElementById('chroniclesCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'chroniclesCanvas';
      canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;';
      container.insertBefore(canvas, container.firstChild);
    }
    
    scene = new THREE.Scene();
    scene.background = null;
    scene.fog = new THREE.FogExp2(0x020108, 0.008);
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 8);
    camera.lookAt(0, 0.5, 0);
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1);
    mainLight.position.set(2, 3, 4);
    scene.add(mainLight);
    
    const backLight = new THREE.PointLight(0x443366, 0.5);
    backLight.position.set(-1, 1, -3);
    scene.add(backLight);
    
    const fillLight = new THREE.PointLight(0x664422, 0.3);
    fillLight.position.set(1, 0.5, 2);
    scene.add(fillLight);
    
    const rimLight = new THREE.PointLight(0xffaa66, 0.4);
    rimLight.position.set(0, 1, -2);
    scene.add(rimLight);
    
    // Create Crystal Horse (line-based constellation style)
    createCrystalHorse();
    
    // Create 15 Orbiting Orbs
    createOrbs();
    
    // Add floating dust particles
    createDustParticles();
    
    // Start animation
    animate3D();
  }
  
  function createCrystalHorse() {
    // Body outline points
    const bodyPoints = [
      [-0.8, 0.2, 0], [-0.6, 0.4, 0], [-0.3, 0.5, 0], [0, 0.45, 0],
      [0.3, 0.5, 0], [0.6, 0.4, 0], [0.8, 0.2, 0], [0.6, 0, 0],
      [0.3, -0.1, 0], [0, -0.15, 0], [-0.3, -0.1, 0], [-0.6, 0, 0], [-0.8, 0.2, 0]
    ];
    
    const neckPoints = [
      [0.2, 0.5, 0], [0.15, 0.75, 0], [0.05, 1.0, 0], [-0.05, 1.2, 0], [-0.15, 1.3, 0]
    ];
    
    const headPoints = [
      [-0.15, 1.3, 0], [-0.25, 1.35, 0], [-0.35, 1.32, 0], [-0.4, 1.25, 0],
      [-0.35, 1.18, 0], [-0.25, 1.2, 0], [-0.15, 1.25, 0]
    ];
    
    const earPoints = [
      [-0.25, 1.35, 0], [-0.22, 1.45, 0], [-0.18, 1.38, 0]
    ];
    
    const legPoints = [
      [-0.6, 0, 0], [-0.55, -0.4, 0], [-0.5, -0.8, 0],
      [-0.3, 0, 0], [-0.25, -0.35, 0], [-0.2, -0.75, 0],
      [0.3, 0, 0], [0.35, -0.35, 0], [0.4, -0.75, 0],
      [0.6, 0, 0], [0.65, -0.4, 0], [0.7, -0.8, 0]
    ];
    
    const tailPoints = [
      [-0.8, 0.2, 0], [-1.0, 0.15, 0], [-1.15, 0.05, 0], [-1.25, -0.1, 0]
    ];
    
    // Create line segments for body
    const horseGroup = new THREE.Group();
    
    function addLine(points, color, linewidth = 1.5) {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      points.forEach(p => {
        vertices.push(p[0], p[1], p[2]);
      });
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
      const material = new THREE.LineBasicMaterial({ color: color, linewidth: linewidth });
      const line = new THREE.Line(geometry, material);
      horseGroup.add(line);
    }
    
    // Body outline
    addLine(bodyPoints, 0xc8922a, 2);
    addLine(neckPoints, 0xd4af37, 1.8);
    addLine(headPoints, 0xe8c84a, 2);
    addLine(earPoints, 0xe8c84a, 1.5);
    
    // Legs
    for (let i = 0; i < legPoints.length; i += 3) {
      addLine([legPoints[i], legPoints[i+1], legPoints[i+2]], 0xc8922a, 1.5);
    }
    
    addLine(tailPoints, 0xb890c0, 1.8);
    
    // Internal glow points (stars inside the horse)
    const glowGeometry = new THREE.BufferGeometry();
    const glowPositions = [];
    for (let i = 0; i < 30; i++) {
      glowPositions.push((Math.random() - 0.5) * 1.8, Math.random() * 1.6 - 0.2, (Math.random() - 0.5) * 0.8);
    }
    glowGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(glowPositions), 3));
    const glowMaterial = new THREE.PointsMaterial({ color: 0xe8c84a, size: 0.03, transparent: true, opacity: 0.6 });
    const glowPoints = new THREE.Points(glowGeometry, glowMaterial);
    horseGroup.add(glowPoints);
    
    scene.add(horseGroup);
    crystalHorse = horseGroup;
    
    // Store for animation
    horseParts.horseGroup = horseGroup;
    horseParts.glowPoints = glowPoints;
  }
  
  function createOrbs() {
    const orbColors = [
      0xc8922a, 0xd4af37, 0xe8c84a, 0xc8922a, 0xb8860b,
      0xd4854a, 0xe8a060, 0xd4854a, 0xc06830, 0xd4854a,
      0xb890c0, 0xd0a8e0, 0xb890c0, 0x9870a0, 0xb890c0
    ];
    
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(0.08, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: orbColors[i],
        emissive: orbColors[i],
        emissiveIntensity: 0.4,
        metalness: 0.8,
        roughness: 0.3
      });
      const orb = new THREE.Mesh(geometry, material);
      
      // Calculate orbit parameters
      const angle = (i / 15) * Math.PI * 2;
      const radius = 1.2 + Math.sin(i * 0.7) * 0.3;
      const height = 0.3 + Math.cos(i * 1.2) * 0.4;
      const speed = 0.5 + Math.sin(i) * 0.3;
      
      orbs.push({
        mesh: orb,
        radius: radius,
        angle: angle,
        height: height,
        speed: speed,
        idx: i
      });
      
      scene.add(orb);
      
      // Add glow effect (small point light)
      const light = new THREE.PointLight(orbColors[i], 0.3, 2);
      orb.add(light);
    }
  }
  
  function createDustParticles() {
    const particleCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i*3] = (Math.random() - 0.5) * 12;
      positions[i*3+1] = Math.random() * 3;
      positions[i*3+2] = (Math.random() - 0.5) * 8 - 2;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xc8922a,
      size: 0.02,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    
    const dust = new THREE.Points(geometry, material);
    scene.add(dust);
    horseParts.dust = dust;
  }
  
  let horsePose = 0; // 0=idle, 1=grazing, 2=alert, 3=rearing
  let poseTimer = 0;
  
  function animate3D() {
    requestAnimationFrame(animate3D);
    
    if (!crystalHorse) return;
    
    time += 0.016;
    breathPhase += 0.03;
    
    // Update crystal horse pose over time
    poseTimer += 0.002;
    if (poseTimer > 8) {
      poseTimer = 0;
      horsePose = Math.floor(Math.random() * 4);
    }
    
    // Apply pose transformations
    const breath = Math.sin(breathPhase) * 0.02;
    const mouseInfluenceX = (mouseX - 0.5) * 0.15;
    const mouseInfluenceY = (mouseY - 0.5) * 0.1;
    
    // Horse subtle movements (breathing + mouse tracking)
    crystalHorse.position.y = breath * 0.05 + (horsePose === 1 ? -0.08 : horsePose === 3 ? 0.1 : 0);
    crystalHorse.rotation.z = Math.sin(time * 0.8) * 0.02 + mouseInfluenceX * 0.1;
    crystalHorse.rotation.x = Math.sin(time * 0.5) * 0.01 + mouseInfluenceY * 0.05;
    
    // Pulse glow intensity based on breath
    if (horseParts.glowPoints) {
      const intensity = 0.4 + Math.sin(breathPhase * 3) * 0.2;
      horseParts.glowPoints.material.opacity = intensity;
    }
    
    // Update orbs orbiting
    orbs.forEach(orb => {
      orb.angle += 0.008 * orb.speed * (1 + scrollPercent);
      const x = Math.cos(orb.angle) * orb.radius;
      const z = Math.sin(orb.angle) * orb.radius;
      orb.mesh.position.set(x, orb.height + Math.sin(time * 1.5 + orb.idx) * 0.05, z);
      
      // Pulse orb size
      const scale = 1 + Math.sin(time * 2 + orb.idx) * 0.15;
      orb.mesh.scale.set(scale, scale, scale);
      
      // Rotate orb material emissive intensity
      if (orb.mesh.material) {
        orb.mesh.material.emissiveIntensity = 0.3 + Math.sin(time * 1.5 + orb.idx) * 0.2;
      }
    });
    
    // Update dust particles animation
    if (horseParts.dust) {
      horseParts.dust.rotation.y += 0.002;
      horseParts.dust.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
    
    // Camera movement based on mouse position
    const targetX = (mouseX - 0.5) * 0.3;
    const targetY = (mouseY - 0.5) * 0.15;
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY + 1.5 - camera.position.y) * 0.05;
    camera.lookAt(targetX * 0.5, 0.5 + targetY * 0.3, 0);
    
    renderer.render(scene, camera);
  }
  
  // ============================================
  // GOLDEN TRAILS (2D Canvas)
  // ============================================
  
  const trailCanvas = document.createElement('canvas');
  trailCanvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:100;';
  document.body.appendChild(trailCanvas);
  const trailCtx = trailCanvas.getContext('2d');
  let trailW, trailH;
  
  function resizeTrails() {
    trailW = trailCanvas.width = window.innerWidth;
    trailH = trailCanvas.height = window.innerHeight;
  }
  resizeTrails();
  window.addEventListener('resize', resizeTrails);
  
  document.addEventListener('mousemove', (e) => {
    const newX = e.clientX / trailW;
    const newY = e.clientY / trailH;
    const dx = newX - mouseX;
    const dy = newY - mouseY;
    mouseSpeed = Math.min(0.3, Math.sqrt(dx*dx + dy*dy) * 2);
    mouseX = newX;
    mouseY = newY;
    
    if (mouseSpeed > 0.05 && Math.random() < mouseSpeed * 0.6) {
      goldenTrails.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: mouseSpeed * 15 + 5,
        color: categoryColors[currentCategory]?.main || '#c8922a'
      });
    }
    
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  });
  
  function drawGoldenTrails() {
    trailCtx.clearRect(0, 0, trailW, trailH);
    
    goldenTrails.forEach((trail, idx) => {
      trail.age += 0.02;
      const alpha = Math.max(0, 1 - trail.age) * 0.5;
      const size = trail.size * (1 - trail.age * 0.7);
      
      trailCtx.beginPath();
      trailCtx.arc(trail.x, trail.y, size, 0, Math.PI * 2);
      trailCtx.fillStyle = `rgba(212, 175, 55, ${alpha * 0.6})`;
      trailCtx.fill();
      
      trailCtx.beginPath();
      trailCtx.arc(trail.x, trail.y, size * 0.5, 0, Math.PI * 2);
      trailCtx.fillStyle = `rgba(255, 220, 100, ${alpha})`;
      trailCtx.fill();
    });
    
    goldenTrails = goldenTrails.filter(t => t.age < 1);
    requestAnimationFrame(() => drawGoldenTrails());
  }
  
  // ============================================
  // SCROLL TRACKING
  // ============================================
  
  function updateScrollPercent() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = Math.min(1, Math.max(0, scrollTop / maxScroll));
  }
  
  window.addEventListener('scroll', updateScrollPercent);
  updateScrollPercent();
  
  // ============================================
  // TEXT BREATHING EFFECT
  // ============================================
  
  function applyTextBreathing() {
    const breath = Math.sin(breathPhase) * 0.1 + 0.9;
    const glowIntensity = 0.3 + scrollPercent * 0.4 + mouseSpeed * 0.3;
    
    const heroTitle = document.querySelector('.chr-title');
    if (heroTitle) {
      heroTitle.style.textShadow = `0 0 ${30 + breath * 20}px rgba(212,175,55,${0.3 + breath * 0.2})`;
      heroTitle.style.letterSpacing = `${6 + breath * 2}px`;
    }
    
    const introHeadline = document.querySelector('.intro-headline');
    if (introHeadline) {
      introHeadline.style.textShadow = `0 0 ${20 + glowIntensity * 15}px rgba(212,175,55,0.3)`;
    }
  }
  
  // ============================================
  // PARTICLE SYSTEM (Background)
  // ============================================
  
  function initBackgroundParticles() {
    const cp = document.getElementById('chrParticles');
    if (cp) {
      cp.innerHTML = '';
      for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'chr-p';
        const sz = Math.random() * 4 + 1;
        const dur = Math.random() * 15 + 10;
        const del = Math.random() * 15;
        const offset = (Math.random() - 0.5) * 80;
        p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:${Math.random()*30}%;opacity:${Math.random()*0.4+0.1};animation:chrParticleFloat ${dur}s ease-in-out infinite;animation-delay:${del}s;background:radial-gradient(circle, rgba(212,175,55,0.8), rgba(212,175,55,0));border-radius:50%;--d:${offset}px;`;
        cp.appendChild(p);
      }
    }
  }
  
  // ============================================
  // FILTER BUTTONS WITH CATEGORY MOOD
  // ============================================
  
  function initFilters() {
    const filterBtns = document.querySelectorAll('.chr-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        activeFilter = filter;
        
        // Update current category for color effects
        if (filter !== 'all') currentCategory = filter;
        else currentCategory = 'foundational';
        
        // Visual feedback
        goldenTrails.push({
          x: btn.getBoundingClientRect().left + btn.offsetWidth/2,
          y: btn.getBoundingClientRect().top + btn.offsetHeight/2,
          age: 0,
          size: 20,
          color: categoryColors[currentCategory]?.main
        });
        
        // Filter books
        const books = document.querySelectorAll('.book-wrap');
        books.forEach(book => {
          const show = (filter === 'all' || book.dataset.category === filter);
          if (show) {
            book.classList.remove('hidden');
            setTimeout(() => book.classList.add('visible'), 10);
          } else {
            book.classList.add('hidden');
            book.classList.remove('visible');
          }
        });
        
        closeArticle();
      });
    });
  }
  
  // ============================================
  // BOOK HOVER EFFECTS
  // ============================================
  
  function initBookEffects() {
    const books = document.querySelectorAll('.book-wrap');
    books.forEach(book => {
      book.addEventListener('mouseenter', (e) => {
        const cat = book.dataset.category;
        const color = categoryColors[cat]?.main || '#c8922a';
        const book3d = book.querySelector('.book-3d');
        if (book3d) {
          book3d.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
          book3d.style.boxShadow = `0 0 40px ${color}66, 0 0 80px ${color}33`;
          book3d.style.transform = 'translateY(-8px)';
        }
        
        goldenTrails.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          size: 12,
          color: color
        });
      });
      
      book.addEventListener('mouseleave', () => {
        const book3d = book.querySelector('.book-3d');
        if (book3d) {
          book3d.style.boxShadow = '';
          book3d.style.transform = '';
        }
      });
    });
  }
  
  // ============================================
  // ARTICLE READER (Preserved from your original)
  // ============================================
  
  const panel = document.getElementById('articlePanel');
  let openIdx = -1;
  
  // Your articles array from original chronicles.js goes here
  // [PASTE YOUR 15 ARTICLES HERE]
  
  // For now, using placeholder - YOU MUST PASTE YOUR ACTUAL ARTICLES
  
  const articles = [
    // PASTE YOUR 15 ARTICLE OBJECTS HERE
    // They should match your original chronicles.js exactly
  ];
  
  function cleanText(html) {
    return html.replace(/\s*—\s*/g, ' — ').replace(/<span class="rdrop">(.)<\/span>/g, (_, c) => `<span class="rd-dropcap">${c}</span>`);
  }
  
  function buildArticleHTML(art) {
    let html = `
      <div class="rd-title-block">
        <div class="rd-tb-corners"><div class="rd-corner tl"></div><div class="rd-corner tr"></div><div class="rd-corner bl"></div><div class="rd-corner br"></div></div>
        <div class="rd-tb-inner">
          <div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
          <div class="rd-tb-label">${art.label}</div>
          <div class="rd-tb-title">${art.title}</div>
          <div class="rd-tb-div"><div class="rd-dl"></div><span class="rd-ds">✦</span><div class="rd-dl"></div></div>
          <div class="rd-tb-tagline">${art.tagline}</div>
          <div class="rd-tb-tags">${art.keywords.map(k => `<span class="rd-tag">${k}</span>`).join('')}</div>
          <div class="rd-tb-byline">The Horseman's Journal · Praveen Kumar</div>
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
          <div class="rd-txb-header"><span class="rd-txb-sec">${pg.section}</span><div class="rd-txb-line"></div></div>
          <div class="rd-txb-body">${cleanText(pg.html)}</div>
        </div>`;
      }
      if (pg.type === 'quote') {
        html += `<div class="rd-quote-block">
          <div class="rd-qb-rule"></div><div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
          <div class="rd-qb-text">${pg.text}</div><div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
          <div class="rd-qb-rule"></div><div class="rd-qb-byline">Praveen Kumar · The Horseman's Journal</div>
        </div>`;
      }
    });
    
    html += `<div class="rd-end-ornament"><div class="rd-ornament"><div class="rd-oln"></div><div class="rd-gem"></div><div class="rd-oln rd-oln-r"></div></div>
      <div class="rd-end-label">End of Article</div><button class="rd-close-btn" id="rdClose">Close Article</button></div>`;
    
    return html;
  }
  
  function openArticle(i) {
    const art = articles[i];
    openIdx = i;
    
    const inner = panel.querySelector('.art-panel-inner');
    inner.innerHTML = `
      <div class="rd-grain"></div><div class="rd-vignette"></div>
      <div class="rd-scroll-area" id="rdScroll"><div class="rd-content" id="rdContent">${buildArticleHTML(art)}</div></div>
      <div class="rd-top-bar"><div class="rd-top-label">${art.label}</div><button class="rd-top-close" id="rdTopClose">✕</button></div>
    `;
    
    document.getElementById('rdClose')?.addEventListener('click', closeArticle);
    document.getElementById('rdTopClose')?.addEventListener('click', closeArticle);
    panel.classList.add('open');
    
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
  
  function initBookClicks() {
    document.querySelectorAll('.book-wrap').forEach(bk => {
      bk.addEventListener('click', () => {
        const i = parseInt(bk.dataset.article);
        if (openIdx === i) { closeArticle(); return; }
        openArticle(i);
      });
    });
  }
  
  function initScrollRevealBooks() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), idx * 100);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.book-wrap').forEach(b => observer.observe(b));
  }
  
  // ============================================
  // VIDEO HANDLER
  // ============================================
  
  function initVideo() {
    const video = document.querySelector('.chr-video');
    if (video) {
      video.play().catch(e => console.log('Video autoplay prevented'));
    }
  }
  
  // ============================================
  // SCROLL HINT
  // ============================================
  
  function initScrollHint() {
    const hint = document.getElementById('scrollHint');
    if (hint) {
      hint.addEventListener('click', () => {
        const intro = document.querySelector('.horse-intro');
        if (intro) intro.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  function init() {
    initVideo();
    initBackgroundParticles();
    initFilters();
    initBookEffects();
    initBookClicks();
    initScrollRevealBooks();
    initScrollHint();
    initThreeJS();
    drawGoldenTrails();
    setInterval(applyTextBreathing, 100);
    
    console.log('✦ Chronicles 4D — Crystal Horse & Living Library Active ✦');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();
