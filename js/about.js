/**
 * about.js — The Horseman's Journal
 * Scroll reveals, count-up, tag stagger, 3D tilt, cursor glow, mobile nav
 */

(function () {
  'use strict';

  // ============================================================
  // 1. INTERSECTION OBSERVER — Reveal elements on scroll
  // ============================================================

  function revealInit() {
    var revealEls = document.querySelectorAll('.reveal');
    var itemEls   = document.querySelectorAll('.reveal-item');

    // Basic reveal (single elements)
    var revealObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(function (el) { revealObs.observe(el); });

    // Staggered reveal for groups (.reveal-item siblings)
    var itemObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var siblings = Array.from(
          entry.target.parentElement.querySelectorAll('.reveal-item')
        );
        var idx = siblings.indexOf(entry.target);

        setTimeout(function () {
          entry.target.classList.add('visible');
        }, idx * 130);

        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    itemEls.forEach(function (el) { itemObs.observe(el); });
  }

  // ============================================================
  // 2. COUNT-UP ANIMATION — animates .count-up[data-target]
  // ============================================================

  function countUpInit() {
    var nums = document.querySelectorAll('.count-up[data-target]');
    if (!nums.length) return;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animateCount(el, target, duration) {
      var startTime = null;

      function frame(now) {
        if (!startTime) startTime = now;
        var progress = Math.min((now - startTime) / duration, 1);
        el.textContent = Math.floor(easeOutCubic(progress) * target);
        if (progress < 1) requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
    }

    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        animateCount(el, target, 1600);
        observer.unobserve(el);
      });
    }, { threshold: 0.7 });

    nums.forEach(function (n) { obs.observe(n); });
  }

  // ============================================================
  // 3. TAG STAGGER — fade in .tag elements when group is visible
  // ============================================================

  function tagStaggerInit() {
    var groups = document.querySelectorAll('.tags-group__tags');

    groups.forEach(function (group) {
      var tags = group.querySelectorAll('.tag');

      var obs = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          tags.forEach(function (tag, i) {
            setTimeout(function () {
              tag.classList.add('visible');
            }, i * 70);
          });
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.25 });

      obs.observe(group);
    });
  }

  // ============================================================
  // 4. HERO 3D TILT — subtle perspective tilt on mousemove
  // ============================================================

  function heroTiltInit() {
    var wrap = document.getElementById('heroWrap');
    if (!wrap) return;

    // Skip on touch devices and reduced-motion
    if (window.matchMedia('(pointer: coarse)').matches)          return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var inner = wrap.querySelector('.hero-block__inner');
    if (!inner) return;

    wrap.addEventListener('mousemove', function (e) {
      var rect = wrap.getBoundingClientRect();
      var x    = (e.clientX - rect.left) / rect.width  - 0.5;
      var y    = (e.clientY - rect.top)  / rect.height - 0.5;
      inner.style.transform =
        'rotateX(' + (-y * 7).toFixed(2) + 'deg) ' +
        'rotateY(' + ( x * 8).toFixed(2) + 'deg)';
    });

    wrap.addEventListener('mouseleave', function () {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // ============================================================
  // 5. CURSOR GLOW — soft radial glow that follows the cursor
  // ============================================================

  function cursorGlowInit() {
    if (window.matchMedia('(pointer: coarse)').matches)          return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var glow = document.createElement('div');
    Object.assign(glow.style, {
      position:      'fixed',
      width:         '320px',
      height:        '320px',
      borderRadius:  '50%',
      pointerEvents: 'none',
      transform:     'translate(-50%, -50%)',
      zIndex:        '9999',
      mixBlendMode:  'screen',
      background:    'radial-gradient(circle, rgba(201,162,84,0.09) 0%, rgba(201,162,84,0.03) 45%, transparent 70%)',
      opacity:       '0',
      transition:    'opacity 0.4s ease',
    });
    document.body.appendChild(glow);

    var mx = 0, my = 0, gx = 0, gy = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      glow.style.opacity = '1';
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
    });

    (function loop() {
      gx += (mx - gx) * 0.1;
      gy += (my - gy) * 0.1;
      glow.style.left = gx + 'px';
      glow.style.top  = gy + 'px';
      requestAnimationFrame(loop);
    })();
  }

  // ============================================================
  // 6. MOBILE NAV TOGGLE
  // ============================================================

  function mobileNavInit() {
    var burger = document.querySelector('.nav__burger');
    var links  = document.querySelector('.nav__links');
    if (!burger || !links) return;

    burger.addEventListener('click', function () {
      var open = links.style.display === 'flex';

      if (open) {
        // Close
        links.style.display = 'none';
        burger.setAttribute('aria-expanded', 'false');
        burger.querySelectorAll('span').forEach(function (s, i) {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      } else {
        // Open — stack links vertically in a dropdown
        links.style.cssText =
          'display:flex; flex-direction:column; gap:1rem;' +
          'position:absolute; top:100%; left:0; right:0;' +
          'padding:1.2rem 1.5rem;' +
          'background:rgba(9,7,15,0.97);' +
          'border-bottom:1px solid rgba(201,162,84,0.18);' +
          'z-index:99;';
        burger.setAttribute('aria-expanded', 'true');

        // Animate burger → X
        var spans = burger.querySelectorAll('span');
        spans[0].style.transform = 'translateY(6px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
      }
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.style.display = 'none';
        burger.setAttribute('aria-expanded', 'false');
        burger.querySelectorAll('span').forEach(function (s) {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      });
    });
  }

  // ============================================================
  // 7. INIT
  // ============================================================

  function init() {
    revealInit();
    countUpInit();
    tagStaggerInit();
    heroTiltInit();
    cursorGlowInit();
    mobileNavInit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
