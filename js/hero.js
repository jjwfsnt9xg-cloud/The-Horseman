(function () {
  const starsEl = document.getElementById("stars");
  const hero = document.getElementById("genesis");
  const hero3d = document.getElementById("hero3d");
  const video = document.querySelector(".hero-video");

  // Stars
  if (starsEl) {
    const count = window.innerWidth < 768 ? 70 : 130;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "star";
      const size = Math.random() * 2 + 0.4;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 70 + "%";
      s.style.animationDuration = Math.random() * 3 + 2 + "s";
      s.style.animationDelay = Math.random() * 4 + "s";
      starsEl.appendChild(s);
    }
  }

  // Video fallback behavior
  if (video) {
    video.addEventListener("canplay", function () {
      video.style.display = "block";
    });
    video.addEventListener("error", function () {
      video.style.display = "none";
    });
  }

  // Hero 3D interaction
  if (hero && hero3d) {
    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = x * 10;
      const rotateX = -y * 8;
      const moveX = x * 12;
      const moveY = y * 10;

      hero3d.style.transform =
        "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translate(" + moveX + "px," + moveY + "px)";
    });

    hero.addEventListener("mouseleave", function () {
      hero3d.style.transform = "rotateX(0deg) rotateY(0deg) translate(0,0)";
    });
  }

  // Explore cards reveal
  const cards = document.querySelectorAll(".explore-card");
  if ("IntersectionObserver" in window && cards.length) {
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add("visible");
            }, i * 120);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach(function (c) {
      obs.observe(c);
    });
  } else {
    cards.forEach(function (c) {
      c.classList.add("visible");
    });
  }
})();
