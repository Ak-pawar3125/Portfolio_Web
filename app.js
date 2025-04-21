var typed = new Typed(".auto-type", {
  strings: [
    "FULL STACK WEB DEVELOPER",
    "PROGRAMMER",
    "SOFTWARE DEVELOPER",
    "FRONT END DEVELOPER",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  looped: true,
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
const navbar = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");

menu.addEventListener("click", () => {
  navbar.style.display = "none";
  sidebar.style.display = "flex";
});

cross.addEventListener("click", () => {
  navbar.style.display = "flex";
  sidebar.style.display = "none";
});
