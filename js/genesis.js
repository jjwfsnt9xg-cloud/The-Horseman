gsap.registerPlugin(ScrollTrigger);

const hero = document.getElementById("hero3d");
const horses = document.querySelectorAll(".horse");

// MOUSE 3D
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX - window.innerWidth / 2) / 40;
  let y = (e.clientY - window.innerHeight / 2) / 40;

  hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

  horses.forEach((horse, i) => {
    gsap.to(horse, {
      x: x * (i + 1) * 15,
      y: y * (i + 1) * 15,
      duration: 0.5
    });
  });
});

// PARALLAX
gsap.to(".hero-bg", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".genesis-hero",
    scrub: true
  }
});

// REVEAL
gsap.utils.toArray(".block").forEach((block) => {
  gsap.to(block, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    scrollTrigger: {
      trigger: block,
      start: "top 85%"
    }
  });
});

// PARTICLES
const container = document.createElement("div");
container.classList.add("particles");
document.body.appendChild(container);

for (let i = 0; i < 50; i++) {
  let p = document.createElement("div");
  p.classList.add("particle");

  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";

  container.appendChild(p);

  gsap.to(p, {
    y: "-=120",
    opacity: 0,
    duration: 6 + Math.random() * 4,
    repeat: -1,
    ease: "none"
  });
}
