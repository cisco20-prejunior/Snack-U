// index.js
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const dropdowns = document.querySelectorAll('.dropdown');

  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        drop.classList.toggle('open');
      }
    });
  });

