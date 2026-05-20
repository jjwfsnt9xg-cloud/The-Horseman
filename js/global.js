(function () {
  /* ─────────────────────────────────────
     STARS (hero)
  ───────────────────────────────────── */
  const starsEl = document.getElementById("stars");
  const hero    = document.getElementById("genesis");
  const hero3d  = document.getElementById("hero3d");
  const video   = document.querySelector(".hero-video");

  if (starsEl) {
    const count = window.innerWidth < 768 ? 70 : 130;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2 + 0.4;
      s.style.width  = size + "px";
      s.style.height = size + "px";
      s.style.left   = Math.random() * 100 + "%";
      s.style.top    = Math.random() * 70  + "%";
      s.style.animationDuration = Math.random() * 3 + 2 + "s";
      s.style.animationDelay   = Math.random() * 4 + "s";
      starsEl.appendChild(s);
    }
  }

  /* ─────────────────────────────────────
     VIDEO FALLBACK
  ───────────────────────────────────── */
  if (video) {
    video.addEventListener("canplay", function () { video.style.display = "block"; });
    video.addEventListener("error",   function () { video.style.display = "none";  });
  }

  /* ─────────────────────────────────────
     HERO 3D TILT
  ───────────────────────────────────── */
  if (hero && hero3d) {
    hero.addEventListener("mousemove", function (e) {
      const rect    = hero.getBoundingClientRect();
      const x       = (e.clientX - rect.left)  / rect.width  - 0.5;
      const y       = (e.clientY - rect.top)   / rect.height - 0.5;
      const rotateY = x * 10;
      const rotateX = -y * 8;
      const moveX   = x * 12;
      const moveY   = y * 10;
      hero3d.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translate(" + moveX + "px," + moveY + "px)";
    });
    hero.addEventListener("mouseleave", function () {
      hero3d.style.transform = "rotateX(0deg) rotateY(0deg) translate(0,0)";
    });
  }

  /* ─────────────────────────────────────
     ABOUT — FLOATING PARTICLES
  ───────────────────────────────────── */
  const particlesEl = document.getElementById("aboutParticles");
  if (particlesEl) {
    const symbols = ["✦", "✧", "◆", "◇", "⬡", "⬢", "◈", "✺", "✹"];
    const count   = window.innerWidth < 768 ? 12 : 22;
    for (let i = 0; i < count; i++) {
      const p  = document.createElement("div");
      p.className = "about-particle";
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.left              = Math.random() * 100 + "%";
      p.style.animationDuration = (Math.random() * 20 + 15) + "s";
      p.style.animationDelay    = -(Math.random() * 20) + "s";
      p.style.fontSize          = (Math.random() * 0.8 + 0.7) + "rem";
      p.style.opacity           = (Math.random() * 0.15 + 0.05).toString();
      particlesEl.appendChild(p);
    }
  }

  /* ─────────────────────────────────────
     ABOUT — 3D PORTRAIT TILT
  ───────────────────────────────────── */
  const aboutSection  = document.getElementById("about");
  const aboutPortrait = document.getElementById("aboutPortrait");

  if (aboutSection && aboutPortrait) {
    aboutSection.addEventListener("mousemove", function (e) {
      const rect    = aboutSection.getBoundingClientRect();
      const x       = (e.clientX - rect.left)  / rect.width  - 0.5;
      const y       = (e.clientY - rect.top)   / rect.height - 0.5;
      const rotateY = x * 14;
      const rotateX = -y * 10;
      aboutPortrait.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateZ(0)";
    });
    aboutSection.addEventListener("mouseleave", function () {
      aboutPortrait.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    });
  }

  /* ─────────────────────────────────────
     ABOUT — SCROLL REVEAL
  ───────────────────────────────────── */
  const aboutInner = document.getElementById("aboutInner");
  if ("IntersectionObserver" in window && aboutInner) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    obs.observe(aboutInner);
  } else if (aboutInner) {
    aboutInner.classList.add("revealed");
  }

  /* ─────────────────────────────────────
     COMPANIONS — PER-CARD 3D TILT
  ───────────────────────────────────── */
  function initCompanionTilt() {
    const cards = document.querySelectorAll(".companion-card");
    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        const rect    = card.getBoundingClientRect();
        const x       = (e.clientX - rect.left)  / rect.width  - 0.5;
        const y       = (e.clientY - rect.top)   / rect.height - 0.5;
        const rotX    = -y * 12;
        const rotY    = x  * 16;
        card.style.transform =
          "translateY(-12px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      });
    });
  }

  /* ─────────────────────────────────────
     COMPANIONS — SCROLL REVEAL
  ───────────────────────────────────── */
  const companionCards = document.querySelectorAll(".companion-card");
  if ("IntersectionObserver" in window && companionCards.length) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, _i) {
        if (entry.isIntersecting) {
          const allCards = Array.from(companionCards);
          const idx      = allCards.indexOf(entry.target);
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, idx * 100);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    companionCards.forEach(function (c) { obs.observe(c); });
  } else {
    companionCards.forEach(function (c) { c.classList.add("visible"); });
  }

  initCompanionTilt();

  /* ─────────────────────────────────────
     EXPLORE CARDS — SCROLL REVEAL
  ───────────────────────────────────── */
  const exploreCards = document.querySelectorAll(".explore-card");
  if ("IntersectionObserver" in window && exploreCards.length) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, _i) {
        if (entry.isIntersecting) {
          const allCards = Array.from(exploreCards);
          const idx      = allCards.indexOf(entry.target);
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, idx * 120);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    exploreCards.forEach(function (c) { obs.observe(c); });
  } else {
    exploreCards.forEach(function (c) { c.classList.add("visible"); });
  }

  /* ─────────────────────────────────────
     PARALLAX DEPTH on scroll
  ───────────────────────────────────── */
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollY = window.scrollY;

        var gridLayer = document.querySelector(".about-bg-layer.layer-grid");
        if (gridLayer) {
          gridLayer.style.transform = "translateY(" + scrollY * 0.12 + "px)";
        }

        var compGrid = document.querySelector(".companions-bg-grid");
        if (compGrid) {
          var companionsTop = document.getElementById("companions");
          if (companionsTop) {
            var offset = scrollY - companionsTop.offsetTop;
            compGrid.style.transform = "translateY(" + offset * 0.08 + "px)";
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });

})();
