import { elements } from "./assets/languageElements.js";
document.addEventListener("DOMContentLoaded", () => {
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
});
