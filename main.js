document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase',{reset: true});
ScrollReveal().reveal('.news-cards', { delay:500, duration: 500, reset: true });
ScrollReveal().reveal('.news-cards-two', { delay: 1000, duration: 1000, reset: true });
ScrollReveal().reveal('.showhability', { delay: 1500, duration: 1500, reset: true });