document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay:500 });
  ScrollReveal().reveal('.news-cards-two', { delay: 1000 });
  