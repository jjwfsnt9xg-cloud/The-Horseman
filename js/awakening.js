/* ════════════════════════════════════════════════════════
   AWAKENING — The Horseman's Journal
   3D Interactive JavaScript — Particles · 3D Tilt · Scroll · Reveal
════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var qs  = function(s)  { return document.querySelector(s); };
  var qsa = function(s)  { return document.querySelectorAll(s); };

  /* ════════════════════════════════════════════════════════
     1. 3D NAVIGATION TILT ON SCROLL
  ════════════════════════════════════════════════════════ */
  var nav = document.getElementById("awkNav");
  var lastScrollY = 0;
  
  function updateNav3D() {
    if (!nav) return;
    var scrollY = window.scrollY;
    var scrollDelta = scrollY - lastScrollY;
    var tiltX = Math.min(Math.max(scrollDelta * 0.15, -8), 8);
    var tiltY = scrollY * 0.02;
    
    if (scrollY > 50) {
      nav.style.transform = "perspective(1000px) translateZ(5px) rotateX(" + tiltY + "deg)";
    } else {
      nav.style.transform = "perspective(1000px) translateZ(0) rotateX(0deg)";
    }
    lastScrollY = scrollY;
  }

  /* ════════════════════════════════════════════════════════
     2. RISING PARTICLES — 3D effect
  ════════════════════════════════════════════════════════ */
  var canvas  = document.getElementById("awkCanvas");
  var ctx     = canvas ? canvas.getContext("2d") : null;
  var particles = [];
  var PCOUNT = 100;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeParticle() {
    return {
      x: Math.random() * (canvas ? canvas.width : window.innerWidth),
      y: (canvas ? canvas.height : window.innerHeight) + 20,
      r: Math.random() * 2.2 + 0.5,
      speed: Math.random() * 0.65 + 0.2,
      drift: (Math.random() - 0.5) * 1.5,
      alpha: 0,
      maxAlpha: Math.random() * 0.6 + 0.2,
      life: 0,
      z: Math.random() * 30,
      rotation: Math.random() * Math.PI * 2
    };
  }

  function initParticles() {
    particles = [];
    for (var i = 0; i < PCOUNT; i++) {
      var p = makeParticle();
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
      ctx.arc(p.x, p.y, p.r + (p.z * 0.03), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(212,175,55,1)";
      ctx.fill();
      ctx.restore();

      p.y -= p.speed;
      p.x += p.drift * 0.012;
      p.life += p.speed / (canvas ? canvas.height : 800);
      p.z += 0.2;

      if (p.life >= 1 || p.y < -15) {
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

  /* ════════════════════════════════════════════════════════
     3. SCROLL PROGRESS BAR
  ════════════════════════════════════════════════════════ */
  var progFill = document.getElementById("awkProgFill");

  function updateProgress() {
    if (!progFill) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progFill.style.width = Math.min(100, pct) + "%";
  }

  /* ════════════════════════════════════════════════════════
     4. NAV SCROLL STATE
  ════════════════════════════════════════════════════════ */
  function updateNav() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }

  /* ════════════════════════════════════════════════════════
     5. ATMOSPHERE PARALLAX
  ════════════════════════════════════════════════════════ */
  var o1 = qs(".awk-o1"), o2 = qs(".awk-o2"), o3 = qs(".awk-o3");
  function updateParallax() {
    var y = window.scrollY;
    if (o1) o1.style.transform = "translateY(" + (y * 0.08) + "px) rotate(" + (y * 0.02) + "deg)";
    if (o2) o2.style.transform = "translateY(" + (-y * 0.05) + "px) rotate(" + (-y * 0.015) + "deg)";
    if (o3) o3.style.transform = "translateX(" + (y * 0.03) + "px) translateY(" + (y * 0.02) + "px)";
  }

  /* ════════════════════════════════════════════════════════
     6. MASTER SCROLL HANDLER
  ════════════════════════════════════════════════════════ */
  window.addEventListener("scroll", function () {
    updateProgress();
    updateNav();
    updateNav3D();
    if (!reducedMotion) updateParallax();
  }, { passive: true });

  updateProgress();
  updateNav();
  updateNav3D();

  /* ════════════════════════════════════════════════════════
     7. REVEAL — scroll-triggered fade-in with 3D
  ════════════════════════════════════════════════════════ */
  var revealEls = qsa(".awk-reveal");
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var delay = e.target.style.getPropertyValue("--ad") || "0s";
        e.target.style.transitionDelay = delay;
        e.target.classList.add("vis");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  revealEls.forEach(function (el) { revealObs.observe(el); });

  /* ════════════════════════════════════════════════════════
     8. PAGE 3D TILT ON MOUSE MOVE
  ════════════════════════════════════════════════════════ */
  if (!reducedMotion) {
    var pages = qsa(".awk-page");
    pages.forEach(function (pg) {
      var inner = pg.querySelector(".awk-page-inner");
      if (!inner) return;

      pg.addEventListener("mousemove", function (e) {
        var rect = pg.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        inner.style.transform = "rotateX(" + (12 - dy * 6) + "deg) rotateY(" + (-5 + dx * 5) + "deg) translateZ(8px)";
        inner.style.transition = "transform 0.08s ease";
      }, { passive: true });

      pg.addEventListener("mouseleave", function () {
        inner.style.transform = "rotateX(12deg) rotateY(-5deg) translateZ(0)";
        inner.style.transition = "transform 0.6s cubic-bezier(0.23,1,0.32,1)";
      }, { passive: true });
    });
  }

  /* ════════════════════════════════════════════════════════
     9. CHAPTER DOT ACTIVE STATE
  ════════════════════════════════════════════════════════ */
  var sections   = qsa("[data-i]");
  var dots       = qsa(".awk-dot");
  var currentIdx = 0;

  var sectionObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var idx = e.target.getAttribute("data-i");
        currentIdx = parseInt(idx) || 0;
        dots.forEach(function (d) {
          var isActive = d.getAttribute("data-i") === idx;
          d.classList.toggle("active", isActive);
          if (isActive) {
            d.style.transform = "scale(1.6) translateZ(8px)";
          } else {
            d.style.transform = "";
          }
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(function (s) { sectionObs.observe(s); });

  /* ════════════════════════════════════════════════════════
     10. DAYS GRID — animated dots on scroll into view
  ════════════════════════════════════════════════════════ */
  function buildDaysGrid(containerId, count, litCount) {
    var grid = document.getElementById(containerId);
    if (!grid) return;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("div");
      d.className = "awk-dg-dot";
      d.setAttribute("data-dot", i);
      grid.appendChild(d);
    }

    var gridObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var dots2 = e.target.querySelectorAll(".awk-dg-dot");
          dots2.forEach(function (dot, idx) {
            setTimeout(function () {
              if (idx < litCount) dot.classList.add("lit");
            }, idx * 50);
          });
          gridObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });

    gridObs.observe(grid);
  }

  buildDaysGrid("daysGrid", 20, 8);

  function buildDecoDots(containerId, count, litIdx) {
    var c = document.getElementById(containerId);
    if (!c) return;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("div");
      d.className = "awk-dd-d";
      c.appendChild(d);
    }
    var dObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var dd = e.target.querySelectorAll(".awk-dd-d");
          dd.forEach(function (dot, idx) {
            setTimeout(function () {
              if (idx === litIdx) dot.classList.add("lit");
            }, idx * 80);
          });
          dObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    dObs.observe(c);
  }

  buildDecoDots("decoDotsRight", 20, 19);

  /* ════════════════════════════════════════════════════════
     11. SMOOTH ANCHOR SCROLL with offset
  ════════════════════════════════════════════════════════ */
  function getNavHeight() {
    return parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-h")) || 64;
  }

  qsa('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = a.getAttribute("href");
      if (href === "#") return;
      var id = href.slice(1);
      var tgt = document.getElementById(id);
      if (!tgt) return;
      e.preventDefault();
      var top = tgt.getBoundingClientRect().top + window.scrollY - getNavHeight() - 20;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ════════════════════════════════════════════════════════
     12. KEYBOARD ARROW NAVIGATION
  ════════════════════════════════════════════════════════ */
  var sectionIds = ["hero","ch1","ch2","ch3","ch4","ch5","ch6","closing"];
  var locked = false;

  function navToIdx(idx) {
    if (locked || idx < 0 || idx >= sectionIds.length) return;
    var el = document.getElementById(sectionIds[idx]);
    if (!el) return;
    currentIdx = idx;
    locked = true;
    var top = el.getBoundingClientRect().top + window.scrollY - getNavHeight() - 20;
    window.scrollTo({ top: top, behavior: "smooth" });
    setTimeout(function () { locked = false; }, 900);
  }

  document.addEventListener("keydown", function (e) {
    if (locked) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      navToIdx(currentIdx + 1);
    }
    if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      navToIdx(currentIdx - 1);
    }
  });

  /* ════════════════════════════════════════════════════════
     13. MOBILE HAMBURGER
  ════════════════════════════════════════════════════════ */
  var ham  = document.getElementById("awkHam");
  var navElem = document.getElementById("awkNav");
  if (ham && navElem) {
    ham.addEventListener("click", function () {
      navElem.classList.toggle("nav-open");
    });
    qsa(".awk-navlinks a").forEach(function (a) {
      a.addEventListener("click", function () {
        navElem.classList.remove("nav-open");
      });
    });
  }

  /* ════════════════════════════════════════════════════════
     14. GOLD CURSOR TRAIL — 3D effect
  ════════════════════════════════════════════════════════ */
  if (!reducedMotion && window.innerWidth > 860) {
    var TRAIL = 16;
    var trail = [];
    for (var t = 0; t < TRAIL; t++) {
      var el = document.createElement("div");
      var sz = (4 - t * 0.18);
      var opacity = (0.55 - t * 0.03);
      el.style.cssText = [
        "position:fixed",
        "pointer-events:none",
        "z-index:9999",
        "border-radius:50%",
        "transform:translate(-50%,-50%) translateZ(" + (t * 2) + "px)",
        "width:"  + Math.max(2, sz) + "px",
        "height:" + Math.max(2, sz) + "px",
        "background:rgba(212,175,55," + Math.max(0.1, opacity) + ")",
        "box-shadow:0 0 " + (t * 2) + "px rgba(212,175,55,0.3)",
        "left:-200px",
        "top:-200px"
      ].join(";");
      document.body.appendChild(el);
      trail.push({ el: el, x: -200, y: -200 });
    }

    var cursor = { x: -200, y: -200 };
    document.addEventListener("mousemove", function (e) {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    }, { passive: true });

    (function trailRaf() {
      trail[0].x = cursor.x;
      trail[0].y = cursor.y;
      for (var i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i-1].x - trail[i].x) * 0.38;
        trail[i].y += (trail[i-1].y - trail[i].y) * 0.38;
      }
      for (var j = 0; j < trail.length; j++) {
        trail[j].el.style.left = trail[j].x + "px";
        trail[j].el.style.top  = trail[j].y + "px";
      }
      requestAnimationFrame(trailRaf);
    })();

    var st;
    window.addEventListener("scroll", function () {
      trail.forEach(function (t) { t.el.style.opacity = "0"; });
      clearTimeout(st);
      st = setTimeout(function () {
        trail.forEach(function (t) { t.el.style.opacity = "1"; });
      }, 250);
    }, { passive: true });
  }

  /* ════════════════════════════════════════════════════════
     15. 3D HOVER EFFECT ON DECORATIVE ELEMENTS
  ════════════════════════════════════════════════════════ */
  var decoElements = qsa(".awk-deco-rings, .awk-mandala, .awk-storm-deco, .awk-spiral-deco, .awk-bond-deco");
  decoElements.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      this.style.transform = "translateZ(15px) scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    el.addEventListener("mouseleave", function () {
      this.style.transform = "translateZ(0) scale(1)";
    });
  });

})();
