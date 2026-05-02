/**
 * hero.js — The Horseman's Journal
 * Full 3D interactive scene built with Three.js r128
 * Procedural horses, galloping animation, stars, moon, dust
 */

(function () {
  'use strict';

  // ============================================================
  // 1. RENDERER & SCENE SETUP
  // ============================================================

  const canvas = document.getElementById('hero-canvas');

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x04020e, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.9;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0a0418, 30, 100);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  camera.position.set(0, 5, 18);
  camera.lookAt(0, 2.5, 0);

  // Camera animation targets
  const camTarget = { x: 0, y: 5 };
  let mouse = { x: 0, y: 0 };

  // ============================================================
  // 2. LIGHTING
  // ============================================================

  // Dim ambient — night sky feel
  const ambient = new THREE.AmbientLight(0x1a1240, 0.8);
  scene.add(ambient);

  // Moon light — cool blue-white from upper left
  const moonLight = new THREE.DirectionalLight(0x9db4d9, 2.2);
  moonLight.position.set(-15, 30, 10);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.width = 2048;
  moonLight.shadow.mapSize.height = 2048;
  moonLight.shadow.camera.near = 0.5;
  moonLight.shadow.camera.far = 120;
  moonLight.shadow.camera.left = -40;
  moonLight.shadow.camera.right = 40;
  moonLight.shadow.camera.top = 30;
  moonLight.shadow.camera.bottom = -10;
  moonLight.shadow.bias = -0.001;
  scene.add(moonLight);

  // Warm rim light from behind horses — sunset/fire glow
  const rimLight = new THREE.DirectionalLight(0xd4501a, 0.6);
  rimLight.position.set(8, 4, -20);
  scene.add(rimLight);

  // Ground bounce — slight warm tint from below
  const bounceLight = new THREE.HemisphereLight(0x0d0500, 0x1a0800, 0.4);
  scene.add(bounceLight);

  // ============================================================
  // 3. NIGHT SKY GRADIENT (large sphere backdrop)
  // ============================================================

  const skyGeo = new THREE.SphereGeometry(250, 32, 32);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      topColor:    { value: new THREE.Color(0x010008) },
      bottomColor: { value: new THREE.Color(0x08020e) },
      offset:      { value: 20 },
      exponent:    { value: 0.5 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  // ============================================================
  // 4. STARS (particle system)
  // ============================================================

  const STAR_COUNT = 3000;
  const starPositions = new Float32Array(STAR_COUNT * 3);
  const starSizes     = new Float32Array(STAR_COUNT);

  for (let i = 0; i < STAR_COUNT; i++) {
    // Hemisphere of stars above horizon
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.random() * Math.PI * 0.5;
    const r     = 200 + Math.random() * 30;
    starPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = r * Math.cos(phi);
    starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    starSizes[i] = 0.4 + Math.random() * 1.2;
  }

  const starsGeo = new THREE.BufferGeometry();
  starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starsGeo.setAttribute('size',     new THREE.BufferAttribute(starSizes, 1));

  const starsMat = new THREE.ShaderMaterial({
    uniforms: {
      time:  { value: 0 },
      color: { value: new THREE.Color(0xffffff) },
    },
    vertexShader: `
      attribute float size;
      uniform float time;
      varying float vAlpha;
      void main() {
        // Twinkle: each star has a unique flicker frequency
        float twinkle = 0.6 + 0.4 * sin(time * 2.0 + position.x * 0.5 + position.z * 0.3);
        vAlpha = twinkle;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * twinkle * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vAlpha;
      void main() {
        // Circular point with soft edge
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.1, d) * vAlpha;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const starPoints = new THREE.Points(starsGeo, starsMat);
  scene.add(starPoints);

  // ============================================================
  // 5. MOON
  // ============================================================

  const moonGroup = new THREE.Group();
  moonGroup.position.set(-35, 55, -100);
  scene.add(moonGroup);

  // Moon disc
  const moonMesh = new THREE.Mesh(
    new THREE.SphereGeometry(8, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0xf0ead8 })
  );
  moonGroup.add(moonMesh);

  // Inner glow halo
  const halo1 = new THREE.Mesh(
    new THREE.SphereGeometry(9.5, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0xc8d8f0,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    })
  );
  moonGroup.add(halo1);

  // Outer atmospheric glow
  const halo2 = new THREE.Mesh(
    new THREE.SphereGeometry(14, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0x8899cc,
      transparent: true,
      opacity: 0.04,
      side: THREE.BackSide,
    })
  );
  moonGroup.add(halo2);

  // ============================================================
  // 6. GROUND
  // ============================================================

  const groundGeo = new THREE.PlaneGeometry(300, 300, 40, 40);

  // Slightly undulate the ground verts for natural feel
  const verts = groundGeo.attributes.position;
  for (let i = 0; i < verts.count; i++) {
    const x = verts.getX(i);
    const z = verts.getZ(i);
    // Keep a flat strip in the middle for the horses
    if (Math.abs(z) > 5) {
      verts.setY(i, Math.sin(x * 0.15) * Math.cos(z * 0.1) * 0.8);
    }
  }
  groundGeo.computeVertexNormals();

  const groundMat = new THREE.MeshLambertMaterial({ color: 0x120800 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  scene.add(ground);

  // ============================================================
  // 7. DISTANT HILLS (silhouettes)
  // ============================================================

  function makeHill(x, z, rx, ry) {
    const geo = new THREE.SphereGeometry(5, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const mat = new THREE.MeshLambertMaterial({ color: 0x060300 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, -0.3, z);
    mesh.scale.set(rx, ry, 1);
    mesh.receiveShadow = true;
    scene.add(mesh);
  }

  makeHill(-40, -45, 5.0, 2.0);
  makeHill(-10, -55, 7.0, 1.5);
  makeHill(25,  -48, 4.5, 2.5);
  makeHill(55,  -40, 6.0, 1.8);
  makeHill(-70, -38, 8.0, 2.2);
  makeHill(80,  -42, 5.5, 1.6);

  // ============================================================
  // 8. HORSE BUILDER
  // ============================================================

  /**
   * Darken a hex color by a factor (0–1)
   */
  function darken(hex, f) {
    const r = Math.floor(((hex >> 16) & 0xff) * f);
    const g = Math.floor(((hex >> 8)  & 0xff) * f);
    const b = Math.floor(( hex        & 0xff) * f);
    return (r << 16) | (g << 8) | b;
  }

  /**
   * Build a stylised horse from primitive geometries.
   * The horse faces the +X axis (right).
   *
   * @param {number} bodyColor  — hex colour for coat
   * @returns {THREE.Group}     — horse group with .userData.anim
   */
  function buildHorse(bodyColor) {
    const coat    = new THREE.MeshLambertMaterial({ color: bodyColor });
    const darkMat = new THREE.MeshLambertMaterial({ color: darken(bodyColor, 0.45) });
    const hoofMat = new THREE.MeshLambertMaterial({ color: 0x1a1008 });
    const eyeMat  = new THREE.MeshLambertMaterial({ color: 0x080404 });
    const whiteMat= new THREE.MeshLambertMaterial({ color: 0xf0ead8 }); // eye white

    const horse = new THREE.Group();

    // ── BODY ──
    const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.1, 0.88), coat);
    bodyMesh.position.set(0, 2.1, 0);
    bodyMesh.castShadow = true;
    horse.add(bodyMesh);

    // ── NECK ──
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.46, 1.15, 0.44), coat);
    neck.position.set(1.05, 2.75, 0);
    neck.rotation.z = -0.45;
    neck.castShadow = true;
    horse.add(neck);

    // ── HEAD ──
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.55, 0.52), coat);
    head.position.set(1.6, 3.35, 0);
    head.castShadow = true;
    horse.add(head);

    // ── SNOUT ──
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.33, 0.42), coat);
    snout.position.set(2.0, 3.12, 0);
    horse.add(snout);

    // ── NOSTRILS ──
    const nostrilGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const nostrilMat = new THREE.MeshLambertMaterial({ color: 0x220000 });
    [-1, 1].forEach(side => {
      const n = new THREE.Mesh(nostrilGeo, nostrilMat);
      n.position.set(2.24, 3.05, side * 0.13);
      horse.add(n);
    });

    // ── EYES ──
    [-1, 1].forEach(side => {
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), whiteMat);
      white.position.set(1.72, 3.44, side * 0.255);
      horse.add(white);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), eyeMat);
      pupil.position.set(1.76, 3.44, side * 0.29);
      horse.add(pupil);
    });

    // ── EARS ──
    const earGeo = new THREE.ConeGeometry(0.075, 0.22, 6);
    [-1, 1].forEach(side => {
      const ear = new THREE.Mesh(earGeo, coat);
      ear.position.set(1.38, 3.72, side * 0.17);
      horse.add(ear);
    });

    // ── MANE ──
    const maneGeo = new THREE.PlaneGeometry(0.28, 0.55);
    const maneMat2 = new THREE.MeshLambertMaterial({
      color: darken(bodyColor, 0.35),
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 6; i++) {
      const strand = new THREE.Mesh(maneGeo, maneMat2);
      strand.position.set(1.05 - i * 0.26, 3.0 + Math.sin(i * 1.1) * 0.08, 0);
      strand.rotation.z = 0.25 + i * 0.05;
      horse.add(strand);
    }

    // ── LEGS ──
    // Each leg is a pivot group so we can rotate from the hip/shoulder.
    const LEG_W = 0.21;
    const LEG_H = 1.25;
    const legGeo  = new THREE.BoxGeometry(LEG_W, LEG_H, LEG_W);
    const hoofGeo = new THREE.BoxGeometry(LEG_W + 0.05, 0.18, LEG_W + 0.08);

    const legDefs = [
      { name: 'frontLeft',  x:  0.88, z:  0.36 },
      { name: 'frontRight', x:  0.88, z: -0.36 },
      { name: 'backLeft',   x: -0.88, z:  0.36 },
      { name: 'backRight',  x: -0.88, z: -0.36 },
    ];

    const legGroups = {};

    legDefs.forEach(def => {
      const pivot = new THREE.Group();
      pivot.position.set(def.x, 1.55, def.z);

      const legMesh = new THREE.Mesh(legGeo, coat);
      legMesh.position.y = -LEG_H / 2;
      legMesh.castShadow = true;
      pivot.add(legMesh);

      const hoofMesh = new THREE.Mesh(hoofGeo, hoofMat);
      hoofMesh.position.y = -LEG_H - 0.09;
      pivot.add(hoofMesh);

      horse.add(pivot);
      legGroups[def.name] = pivot;
    });

    // ── TAIL ──
    const tailPivot = new THREE.Group();
    tailPivot.position.set(-1.4, 2.35, 0);
    horse.add(tailPivot);

    const tailSegGeo = new THREE.BoxGeometry(0.13, 0.42, 0.13);
    for (let s = 0; s < 5; s++) {
      const seg = new THREE.Mesh(tailSegGeo, darkMat);
      seg.position.y = -s * 0.36;
      seg.rotation.z = -s * 0.18;
      tailPivot.add(seg);
    }

    // ── ANIMATION DATA ──
    horse.userData.anim = {
      legGroups,
      tailPivot,
      bodyMesh,
      neck,
    };

    return horse;
  }

  // ============================================================
  // 9. PLACE HORSES IN SCENE
  // ============================================================

  const horseConfigs = [
    // Main horse — foreground, centreish
    { color: 0x4e2a0a, x:  0,   y: 0, z:  0,    scale: 1.00, speed: 1.0, phase: 0.0,  rotY: 0.05 },
    // Second horse — left, slightly behind
    { color: 0x1c1208, x: -5.5, y: 0, z: -4.5,  scale: 0.88, speed: 1.3, phase: 1.8,  rotY: 0.08 },
    // Third horse — right, further back
    { color: 0x5c3010, x:  6,   y: 0, z: -7.5,  scale: 0.74, speed: 0.95,phase: 3.5,  rotY: -0.06 },
  ];

  const horses = horseConfigs.map(cfg => {
    const h = buildHorse(cfg.color);
    h.position.set(cfg.x, cfg.y, cfg.z);
    h.scale.setScalar(cfg.scale);
    h.rotation.y = cfg.rotY;
    h.userData.cfg = cfg;
    scene.add(h);
    return h;
  });

  // ============================================================
  // 10. DUST PARTICLES
  // ============================================================

  const DUST_COUNT = 300;
  const dustPos = new Float32Array(DUST_COUNT * 3);
  const dustLife = new Float32Array(DUST_COUNT);

  for (let i = 0; i < DUST_COUNT; i++) {
    dustPos[i * 3]     = (Math.random() - 0.5) * 14;
    dustPos[i * 3 + 1] = Math.random() * 1.8;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    dustLife[i]        = Math.random();
  }

  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

  const dustMat = new THREE.PointsMaterial({
    color: 0x7a5530,
    size: 0.18,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const dustCloud = new THREE.Points(dustGeo, dustMat);
  dustCloud.position.set(0, 0, 0.8);
  scene.add(dustCloud);

  // Each particle's velocity (x drift, y rise, reset life rate)
  const dustVel = Array.from({ length: DUST_COUNT }, () => ({
    x: (Math.random() - 0.5) * 0.04,
    y: 0.008 + Math.random() * 0.018,
    rate: 0.004 + Math.random() * 0.006,
  }));

  // ============================================================
  // 11. GALLOP ANIMATION
  // ============================================================

  /**
   * Animate one horse's legs for a galloping gait.
   * Uses a two-beat (diagonal) gallop pattern.
   */
  function gallopHorse(horse, t) {
    const { legGroups, tailPivot, bodyMesh, neck } = horse.userData.anim;
    const { speed, phase } = horse.userData.cfg;

    const g = t * speed * 5 + phase;     // gallop cycle timer
    const swing = 0.55;                  // max leg swing angle (rad)

    // Diagonal pairs: FL+BR swing together, FR+BL counter-swing
    legGroups.frontLeft.rotation.x  =  Math.sin(g)           * swing;
    legGroups.backRight.rotation.x  =  Math.sin(g)           * swing;
    legGroups.frontRight.rotation.x =  Math.sin(g + Math.PI) * swing;
    legGroups.backLeft.rotation.x   =  Math.sin(g + Math.PI) * swing;

    // Slight lateral splay for realism
    legGroups.frontLeft.rotation.z  =  0.06 + Math.sin(g * 2) * 0.04;
    legGroups.frontRight.rotation.z = -0.06 - Math.sin(g * 2) * 0.04;
    legGroups.backLeft.rotation.z   =  0.04;
    legGroups.backRight.rotation.z  = -0.04;

    // Body bob — rises on the power stroke, dips on the float phase
    bodyMesh.position.y = 2.1 + Math.abs(Math.sin(g * 2)) * 0.1;

    // Head/neck nod
    neck.rotation.z = -0.45 + Math.sin(g) * 0.08;

    // Tail wag
    tailPivot.rotation.z  = Math.sin(g * 0.7) * 0.28;
    tailPivot.rotation.y  = Math.sin(g * 0.5) * 0.18;
  }

  // ============================================================
  // 12. MOUSE / TOUCH INTERACTION
  // ============================================================

  function onMouseMove(e) {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }

  function onTouchMove(e) {
    const t = e.touches[0];
    mouse.x = (t.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (t.clientY / window.innerHeight - 0.5) * 2;
  }

  document.addEventListener('mousemove', onMouseMove, { passive: true });
  document.addEventListener('touchmove', onTouchMove, { passive: true });

  // ============================================================
  // 13. RESIZE HANDLER
  // ============================================================

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onResize);

  // ============================================================
  // 14. ANIMATION LOOP
  // ============================================================

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();
    clock.getDelta(); // consume delta (prevent huge first-frame jump)

    // ── Update stars shader time ──
    starsMat.uniforms.time.value = elapsed;

    // ── Animate each horse ──
    horses.forEach(h => gallopHorse(h, elapsed));

    // ── Update dust particles ──
    const dp = dustGeo.attributes.position.array;
    for (let i = 0; i < DUST_COUNT; i++) {
      dp[i * 3]     += dustVel[i].x;
      dp[i * 3 + 1] += dustVel[i].y;
      dustLife[i]   -= dustVel[i].rate;

      if (dustLife[i] <= 0 || dp[i * 3 + 1] > 2.5) {
        // Reset particle near horse hooves
        const hPos = horses[i % horses.length].position;
        dp[i * 3]     = hPos.x + (Math.random() - 0.5) * 8;
        dp[i * 3 + 1] = 0.05;
        dp[i * 3 + 2] = hPos.z + (Math.random() - 0.5) * 2.5;
        dustVel[i].x   = (Math.random() - 0.5) * 0.05;
        dustVel[i].y   = 0.006 + Math.random() * 0.016;
        dustLife[i]    = 0.8 + Math.random() * 0.4;
      }
    }
    dustGeo.attributes.position.needsUpdate = true;

    // ── Moon slow drift ──
    moonGroup.position.y = 55 + Math.sin(elapsed * 0.05) * 0.8;

    // ── Smooth camera parallax from mouse ──
    camTarget.x += (mouse.x * 3.5 - camTarget.x) * 0.04;
    camTarget.y += (5 - mouse.y * 2 - camTarget.y) * 0.04;

    camera.position.x = camTarget.x;
    camera.position.y = camTarget.y;
    camera.lookAt(0, 2.5, 0);

    renderer.render(scene, camera);
  }

  animate();

})();
