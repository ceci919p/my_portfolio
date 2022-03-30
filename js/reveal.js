gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  revealAnimation();
}

function revealAnimation() {
  gsap.utils.toArray("section").forEach((section) => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        toggleActions: "restart none none none",
        start: "top 95%",
      },
    });

    tl.to(section, {
      duration: 1.5,
      opacity: 1,
    });
  });
}
