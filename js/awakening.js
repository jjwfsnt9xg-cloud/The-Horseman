(function () {
  "use strict";

  var revealEls = document.querySelectorAll(".reveal");
  var chapterEls = document.querySelectorAll(".chapter");

  var revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealEls.forEach(function (el) { revealObserver.observe(el); });
  chapterEls.forEach(function (el) { revealObserver.observe(el); });

  // Gentle parallax for background orbs
  var orb1 = document.querySelector(".orb1");
  var orb2 = document.querySelector(".orb2");
  var ring = document.querySelector(".ring");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      if (orb1) orb1.style.transform = "translateY(" + (y * 0.05) + "px)";
      if (orb2) orb2.style.transform = "translateY(" + (-y * 0.03) + "px)";
      if (ring) ring.style.transform = "translate(-50%, -50%) rotate(" + (y * 0.02) + "deg)";
    }, { passive: true });
  }
})();
