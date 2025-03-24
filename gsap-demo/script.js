gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "svg",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
  },
  defaults: { ease: "none" },
});
tl.fromTo(
  ".path-0",
  { drawSVG: "100% 100%" },
  { drawSVG: "100% 0%", duration: 1 },
  0.1
)
  .fromTo(
    ".path-1",
    { drawSVG: "100% 100%" },
    { drawSVG: "100% 13%", duration: 0.7 },
    0.1
  )
  .fromTo(
    ".path-2",
    { drawSVG: "100% 100%" },
    { drawSVG: "100% 67%", duration: 0.8 },
    0.1
  )
  .fromTo(
    ".path-2",
    { drawSVG: "100% 67%" },
    { drawSVG: "100% 60%", duration: 0.15 },
    ">"
  )
  .fromTo(
    ".path-2",
    { drawSVG: "100% 60%" },
    { drawSVG: "100% 40%", duration: 0.25 },
    ">"
  )
  .fromTo(
    ".path-2",
    { drawSVG: "100% 40%" },
    { drawSVG: "100% 20%", duration: 0.5 },
    ">"
  )
  .fromTo(
    ".path-2",
    { drawSVG: "100% 20%" },
    { drawSVG: "100% 0%", duration: 0.7 },
    ">"
  )
  .to(".circle-3", { attr: { fill: "#f9a600" }, duration: 0.1 }, 1.3)
  .to(
    ".check-3",
    { scale: 1, opacity: 1, duration: 0.1, ease: "back.out" },
    1.3
  )
  .to(".circle-2", { attr: { fill: "#f9a600" }, duration: 0.01 }, 1.8)
  .to(
    ".check-2",
    { scale: 1, opacity: 1, duration: 0.01, ease: "back.out" },
    1.8
  )
  .to(".circle-1", { attr: { fill: "#f9a600" }, duration: 0.01 }, 2.5)
  .to(
    ".check-1",
    { scale: 1, opacity: 1, duration: 0.01, ease: "back.out" },
    2.5
  );
console.log("Scroll-triggered drawSVG + checkmark animacija je postavljena.");
