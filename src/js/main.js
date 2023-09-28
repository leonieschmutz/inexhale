import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var timeline1 = gsap.timeline();
var timeline2 = gsap.timeline();

timeline1.set(".start-screen .logo", {
  opacity: 0,
});

timeline1.set(".start-screen p", {
  opacity: 0,
});

timeline1.set(".home-screen .view", {
  opacity: 0,
});

timeline1.set(".finish-screen", {
  opacity: 0,
});

timeline1.to(".start-screen .logo", {
  opacity: 1,
  duration: 2,
});

timeline1.to(".start-screen p", {
  opacity: 1,
  duration: 2,
});

timeline1.to(".start-screen", {
  opacity: 0,
  duration: 2,
});

timeline1.set(".start-screen", {
  display: "none",
});

timeline1.from(".home-screen", {
  opacity: 1,
  duration: 2,
});

timeline1.to(".home-screen .view", {
  opacity: 1,
  duration: 1,
});

var button = document.querySelector(".button");
var homescreen = document.querySelector(".home-screen");

button.addEventListener("click", function () {
  homescreen.remove(".home-screen");
});

timeline1.to(".exercise", {
  scale: 2,
  duration: 3,
  repeat: 2,
  delay: 2,
  ease: "none",
  yoyo: "true",
  repeatDelay: 1,
});

timeline1.to(".session-screen", {
  opacity: 0,
  duration: 2,
});

timeline1.set(".session-screen", {
  display: "none",
});

timeline1.to(".finish-screen", {
  opacity: 1,
  duration: 2,
});
