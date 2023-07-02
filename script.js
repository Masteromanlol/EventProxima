document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");

  function startAnimation() {
    container.classList.add("animation");
  }

  // Trigger animation when the page is fully loaded
  startAnimation();

  // Additional animation triggers
  container.addEventListener("mouseover", function() {
    container.classList.add("fadeIn");
  });

  container.addEventListener("animationend", function() {
    container.classList.remove("fadeIn");
  });

  // Scroll-triggered animation
  function animateOnScroll() {
    const windowHeight = window.innerHeight;
    const containerOffset = container.getBoundingClientRect().top;

    if (containerOffset < windowHeight - 100) {
      container.classList.add("slideUp");
      window.removeEventListener("scroll", animateOnScroll);
    }
  }

  window.addEventListener("scroll", animateOnScroll);
});
