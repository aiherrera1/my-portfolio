import { elements } from "./assets/languageElements.js";

document.addEventListener("DOMContentLoaded", () => {
  // Language toggle
  const languageToggleBtn = document.getElementById("language-toggle");
  const languageToggleImage = document.getElementById("language-toggle-image");

  languageToggleBtn.addEventListener("click", () => {
    const isSpanish = languageToggleImage.src.includes("chile.png");
    toggleLanguage(isSpanish);
  });

  function toggleLanguage(isSpanish) {
    elements.forEach((element) => {
      const el = document.getElementById(element.id);
      if (el) {
        el.textContent = isSpanish ? element.es : element.en;
      }
    });

    const resumePdf = document.getElementById("download-resume");
    if (resumePdf) {
      resumePdf.href = isSpanish
        ? "assets/cv/agustin-herrera-resume-es.pdf"
        : "assets/cv/agustin-herrera-resume-en.pdf";
    }

    languageToggleImage.src = isSpanish
      ? "assets/img/usa.png"
      : "assets/img/chile.png";
  }

  // Navbar scroll effect + active link highlighting
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active section highlighting
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile hamburger menu
  const hamburger = document.getElementById("nav-hamburger");
  const navLinksList = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinksList.classList.toggle("open");
  });

  navLinksList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksList.classList.remove("open");
    });
  });

  // Scroll reveal via IntersectionObserver
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
});
