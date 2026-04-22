/* ============================================================
   ABOUT — JavaScript
   Scroll reveals · Count-up · Cursor glow · Tag stagger
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll-triggered reveals ─────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  /* ── Staggered reveal for .reveal-item ───────────────────── */
  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal-item')
          );
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('visible'), idx * 130);
          itemObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
  );

  function initReveal() {
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    document.querySelectorAll('.reveal-item').forEach((el) => itemObserver.observe(el));
  }

  /* ── Count-up animation ───────────────────────────────────── */
  function countUp(el, target, duration) {
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const nums = document.querySelectorAll('.big-num[data-target]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target, parseInt(e.target.dataset.target, 10), 1600);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((el) => obs.observe(el));
  }

  /* ── Tag stagger on scroll ───────────────────────────────── */
  function initTagStagger() {
    document.querySelectorAll('.exp-tags').forEach((container) => {
      const tags = Array.from(container.querySelectorAll('.etag'));
      tags.forEach((t) => {
        t.style.cssText = 'opacity:0; transform:translateY(8px); transition: opacity 0.45s ease, transform 0.45s ease;';
      });

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tags.forEach((t, i) =>
                setTimeout(() => {
                  t.style.opacity = '1';
                  t.style.transform = 'translateY(0)';
                }, i * 70)
              );
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(container);
    });
  }

  /* ── Cursor amber glow ───────────────────────────────────── */
  function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glow = document.createElement('div');
    Object.assign(glow.style, {
      position: 'fixed',
      width: '320px',
      height: '320px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(201,162,84,0.07) 0%, rgba(180,100,20,0.04) 40%, transparent 70%)',
      pointerEvents: 'none',
      transform: 'translate(-50%,-50%)',
      zIndex: '9999',
      mixBlendMode: 'screen',
      transition: 'opacity 0.5s ease',
      opacity: '0',
    });
    document.body.appendChild(glow);

    let mx = 0, my = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });

    (function animate() {
      gx += (mx - gx) * 0.09;
      gy += (my - gy) * 0.09;
      glow.style.left = gx + 'px';
      glow.style.top = gy + 'px';
      requestAnimationFrame(animate);
    })();
  }

  /* ── Hero parallax drift ─────────────────────────────────── */
  function initParallax() {
    const title = document.querySelector('.hero-title');
    const orb1  = document.querySelector('.orb-1');
    const orb2  = document.querySelector('.orb-2');
    if (!title) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          title.style.transform = `translateY(${y * 0.07}px)`;
          if (orb1) orb1.style.transform = `translateY(${y * 0.04}px)`;
          if (orb2) orb2.style.transform = `translateY(${-y * 0.03}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Glowing border pulse on statement card ─────────────── */
  function initPulse() {
    const card = document.querySelector('.statement-card');
    if (!card) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            card.style.animation = 'borderPulse 3s ease-in-out 0.5s infinite';
            obs.unobserve(card);
          }
        });
      },
      { threshold: 0.5 }
    );

    const style = document.createElement('style');
    style.textContent = `
      @keyframes borderPulse {
        0%, 100% { box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 40px rgba(201,162,84,0.04); }
        50%       { box-shadow: 0 8px 40px rgba(0,0,0,0.4), 0 0 70px rgba(201,162,84,0.14); }
      }
    `;
    document.head.appendChild(style);
    obs.observe(card);
  }

  /* ── Init all ────────────────────────────────────────────── */
  function init() {
    initReveal();
    initCounters();
    initTagStagger();
    initCursorGlow();
    initParallax();
    initPulse();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
