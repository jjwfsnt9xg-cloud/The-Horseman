/* ═══════════════════════════════════════════════════════
   GENESIS — The Horseman's Journal
   Interactive JavaScript — 3D Starfield + Scroll System
═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ──────────────────────────────────────────
     3D STARFIELD CANVAS
  ────────────────────────────────────────── */
  var canvas = document.getElementById("starfield");
  var ctx    = canvas ? canvas.getContext("2d") : null;
  var stars  = [];
  var STAR_COUNT = 200;
  var DEPTH = 800;
  var mouse = { x: 0, y: 0 };
  var tilt  = { x: 0, y: 0 };
  var rafId = null;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    for (var i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * canvas.width  * 2,
        y: (Math.random() - 0.5) * canvas.height * 2,
        z: Math.random() * DEPTH,
        px: 0,
        py: 0,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.4 + 0.15
      });
    }
  }

  function projectStar(s) {
    var fov = DEPTH;
    var ox  = canvas.width  / 2 + tilt.x * 60;
    var oy  = canvas.height / 2 + tilt.y * 40;
    var scale = fov / (fov + s.z);
    return {
      x: ox + s.x * scale,
      y: oy + s.y * scale,
      r: s.size * scale * 1.8,
      a: Math.min(1, (1 - s.z / DEPTH) * 1.4)
    };
  }

  function drawStars() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < stars.length; i++) {
      var s   = stars[i];
      var old = { z: s.z + s.speed * 0.8 };
      var p   = projectStar(s);
      var op  = projectStar({ x: s.x, y: s.y, z: old.z, size: s.size });

      // Draw trailing line for fast stars
      if (s.speed > 0.3) {
        ctx.beginPath();
        ctx.moveTo(op.x, op.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = "rgba(212,175,55," + (p.a * 0.3) + ")";
        ctx.lineWidth   = p.r * 0.5;
        ctx.stroke();
      }

      // Draw star dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.3, p.r), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(240,230,200," + p.a + ")";
      ctx.fill();

      // Advance star
      s.z -= s.speed;
      if (s.z <= 1) {
        s.x = (Math.random() - 0.5) * canvas.width  * 2;
        s.y = (Math.random() - 0.5) * canvas.height * 2;
        s.z = DEPTH;
      }
    }
  }

  function starLoop() {
    drawStars();
    rafId = requestAnimationFrame(starLoop);
  }

  // Smooth tilt toward mouse
  function updateTilt() {
    var tx = (mouse.x / window.innerWidth  - 0.5);
    var ty = (mouse.y / window.innerHeight - 0.5);
    tilt.x += (tx - tilt.x) * 0.04;
    tilt.y += (ty - tilt.y) * 0.04;
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resizeCanvas();
    initStars();
    // Attach tilt update to star loop
    var _orig = drawStars;
    drawStars = function () { updateTilt(); _orig(); };
    starLoop();

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener("resize", function () {
      resizeCanvas();
      initStars();
    }, { passive: true });
  }

  /* ──────────────────────────────────────────
     SCROLL PROGRESS BAR
  ────────────────────────────────────────── */
  var pbFill = document.getElementById("pbFill");

  function updateProgress() {
    if (!pbFill) return;
    var scrollTop    = window.scrollY || 0;
    var docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    var pct          = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    pbFill.style.width = Math.min(100, pct) + "%";
  }

  /* ──────────────────────────────────────────
     NAV SCROLL STATE
  ────────────────────────────────────────── */
  var topNav = document.getElementById("topNav");

  function updateNav() {
    if (!topNav) return;
    if ((window.scrollY || 0) > 60) {
      topNav.classList.add("scrolled");
    } else {
      topNav.classList.remove("scrolled");
    }
  }

  /* ──────────────────────────────────────────
     PARALLAX FOR ATMOSPHERE ORBS
  ────────────────────────────────────────── */
  var orb1 = document.querySelector(".atm-orb1");
  var orb2 = document.querySelector(".atm-orb2");
  var orb3 = document.querySelector(".atm-orb3");
  var ring1 = document.querySelector(".atm-ring1");
  var ring2 = document.querySelector(".atm-ring2");

  function updateParallax() {
    var y = window.scrollY || 0;
    if (orb1) orb1.style.transform = "translateY(" + (y * 0.06)  + "px)";
    if (orb2) orb2.style.transform = "translateY(" + (-y * 0.04) + "px)";
    if (orb3) orb3.style.transform = "translateX(" + (y * 0.02)  + "px)";
    if (ring1) ring1.style.transform = "translate(-50%,-50%) rotate(" + (y * 0.018) + "deg)";
    if (ring2) ring2.style.transform = "translate(-50%,-50%) rotate(" + (-y * 0.025) + "deg)";
  }

  /* ──────────────────────────────────────────
     MASTER SCROLL HANDLER
  ────────────────────────────────────────── */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      updateProgress();
      updateNav();
      updateParallax();
    }, { passive: true });
  } else {
    window.addEventListener("scroll", function () {
      updateProgress();
      updateNav();
    }, { passive: true });
  }

  // Initial call
  updateProgress();
  updateNav();

  /* ──────────────────────────────────────────
     INTERSECTION OBSERVER — REVEAL ANIMATIONS
  ────────────────────────────────────────── */
  var revealEls = document.querySelectorAll(".reveal-up");

  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.10,
    rootMargin: "0px 0px -50px 0px"
  });

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ──────────────────────────────────────────
     CHAPTER DOT ACTIVE STATE
  ────────────────────────────────────────── */
  var sections    = document.querySelectorAll("[data-section]");
  var chapterDots = document.querySelectorAll(".cd-dot");

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var idx = entry.target.getAttribute("data-section");
        chapterDots.forEach(function (dot) {
          dot.classList.toggle("active", dot.getAttribute("data-sec") === idx);
        });
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ──────────────────────────────────────────
     DAYS DOTS — ANIMATE ON SCROLL INTO VIEW
  ────────────────────────────────────────── */
  var daysDots = document.querySelectorAll(".dd");
  var daysSection = document.getElementById("ch4");

  if (daysSection) {
    var dotsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          daysDots.forEach(function (dot, i) {
            setTimeout(function () {
              dot.style.background = i < 19
                ? "rgba(212,175,55,0.35)"
                : "var(--gold)";
              dot.style.borderColor = i < 19
                ? "rgba(212,175,55,0.5)"
                : "var(--gold)";
              dot.style.transform = "scale(1.15)";
              setTimeout(function () {
                dot.style.transform = "scale(1)";
              }, 200);
            }, i * 80);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    dotsObserver.observe(daysSection);
  }

  /* ──────────────────────────────────────────
     3D TILT ON CHAPTER CARDS — MOUSE ENTER/LEAVE
  ────────────────────────────────────────── */
  var chapterFrames = document.querySelectorAll(".chapter-frame");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    chapterFrames.forEach(function (frame) {
      frame.addEventListener("mousemove", function (e) {
        var rect   = frame.getBoundingClientRect();
        var cx     = rect.left + rect.width  / 2;
        var cy     = rect.top  + rect.height / 2;
        var dx     = (e.clientX - cx) / (rect.width  / 2);
        var dy     = (e.clientY - cy) / (rect.height / 2);
        frame.style.transform = "perspective(1200px) rotateY(" + (dx * 2.5) + "deg) rotateX(" + (-dy * 1.5) + "deg)";
        frame.style.transition = "transform 0.1s ease";
      }, { passive: true });

      frame.addEventListener("mouseleave", function () {
        frame.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
        frame.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
      }, { passive: true });
    });
  }

  /* ──────────────────────────────────────────
     MOBILE NAV TOGGLE
  ────────────────────────────────────────── */
  var navToggle = document.getElementById("navToggle");
  if (navToggle && topNav) {
    navToggle.addEventListener("click", function () {
      topNav.classList.toggle("nav-open");
    });

    // Close on nav link click
    var navLinks = topNav.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        topNav.classList.remove("nav-open");
      });
    });
  }

  /* ──────────────────────────────────────────
     SMOOTH ANCHOR SCROLL
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id  = a.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 58;
      var top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ──────────────────────────────────────────
     KEYBOARD NAVIGATION (ARROW KEYS)
  ────────────────────────────────────────── */
  var sectionIds  = ["hero","ch1","ch2","ch3","ch4","ch5","ch6","closing"];
  var currentSec  = 0;
  var scrollLocked = false;

  function navToSection(idx) {
    if (idx < 0 || idx >= sectionIds.length) return;
    var el = document.getElementById(sectionIds[idx]);
    if (!el) return;
    currentSec = idx;
    scrollLocked = true;
    var navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 58;
    var top  = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: top, behavior: "smooth" });
    setTimeout(function () { scrollLocked = false; }, 900);
  }

  document.addEventListener("keydown", function (e) {
    if (scrollLocked) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      navToSection(currentSec + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      navToSection(currentSec - 1);
    }
  });

  // Track current section via scroll
  var secTrackObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id  = entry.target.getAttribute("id");
        var idx = sectionIds.indexOf(id);
        if (idx >= 0) currentSec = idx;
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(function (s) { secTrackObserver.observe(s); });

  /* ──────────────────────────────────────────
     PULLQUOTE HIGHLIGHT ON SCROLL
  ────────────────────────────────────────── */
  var pullquotes = document.querySelectorAll(".pullquote");
  var pqObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.borderLeftColor = "rgba(212,175,55,0.8)";
        entry.target.style.background      = "rgba(212,175,55,0.07)";
        entry.target.style.transition      = "border-left-color 0.6s, background 0.6s";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  pullquotes.forEach(function (pq) { pqObserver.observe(pq); });

  /* ──────────────────────────────────────────
     CURSOR TRAIL (desktop only)
  ────────────────────────────────────────── */
  if (window.innerWidth > 820 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var trail = [];
    var TRAIL_LEN = 12;

    for (var t = 0; t < TRAIL_LEN; t++) {
      var dot = document.createElement("div");
      dot.style.cssText = [
        "position:fixed",
        "width:" + (4 - t * 0.25) + "px",
        "height:" + (4 - t * 0.25) + "px",
        "border-radius:50%",
        "background:rgba(212,175,55," + (0.55 - t * 0.04) + ")",
        "pointer-events:none",
        "z-index:9999",
        "transform:translate(-50%,-50%)",
        "transition:opacity 0.2s",
        "left:-100px",
        "top:-100px"
      ].join(";");
      document.body.appendChild(dot);
      trail.push({ el: dot, x: -100, y: -100 });
    }

    var cursorPos = { x: -100, y: -100 };

    document.addEventListener("mousemove", function (e) {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
    }, { passive: true });

    (function trailLoop() {
      trail[0].x = cursorPos.x;
      trail[0].y = cursorPos.y;
      for (var i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i-1].x - trail[i].x) * 0.38;
        trail[i].y += (trail[i-1].y - trail[i].y) * 0.38;
      }
      for (var j = 0; j < trail.length; j++) {
        trail[j].el.style.left = trail[j].x + "px";
        trail[j].el.style.top  = trail[j].y + "px";
      }
      requestAnimationFrame(trailLoop);
    })();

    // Hide on scroll
    var scrollTimer;
    window.addEventListener("scroll", function () {
      trail.forEach(function (t) { t.el.style.opacity = "0"; });
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        trail.forEach(function (t) { t.el.style.opacity = "1"; });
      }, 300);
    }, { passive: true });
  }

})();
