const primaryNav = document.querySelector(".nav__links");
const navToggle = document.querySelector("mobile__nav");

navToggle = document.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
  }
});
