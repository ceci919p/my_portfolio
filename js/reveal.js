/* gsap.registerPlugin(ScrollTrigger); */

window.addEventListener("DOMContentLoaded", loaded);

function loaded() {
  console.log("welcome");
  test();
}

function test() {
  gsap.from("#intro_text", { duration: 3, opacity: 0 });
}
