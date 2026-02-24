const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

const role = document.querySelector(".title");

const text = [
  "a Frontend Developer",
  "a React Developer",
  "a Frontend Engineer",
  "a UI Developer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = text[wordIndex];

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  role.textContent = currentWord.slice(0, charIndex);

  // When word fully typed
  if (charIndex === currentWord.length) {
    isDeleting = true;
  }

  // When word fully deleted
  if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    wordIndex++;
    if (wordIndex === text.length) {
      wordIndex = 0; // loop back
    }
  }
}

setInterval(typeEffect, 150);





menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Active link on scroll
window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
