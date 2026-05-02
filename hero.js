// hero.js

// Add event listener for mouse movement
document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;

  // Calculate the offset from the center (-0.5 to 0.5)
  const offsetX = 0.5 - e.clientX / innerWidth;
  const offsetY = 0.5 - e.clientY / innerHeight;

  // Move stars background slightly more for a distant effect
  const stars = document.getElementById('stars');
  stars.style.transform = `translate(${offsetX * 20}px, ${offsetY * 20}px)`;

  // Moon moves slightly less
  const moon = document.getElementById('moon');
  moon.style.transform = `translate(${offsetX * 15}px, ${offsetY * 15}px)`;

  // Ground moves the least, for closer effect
  const ground = document.getElementById('ground');
  ground.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
});
