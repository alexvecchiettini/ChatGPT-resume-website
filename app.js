const contentDiv = document.getElementById("content");

const aboutSection = document.getElementById("about");

const experienceSection = document.getElementById("experience");

const educationSection = document.getElementById("education");

const skillsSection = document.getElementById("skills");

const contactSection = document.getElementById("contact");

function hideSections() {

  aboutSection.style.display = "none";

  experienceSection.style.display = "none";

  educationSection.style.display = "none";

  skillsSection.style.display = "none";

  contactSection.style.display = "none";

}

function showSection(section) {

  hideSections();

  section.style.display = "block";

}

document.addEventListener("DOMContentLoaded", () => {

  // Display About section on page load

  showSection(aboutSection);

  // Listen for click events on navigation links

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const href = event.target.getAttribute("href");

      const section = document.querySelector(href);

      showSection(section);

    });

  });

});

