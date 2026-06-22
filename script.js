/* logansmith.us — vanilla JS, no dependencies */
(function () {
  "use strict";

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Sticky header border on scroll
  var header = document.getElementById("header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Typing effect
  var typed = document.getElementById("typed");
  if (typed) {
    var roles = [
      "Security Engineer",
      "Builder & automator",
      "Homelab tinkerer",
      "Lifelong learner"
    ];
    if (reduce) {
      typed.textContent = roles[0];
    } else {
      var ri = 0, ci = 0, deleting = false;
      var tick = function () {
        var word = roles[ri];
        typed.textContent = word.slice(0, ci);
        if (!deleting && ci < word.length) {
          ci++; setTimeout(tick, 70);
        } else if (!deleting && ci === word.length) {
          deleting = true; setTimeout(tick, 1500);
        } else if (deleting && ci > 0) {
          ci--; setTimeout(tick, 35);
        } else {
          deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 300);
        }
      };
      tick();
    }
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
