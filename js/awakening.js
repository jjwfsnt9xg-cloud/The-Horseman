/* ════════════════════════════════════════════════════════
   AWAKENING — The Horseman's Journal
   JavaScript — Particles · 3D Tilt · Scroll · Reveal
════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── utils ── */
  var qs  = function(s)  { return document.querySelector(s); };
  var qsa = function(s)  { return document.querySelectorAll(s); };

  /* ════════════════════════════════════════════
     1. RISING PARTICLES — matches chronicles chrRise
  ════════════════════════════════════════════ */
  var canvas  = document.getElementById("awkCanvas");
  var ctx     = canvas ? canvas.getContext("2d") : null;
  var particles = [];
  var PCOUNT = 80;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * (canvas ? canvas.width : window.innerWidth),
      y: (canvas ? canvas.height : window.innerHeight) + 10,
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.55 + 0.18,
      drift: (Math.random() - 0.5) * 1.2,   /* horizontal drift */
      alpha: 0,
      alphaDir: 1,
      maxAlpha: Math.random() * 0.55 + 0.15,
      life: 0,
      maxLife: (Math.random() * 0.85 + 0.15) /* 0→1 fade in then out */
    };
  }

  function initParticles() {
    particles = [];
    for (var i = 0; i < PCOUNT; i++) {
      var p = makeParticle();
      /* scatter vertically so they don't all start at the bottom */
      p.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
      p.life = Math.random();
      particles.push(p);
    }
  }

  function drawParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      /* life 0→0.15: fade in; 0.15→0.85: full; 0.85→1: fade out */
      if (p.life < 0.15) {
        p.alpha = (p.life / 0.15) * p.maxAlpha;
      } else if (p.life > 0.85) {
        p.alpha = ((1 - p.life) / 0.15) * p.maxAlpha;
      } else {
        p.alpha = p.maxAlpha;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(212,175,55,1)";
      ctx.fill();
      ctx.restore();

      /* move upward + drift */
      p.y    -= p.speed;
      p.x    += p.drift * 0.008;
      p.life += p.speed / (canvas ? canvas.height : 800);

      /* reset when off top or life complete */
      if (p.life >= 1 || p.y < -10) {
        particles[i] = makeParticle();
      }
    }
  }

  var rafParticle;
  function particleLoop() {
    drawParticles();
    rafParticle = requestAnimationFrame(particleLoop);
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reducedMotion) {
    resizeCanvas();
    initParticles();
    particleLoop();

    window.addEventListener("resize", function () {
      resizeCanvas();
      initParticles();
    }, { passive: true });
  }

  /* ════════════════════════════════════════════
     2. SCROLL PROGRESS BAR
  ════════════════════════════════════════════ */
  var progFill = document.getElementById("awkProgFill");

  function updateProgress() {
    if (!progFill) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progFill.style.width = Math.min(100, pct) + "%";
  }

  /* ════════════════════════════════════════════
     3. NAV SCROLL STATE
  ════════════════════════════════════════════ */
  var awkNav = document.getElementById("awkNav");
  function updateNav() {
    if (!awkNav) return;
    awkNav.classList.toggle("scrolled", window.scrollY > 60);
  }

  /* ════════════════════════════════════════════
     4. ATMOSPHERE PARALLAX (same as chronicles)
  ════════════════════════════════════════════ */
  var o1 = qs(".awk-o1"), o2 = qs(".awk-o2"), o3 = qs(".awk-o3");
  function updateParallax() {
    var y = window.scrollY;
    if (o1) o1.style.transform = "translateY(" + (y * 0.06)  + "px)";
    if (o2) o2.style.transform = "translateY(" + (-y * 0.04) + "px)";
    if (o3) o3.style.transform = "translateX(" + (y * 0.02)  + "px)";
  }

  /* ════════════════════════════════════════════
     5. MASTER SCROLL HANDLER
  ════════════════════════════════════════════ */
  window.addEventListener("scroll", function () {
    updateProgress();
    updateNav();
    if (!reducedMotion) updateParallax();
  }, { passive: true });

  updateProgress();
  updateNav();

  /* ════════════════════════════════════════════
     6. REVEAL — scroll-triggered fade-in
  ════════════════════════════════════════════ */
  var revealEls = qsa(".awk-reveal");
  var revealObs = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        /* respect CSS transition-delay set by --ad */
        var delay = e.target.style.getPropertyValue("--ad") || "0s";
        e.target.style.transitionDelay = delay;
        e.target.classList.add("vis");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  revealEls.forEach(function (el) { revealObs.observe(el); });

  /* ════════════════════════════════════════════
     7. PAGE 3D TILT ON MOUSE MOVE
  ════════════════════════════════════════════ */
  if (!reducedMotion) {
    var pages = qsa(".awk-page");
    pages.forEach(function (pg) {
      var inner = pg.querySelector(".awk-page-inner");
      if (!inner) return;

      pg.addEventListener("mousemove", function (e) {
        var rect = pg.getBoundingClientRect();
        var cx = rect.left + rect.width  / 2;
        var cy = rect.top  + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width  / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        inner.style.transform = "rotateX(" + (18 - dy * 6) + "deg) rotateY(" + (-4 + dx * 4) + "deg)";
        inner.style.transition = "transform 0.08s ease";
      }, { passive: true });

      pg.addEventListener("mouseleave", function () {
        inner.style.transform = "rotateX(18deg) rotateY(-4deg)";
        inner.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
      }, { passive: true });
    });
  }

  /* ════════════════════════════════════════════
     8. CHAPTER DOT ACTIVE STATE
  ════════════════════════════════════════════ */
  var sections   = qsa("[data-i]");
  var dots       = qsa(".awk-dot");
  var currentIdx = 0;

  var sectionObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var idx = e.target.getAttribute("data-i");
        currentIdx = parseInt(idx) || 0;
        dots.forEach(function (d) {
          d.classList.toggle("active", d.getAttribute("data-i") === idx);
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(function (s) { sectionObs.observe(s); });

  /* ════════════════════════════════════════════
     9. DAYS GRID — animated dots on scroll into view
  ════════════════════════════════════════════ */
  function buildDaysGrid(containerId, count, litCount) {
    var grid = document.getElementById(containerId);
    if (!grid) return;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("div");
      d.className = "awk-dg-dot";
      d.setAttribute("data-dot", i);
      grid.appendChild(d);
    }

    var gridObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var dots2 = e.target.querySelectorAll(".awk-dg-dot");
          dots2.forEach(function (dot, idx) {
            setTimeout(function () {
              if (idx < litCount) dot.classList.add("lit");
            }, idx * 60);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    gridObs.observe(grid);
  }

  buildDaysGrid("daysGrid", 20, 8);   /* page4 — 20 days, 8 visits shown lit */

  /* Also build right-side decoration dots */
  function buildDecoDots(containerId, count, litIdx) {
    var c = document.getElementById(containerId);
    if (!c) return;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("div");
      d.className = "awk-dd-d";
      c.appendChild(d);
    }
    var dObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var dd = e.target.querySelectorAll(".awk-dd-d");
          dd.forEach(function (dot, idx) {
            setTimeout(function () {
              if (idx === litIdx) dot.classList.add("lit");
            }, idx * 90);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    dObs.observe(c);
  }

  buildDecoDots("decoDotsRight", 20, 19);   /* last dot glows gold */

  /* ════════════════════════════════════════════
     10. SMOOTH ANCHOR SCROLL
  ════════════════════════════════════════════ */
  var navH = function () {
    return parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-h")) || 54;
  };

  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id  = a.getAttribute("href").slice(1);
      var tgt = document.getElementById(id);
      if (!tgt) return;
      e.preventDefault();
      var top = tgt.getBoundingClientRect().top + window.scrollY - navH();
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ════════════════════════════════════════════
     11. KEYBOARD ARROW NAVIGATION
  ════════════════════════════════════════════ */
  var sectionIds = ["hero","ch1","ch2","ch3","ch4","ch5","ch6","closing"];
  var locked = false;

  function navToIdx(idx) {
    if (locked || idx < 0 || idx >= sectionIds.length) return;
    var el = document.getElementById(sectionIds[idx]);
    if (!el) return;
    currentIdx = idx; locked = true;
    var top = el.getBoundingClientRect().top + window.scrollY - navH();
    window.scrollTo({ top: top, behavior: "smooth" });
    setTimeout(function () { locked = false; }, 900);
  }

  document.addEventListener("keydown", function (e) {
    if (locked) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); navToIdx(currentIdx + 1); }
    if (e.key === "ArrowUp"   || e.key === "PageUp")   { e.preventDefault(); navToIdx(currentIdx - 1); }
  });

  /* ════════════════════════════════════════════
     12. MOBILE HAMBURGER
  ════════════════════════════════════════════ */
  var ham  = document.getElementById("awkHam");
  var nav2 = document.getElementById("awkNav");
  if (ham && nav2) {
    ham.addEventListener("click", function () {
      nav2.classList.toggle("nav-open");
    });
    qsa(".awk-navlinks a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav2.classList.remove("nav-open");
      });
    });
  }

  /* ════════════════════════════════════════════
     13. GOLD CURSOR TRAIL (desktop only)
  ════════════════════════════════════════════ */
  if (!reducedMotion && window.innerWidth > 860) {
    var TRAIL = 14;
    var trail = [];
    for (var t = 0; t < TRAIL; t++) {
      var el = document.createElement("div");
      var sz = (3.5 - t * 0.20);
      el.style.cssText = [
        "position:fixed",
        "pointer-events:none",
        "z-index:9999",
        "border-radius:50%",
        "transform:translate(-50%,-50%)",
        "width:"  + sz + "px",
        "height:" + sz + "px",
        "background:rgba(212,175,55," + (0.60 - t * 0.035) + ")",
        "left:-200px",
        "top:-200px"
      ].join(";");
      document.body.appendChild(el);
      trail.push({ el: el, x: -200, y: -200 });
    }

    var cursor = { x: -200, y: -200 };
    document.addEventListener("mousemove", function (e) {
      cursor.x = e.clientX; cursor.y = e.clientY;
    }, { passive: true });

    (function trailRaf() {
      trail[0].x = cursor.x; trail[0].y = cursor.y;
      for (var i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i-1].x - trail[i].x) * 0.40;
        trail[i].y += (trail[i-1].y - trail[i].y) * 0.40;
      }
      for (var j = 0; j < trail.length; j++) {
        trail[j].el.style.left = trail[j].x + "px";
        trail[j].el.style.top  = trail[j].y + "px";
      }
      requestAnimationFrame(trailRaf);
    })();

    /* hide trail during scroll */
    var st;
    window.addEventListener("scroll", function () {
      trail.forEach(function (t) { t.el.style.opacity = "0"; });
      clearTimeout(st);
      st = setTimeout(function () {
        trail.forEach(function (t) { t.el.style.opacity = "1"; });
      }, 280);
    }, { passive: true });
  }

})();
