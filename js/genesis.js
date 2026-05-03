const hero = document.getElementById("hero3d");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX - window.innerWidth / 2) / 30;
  let y = (e.clientY - window.innerHeight / 2) / 30;

  hero.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});
