$(document).ready(function () {
  const darkModeToggle = $("#darkModeToggle");
  const body = $("body");
  const moonIcon = darkModeToggle.find(".fa-moon");
  const sunIcon = darkModeToggle.find(".fa-sun");

  function toggleIcons() {
    if (body.hasClass("dark-mode")) {
      moonIcon.hide();
      sunIcon.show();
    } else {
      moonIcon.show();
      sunIcon.hide();
    }
  }

  const darkModePreference = localStorage.getItem("darkMode");
  if (darkModePreference === "dark") {
    body.addClass("dark-mode");
    toggleIcons();
  }

  darkModeToggle.click(function () {
    body.toggleClass("dark-mode");
    toggleIcons();

    const mode = body.hasClass("dark-mode") ? "dark" : "light";
    localStorage.setItem("darkMode", mode);
  });

  $("#navbarTogglerBtn").click(function () {
    toggleIcons();
  });
});

// togler
const navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
const navbarCollapse = document.getElementById("navbarNav");

navbarTogglerBtn.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

//  download CV
function downloadCV() {
  var cvPath = "cv/cv_ilham.pdf";

  var link = document.createElement("a");
  link.href = cvPath;
  link.download = "cv_ilham.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// services
function flipCard(card) {
  card.classList.toggle("flipped");
}

// menutup kartu
let openCard = null;

function flipCard(card) {
  card.classList.toggle("flipped");

  if (openCard && openCard !== card) {
    openCard.classList.remove("flipped");
  }

  openCard = card.classList.contains("flipped") ? card : null;
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById("body");
  var navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
  var navbarNav = document.getElementById("navbarNav");

  function closeMenu() {
    navbarTogglerBtn.classList.add("collapsed");
    navbarNav.classList.remove("show");
  }

  body.addEventListener("click", function (event) {
    var isClickInsideNavbar =
      navbarNav.contains(event.target) ||
      navbarTogglerBtn.contains(event.target);
    if (!isClickInsideNavbar) {
      closeMenu();
    }
  });

  navbarNav.addEventListener("click", function () {
    closeMenu();
  });
});

// About Me
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const imageAbout = document.querySelector(".image-about");
  const textAbout = document.querySelector(".text-about");

  function checkScroll() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && sectionBottom > 0) {
      imageAbout.classList.add("active");
      textAbout.classList.add("active");
    } else {
      imageAbout.classList.remove("active");
      textAbout.classList.remove("active");
    }
  }

  window.addEventListener("scroll", checkScroll);
});

// Skill
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const imageAbout = document.querySelector(".image-about");
  const textAbout = document.querySelector(".text-about");
  const skillSection = document.querySelector(".skill-container");
  const progressBars = skillSection.querySelectorAll(
    ".content-skill div[id^='progressbar'] > div"
  );

  let aboutAnimationStarted = false;
  let skillAnimationStarted = false;

  function checkAboutSection() {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const sectionBottom = aboutSection.getBoundingClientRect().bottom;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && sectionBottom > 0 && !aboutAnimationStarted) {
      imageAbout.classList.add("active");
      textAbout.classList.add("active");
      aboutAnimationStarted = true;
    } else if (sectionPos > screenPos || sectionBottom < 0) {
      aboutAnimationStarted = false;
    }
  }

  function checkSkillSection() {
    const skillSectionPos = skillSection.getBoundingClientRect().top;
    const skillSectionBottom = skillSection.getBoundingClientRect().bottom;
    const screenPos = window.innerHeight / 1.3;

    if (
      skillSectionPos < screenPos &&
      skillSectionBottom > 0 &&
      !skillAnimationStarted
    ) {
      document.body.classList.add("locked");
      skillAnimationStarted = true;
      resetAnimations();
    } else if (skillSectionPos > screenPos || skillSectionBottom < 0) {
      skillAnimationStarted = false;
    }
  }

  function resetAnimations() {
    progressBars.forEach((bar) => {
      bar.style.animation = "none";
      void bar.offsetWidth;
      bar.style.animation = "fillAnimation 1s ease-in-out forwards";
    });
  }

  window.addEventListener("scroll", () => {
    checkAboutSection();
    checkSkillSection();
  });

  resetAnimations();
});

// Service
document.addEventListener("DOMContentLoaded", function () {
  const serviceSection = document.querySelector(".services");
  const cards = document.querySelectorAll(".card");

  function checkScroll() {
    const sectionPos = serviceSection.getBoundingClientRect().top;
    const sectionBottom = serviceSection.getBoundingClientRect().bottom;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && sectionBottom > 0) {
      cards.forEach((card, index) => {
        card.style.animation = `slideInLeft 0.9s ease-in-out ${index * 0.2}s`;
        card.classList.add("active");
      });
    } else {
      cards.forEach((card) => {
        card.style.animation = "";
        card.classList.remove("active");
      });
    }
  }

  window.addEventListener("scroll", checkScroll);
});

// icon
document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".icon a");

  let index = 0;
  setInterval(() => {
    icons.forEach((icon) => {
      icon.classList.remove("animated");
    });
    icons[index].classList.add("animated");
    index = (index + 1) % icons.length;
  }, 1000);
});
