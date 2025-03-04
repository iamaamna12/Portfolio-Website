document.addEventListener('DOMContentLoaded', function() {
    // Animate skill blocks falling down
    gsap.to(".skill-block", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "bounce.out"
    });
  });
  