// Simple mobile menu toggle
    const btn = document.getElementById('btn-menu');
    const mobileMenu = document.getElementById('mobile-menu-content');

    btn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    //... (resto del script)