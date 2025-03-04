gsap.from(".bubble", {
    scale: 0.8,
    rotation: 360,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
    duration: 1.5,
    y: -10, 
    repeat: -1, 
    yoyo: true, 
    ease: "sine.inOut",
  });

  gsap.to(".bubble:hover", {
    scale: 1.2,
    ease: "elastic.out(1, 0.75)",
    duration: 0.3,
  });
  

  document.querySelector("#projects").addEventListener("click", function () {
    gsap.to(window, { scrollTo: "#projects-section", duration: 1 });
  });
  
  document.querySelector("#skills").addEventListener("click", function () {
    gsap.to(window, { scrollTo: "#skills-section", duration: 1 });
  });
  
  document.querySelector("#contact").addEventListener("click", function () {
    gsap.to(window, { scrollTo: "#contact-section", duration: 1 });
  });
  