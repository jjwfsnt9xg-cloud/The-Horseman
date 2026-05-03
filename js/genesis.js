gsap.registerPlugin(ScrollTrigger);

const hero = document.getElementById("hero3d");
const horse = document.querySelector(".horse-presence");

// 3D MOUSE
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX - window.innerWidth / 2) / 50;
  let y = (e.clientY - window.innerHeight / 2) / 50;

  hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

  gsap.to(horse, {
    x: x * 10,
    y: y * 10,
    duration: 0.6
  });
});

// HERO PARALLAX
gsap.to(".hero-bg", {
  scale: 1.25,
  scrollTrigger: {
    trigger: ".genesis-hero",
    scrub: true
  }
});

// STORY REVEAL (THIS IS THE IMPORTANT PART)
gsap.utils.toArray(".block").forEach((block) => {
  
  ScrollTrigger.create({
    trigger: block,
    start: "top 75%",
    onEnter: () => block.classList.add("active"),
  });

});
