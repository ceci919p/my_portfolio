gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", start);

const sections = document.querySelectorAll(".text_section");

function start() {
  console.log("welcome to scroll");
  revealAnimation();
}

function revealAnimation() {
  console.log(sections);

  gsap.utils.toArray(".text_section").forEach((section) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        toggleActions: "restart none none none",
        start: "top 95%",
      },
    });

    tl.to(section, {
      duration: 1.2,
      opacity: 1,
    });
  });
}
