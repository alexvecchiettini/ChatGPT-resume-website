const contentDiv = document.getElementById("content");

const aboutSection = document.getElementById("about");

const experienceSection = document.getElementById("experience");

const educationSection = document.getElementById("education");

const skillsSection = document.getElementById("skills");

const contactSection = document.getElementById("contact");

function showSection(section) {

  aboutSection.style.display = "none";

  experienceSection.style.display = "none";

  educationSection.style.display = "none";

  skillsSection.style.display = "none";

  contactSection.style.display = "none";

  section.style.display = "block";

}

showSection(aboutSection);

document.querySelectorAll("nav a").forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const href = link.getAttribute("href");

    const section = document.querySelector(href);

    showSection(section);

  });

});


  
