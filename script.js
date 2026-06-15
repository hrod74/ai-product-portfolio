const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const year = document.querySelector("[data-year]");
const recommendationToggles = document.querySelectorAll(".recommendation-toggle");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    }
  });
}

recommendationToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("aria-controls");
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) {
      return;
    }

    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.textContent = isExpanded ? "Read full recommendation" : "Show less";
    target.hidden = isExpanded;
  });
});
