(function () {
  "use strict";

  function revealInit() {
    var revealEls = document.querySelectorAll(".reveal");
    var itemEls = document.querySelectorAll(".reveal-item");

    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el) { revealObserver.observe(el); });

    var itemObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var siblings = Array.prototype.slice.call(entry.target.parentElement.querySelectorAll(".reveal-item"));
          var i = siblings.indexOf(entry.target);
          setTimeout(function () {
            entry.target.classList.add("visible");
          }, i * 120);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    itemEls.forEach(function (el) { itemObserver.observe(el); });
  }

  function countUpInit() {
    var nums = document.querySelectorAll(".big-num[data-target]");
    if (!nums.length) return;

    function countUp(el, target, duration) {
      var start = performance.now();
      function tick(now) {
        var t = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.floor(eased * target));
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target, parseInt(entry.target.getAttribute("data-target"), 10), 1400);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    nums.forEach(function (n) { obs.observe(n); });
  }

  function tagsStaggerInit() {
    var groups = document.querySelectorAll(".exp-tags");
    groups.forEach(function (group) {
      var tags = group.querySelectorAll(".etag");
      var obs = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tags.forEach(function (tag, i) {
              setTimeout(function () {
                tag.style.opacity = "1";
                tag.style.transform = "translateY(0)";
              }, i * 65);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      obs.observe(group);
    });
  }

  function heroTiltInit() {
    var wrap = document.getElementById("heroWrap");
    if (!wrap) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    wrap.addEventListener("mousemove", function (e) {
      var rect = wrap.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var rotateY = x * 8;
      var rotateX = -y * 7;
      wrap.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });

    wrap.addEventListener("mouseleave", function () {
      wrap.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  function cursorGlowInit() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.width = "280px";
    glow.style.height = "280px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.zIndex = "9999";
    glow.style.mixBlendMode = "screen";
    glow.style.background = "radial-gradient(circle, rgba(201,162,84,0.08) 0%, rgba(201,162,84,0.03) 45%, transparent 70%)";
    glow.style.opacity = "0";
    glow.style.transition = "opacity .35s ease";
    document.body.appendChild(glow);

    var mx = 0, my = 0, gx = 0, gy = 0;

    document.addEventListener("mousemove", function (e) {
      mx = e.clientX;
      my = e.clientY;
      glow.style.opacity = "1";
    }, { passive: true });

    document.addEventListener("mouseleave", function () {
      glow.style.opacity = "0";
    });

    (function animate() {
      gx += (mx - gx) * 0.1;
      gy += (my - gy) * 0.1;
      glow.style.left = gx + "px";
      glow.style.top = gy + "px";
      requestAnimationFrame(animate);
    })();
  }

  function pulseInit() {
    var card = document.querySelector(".statement-card");
    if (!card) return;
    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          card.classList.add("pulse");
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.5 });
    obs.observe(card);
  }

  function init() {
    revealInit();
    countUpInit();
    tagsStaggerInit();
    heroTiltInit();
    cursorGlowInit();
    pulseInit();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
