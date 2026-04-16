/* Genesis scroll reveal */
const chObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, {threshold: 0.1, rootMargin: '0px 0px -60px 0px'});

document.querySelectorAll('.chapter').forEach(c => chObserver.observe(c));
