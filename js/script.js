const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: "vertical"
});
function raf() {
  lenis.raf();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
const ukiyoEls = document.querySelectorAll(".parallax");
const ukiyos = [];

for (const el of ukiyoEls) {
  ukiyos.push(new Ukiyo(el));
}
ukiyos.forEach((uk) => {
  uk.raf();
});
