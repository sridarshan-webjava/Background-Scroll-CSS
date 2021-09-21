// DOM Elements
const container = document.querySelector(".container");
const sections = document.getElementsByTagName("section");
const links = document.querySelectorAll(".nav_link");

// Global variable to keep track of the active link
let currActive = sections[0].id;

// Setting a new link to the active state
function setActiveLink(id) {
  links.forEach(link => {
    if (link.hash.includes(id)) {
      link.classList.add("active");
    }
  });
}

// Removing the active state from the active link
function removeActiveLink(id) {
  links.forEach(link => {
    if (link.hash.includes(id)) {
      link.classList.remove("active");
    }
  });
}

// DOM EventListener
container.addEventListener("scroll", () => {
  const top = container.scrollTop;
  for (let i = 0; i < sections.length; i++) {
    if (
      top >= sections[i].offsetTop &&
      top <= sections[i].offsetTop + sections[i].offsetHeight
    ) {
      console.log("Inside if");
      removeActiveLink(currActive);
      currActive = sections[i].id;
      setActiveLink(currActive);
    }
  }
});
