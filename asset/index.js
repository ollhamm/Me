$(document).ready(function () {
  $("#darkModeToggle").click(function () {
    $("body").toggleClass("dark-mode");
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
    // Menutup kartu yang sebelumnya terbuka
    openCard.classList.remove("flipped");
  }

  // Menyimpan kartu yang baru saja dibuka
  openCard = card.classList.contains("flipped") ? card : null;
}

// menutup hamburger mneu
document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementById("body");
  var navbarTogglerBtn = document.getElementById("navbarTogglerBtn");
  var navbarNav = document.getElementById("navbarNav");

  // Fungsi untuk menutup menu jika diklik di luar area hamburger menu
  function closeMenu() {
    navbarTogglerBtn.classList.add("collapsed");
    navbarNav.classList.remove("show");
  }

  // Event listener untuk mendeteksi klik di luar area hamburger menu
  body.addEventListener("click", function (event) {
    var isClickInsideNavbar =
      navbarNav.contains(event.target) ||
      navbarTogglerBtn.contains(event.target);
    if (!isClickInsideNavbar) {
      closeMenu();
    }
  });

  // Event listener untuk menutup menu ketika salah satu item di dalam menu diklik
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

    if (skillSectionPos < screenPos && skillSectionBottom > 0 && !skillAnimationStarted) {
      skillSection.classList.add("active");
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
      bar.style.animation = "fillAnimation 2s ease-in-out forwards";
    });
  }

  window.addEventListener("scroll", () => {
    checkAboutSection();
    checkSkillSection();
  });

  resetAnimations();
});


// Services
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



