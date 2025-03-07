let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

// Function to move to the next or previous testimonial with GSAP animation
function moveTestimonial(direction) {
  // First, fade out the current testimonial
  gsap.to(testimonials[currentIndex], {
    opacity: 0,
    x: -100, // Move it off the screen to the left
    duration: 0.5,
    ease: "power2.out",
    onComplete: function () {
      // Hide the current testimonial after animation
      testimonials[currentIndex].style.display = 'none';
      
      // Update the index based on the direction
      currentIndex += direction;

      // Loop back to the first testimonial if we reach the end
      if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
      } else if (currentIndex >= testimonials.length) {
        currentIndex = 0;
      }

      // Show the next testimonial and apply animation
      testimonials[currentIndex].style.display = 'block';
      gsap.fromTo(testimonials[currentIndex], {
        opacity: 0,
        x: 100, // Start off-screen
      }, {
        opacity: 1,
        x: 0, // Slide in to the center
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });
}

// Initialize the first testimonial to be shown
testimonials[currentIndex].style.display = 'block'; // Make sure the first testimonial is visible
